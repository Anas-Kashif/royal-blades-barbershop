export const business = {
  name: 'Royal Blades',
  description: 'Modern barbering and everyday grooming in Sialkot.',
  address: {
    street: 'Toheed Town, Defense Road',
    city: 'Sialkot',
    country: 'Pakistan',
    countryCode: 'PK',
  },
  hours: [
    { label: 'Monday to Saturday', days: 'Monday to Saturday', opens: '10:00', closes: '18:00', display: '10:00 am to 6:00 pm' },
    { label: 'Sunday', days: 'Sunday', opens: '11:00', closes: '15:30', display: '11:00 am to 3:30 pm' },
  ],
  mapUrl: 'https://maps.google.com/?q=Toheed+Town+Defense+Road+Sialkot+Pakistan',
} as const;

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Our story', href: '/about' },
  { label: 'Visit us', href: '/visit' },
] as const;
