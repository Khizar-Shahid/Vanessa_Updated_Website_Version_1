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
      href?: never;
      children: NavChild[];
    };

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Meet Vanessa', href: '/meet-vanessa' },
  { label: 'Services', href: '/services' },
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
