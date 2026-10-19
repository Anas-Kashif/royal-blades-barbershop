import Link from 'next/link';
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr';

export function BookingCta() {
  return (
    <section className="booking-cta section-pad">
      <div className="booking-cta__glow" aria-hidden="true" />
      <div className="container booking-cta__inner">
        <div><span className="eyebrow">YOUR NEXT GOOD CUT</span><h2>Make a little time for you.</h2></div>
        <Link className="button button--dark" href="/book">Plan a visit <ArrowUpRight size={17} weight="bold" aria-hidden="true" /></Link>
      </div>
    </section>
  );
}
