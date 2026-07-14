export const BRAND_NAME = 'Essence';
export const BRAND_TAGLINE = 'Designed to Last';
export const BRAND_DESCRIPTION = 'Premium streetwear crafted from organic materials';

export const COLORS = {
  primary: '#F8F6F2',
  secondary: '#1A1A1A',
  accent: '#6E7F5D',
  neutralLight: '#ECE8DF',
  neutralMedium: '#D9D5CC',
  neutralDark: '#B8B1A6',
};

export const COLLECTIONS = [
  {
    id: 'oversized-tees',
    name: 'Oversized Tees',
    slug: 'oversized-tees',
  },
  {
    id: 'heavy-hoodies',
    name: 'Heavy Hoodies',
    slug: 'heavy-hoodies',
  },
  {
    id: 'cargo-pants',
    name: 'Cargo Pants',
    slug: 'cargo-pants',
  },
  {
    id: 'accessories',
    name: 'Accessories',
    slug: 'accessories',
  },
];

export const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

export const NAVIGATION = [
  { name: 'Shop', href: '/shop' },
  { name: 'Collections', href: '/collections' },
  { name: 'About', href: '/about' },
  { name: 'Journal', href: '/journal' },
  { name: 'Contact', href: '/contact' },
];

export const FOOTER_LINKS = {
  help: [
    { name: 'Shipping Information', href: '/shipping' },
    { name: 'Returns & Exchanges', href: '/returns' },
    { name: 'Size Guide', href: '/size-guide' },
    { name: 'Care Instructions', href: '/care' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Sustainability', href: '/sustainability' },
    { name: 'Contact', href: '/contact' },
    { name: 'Careers', href: '/careers' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
  ],
};

export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com',
  twitter: 'https://twitter.com',
  facebook: 'https://facebook.com',
  tiktok: 'https://tiktok.com',
};

export const SUSTAINABILITY_FEATURES = [
  {
    id: 1,
    title: 'Organic Cotton',
    description: 'GOTS-certified organic cotton sourced responsibly',
    icon: 'Leaf',
  },
  {
    id: 2,
    title: 'Responsible Manufacturing',
    description: 'Fair wages and safe working conditions guaranteed',
    icon: 'CheckCircle',
  },
  {
    id: 3,
    title: 'Low Waste Packaging',
    description: 'Recyclable and minimal packaging materials',
    icon: 'Box',
  },
  {
    id: 4,
    title: 'Small Batch Production',
    description: 'Reduced overproduction and waste',
    icon: 'Target',
  },
];

export const ARTICLE_CATEGORIES = [
  'All',
  'Fabric',
  'Design',
  'Culture',
  'Sustainability',
  'Behind the Scenes',
];

export const SHIPPING_TIERS = [
  {
    id: 'free',
    name: 'Free Shipping',
    minAmount: 100,
    estimatedDays: '5-7',
  },
  {
    id: 'express',
    name: 'Express (2-3 days)',
    cost: 25,
  },
  {
    id: 'overnight',
    name: 'Overnight',
    cost: 50,
  },
];
