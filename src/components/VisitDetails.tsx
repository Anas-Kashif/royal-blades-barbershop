import Link from 'next/link';
import { ArrowUpRight, Clock, MapPin } from '@phosphor-icons/react/dist/ssr';
import { business } from '@/data/business';

type VisitDetailsProps = {
  compact?: boolean;
};

export function VisitDetails({ compact = false }: VisitDetailsProps) {
  return (
    <div className={`visit-details${compact ? ' visit-details--compact' : ''}`}>
      <article className="visit-detail">
        <span className="visit-detail__icon"><MapPin size={22} weight="light" aria-hidden="true" /></span>
        <div><span className="eyebrow">COME BY</span><h3>Find the shop.</h3><p>{business.address.street}<br />{business.address.city}, {business.address.country}</p>
          <a className="text-link" href={business.mapUrl} target="_blank" rel="noreferrer">Open directions <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
      </article>
      <article className="visit-detail">
        <span className="visit-detail__icon"><Clock size={22} weight="light" aria-hidden="true" /></span>
        <div><span className="eyebrow">OPEN EVERY DAY</span><h3>Drop in when it suits.</h3>
          <ul className="hours-list">
            {business.hours.map((hours) => <li key={hours.label}><span>{hours.label}</span><strong>{hours.display}</strong></li>)}
          </ul>
        </div>
      </article>
      {!compact && <Link className="button button--lime visit-detail__cta" href="/book">Plan your visit <ArrowUpRight size={16} aria-hidden="true" /></Link>}
    </div>
  );
}
