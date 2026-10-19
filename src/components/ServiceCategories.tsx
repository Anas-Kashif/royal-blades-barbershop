import Link from 'next/link';
import { ArrowUpRight, Crown, Scissors, Sparkle, UserFocus } from '@phosphor-icons/react/dist/ssr';
import { serviceCategories } from '@/data/service-categories';

const categoryIcons = [Scissors, Sparkle, UserFocus, Crown];

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
          {serviceCategories.map((category, index) => {
            const CategoryIcon = categoryIcons[index] ?? Scissors;

            return (
              <Link
                className="service-category"
                href={`/services#service-${category.serviceSlug}`}
                key={category.serviceSlug}
                aria-label={`${category.linkLabel}: ${category.title}`}
              >
                <CategoryIcon className="service-category__icon" size={86} weight="light" aria-hidden="true" />
                <span className="service-category__top">
                  <span className="service-category__label">{category.label}</span>
                </span>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <span className="service-category__link" aria-hidden="true"><ArrowUpRight size={19} /></span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
