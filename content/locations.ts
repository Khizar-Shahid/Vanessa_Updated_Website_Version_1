/* ─────────────────────────────────────────────
 * content/locations.ts
 * Single source of truth for location practice data.
 * Consumed by:
 *   • app/(website)/locations/page.tsx               (locations hub)
 *   • app/(website)/locations/[location]/page.tsx   (location landing page)
 *   • app/sitemap.ts                                 (dynamic URL list)
 * ───────────────────────────────────────────── */

export type LocationSlug = 'coral-gables' | 'miami';

export interface LocationDetail {
  slug: LocationSlug;
  name: string;
  fullName: string;
  shortName: string;
  eyebrow: string;
  heroTitle: string;
  heroLead: string;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
  canonical: string;
  badge: string;
  overviewHeading: string;
  overviewSubheading: string;
  overviewText: string[];
  settingDetails: {
    label: string;
    description: string;
  }[];
  officeNote: string;
  serviceOfferingsEyebrow: string;
  serviceOfferingsHeading: string;
  serviceOfferingsDescription: string;
}

export const LOCATIONS: Record<LocationSlug, LocationDetail> = {
  'coral-gables': {
    slug: 'coral-gables',
    name: 'Coral Gables',
    fullName: 'Coral Gables, FL',
    shortName: 'Coral Gables',
    eyebrow: 'CORAL GABLES PRACTICE',
    heroTitle: 'Therapy Services in Coral Gables, FL',
    heroLead:
      'Whether you’re working through personal challenges, experiencing relationship difficulties, or looking to build healthier family relationships, therapy can provide a supportive space to better understand your experiences, develop healthier patterns, and work toward meaningful change.',
    seoTitle: 'Therapy Services in Coral Gables, FL | Thrive With Therapy',
    seoDescription:
      'Explore therapy services in Coral Gables, FL, including individual therapy, trauma therapy, couples therapy, and parenting support.',
    seoKeywords: [
      'Therapy Services in Coral Gables',
      'Therapist Coral Gables FL',
      'Counseling Coral Gables',
      'Coral Gables Therapy',
    ],
    canonical: '/locations/coral-gables',
    badge: 'In-Person & Telehealth',
    overviewHeading: 'COMPASSIONATE CARE IN CORAL GABLES',
    overviewSubheading: 'A Dedicated Space for Healing & Growth',
    overviewText: [
      'Nestled in the heart of Coral Gables, our practice provides a private, quiet, and grounded setting for individuals, couples, and families seeking meaningful psychological care.',
      'Led by Vanessa M. Sierra, LMFT, we offer evidence-based, compassionate therapy designed to help you untangle emotional blocks, navigate difficult life transitions, and rebuild healthy connections with yourself and the people you love.',
      'Convenient to Coconut Grove, South Miami, Pinecrest, Brickell, and the greater Miami area, we offer both in-person sessions at our Coral Gables office and secure HIPAA-compliant telehealth throughout Florida.',
    ],
    settingDetails: [
      {
        label: 'Office Location',
        description: 'Coral Gables, FL (South Florida) — private, serene in-person setting.',
      },
      {
        label: 'Virtual Care',
        description: 'Secure, encrypted HIPAA-compliant telehealth across the entire state of Florida.',
      },
      {
        label: 'Clinical Modalities',
        description: 'EMDR, Gottman Method, Emotionally Focused Therapy (EFT), Somatic Experiencing, and Family Systems.',
      },
    ],
    officeNote:
      'We welcome clients for in-person sessions at our peaceful office located in Coral Gables, as well as secure HIPAA-compliant telehealth sessions accessible anywhere across Florida.',
    serviceOfferingsEyebrow: 'SERVICES IN CORAL GABLES',
    serviceOfferingsHeading: 'Specialized Areas of Care in Coral Gables',
    serviceOfferingsDescription:
      'Tailored clinical modalities designed to support individuals, couples, and families through every stage of growth.',
  },
  'miami': {
    slug: 'miami',
    name: 'Miami',
    fullName: 'Miami, FL',
    shortName: 'Miami',
    eyebrow: 'MIAMI, FLORIDA PRACTICE',
    heroTitle: 'Therapist in Miami, FL – Compassionate Therapy & Support',
    heroLead:
      'A warm, confidential, and collaborative space in Miami to explore what’s happening beneath the surface, understand recurring patterns, and foster lasting emotional healing.',
    seoTitle: 'Therapist in Miami, FL | Thrive With Therapy',
    seoDescription:
      'Looking for a therapist in Miami, FL? Thrive With Therapy offers individual, couples, family, and trauma-focused therapy. Schedule a consultation.',
    seoKeywords: [
      'Therapist in Miami, FL',
      'Therapy Miami FL',
      'Counseling Miami FL',
      'Miami Therapist',
    ],
    canonical: '/locations/miami',
    badge: 'Serving Greater Miami',
    overviewHeading: 'COMPASSIONATE CARE',
    overviewSubheading: 'Therapy Tailored to Your Life in Miami',
    overviewText: [
      'Living in Miami brings energy, culture, and vibrant opportunity—but it also comes with high-paced demands, relationship strains, career stress, and personal transitions. Whether you are facing anxiety, processing past hardship, or seeking deeper connection with a partner or child, therapy offers a space to pause and reflect.',
      'Led by Vanessa M. Sierra, LMFT, our practice provides evidence-based, compassionate care. We work collaboratively to understand not just what you are feeling, but why—helping you develop sustainable tools and grounded insight.',
    ],
    settingDetails: [
      {
        label: 'Serving Greater Miami',
        description: 'Brickell, Downtown Miami, Coconut Grove, Coral Gables, Wynwood, and surrounding communities.',
      },
      {
        label: 'In-Person & Online',
        description: 'In-person sessions in our peaceful South Florida suite and telehealth throughout Florida.',
      },
      {
        label: 'Collaborative Pacing',
        description: 'Tailored to the unique rhythms and pressures of living and working in Miami.',
      },
    ],
    officeNote:
      'We welcome clients for in-person sessions at our peaceful office located in Coral Gables (convenient to Coconut Grove, Brickell, and Greater Miami), as well as secure HIPAA-compliant telehealth sessions accessible anywhere across Florida.',
    serviceOfferingsEyebrow: 'OUR SERVICES IN MIAMI',
    serviceOfferingsHeading: 'Specialized Areas of Care in Miami',
    serviceOfferingsDescription:
      'We provide tailored modalities designed to support individuals, couples, and families through every stage of growth.',
  },
};

export const LOCATION_SLUGS: LocationSlug[] = ['coral-gables', 'miami'];

export function getLocation(slug: string): LocationDetail | undefined {
  if (slug === 'coral-gables' || slug === 'miami') {
    return LOCATIONS[slug];
  }
  return undefined;
}

