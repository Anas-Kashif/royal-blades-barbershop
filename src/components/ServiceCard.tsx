import Link from 'next/link';
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr';
import type { Service } from '@/data/services';
import { formatPrice } from '@/data/services';

type ServiceCardProps = {
  service: Service;
  index?: number;
  compact?: boolean;
};

export function ServiceCard({ service, index = 0, compact = false }: ServiceCardProps) {
  return (
    <article id={`service-${service.slug}`} className={`service-card${compact ? ' service-card--compact' : ''}`}>
      <div className="service-card__top">
        <span className="service-card__category">{service.category}</span>
      </div>
      <div>
        <h3>{service.name}</h3>
        <p>{service.description}</p>
      </div>
      <div className="service-card__bottom">
        <div className="service-card__price-group">
          <span className="service-card__price">{formatPrice(service.price)}</span>
        </div>
        <Link href={`/book?service=${service.slug}`} aria-label={`Choose ${service.name}`}>
          <span>Choose service</span>
          <ArrowUpRight size={18} weight="bold" aria-hidden="true" />
        </Link>
      </div>
      <span className="service-card__watermark" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
    </article>
  );
}
