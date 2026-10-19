'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const words = 'A considered cut. A calm chair. A little more confidence when you step back into your day.'.split(' ');

export function RevealText() {
  const scope = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();

    media.add('(prefers-reduced-motion: no-preference)', () => {
      const targets = gsap.utils.toArray<HTMLElement>('.reveal-word', scope.current);
      gsap.fromTo(targets, { opacity: 0.14 }, {
        opacity: 1,
        ease: 'none',
        stagger: 0.08,
        scrollTrigger: {
          trigger: scope.current,
          start: 'top 82%',
          end: 'bottom 52%',
          scrub: 0.7,
        },
      });
    });

    media.add('(prefers-reduced-motion: reduce)', () => {
      gsap.set('.reveal-word', { opacity: 1 });
    });

    return () => media.revert();
  }, { scope });

  return (
    <p className="reveal-text" ref={scope}>
      {words.map((word, index) => <span className="reveal-word" key={`${word}-${index}`}>{word}{index < words.length - 1 ? ' ' : ''}</span>)}
    </p>
  );
}
