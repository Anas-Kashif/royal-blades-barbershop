import { BookingReview } from '@/components/BookingReview';
import { PageIntro } from '@/components/PageIntro';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Review Your Visit Preview',
  description: 'Review your selected service, date, time, and location for a Royal Blades visit in Sialkot. This preview does not book an appointment.',
  path: '/book/review',
});

export default function BookingReviewPage() {
  return (
    <>
      <PageIntro breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Book a visit', href: '/book' }, { label: 'Review' }]} eyebrow="YOUR VISIT PREVIEW" title="One last look." description="Check your visit details, then see the shop location and opening hours." />
      <section className="booking-page section-pad"><div className="container"><BookingReview /></div></section>
    </>
  );
}
