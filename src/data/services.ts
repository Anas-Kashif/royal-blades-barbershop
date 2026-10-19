export type Service = {
  slug: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  category: string;
};

export const services: Service[] = [
  {
    slug: 'beard-trim',
    name: 'Beard trim',
    description: 'Clean lines, balanced shape, and a tidy finish.',
    price: 500,
    duration: '20 min',
    category: 'Beard',
  },
  {
    slug: 'kids-cut',
    name: 'Kids’ haircut',
    description: 'A comfortable, neat cut for younger guests.',
    price: 1000,
    duration: '30 min',
    category: 'Hair',
  },
  {
    slug: 'classic-cut',
    name: 'Classic haircut',
    description: 'A fresh, tailored cut shaped around your style.',
    price: 1500,
    duration: '40 min',
    category: 'Hair',
  },
  {
    slug: 'cut-and-beard',
    name: 'Haircut + beard',
    description: 'A complete refresh with a clean cut and beard detail.',
    price: 2500,
    duration: '60 min',
    category: 'Combo',
  },
  {
    slug: 'royal-grooming',
    name: 'Royal grooming package',
    description: 'A full grooming session with time for every detail.',
    price: 5000,
    duration: '90 min',
    category: 'Signature',
  },
];

export function formatPrice(price: number) {
  return `Rs. ${price.toLocaleString('en-PK')}`;
}
