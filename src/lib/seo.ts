import type { Metadata } from 'next';

const siteOrigin = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '');

export const siteMetadataBase = siteOrigin ? new URL(siteOrigin) : undefined;

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function pageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  const canonicalPath = path === '/' ? '/' : path;

  return {
    title,
    description,
    alternates: siteOrigin ? { canonical: canonicalPath } : undefined,
    openGraph: {
      type: 'website',
      locale: 'en_PK',
      siteName: 'Royal Blades',
      title,
      description,
      url: siteOrigin ? `${siteOrigin}${canonicalPath}` : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export function getSiteOrigin() {
  return siteOrigin;
}
