'use client';

import { useEffect, useState } from 'react';
import { GithubLogo } from '@phosphor-icons/react/dist/ssr';

const introMessage = 'Developed by Anas Kashif';

export function FirstVisitIntro() {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [typedMessage, setTypedMessage] = useState('');

  useEffect(() => {
    setTypedMessage('');
    setIsExiting(false);
    setIsVisible(true);

    let phaseTimeout: number | undefined;
    let removeTimeout: number | undefined;
    const beginExit = () => {
      document.documentElement.classList.remove('first-visit-pending');
      setIsExiting(true);
      removeTimeout = window.setTimeout(() => setIsVisible(false), 1050);
    };

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTypedMessage(introMessage);
      phaseTimeout = window.setTimeout(beginExit, 900);
      return () => {
        if (phaseTimeout) window.clearTimeout(phaseTimeout);
        if (removeTimeout) window.clearTimeout(removeTimeout);
      };
    }

    let characterIndex = 0;
    const typingInterval = window.setInterval(() => {
      characterIndex += 1;
      setTypedMessage(introMessage.slice(0, characterIndex));

      if (characterIndex >= introMessage.length) {
        window.clearInterval(typingInterval);
        phaseTimeout = window.setTimeout(beginExit, 450);
      }
    }, 65);

    return () => {
      window.clearInterval(typingInterval);
      if (phaseTimeout) window.clearTimeout(phaseTimeout);
      if (removeTimeout) window.clearTimeout(removeTimeout);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`first-visit-intro${isExiting ? ' first-visit-intro--exiting' : ''}`} role="status" aria-label={introMessage}>
      <div className="first-visit-intro__content">
        <span className="first-visit-intro__text" aria-hidden="true">
          {typedMessage}<span className="first-visit-intro__cursor" />
        </span>
        <a className="first-visit-intro__icon" href="https://github.com/anas-kashif" target="_blank" rel="noreferrer" aria-label="Anas on GitHub">
          <GithubLogo size={22} weight="fill" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
