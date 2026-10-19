import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Royal Blades',
    short_name: 'Royal Blades',
    description: 'A modern barbershop in Sialkot.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0A0A0A',
    theme_color: '#0A0A0A',
    icons: [{ src: '/images/royal-blades-favicon-white.png', sizes: '256x256', type: 'image/png', purpose: 'any' }],
  };
}
