import type { MetadataRoute } from 'next';
import { getSiteOrigin } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = getSiteOrigin();
  if (!origin) return [];

  const routes = [
    { path: '/', priority: 1, changeFrequency: 'weekly' as const },
    { path: '/services', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/gallery', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/about', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/visit', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/book', priority: 0.7, changeFrequency: 'monthly' as const },
  ];

  return routes.map((route) => ({
    url: `${origin}${route.path}`,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
