import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr';
import { BookingCta } from '@/components/BookingCta';
import { PinnedGallery } from '@/components/PinnedGallery';
import { RevealText } from '@/components/RevealText';
import { SectionHeading } from '@/components/SectionHeading';
import { ServiceHighlightsCarousel } from '@/components/ServiceHighlightsCarousel';
import { ServiceCategories } from '@/components/ServiceCategories';
import { ServicesGrid } from '@/components/ServicesGrid';
import { ServiceTicker } from '@/components/ServiceTicker';
import { VisitDetails } from '@/components/VisitDetails';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Barbershop in Sialkot',
  description: 'Looking for a barber in Sialkot? Discover Royal Blades in Toheed Town on Defense Road. Browse haircut and grooming services, then plan your visit.',
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <section className="hero hero--home">
        <div className="hero__wash" aria-hidden="true" />
        <div className="container hero__content">
          <span className="hero__eyebrow">A GOOD CUT, DONE RIGHT</span>
          <h1>A sharper cut.<br />A stronger <span className="hero__inline-art"><Image src="/images/faceless-textured-quiff-skin-fade.png" alt="Faceless textured quiff with a skin fade" width={120} height={78} priority /></span> you.</h1>
          <p>Good grooming, a calm chair, and a cut that feels like yours. Find your local barber in Toheed Town.</p>
          <div className="hero__actions">
            <Link className="button button--lime button--hero" href="/book">Plan your visit <ArrowUpRight size={17} weight="bold" aria-hidden="true" /></Link>
            <Link className="button button--glass" href="/services">Explore services <ArrowUpRight size={16} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <ServiceTicker />

      <section className="feature-section section-pad">
        <div className="container">
          <div className="feature-section__heading">
            <SectionHeading eyebrow="THE ROYAL BLADES DIFFERENCE" title="Small details. A better feeling." />
            <p>Modern barbering with room to settle in, find your style, and leave feeling refreshed.</p>
          </div>
          <div className="feature-bento">
            <article className="feature-tile feature-tile--wide feature-tile--cut">
              <div className="feature-tile__visual" aria-hidden="true">
                <svg className="feature-tile__comb" viewBox="0 0 420 300" fill="none">
                  <g transform="rotate(-28 210 150)" stroke="currentColor" strokeLinecap="round">
                    <path d="M58 80h304" strokeWidth="13" />
                    <path d="M76 91v125M103 91v125M130 91v125M157 91v125M184 91v125M211 91v125M238 91v125M265 91v125M292 91v125M319 91v125M346 91v125" strokeWidth="6" />
                  </g>
                  <path d="M55 252c77-34 174-35 287-3M82 278c68-22 146-23 231-5" stroke="currentColor" strokeOpacity=".3" strokeWidth="2" />
                </svg>
              </div>
              <span className="feature-tile__index">STYLE, YOUR WAY</span>
              <h3>Made for your<br />kind of day.</h3>
              <p>From a classic shape to a cleaner fade, find the look that feels like you.</p>
              <span className="feature-tile__image-caption">THE CRAFT OF A GOOD CUT</span>
            </article>
            <article className="feature-tile feature-tile--detail feature-tile--finish">
              <span className="feature-tile__index">THE FINISH</span>
              <svg className="feature-tile__clipper" viewBox="0 0 120 140" fill="none" aria-hidden="true">
                <path d="M35 13h50v22l9 13v65l-10 14H36l-10-14V48l9-13V13Z" stroke="currentColor" strokeWidth="2" />
                <path d="M39 28h42M43 37h34M47 48v13m9-13v13m9-13v13m9-13v13" stroke="currentColor" strokeWidth="2" />
                <path d="M44 77h32v24H44zM52 112h16" stroke="currentColor" strokeWidth="2" />
              </svg>
              <h3>Every edge,<br />considered.</h3>
              <p>Clean lines. A careful finish.</p>
            </article>
            <article className="feature-tile feature-tile--detail feature-tile--service">
              <span className="feature-tile__index">THE MENU</span>
              <h3>Good service.<br />Clear prices.</h3>
              <p>Choose what you need, with the price up front.</p>
              <Link className="feature-tile__link" href="/services">Browse services <ArrowUpRight size={16} aria-hidden="true" /></Link>
            </article>
            <article className="feature-tile feature-tile--wide feature-tile--local">
              <span className="feature-tile__index">YOUR NEIGHBORHOOD</span>
              <span className="feature-tile__city-mark" aria-hidden="true">SIALKOT</span>
              <h3>Your chair is<br />closer than<br />you think.</h3>
              <p>Find us in Toheed Town on Defense Road.</p>
              <Link className="feature-tile__link" href="/visit">Find the shop <ArrowUpRight size={18} aria-hidden="true" /></Link>
            </article>
          </div>
        </div>
      </section>

      <ServiceCategories />

      <section className="services-preview section-pad" id="services">
        <div className="container">
          <div className="section-row">
            <SectionHeading eyebrow="POPULAR SERVICES" title="Find your service." />
            <Link className="text-link section-row__link" href="/services">See all services <ArrowUpRight size={17} aria-hidden="true" /></Link>
          </div>
          <ServicesGrid limit={3} compact />
        </div>
      </section>

      <section className="feeling-section section-pad">
        <div className="container feeling-section__grid">
          <div className="feeling-section__intro">
            <span className="eyebrow">TAKE A MOMENT</span>
            <h2>A little care goes a long way.</h2>
          </div>
          <div className="feeling-section__copy"><RevealText /></div>
        </div>
        <div className="container"><ServiceHighlightsCarousel /></div>
      </section>

      <PinnedGallery />

      <section className="visit-section section-pad">
        <div className="container visit-section__grid">
          <div className="visit-section__intro">
            <SectionHeading eyebrow="COME SEE US" title="Your next cut is close." />
            <p>Drop into Toheed Town or use the visit preview to plan a time.</p>
          </div>
          <VisitDetails compact />
        </div>
      </section>

      <BookingCta />
    </>
  );
}
