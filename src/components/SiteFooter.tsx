import Link from 'next/link';
import { ArrowUpRight, Clock, MapPin } from '@phosphor-icons/react/dist/ssr';
import { business, navigation } from '@/data/business';
import { BrandMark } from '@/components/BrandMark';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <div>
          <BrandMark inverse />
          <p className="site-footer__copy">A sharper cut and a little time for yourself, right here in Sialkot.</p>
        </div>
        <div className="site-footer__details">
          <p><MapPin size={17} aria-hidden="true" /><span>{business.address.street}<br />{business.address.city}, {business.address.country}</span></p>
          <p><Clock size={17} aria-hidden="true" /><span>Mon to Sat, 10:00 am to 6:00 pm<br />Sunday, 11:00 am to 3:30 pm</span></p>
        </div>
        <nav className="site-footer__links" aria-label="Footer navigation">
          {navigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
        </nav>
      </div>
      <div className="site-footer__bottom">
        <span>© {new Date().getFullYear()} Royal Blades, Sialkot</span>
        <Link href="/visit">Get directions <ArrowUpRight size={14} aria-hidden="true" /></Link>
      </div>
    </footer>
  );
}
