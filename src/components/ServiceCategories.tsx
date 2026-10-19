import Link from 'next/link';
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr';
import { serviceCategories } from '@/data/service-categories';

export function ServiceCategories() {
  return (
    <section className="service-categories section-pad" aria-labelledby="service-categories-title">
      <div className="container">
        <div className="service-categories__heading">
          <div>
            <span className="eyebrow">EXPLORE THE MENU</span>
            <h2 id="service-categories-title">Start with a category.</h2>
          </div>
          <p>From a quick tidy-up to a full reset, find the service that fits.</p>
        </div>
        <div className="service-categories__grid">
          {serviceCategories.map((category, index) => (
            <Link className="service-category" href={`/services#service-${category.serviceSlug}`} key={category.serviceSlug}>
              <span className="service-category__label">{category.label}</span>
              <span className="service-category__index">0{index + 1}</span>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              <span className="service-category__link">{category.linkLabel}<ArrowUpRight size={16} aria-hidden="true" /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
