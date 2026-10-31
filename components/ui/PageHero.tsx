import Atmosphere from '@/components/ui/Atmosphere';
import OrganicLine from '@/components/ui/OrganicLine';
import Eyebrow from '@/components/ui/Eyebrow';
import { RevealGroup, RevealItem } from '@/components/motion/Reveal';

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: 'center' | 'left';
  children?: React.ReactNode;
}

/** Shared hero for inner pages: soft atmosphere, staggered entry, drawn line. */
export default function PageHero({ eyebrow, title, lead, align = 'center', children }: PageHeroProps) {
  const isCenter = align === 'center';
  return (
    <section className="relative overflow-hidden py-16 md:py-24 border-b border-border">
      <Atmosphere opacity="soft" />
      <div className="w-full max-w-[1160px] mx-auto px-6">
        <RevealGroup className={`relative z-10 max-w-[860px] ${isCenter ? 'mx-auto text-center' : ''}`} immediate stagger={0.1}>
          <RevealItem>
            <Eyebrow>{eyebrow}</Eyebrow>
          </RevealItem>
          <RevealItem as="h1" className="font-serif text-5xl font-normal text-foreground text-balance [&>em]:italic [&>em]:text-primary mb-5">{title}</RevealItem>
          {lead && (
            <RevealItem as="p" className={`text-[18px] leading-[1.7] text-muted max-w-[62ch] ${isCenter ? 'mx-auto' : ''}`}>
              {lead}
            </RevealItem>
          )}
          {children && <RevealItem>{children}</RevealItem>}
          <div className={`w-[200px] mt-8 ${isCenter ? 'mx-auto' : ''}`} aria-hidden="true">
            <OrganicLine variant="connecting" />
          </div>
        </RevealGroup>
      </div>
    </section>
  );
}
