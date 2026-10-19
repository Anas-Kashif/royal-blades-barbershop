import { services } from '@/data/services';
import { ServiceCard } from '@/components/ServiceCard';

type ServicesGridProps = {
  limit?: number;
  compact?: boolean;
};

export function ServicesGrid({ limit, compact = false }: ServicesGridProps) {
  const visibleServices = typeof limit === 'number' ? services.slice(0, limit) : services;

  return (
    <div className={`services-grid${compact ? ' services-grid--compact' : ''}`} role={compact ? 'region' : undefined} aria-label={compact ? 'Popular services' : undefined} tabIndex={compact ? 0 : undefined}>
      {visibleServices.map((service, index) => (
        <ServiceCard key={service.slug} service={service} index={index} compact={compact} />
      ))}
    </div>
  );
}
