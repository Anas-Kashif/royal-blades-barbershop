import { BookingForm } from '@/components/BookingForm';
import { PageIntro } from '@/components/PageIntro';
import { pageMetadata } from '@/lib/seo';
import { services } from '@/data/services';

export const metadata = pageMetadata({
  title: 'Plan a Barbershop Visit',
  description: 'Choose a Royal Blades grooming service, date and time in Sialkot. This frontend-only booking preview does not send or confirm an appointment.',
  path: '/book',
});

type BookPageProps = {
  searchParams: Promise<{ service?: string | string[] }>;
};

export default async function BookPage({ searchParams }: BookPageProps) {
  const params = await searchParams;
  const requestedService = Array.isArray(params.service) ? params.service[0] : params.service;
  const initialService = services.some((service) => service.slug === requestedService) ? requestedService : '';

  return (
    <>
      <PageIntro breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Book a visit' }]} eyebrow="YOUR VISIT PREVIEW" title="A good cut, on your time." description="Choose a service and a time that works. You’ll see a preview before you finish." />
      <section className="booking-page section-pad"><div className="container"><BookingForm initialService={initialService} /></div></section>
    </>
  );
}
