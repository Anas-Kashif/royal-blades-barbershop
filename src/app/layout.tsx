import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { FirstVisitIntro } from '@/components/FirstVisitIntro';
import { business } from '@/data/business';
import { siteMetadataBase } from '@/lib/seo';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: siteMetadataBase,
  title: {
    default: 'Royal Blades | Barbershop in Sialkot',
    template: '%s | Royal Blades Sialkot',
  },
  description: 'Find your next haircut at Royal Blades, a modern barbershop in Toheed Town on Defense Road, Sialkot. Explore grooming services and plan your visit.',
  applicationName: 'Royal Blades',
  icons: {
    icon: [{ url: '/images/royal-blades-favicon-white.png', type: 'image/png', sizes: '256x256' }],
    shortcut: '/images/royal-blades-favicon-white.png',
  },
  keywords: ['barbershop in Sialkot', 'barber in Sialkot', 'haircut in Sialkot', 'Toheed Town barber', 'Defense Road barbershop'],
  category: 'Beauty and personal care',
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    siteName: 'Royal Blades',
    title: 'Royal Blades | Barbershop in Sialkot',
    description: 'A sharper cut and a little time for yourself at Royal Blades in Toheed Town, Sialkot.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Royal Blades | Barbershop in Sialkot',
    description: 'A sharper cut and a little time for yourself at Royal Blades in Toheed Town, Sialkot.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
};

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'HairSalon',
  name: business.name,
  description: business.description,
  ...(process.env.NEXT_PUBLIC_SITE_URL ? { url: process.env.NEXT_PUBLIC_SITE_URL } : {}),
  priceRange: 'Rs. 500 to Rs. 5,000',
  address: {
    '@type': 'PostalAddress',
    streetAddress: business.address.street,
    addressLocality: business.address.city,
    addressCountry: business.address.countryCode,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '11:00',
      closes: '15:30',
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="first-visit-prepaint" strategy="beforeInteractive">
          {`document.documentElement.classList.add('first-visit-pending'); window.setTimeout(function () { document.documentElement.classList.remove('first-visit-pending'); }, 8000);`}
        </Script>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@400,500&display=swap" rel="stylesheet" />
      </head>
      <body>
        <FirstVisitIntro />
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness).replace(/</g, '\\u003c') }} />
      </body>
    </html>
  );
}
