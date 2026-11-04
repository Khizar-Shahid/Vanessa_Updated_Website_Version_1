/* ─────────────────────────────────────────────
 * content/services.ts
 * Single source of truth for therapy-service data across locations.
 * Consumed by:
 *   • app/(website)/locations/page.tsx               (locations hub)
 *   • app/(website)/locations/[location]/page.tsx   (location landing page)
 *   • app/(website)/locations/[location]/[service]/page.tsx (detail + metadata)
 *   • app/sitemap.ts                                 (dynamic URL list)
 * ───────────────────────────────────────────── */

import { LocationSlug, LOCATION_SLUGS } from './locations';

export type ServiceSlug =
  | 'individual-therapy'
  | 'couples-therapy'
  | 'parenting-family-therapy'
  | 'trauma-therapy';

export const SERVICE_SLUGS: ServiceSlug[] = [
  'individual-therapy',
  'couples-therapy',
  'parenting-family-therapy',
  'trauma-therapy',
];

export interface ServiceSummary {
  slug: ServiceSlug;
  num: string;
  title: string;
  eyebrow: string;
  intro: string;
  description: string;
  focus: string[];
}

export interface ServiceDetail {
  slug: ServiceSlug;
  locationSlug: LocationSlug;
  title: string;
  seoTitle: string;
  seoDescription: string;
  seoH1: string;
  seoKeyword: string;
  subtitle: string;
  forWhen: string;
  whoItsFor: string[];
  whatSessionsLookLike: string[];
  focusAreas: string[];
  faq: { q: string; a: string }[];
}

/* ── Shared clinical foundations ── */

const SHARED_DATA = {
  'individual-therapy': {
    num: '01',
    title: 'Individual Therapy',
    eyebrow: 'One-on-One Support',
    subtitle: 'One-on-One Collaborative Care',
    intro: 'For when something feels stuck, overwhelming, or difficult to understand on your own.',
    forWhen: 'For when something feels stuck, overwhelming, or difficult to understand on your own.',
    focus: [
      'Self-worth, identity, and confidence',
      'Managing emotions and stress',
      'Life changes and setting healthy boundaries',
      'Anxiety and feeling overwhelmed',
      'Burnout and everyday challenges',
      'Dealing with self-criticism and building self-compassion',
    ],
    whoItsFor: [
      'Adults navigating chronic anxiety, stress, or emotional overwhelm',
      'Individuals dealing with life transitions, identity shifts, or relationship breakups',
      'Those seeking to build healthier emotional boundaries and self-worth',
      'People wanting to understand their recurring emotional habits without judgment',
    ],
    whatSessionsLookLike: [
      'A steady, 50-minute dedicated space focused entirely on your lived experience',
      'Gentle exploration of emotional patterns and bodily sensations during discussion',
      'Collaborative pacing—we do not force revelations before you feel ready',
      'Practical tools and grounding practices you can carry into your daily life',
    ],
    focusAreas: [
      'Self-worth and internal dialogue',
      'Emotional regulation and somatic awareness',
      'Depression, chronic anxiety, and stress',
      'Grief, loss, and life changes',
    ],
    faq: [
      {
        q: 'How long does individual therapy typically take?',
        a: 'Every person’s journey is unique. Some clients find clarity and symptom relief in 8–12 sessions, while others choose longer-term depth work to address lifelong patterns.',
      },
      {
        q: 'Do you offer online or in-person sessions?',
        a: 'We offer both secure HIPAA-compliant telehealth throughout Florida and in-person sessions at our Coral Gables office.',
      },
    ],
  },
  'couples-therapy': {
    num: '02',
    title: 'Couples Therapy',
    eyebrow: 'Relational Healing',
    subtitle: 'Relational Reconnection & Repair',
    intro: 'For when you care about each other, but keep having the same problems.',
    forWhen: 'For when you care about each other, but keep getting caught in the same patterns.',
    focus: [
      'Managing arguments and disagreements',
      'Building trust and feeling safe',
      'Understanding each other better',
      'Improving communication',
      'Getting closer emotionally',
      'Handling big changes in your relationship',
    ],
    whoItsFor: [
      'Partners trapped in repeating arguments that never seem to resolve',
      'Couples experiencing emotional distance, withdrawal, or intimacy struggles',
      'Partners seeking to repair trust following a breach or conflict',
      'Pre-marital or transitioning couples wanting to establish solid communication foundations',
    ],
    whatSessionsLookLike: [
      'A structured, balanced space where both voices are respected and protected',
      'Identifying the specific cycles that trigger defensiveness or shutdown',
      'Live in-session practice of vulnerable communication and active emotional listening',
      'Concrete strategies to de-escalate fights at home before they cause harm',
    ],
    focusAreas: [
      'Attachment styles and unmet emotional needs',
      'De-escalating defensive communication cycles',
      'Rebuilding intimacy and affectionate connection',
      'Navigating parenting and family stressors as a unified team',
    ],
    faq: [
      {
        q: 'What if my partner is hesitant about attending therapy?',
        a: 'Hesitation is completely normal. Couples therapy is not about taking sides or deciding who is "wrong"; it is about understanding the dance between you both.',
      },
      {
        q: 'What approach do you use for couples therapy?',
        a: 'Vanessa integrates the Gottman Method and Emotionally Focused Therapy (EFT) principles to foster emotional safety and practical connection.',
      },
    ],
  },
  'parenting-family-therapy': {
    num: '03',
    title: 'Parenting & Family Therapy',
    eyebrow: 'Generational Growth',
    subtitle: 'Strengthening Family Bonds & Authority',
    intro: 'For families going through conflict, changes, or the everyday challenges of raising children.',
    forWhen: 'For families navigating conflict, changing roles, and the challenges of raising children.',
    focus: [
      'Better communication between parents and children',
      'Helping children handle strong emotions',
      'Setting healthy boundaries at home',
      'Parenting challenges and family changes',
      'Co-parenting and blended family concerns',
    ],
    whoItsFor: [
      'Parents feeling overwhelmed, exhausted, or stuck in power struggles with their children',
      'Families adjusting to divorce, remarriage, or major developmental milestones',
      'Parents wanting to break generational cycles and establish positive discipline',
      'Families needing support with adolescent emotional outbursts or anxiety',
    ],
    whatSessionsLookLike: [
      'Clarifying family rules, emotional boundaries, and role expectations',
      'Guidance on how to maintain loving warmth while upholding consistent authority',
      'Interactive discussions to bridge communication divides between parents and children',
      'Parent-only coaching sessions paired with joint family sessions as clinically appropriate',
    ],
    focusAreas: [
      'Healthy parental authority without fear or harshness',
      'Developmental stages and adolescent emotional regulation',
      'Co-parenting consistency across households',
      'Family conflict resolution and relational repair',
    ],
    faq: [
      {
        q: 'Will my child be seen alone or with the family?',
        a: 'Depending on the age and clinical situation, therapy typically involves a combination of parent consultations and joint family sessions.',
      },
      {
        q: 'How does family therapy help parent-child conflict?',
        a: 'It shifts the focus from blaming the child to understanding how the entire family system communicates and regulates stress together.',
      },
    ],
  },
  'trauma-therapy': {
    num: '04',
    title: 'Trauma-Focused Therapy',
    eyebrow: 'Somatic & EMDR',
    subtitle: 'EMDR & Somatic Healing',
    intro: 'For when something from your past is still affecting you today.',
    forWhen: 'For when past experiences still affect how you feel, respond, or connect with others today.',
    focus: [
      'Difficult or painful past experiences',
      'Fear, stress, and strong emotions',
      'Feeling stuck or overwhelmed',
      'Stress and tension in the body',
      'Feeling safer and more comfortable in everyday life',
    ],
    whoItsFor: [
      'Individuals dealing with single-incident trauma or ongoing developmental childhood adversity',
      'Those suffering from PTSD triggers, flashbacks, or emotional numbness',
      'People whose nervous systems feel perpetually on guard (hypervigilance) or shut down (freeze)',
      'Anyone who has tried talk therapy and still feels trauma held physically in their body',
    ],
    whatSessionsLookLike: [
      'Comprehensive preparation phase focusing on nervous system stabilization and grounding skills',
      'Bilateral stimulation (EMDR) protocols to desensitize and reprocess target memories',
      'Somatic tracking of physical sensations to safely discharge trapped survival energy',
      'Restoring a felt sense of safety, dignity, and personal empowerment in present life',
    ],
    focusAreas: [
      'EMDR (Eye Movement Desensitization and Reprocessing)',
      'Somatic Experiencing and body-based regulation',
      'Healing early relational neglect and abuse memories',
      'Overcoming chronic hyperarousal and panic reactions',
    ],
    faq: [
      {
        q: 'Will I have to recount every detail of my trauma?',
        a: 'No. Modalities like EMDR and somatic therapy focus on internal emotional and physiological processing rather than requiring you to verbalize graphic details.',
      },
      {
        q: 'Is EMDR safe for complex trauma?',
        a: 'Yes, when facilitated with careful pacing, adequate stabilization resources, and an experienced licensed clinician like Vanessa.',
      },
    ],
  },
};

/* ── Location-specific service data ── */

export const LOCATION_SERVICES: Record<
  LocationSlug,
  Record<ServiceSlug, { summary: ServiceSummary; detail: ServiceDetail }>
> = {
  'coral-gables': {
    'individual-therapy': {
      summary: {
        slug: 'individual-therapy',
        num: SHARED_DATA['individual-therapy'].num,
        title: SHARED_DATA['individual-therapy'].title,
        eyebrow: SHARED_DATA['individual-therapy'].eyebrow,
        intro: SHARED_DATA['individual-therapy'].intro,
        description:
          'Individual therapy in Coral Gables gives you a private and supportive space to talk about what you are going through. It can help you better understand your feelings, deal with stress and anxiety, manage difficult emotions, and work through changes in your life.\n\nTogether, you can understand your thoughts and patterns, build healthier ways to cope, and feel more confident in yourself and your choices.',
        focus: SHARED_DATA['individual-therapy'].focus,
      },
      detail: {
        slug: 'individual-therapy',
        locationSlug: 'coral-gables',
        title: SHARED_DATA['individual-therapy'].title,
        seoTitle: 'Individual Therapy in Coral Gables, FL | Thrive With Therapy',
        seoDescription:
          'Get personalized individual therapy in Coral Gables, FL. Explore support for emotional challenges, life changes, anxiety, and personal growth.',
        seoH1: 'Individual Therapy in Coral Gables, FL',
        seoKeyword: 'Individual Therapy in Coral Gables',
        subtitle: SHARED_DATA['individual-therapy'].subtitle,
        forWhen: SHARED_DATA['individual-therapy'].forWhen,
        whoItsFor: SHARED_DATA['individual-therapy'].whoItsFor,
        whatSessionsLookLike: SHARED_DATA['individual-therapy'].whatSessionsLookLike,
        focusAreas: SHARED_DATA['individual-therapy'].focusAreas,
        faq: SHARED_DATA['individual-therapy'].faq,
      },
    },
    'couples-therapy': {
      summary: {
        slug: 'couples-therapy',
        num: SHARED_DATA['couples-therapy'].num,
        title: SHARED_DATA['couples-therapy'].title,
        eyebrow: SHARED_DATA['couples-therapy'].eyebrow,
        intro: SHARED_DATA['couples-therapy'].intro,
        description:
          'Couples therapy in Coral Gables gives partners a safe and private place to talk about their relationship. It can help you communicate better, understand each other, solve problems, and build a stronger connection.\n\nWe use helpful therapy approaches, including the Gottman Method and attachment-based therapy, to help couples understand their problems and find better ways to communicate and support each other.',
        focus: SHARED_DATA['couples-therapy'].focus,
      },
      detail: {
        slug: 'couples-therapy',
        locationSlug: 'coral-gables',
        title: SHARED_DATA['couples-therapy'].title,
        seoTitle: 'Couples Therapy in Coral Gables, FL | Thrive With Therapy',
        seoDescription:
          'Improve communication and strengthen your relationship with couples therapy in Coral Gables, FL. Get a safe and supportive space to work through challenges.',
        seoH1: 'Couples Therapy in Coral Gables, FL',
        seoKeyword: 'Couples Therapy in Coral Gables',
        subtitle: SHARED_DATA['couples-therapy'].subtitle,
        forWhen: SHARED_DATA['couples-therapy'].forWhen,
        whoItsFor: SHARED_DATA['couples-therapy'].whoItsFor,
        whatSessionsLookLike: SHARED_DATA['couples-therapy'].whatSessionsLookLike,
        focusAreas: SHARED_DATA['couples-therapy'].focusAreas,
        faq: SHARED_DATA['couples-therapy'].faq,
      },
    },
    'parenting-family-therapy': {
      summary: {
        slug: 'parenting-family-therapy',
        num: SHARED_DATA['parenting-family-therapy'].num,
        title: SHARED_DATA['parenting-family-therapy'].title,
        eyebrow: SHARED_DATA['parenting-family-therapy'].eyebrow,
        intro: SHARED_DATA['parenting-family-therapy'].intro,
        description:
          'Family life is not always easy. Sometimes parents and children have trouble communicating, understanding each other, or dealing with strong emotions. Parenting and family therapy in Coral Gables offers a comfortable space where families can talk about these challenges and work through them together.\n\nTherapy can help families improve communication, set healthy boundaries, handle difficult situations, and build stronger relationships at home.',
        focus: SHARED_DATA['parenting-family-therapy'].focus,
      },
      detail: {
        slug: 'parenting-family-therapy',
        locationSlug: 'coral-gables',
        title: SHARED_DATA['parenting-family-therapy'].title,
        seoTitle: 'Parenting & Family Therapy in Coral Gables, FL | Thrive with Therapy',
        seoDescription:
          'Get compassionate parenting and family therapy in Coral Gables, FL. Thrive with Therapy helps families improve communication, relationships, and emotional well-being.',
        seoH1: 'Parenting & Family Therapy in Coral Gables, FL',
        seoKeyword: 'Parenting and Family Therapy in Coral Gables',
        subtitle: SHARED_DATA['parenting-family-therapy'].subtitle,
        forWhen: SHARED_DATA['parenting-family-therapy'].forWhen,
        whoItsFor: SHARED_DATA['parenting-family-therapy'].whoItsFor,
        whatSessionsLookLike: SHARED_DATA['parenting-family-therapy'].whatSessionsLookLike,
        focusAreas: SHARED_DATA['parenting-family-therapy'].focusAreas,
        faq: SHARED_DATA['parenting-family-therapy'].faq,
      },
    },
    'trauma-therapy': {
      summary: {
        slug: 'trauma-therapy',
        num: SHARED_DATA['trauma-therapy'].num,
        title: SHARED_DATA['trauma-therapy'].title,
        eyebrow: SHARED_DATA['trauma-therapy'].eyebrow,
        intro: SHARED_DATA['trauma-therapy'].intro,
        description:
          'Sometimes, difficult experiences from the past can stay with us. They may affect how we feel, how we react to certain situations, or how we connect with other people. Trauma therapy in Coral Gables gives you a safe and private place to talk about these experiences and begin working through them.\n\nTherapy can help you understand what you are feeling, manage difficult emotions, and find healthier ways to cope. Your therapy is based on your needs and what feels comfortable for you.',
        focus: SHARED_DATA['trauma-therapy'].focus,
      },
      detail: {
        slug: 'trauma-therapy',
        locationSlug: 'coral-gables',
        title: SHARED_DATA['trauma-therapy'].title,
        seoTitle: 'Trauma Therapy in Coral Gables, FL | Thrive With Therapy',
        seoDescription:
          'Find compassionate trauma therapy in Coral Gables, FL. Get professional support to process difficult experiences and build healthy coping skills.',
        seoH1: 'Trauma Therapy in Coral Gables, FL',
        seoKeyword: 'Trauma Therapy in Coral Gables',
        subtitle: SHARED_DATA['trauma-therapy'].subtitle,
        forWhen: SHARED_DATA['trauma-therapy'].forWhen,
        whoItsFor: SHARED_DATA['trauma-therapy'].whoItsFor,
        whatSessionsLookLike: SHARED_DATA['trauma-therapy'].whatSessionsLookLike,
        focusAreas: SHARED_DATA['trauma-therapy'].focusAreas,
        faq: SHARED_DATA['trauma-therapy'].faq,
      },
    },
  },
  'miami': {
    'individual-therapy': {
      summary: {
        slug: 'individual-therapy',
        num: SHARED_DATA['individual-therapy'].num,
        title: SHARED_DATA['individual-therapy'].title,
        eyebrow: SHARED_DATA['individual-therapy'].eyebrow,
        intro: SHARED_DATA['individual-therapy'].intro,
        description:
          'Individual therapy in Miami gives you a private and supportive space to talk about what you are going through. It can help you better understand your feelings, deal with stress and anxiety, manage difficult emotions, and work through changes in your life.\n\nTogether, you can understand your thoughts and patterns, build healthier ways to cope, and feel more confident in yourself and your choices.',
        focus: SHARED_DATA['individual-therapy'].focus,
      },
      detail: {
        slug: 'individual-therapy',
        locationSlug: 'miami',
        title: SHARED_DATA['individual-therapy'].title,
        seoTitle: 'Individual Therapy in Miami, FL | Thrive With Therapy',
        seoDescription:
          'Explore individual therapy in Miami, FL, to work through anxiety, stress, life changes, and emotional challenges. Schedule a consultation today.',
        seoH1: 'Individual Therapy in Miami, FL',
        seoKeyword: 'Individual Therapy in Miami, FL',
        subtitle: SHARED_DATA['individual-therapy'].subtitle,
        forWhen: SHARED_DATA['individual-therapy'].forWhen,
        whoItsFor: SHARED_DATA['individual-therapy'].whoItsFor,
        whatSessionsLookLike: SHARED_DATA['individual-therapy'].whatSessionsLookLike,
        focusAreas: SHARED_DATA['individual-therapy'].focusAreas,
        faq: SHARED_DATA['individual-therapy'].faq,
      },
    },
    'couples-therapy': {
      summary: {
        slug: 'couples-therapy',
        num: SHARED_DATA['couples-therapy'].num,
        title: SHARED_DATA['couples-therapy'].title,
        eyebrow: SHARED_DATA['couples-therapy'].eyebrow,
        intro: SHARED_DATA['couples-therapy'].intro,
        description:
          'Couples therapy in Miami gives partners a safe and private place to talk about their relationship. It can help you communicate better, understand each other, solve problems, and build a stronger connection.\n\nWe use helpful therapy approaches, including the Gottman Method and attachment-based therapy, to help couples understand their problems and find better ways to communicate and support each other.',
        focus: SHARED_DATA['couples-therapy'].focus,
      },
      detail: {
        slug: 'couples-therapy',
        locationSlug: 'miami',
        title: SHARED_DATA['couples-therapy'].title,
        seoTitle: 'Couples Therapy in Miami, FL | Thrive With Therapy',
        seoDescription:
          'Strengthen your relationship with couples therapy in Miami, FL. Work on communication, trust, recurring conflicts, and emotional connection.',
        seoH1: 'Couples Therapy in Miami, FL',
        seoKeyword: 'Couples Therapy in Miami, FL',
        subtitle: SHARED_DATA['couples-therapy'].subtitle,
        forWhen: SHARED_DATA['couples-therapy'].forWhen,
        whoItsFor: SHARED_DATA['couples-therapy'].whoItsFor,
        whatSessionsLookLike: SHARED_DATA['couples-therapy'].whatSessionsLookLike,
        focusAreas: SHARED_DATA['couples-therapy'].focusAreas,
        faq: SHARED_DATA['couples-therapy'].faq,
      },
    },
    'parenting-family-therapy': {
      summary: {
        slug: 'parenting-family-therapy',
        num: SHARED_DATA['parenting-family-therapy'].num,
        title: SHARED_DATA['parenting-family-therapy'].title,
        eyebrow: SHARED_DATA['parenting-family-therapy'].eyebrow,
        intro: SHARED_DATA['parenting-family-therapy'].intro,
        description:
          'Family life is not always easy. Sometimes parents and children have trouble communicating, understanding each other, or dealing with strong emotions. Parenting and family therapy in Miami offers a comfortable space where families can talk about these challenges and work through them together.\n\nTherapy can help families improve communication, set healthy boundaries, handle difficult situations, and build stronger relationships at home.',
        focus: SHARED_DATA['parenting-family-therapy'].focus,
      },
      detail: {
        slug: 'parenting-family-therapy',
        locationSlug: 'miami',
        title: SHARED_DATA['parenting-family-therapy'].title,
        seoTitle: 'Family Therapy in Miami, FL | Thrive With Therapy',
        seoDescription:
          'Improve family communication and navigate parenting challenges with family therapy in Miami, FL. Explore supportive care with Thrive With Therapy.',
        seoH1: 'Parenting & Family Therapy in Miami, FL',
        seoKeyword: 'Family Therapy in Miami, FL',
        subtitle: SHARED_DATA['parenting-family-therapy'].subtitle,
        forWhen: SHARED_DATA['parenting-family-therapy'].forWhen,
        whoItsFor: SHARED_DATA['parenting-family-therapy'].whoItsFor,
        whatSessionsLookLike: SHARED_DATA['parenting-family-therapy'].whatSessionsLookLike,
        focusAreas: SHARED_DATA['parenting-family-therapy'].focusAreas,
        faq: SHARED_DATA['parenting-family-therapy'].faq,
      },
    },
    'trauma-therapy': {
      summary: {
        slug: 'trauma-therapy',
        num: SHARED_DATA['trauma-therapy'].num,
        title: SHARED_DATA['trauma-therapy'].title,
        eyebrow: SHARED_DATA['trauma-therapy'].eyebrow,
        intro: SHARED_DATA['trauma-therapy'].intro,
        description:
          'Sometimes, difficult experiences from the past can stay with us. They may affect how we feel, how we react to certain situations, or how we connect with other people. Trauma therapy in Miami gives you a safe and private place to talk about these experiences and begin working through them.\n\nTherapy can help you understand what you are feeling, manage difficult emotions, and find healthier ways to cope. Your therapy is based on your needs and what feels comfortable for you.',
        focus: SHARED_DATA['trauma-therapy'].focus,
      },
      detail: {
        slug: 'trauma-therapy',
        locationSlug: 'miami',
        title: SHARED_DATA['trauma-therapy'].title,
        seoTitle: 'Trauma Therapy in Miami, FL | Thrive With Therapy',
        seoDescription:
          'Explore trauma-focused therapy in Miami, FL, to process difficult experiences and develop healthier coping strategies. Contact Thrive With Therapy.',
        seoH1: 'Trauma Therapy in Miami, FL',
        seoKeyword: 'Trauma Therapy in Miami, FL',
        subtitle: SHARED_DATA['trauma-therapy'].subtitle,
        forWhen: SHARED_DATA['trauma-therapy'].forWhen,
        whoItsFor: SHARED_DATA['trauma-therapy'].whoItsFor,
        whatSessionsLookLike: SHARED_DATA['trauma-therapy'].whatSessionsLookLike,
        focusAreas: SHARED_DATA['trauma-therapy'].focusAreas,
        faq: SHARED_DATA['trauma-therapy'].faq,
      },
    },
  },
};

/* ── Helper functions ── */

export function getLocationServices(locationSlug: string): ServiceSummary[] {
  if (locationSlug === 'coral-gables' || locationSlug === 'miami') {
    const locMap = LOCATION_SERVICES[locationSlug as LocationSlug];
    return SERVICE_SLUGS.map((slug) => locMap[slug].summary);
  }
  return [];
}

export function getServiceDetail(
  locationSlug: string,
  serviceSlug: string,
): ServiceDetail | undefined {
  if (locationSlug === 'coral-gables' || locationSlug === 'miami') {
    const locMap = LOCATION_SERVICES[locationSlug as LocationSlug];
    if (serviceSlug in locMap) {
      return locMap[serviceSlug as ServiceSlug].detail;
    }
  }
  return undefined;
}

export function getAllLocationServiceParams(): { location: string; service: string }[] {
  const params: { location: string; service: string }[] = [];
  for (const location of LOCATION_SLUGS) {
    for (const service of SERVICE_SLUGS) {
      params.push({ location, service });
    }
  }
  return params;
}
