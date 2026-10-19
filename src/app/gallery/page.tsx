import { GalleryExplorer } from '@/components/GalleryExplorer';
import { PageIntro } from '@/components/PageIntro';
import { BookingCta } from '@/components/BookingCta';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Haircut Style Gallery',
  description: 'Browse haircut and fade style ideas from Royal Blades in Sialkot. Save a look you like and bring it to your next visit.',
  path: '/gallery',
});

export default function GalleryPage() {
  return (
    <>
      <PageIntro eyebrow="STYLE IDEAS · ROYAL BLADES" title="A look worth making your own." description="Explore a few haircut and grooming directions. Use them as inspiration, or bring a reference of your own." />
      <section className="gallery-page section-pad">
        <div className="container"><GalleryExplorer /></div>
      </section>
      <BookingCta />
    </>
  );
}
