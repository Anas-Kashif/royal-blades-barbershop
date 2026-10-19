import Link from 'next/link';
import { ArrowUpRight, MapPin } from '@phosphor-icons/react/dist/ssr';
import { BookingCta } from '@/components/BookingCta';
import { PageIntro } from '@/components/PageIntro';
import { VisitDetails } from '@/components/VisitDetails';
import { business } from '@/data/business';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Location & Opening Hours',
  description: 'Find Royal Blades barbershop in Toheed Town on Defense Road, Sialkot. Check Monday to Sunday opening hours and get directions.',
  path: '/visit',
});

export default function VisitPage() {
  return (
    <>
      <PageIntro eyebrow="TOHEED TOWN · SIALKOT" title="Come by when it suits." description="Find us on Defense Road, get the opening hours, and make a simple plan for your next cut." />
      <section className="visit-page section-pad">
        <div className="container visit-page__grid">
          <div className="visit-page__map" role="img" aria-label="Illustrative location preview for Royal Blades in Toheed Town, Sialkot. Open Google Maps for directions.">
            <div className="map-grid" aria-hidden="true" />
            <div className="map-route map-route--one" aria-hidden="true" />
            <div className="map-route map-route--two" aria-hidden="true" />
            <div className="map-pin"><MapPin size={22} weight="fill" aria-hidden="true" /></div>
            <div className="map-label"><span className="eyebrow">YOU’RE LOOKING FOR</span><strong>Royal Blades</strong><span>{business.address.street}</span></div>
            <span className="map-label__city">SIALKOT</span>
          </div>
          <VisitDetails />
        </div>
        <div className="container visit-page__directions">
          <p><strong>First time here?</strong> Open the address in Maps and follow directions to Toheed Town on Defense Road.</p>
          <Link className="button button--outline" href={business.mapUrl} target="_blank" rel="noreferrer">Open Google Maps <ArrowUpRight size={16} aria-hidden="true" /></Link>
        </div>
      </section>
      <BookingCta />
    </>
  );
}
