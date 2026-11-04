import { LOCATIONS, LOCATION_SLUGS } from '@/content/locations';

export type NavChild = {
  label: string;
  description: string;
  href: string;
};

export type NavItem =
  | {
    label: string;
    href: string;
    children?: never;
  }
  | {
    label: string;
    href?: string;
    children: NavChild[];
  };

const LOCATION_CHILDREN: NavChild[] = LOCATION_SLUGS.map((slug) => ({
  label: LOCATIONS[slug].name,
  description: LOCATIONS[slug].badge,
  href: `/locations/${slug}`,
}));

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Meet Vanessa', href: '/meet-vanessa' },
  { label: 'Locations', href: '/locations', children: LOCATION_CHILDREN },
  { label: 'Blog', href: '/blog' },
  {
    label: 'Resources',
    children: [
      {
        label: 'Resource Library',
        description: 'Free printable clinical tools & reflection guides',
        href: '/resources',
      },
      {
        label: 'Podcasts',
        description: 'Video episodes, conversations & mental health guidance',
        href: '/podcasts',
      },
    ],
  },
  { label: 'Consultation', href: '/consultation' },
  { label: 'FAQ', href: '/faqs' },
  { label: 'Contact', href: '/contact' },
];

export const EASE = [0.2, 0.8, 0.3, 1] as const;

export function isActivePath(pathname: string, href: string) {
  return href === '/' ? pathname === '/' : pathname.startsWith(href);
}