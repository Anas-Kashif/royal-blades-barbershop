import Link from 'next/link';
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr';
import { BookingCta } from '@/components/BookingCta';
import { PageIntro } from '@/components/PageIntro';
import { SectionHeading } from '@/components/SectionHeading';
import { ServiceFinder } from '@/components/ServiceFinder';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Haircuts & Grooming Services',
  description: 'Explore haircut, beard, kids’ and full grooming services at Royal Blades in Toheed Town, Sialkot. Clear PKR prices from Rs. 500 to Rs. 5,000.',
  path: '/services',
});

export default function ServicesPage() {
  return (
    <>
      <PageIntro breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]} eyebrow="THE MENU · ROYAL BLADES" title="Good grooming, made simple." description="Choose a service that feels right. Prices are clear, the details are considered, and every look starts with your style." />
      <section className="services-page section-pad">
        <div className="container">
          <div className="section-row services-page__heading">
            <SectionHeading eyebrow="FIVE WAYS TO RESET" title="Pick your service." />
            <p>All prices in Pakistani rupees. Ask in person if you need help choosing.</p>
          </div>
          <ServiceFinder />
          <p className="services-page__note">Prices shown are the current menu used for this website and can be updated from the shared service data.</p>
        </div>
      </section>
      <section className="service-note section-pad">
        <div className="container service-note__inner">
          <span className="eyebrow">NOT SURE WHICH TO PICK?</span>
          <h2>Start with the look you have in mind.</h2>
          <p>Browse the style illustrations for ideas, then choose the closest service for your visit.</p>
          <Link className="text-link" href="/gallery">See style ideas <ArrowUpRight size={17} aria-hidden="true" /></Link>
        </div>
      </section>
      <BookingCta />
    </>
  );
}
