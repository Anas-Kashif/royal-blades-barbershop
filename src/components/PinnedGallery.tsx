'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { ArrowUpRight } from '@phosphor-icons/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { galleryItems } from '@/data/gallery';

export function PinnedGallery() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();

    media.add('(min-width: 900px) and (prefers-reduced-motion: no-preference)', () => {
      const root = scope.current;
      if (!root) return;

      const heading = root.querySelector<HTMLElement>('.pinned-gallery__intro');
      const cards = gsap.utils.toArray<HTMLElement>('.pinned-gallery__card', root);
      if (heading) {
        ScrollTrigger.create({
          trigger: root,
          start: 'top top+=90',
          end: 'bottom bottom',
          pin: heading,
          pinSpacing: false,
        });
      }

      cards.forEach((card) => {
        const image = card.querySelector<HTMLElement>('.pinned-gallery__image');
        if (!image) return;
        gsap.fromTo(image, { scale: 0.97, opacity: 0.9 }, {
          scale: 1,
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
            end: 'center 45%',
            scrub: 0.7,
          },
        });
      });
    });

    media.add('(prefers-reduced-motion: reduce), (max-width: 899px)', () => {
      gsap.set('.pinned-gallery__image', { opacity: 1, scale: 1 });
    });

    return () => media.revert();
  }, { scope });

  return (
    <section className="pinned-gallery section-pad" ref={scope}>
      <div className="container pinned-gallery__layout">
        <div className="pinned-gallery__intro">
          <span className="eyebrow">A LOOK AT THE CRAFT</span>
          <h2>Find your<br />next look.</h2>
          <p>Explore real haircut references from the gallery, then bring your own look to the chair.</p>
          <Link className="text-link" href="/gallery">Explore the gallery <ArrowUpRight size={17} aria-hidden="true" /></Link>
        </div>
        <div className="pinned-gallery__list">
          {galleryItems.map((item, index) => (
            <article className="pinned-gallery__card" key={item.title}>
              <div className={`pinned-gallery__image pinned-gallery__image--${index + 1}`}>
                <Image src={item.image} alt={item.alt} fill sizes="(max-width: 600px) 47vw, 30vw" quality={90} />
                <span className="image-index">0{index + 1}</span>
              </div>
              <div className="pinned-gallery__caption"><h3>{item.title}</h3><span>{item.category}</span></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
