import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr';
import { BookingCta } from '@/components/BookingCta';
import { PageIntro } from '@/components/PageIntro';
import { SectionHeading } from '@/components/SectionHeading';
import { VisitDetails } from '@/components/VisitDetails';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'About Our Barbershop',
  description: 'Meet Royal Blades, a neighborhood barbershop in Toheed Town, Sialkot, focused on thoughtful cuts, clear service choices, and an easy visit.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      <PageIntro breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Our story' }]} eyebrow="OUR APPROACH" title="A barbershop that feels like yours." description="Royal Blades is here for the little reset: a considered cut, a comfortable chair, and a look that feels like you." />
      <section className="about-story section-pad">
        <div className="container about-story__grid">
          <div className="about-story__art"><Image src="/images/barber-chair.svg" alt="Illustration of a classic barber chair" width={780} height={860} /></div>
          <div className="about-story__copy">
            <SectionHeading eyebrow="THE ROYAL BLADES FEELING" title="Good craft. No fuss." />
            <p>We believe a great barbershop visit should feel easy from the start. Find a service that fits, arrive when it suits, and take a moment for yourself.</p>
            <p>From a quick beard refresh to a full grooming session, the focus stays on a clean finish and details that feel personal.</p>
            <Link className="text-link" href="/services">Explore the service menu <ArrowUpRight size={17} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
      <section className="about-values section-pad">
        <div className="container">
          <SectionHeading eyebrow="A FEW THINGS WE VALUE" title="A better visit, in the details." />
          <div className="about-values__list">
            <article><span>01</span><h3>Listen first.</h3><p>Your look starts with what you want to leave with.</p></article>
            <article><span>02</span><h3>Keep it clear.</h3><p>Simple service choices and prices you can see.</p></article>
            <article><span>03</span><h3>Make time.</h3><p>A relaxed visit in a neighborhood spot in Sialkot.</p></article>
          </div>
        </div>
      </section>
      <section className="about-visit section-pad"><div className="container"><VisitDetails compact /></div></section>
      <BookingCta />
    </>
  );
}
