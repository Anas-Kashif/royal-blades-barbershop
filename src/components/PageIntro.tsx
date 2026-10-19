import { Breadcrumbs } from '@/components/Breadcrumbs';
import type { BreadcrumbItem } from '@/components/Breadcrumbs';

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
};

export function PageIntro({ eyebrow, title, description, breadcrumbs }: PageIntroProps) {
  return (
    <section className="page-intro">
      <div className="page-intro__inner">
        <Breadcrumbs items={breadcrumbs} />
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}
