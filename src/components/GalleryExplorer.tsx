'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { galleryItems } from '@/data/gallery';

const categories = ['All looks', ...new Set(galleryItems.map((item) => item.category))];

export function GalleryExplorer() {
  const [activeCategory, setActiveCategory] = useState('All looks');
  const items = useMemo(
    () => activeCategory === 'All looks' ? galleryItems : galleryItems.filter((item) => item.category === activeCategory),
    [activeCategory],
  );

  return (
    <div className="gallery-explorer">
      <div className="gallery-filters" role="group" aria-label="Filter style previews">
        {categories.map((category) => (
          <button
            className={activeCategory === category ? 'gallery-filter gallery-filter--active' : 'gallery-filter'}
            key={category}
            type="button"
            aria-pressed={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="gallery-grid" aria-live="polite">
        {items.map((item, index) => (
          <article className="gallery-card" key={item.title}>
            <div className={`gallery-card__image gallery-card__image--${index + 1}${item.category === 'Full looks' ? ' gallery-card__image--full-look' : ''}`}>
              <Image src={item.image} alt={item.alt} fill sizes="(max-width: 800px) 50vw, 33vw" quality={90} />
            </div>
            <div className="gallery-card__copy"><div><span className="eyebrow">{item.category}</span><h2>{item.title}</h2></div><p>{item.description}</p></div>
          </article>
        ))}
      </div>
      <p className="gallery-note">Browse haircut references and bring the look you like to your next visit.</p>
    </div>
  );
}
