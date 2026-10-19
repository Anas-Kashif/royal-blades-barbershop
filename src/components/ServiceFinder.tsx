'use client';

import { useMemo, useState } from 'react';
import { ServiceCard } from '@/components/ServiceCard';
import { services } from '@/data/services';

const categories = ['All services', ...new Set(services.map((service) => service.category))];

export function ServiceFinder() {
  const [activeCategory, setActiveCategory] = useState('All services');
  const [query, setQuery] = useState('');

  const filteredServices = useMemo(() => {
    const searchTerm = query.trim().toLocaleLowerCase();
    return services.filter((service) => {
      const matchesCategory = activeCategory === 'All services' || service.category === activeCategory;
      const matchesSearch = !searchTerm || `${service.name} ${service.category} ${service.description}`.toLocaleLowerCase().includes(searchTerm);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, query]);

  return (
    <>
      <div className="service-finder" aria-label="Find a service">
        <label className="service-finder__search">
          <span className="sr-only">Search services</span>
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><circle cx="10.8" cy="10.8" r="6.8" /><path d="m16 16 4.2 4.2" /></svg>
          <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search services" />
        </label>
        <div className="service-finder__filters" aria-label="Filter by category">
          {categories.map((category) => (
            <button key={category} type="button" className={activeCategory === category ? 'is-active' : ''} aria-pressed={activeCategory === category} onClick={() => setActiveCategory(category)}>
              {category}
            </button>
          ))}
        </div>
      </div>
      <p className="service-finder__count" aria-live="polite">{filteredServices.length} {filteredServices.length === 1 ? 'service' : 'services'} available</p>
      {filteredServices.length > 0 ? (
        <div className="services-grid">
          {filteredServices.map((service) => <ServiceCard key={service.slug} service={service} index={services.indexOf(service)} />)}
        </div>
      ) : (
        <div className="service-finder__empty">
          <h3>No services found</h3>
          <p>Try another search or choose a different category.</p>
          <button type="button" onClick={() => { setQuery(''); setActiveCategory('All services'); }}>Clear search and filters</button>
        </div>
      )}
    </>
  );
}
