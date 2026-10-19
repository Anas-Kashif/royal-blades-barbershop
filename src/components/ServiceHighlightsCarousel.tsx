'use client';

import { useState } from 'react';
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react';

const highlights = [
  { title: 'A cut made for you.', body: 'Bring your usual look or try something new. We will take time to understand the shape you want.', label: 'THE CUT' },
  { title: 'Details make the difference.', body: 'From a clean neckline to a defined beard, finish the look with the details that feel right.', label: 'THE FINISH' },
  { title: 'Your time, your chair.', body: 'Choose a service, pick a time in the preview form, and plan your visit to Toheed Town.', label: 'THE VISIT' },
];

export function ServiceHighlightsCarousel() {
  const [active, setActive] = useState(0);
  const item = highlights[active];

  function move(direction: -1 | 1) {
    setActive((current) => (current + direction + highlights.length) % highlights.length);
  }

  return (
    <div className="experience-carousel" aria-roledescription="carousel" aria-label="The Royal Blades experience">
      <div className="experience-carousel__copy" aria-live="polite" aria-atomic="true">
        <span className="eyebrow">{item.label}</span>
        <h3>{item.title}</h3>
        <p>{item.body}</p>
      </div>
      <div className="experience-carousel__controls">
        <span className="experience-carousel__count">0{active + 1}<span> / 0{highlights.length}</span></span>
        <button type="button" onClick={() => move(-1)} aria-label="Previous experience detail"><ArrowLeft size={18} /></button>
        <button type="button" onClick={() => move(1)} aria-label="Next experience detail"><ArrowRight size={18} /></button>
      </div>
    </div>
  );
}
