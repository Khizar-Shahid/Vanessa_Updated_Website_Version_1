/* ─────────────────────────────────────────────
 * content/services.ts
 * Single source of truth for therapy-service data.
 * Consumed by:
 *   • app/services/page.tsx        (listing cards)
 *   • app/services/[service]/…     (detail + metadata)
 *   • app/sitemap.ts               (dynamic URL list)
 * ───────────────────────────────────────────── */

export interface ServiceSummary {
  slug: string;
  num: string;
  title: string;
  eyebrow: string;
  intro: string;
  description: string;
  focus: string[];
}

export interface ServiceDetail {
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

/* ── Listing-card data (services hub page) ── */

export const SERVICE_LIST: ServiceSummary[] = [
  {
    slug: 'individual-therapy-coral-gables',
    num: '01',
    title: 'Individual Therapy',
    eyebrow: 'One-on-One Support',
    intro: 'For when something feels stuck, overwhelming, or difficult to understand on your own.',
    description:
      'Individual sessions create a collaborative, confidential space to unpack recurring life patterns, overcome anxiety and depression, heal from burnout, and strengthen your relationship with yourself.',
    focus: [
      'Self-worth and identity',
      'Emotional regulation and nervous system calm',
      'Life transitions and personal boundaries',
      'Healing internalized criticism',
    ],
  },
  {
    slug: 'couples-therapy-coral-gables',
    num: '02',
    title: 'Couples Therapy',
    eyebrow: 'Relational Healing',
    intro: 'For when you care about each other, but keep getting caught in the same patterns.',
    description:
      'Using evidence-based approaches including the Gottman Method and attachment theory, we help partners identify repetitive conflict cycles, communicate unmet needs safely, and restore emotional intimacy.',
    focus: [
      'De-escalating circular arguments',
      'Rebuilding trust and emotional safety',
      'Attachment patterns and vulnerability',
      'Navigating major relationship transitions',
    ],
  },
  {
    slug: 'parenting-family-therapy-coral-gables',
    num: '03',
    title: 'Parenting & Family Therapy',
    eyebrow: 'Generational Growth',
    intro: 'For families navigating conflict, changing roles, and the challenges of raising children.',
    description:
      'Family systems work focuses on the emotional dynamics connecting parents and children. We help parents lead with calm authority while establishing warm, secure bonds that stop generational trauma.',
    focus: [
      'Parent-child connection & communication',
      'Developmental stages and emotional outbursts',
      'Healthy boundaries and cooperative authority',
      'Co-parenting and blended family dynamics',
    ],
  },
  {
    slug: 'trauma-therapy-coral-gables',
    num: '04',
    title: 'Trauma-Focused Therapy',
    eyebrow: 'Somatic & EMDR',
    intro: 'For when past experiences still affect how you feel, respond, or connect with others today.',
    description:
      'Specialized, trauma-informed care integrating EMDR (Eye Movement Desensitization and Reprocessing) and Somatic techniques to resolve painful memories stored in the nervous system without requiring re-traumatization.',
    focus: [
      'Single-incident and complex developmental trauma',
      'Nervous system hyperarousal and freeze responses',
      'Somatic release of stored physical tension',
      'Cultivating deep, lasting internal safety',
    ],
  },
];

/* ── Detail-page data (dynamic [service] route) ── */

export const SERVICE_MAP: Record<string, ServiceDetail> = {
  'individual-therapy-coral-gables': {
    title: 'Individual Therapy',
    seoTitle: 'Individual Therapy in Coral Gables, FL | Thrive With Therapy',
    seoDescription: 'Get personalized individual therapy in Coral Gables, FL. Explore support for emotional challenges, life changes, anxiety, and personal growth.',
    seoH1: 'Individual Therapy in Coral Gables, FL',
    seoKeyword: 'Individual Therapy in Coral Gables',
    subtitle: 'One-on-One Collaborative Care',
    forWhen: 'For when something feels stuck, overwhelming, or difficult to understand on your own.',
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
        a: 'Every person\u2019s journey is unique. Some clients find clarity and symptom relief in 8\u201312 sessions, while others choose longer-term depth work to address lifelong patterns.',
      },
      {
        q: 'Do you offer online or in-person sessions?',
        a: 'We offer both secure HIPAA-compliant telehealth throughout Florida and in-person sessions at our Coral Gables office.',
      },
    ],
  },
  'couples-therapy-coral-gables': {
    title: 'Couples Therapy',
    seoTitle: 'Couples Therapy in Coral Gables, FL | Thrive With Therapy',
    seoDescription: 'Improve communication and strengthen your relationship with couples therapy in Coral Gables, FL. Get a safe and supportive space to work through challenges.',
    seoH1: 'Couples Therapy in Coral Gables, FL',
    seoKeyword: 'Couples Therapy in Coral Gables',
    subtitle: 'Relational Reconnection & Repair',
    forWhen: 'For when you care about each other, but keep getting caught in the same patterns.',
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
  'parenting-family-therapy-coral-gables': {
    title: 'Parenting & Family Therapy',
    seoTitle: 'Parenting & Family Therapy in Coral Gables, FL | Thrive with Therapy',
    seoDescription: 'Get compassionate parenting and family therapy in Coral Gables, FL. Thrive with Therapy helps families improve communication, relationships, and emotional well-being.',
    seoH1: 'Parenting & Family Therapy in Coral Gables, FL',
    seoKeyword: 'Parenting and Family Therapy in Coral Gables',
    subtitle: 'Strengthening Family Bonds & Authority',
    forWhen: 'For families navigating conflict, changing roles, and the challenges of raising children.',
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
  'trauma-therapy-coral-gables': {
    title: 'Trauma-Focused Therapy',
    seoTitle: 'Trauma Therapy in Coral Gables, FL | Thrive With Therapy',
    seoDescription: 'Find compassionate trauma therapy in Coral Gables, FL. Get professional support to process difficult experiences and build healthy coping skills.',
    seoH1: 'Trauma Therapy in Coral Gables, FL',
    seoKeyword: 'Trauma Therapy in Coral Gables',
    subtitle: 'EMDR & Somatic Healing',
    forWhen: 'For when past experiences still affect how you feel, respond, or connect with others today.',
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

/* ── Convenience exports ── */

/** All service slugs — used by sitemap and generateStaticParams */
export const SERVICE_SLUGS = Object.keys(SERVICE_MAP);
