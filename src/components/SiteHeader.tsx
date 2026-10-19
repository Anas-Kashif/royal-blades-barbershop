'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ArrowUpRight, List, X } from '@phosphor-icons/react';
import { navigation } from '@/data/business';
import { BrandMark } from '@/components/BrandMark';

function isCurrentPage(pathname: string, href: string) {
  return href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <BrandMark />
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} aria-current={isCurrentPage(pathname, item.href) ? 'page' : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="button button--lime header-book" href="/book">
          Book a visit <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} aria-hidden="true" /> : <List size={22} aria-hidden="true" />}
        </button>
      </div>
      <nav id="mobile-navigation" className={`mobile-nav${menuOpen ? ' mobile-nav--open' : ''}`} aria-label="Mobile navigation" aria-hidden={!menuOpen} inert={!menuOpen}>
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isCurrentPage(pathname, item.href) ? 'page' : undefined}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}<ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        ))}
        <Link className="button button--lime mobile-nav__book" href="/book" onClick={() => setMenuOpen(false)}>
          Book a visit <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </nav>
    </header>
  );
}
