import Link from 'next/link';
import { CaretRight, House } from '@phosphor-icons/react/dist/ssr';

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        {items.map((item, index) => {
          const isHome = index === 0;
          const isCurrent = index === items.length - 1;

          return (
            <li key={`${item.label}-${index}`}>
              {index > 0 && <CaretRight className="breadcrumbs__separator" size={13} aria-hidden="true" />}
              {item.href && !isCurrent ? (
                <Link href={item.href}>
                  {isHome && <House size={14} weight="regular" aria-hidden="true" />}
                  <span>{item.label}</span>
                </Link>
              ) : (
                <span aria-current={isCurrent ? 'page' : undefined}>
                  {isHome && <House size={14} weight="regular" aria-hidden="true" />}
                  <span>{item.label}</span>
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
