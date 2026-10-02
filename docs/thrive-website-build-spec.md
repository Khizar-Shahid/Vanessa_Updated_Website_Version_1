# Thrive Mental Health Solutions — Website Redesign Build Specification

**Client:** Vanessa M. Sierra, LMFT — Thrive Mental Health Solutions
**Live site:** https://www.thrivewiththerapy.org/ (to be replaced)
**Hosting:** Vercel
**Prepared for:** Antigravity build agent

---

## 0. How to use this document

This is the complete build spec. Copy is **final and verbatim** — do not rewrite,
paraphrase, "improve", or SEO-stuff any of it. Where a section says *Copy*, use
exactly those words. Where it says *Direction*, use your judgement within the
constraints given.

Build order: design system → global components → Home → Meet Vanessa →
remaining pages → motion → accessibility/SEO pass.

---

## 1. Current state and what changes

The existing site is a set of static HTML files (`index.html`, `clinic.html`,
`booking.html`, `contact.html`) with a 4-item navigation. It is positioned almost
entirely around **trauma recovery**.

The redesign widens the positioning to individual, couples, parenting/family and
trauma work, expands navigation to 8 tabs, and rebuilds the homepage around new
copy.

**Assets to carry over from the existing site (do not discard):**

| Asset | Current location | New home |
|---|---|---|
| `logo.svg` | site root | Header, footer — use the real file, do not redraw |
| `conflict-into-connection.mp4` | `/videos/` | Insights (Home §6 + Insights page) |
| `vanessa-message.mp4` | `/videos/` | Insights |
| `parents-children-stopping-the-cycle.mp4` | `/videos/` | Insights |
| 3 client testimonials (Lissette, Roy, Michelle) | homepage | Home §8 — **keep wording exactly**, do not rewrite into marketing claims |
| Phone `954-635-0234` | header strip | Footer + Contact page only |
| Email `vanessa@thrivementalhealthsolutions.com` | footer | Footer + Contact page |

**Note on the client's documents:** the content brief spells the client's name
"Vaneesa" in several places. This is a typo. Use **Vanessa** everywhere.

---

## 2. Tech stack

Build as **Next.js (App Router) + TypeScript**, deployed to Vercel.

Rationale — this is not optional preference: the brief requires Insights and the
Resource Library to update automatically ("New content should be added
dynamically so the homepage updates automatically"). Hand-written static HTML
would mean editing the homepage every time she publishes. Store posts and
resources as MDX or JSON in the repo; the homepage reads the latest 3.

- Styling: CSS Modules or Tailwind — your call, but design tokens must be
  defined once as CSS custom properties and used everywhere.
- Fonts: `next/font` with Playfair Display + Nunito Sans. No runtime font
  injection.
- Animation: Framer Motion.
- No CMS, no database, no auth for v1.

### URL structure and redirects

| New route | Replaces |
|---|---|
| `/` | `/index.html` |
| `/meet-vanessa` | — new |
| `/ways-we-work` | — new (absorbs `/clinic.html`) |
| `/ways-we-work/individual-therapy` | — new |
| `/ways-we-work/couples-therapy` | — new |
| `/ways-we-work/parenting-family-therapy` | — new |
| `/ways-we-work/trauma-focused-therapy` | — new |
| `/insights` | — new |
| `/resources` | — new |
| `/consultation` | `/booking.html` |
| `/faq` | — new |
| `/contact` | `/contact.html` |

**Required:** 301 redirects in `next.config.js` from every old `.html` path to
its new route. The site has existing search rankings; losing them is a real cost.

---

## 3. Design system

All values below come from the client's brand guidelines. Do not introduce
colours or typefaces outside this list.

### 3.1 Colour tokens

```css
:root {
  /* brand — from the guidelines deck */
  --sage:        #5EA15B;   /* Sage Green   */
  --salmon:      #E89285;   /* Sweet Salmon */
  --parchment:   #FAF6F1;   /* Parchment    */
  --graphite:    #2A2B2A;   /* Graphite     */

  /* derived working tones (tints of the above — required for contrast) */
  --sage-deep:   #47804A;   /* sage for small text / links on parchment */
  --sage-soft:   #DDEBDB;   /* fills, washes, card backgrounds */
  --salmon-text: #B5533F;   /* salmon for small text — see warning below */
  --salmon-soft: #F7DED8;   /* fills, pills, highlights */
  --ink:         #2A2B2A;   /* body + headings */
  --ink-muted:   #5C605B;   /* secondary text */
  --hairline:    rgba(42,43,42,.13);
}
```

**Accessibility warning — this matters legally for a healthcare site.**
Brand Sage `#5EA15B` and brand Salmon `#E89285` both fail WCAG AA contrast for
body-size text on Parchment (roughly 2.9:1 and 2.2:1 against a 4.5:1
requirement). Therefore:

- Brand Sage and Brand Salmon are for **fills, icons, graphics, and large
  display text only**.
- Any text under 24px uses `--ink`, `--ink-muted`, `--sage-deep`, or
  `--salmon-text`.
- Never place body text directly on a `--sage` or `--salmon` fill unless it is
  white and at least 18px bold.

### 3.2 Colour usage rules

- **Parchment** is the default page background. The site should read warm and
  calm, not green.
- **Sage** is the environmental colour: section washes, the leaf motif, icons,
  the organic line motif, card accents.
- **Salmon** is the accent, used sparingly: small section labels, the active-nav
  underline, one or two emphasis moments per page. It should never dominate.
- **Graphite** is all headings and body text.
- Do not add gradients beyond very low-opacity atmospheric washes.

### 3.3 Typography

- **Playfair Display** — all headings (h1–h3), pull quotes, the wordmark.
  Weights 400/500/600 only. Playfair has no light weight; do not fake one.
- **Nunito Sans** — body, labels, buttons, navigation. Weights 300/400/600/700.

| Role | Font | Size (desktop) | Notes |
|---|---|---|---|
| Page h1 | Playfair 400 | `clamp(34px, 5vw, 58px)` | line-height 1.1, tracking -0.015em |
| Section h2 | Playfair 400 | `clamp(28px, 3.4vw, 40px)` | line-height 1.2 |
| Card h3 | Playfair 500 | 20–22px | |
| Small heading / label | Nunito Sans 600 | 11.5px | uppercase, letter-spacing .18em, `--salmon-text` |
| Body | Nunito Sans 400 | 16.5px | line-height 1.75, max 62ch |
| Small print | Nunito Sans 400 | 13px | |

### 3.4 Spacing, radii, shadows

- Section vertical rhythm: 96px desktop / 64px mobile. Hero gets more.
- Content max-width 1160px; text columns max 62ch.
- Radii: 12px cards, 999px pills, 6px images.
- One shadow only: `0 18px 40px -26px rgba(42,43,42,.45)`. No heavy drop
  shadows, no neumorphism.

### 3.5 Motion principles

- Durations 300–800ms, easing `cubic-bezier(.2,.8,.3,1)`.
- Scroll reveals: fade + 16px rise, staggered 80ms between siblings, triggered
  once at ~20% viewport entry. Never re-trigger on scroll-up.
- **`prefers-reduced-motion: reduce` must disable all of it** — content appears
  in final state, no transforms, no looping animation. Non-negotiable on a
  mental health site.

### 3.6 The organic line motif

A recurring visual language the brief asks for across several sections: a very
thin (1–1.5px) sage line, hand-drawn in feel, that curves behind or around
imagery to suggest "a pattern unfolding". Implement as inline SVG paths animated
with `stroke-dashoffset` on scroll entry. Keep it subtle — it should be noticed
second, not first.

---

## 4. Global components

### 4.1 Top strip

- Single line, centred: `Online + In-Person Therapy | Coral Gables, FL`
- Visually subtle — small type, low-contrast, thin bottom hairline.
- **Remove the phone number and social icons from here.** They live in the
  footer only.

### 4.2 Header

- **Vertical logo lockup on the left**: mark on top, "Thrive Mental Health" with
  "SOLUTIONS" underneath. Use the existing `logo.svg`.
- 8 tabs in one horizontal row on desktop:
  `Home | Meet Vanessa | Ways We Work | Insights | Resource Library | Consultation | FAQ | Contact`
- **Active state:** a hand-drawn, slightly curvy underline in salmon (an SVG
  squiggle, not a straight border). No heavy highlight or filled background.
- Mobile: clean hamburger → full-screen or slide-in panel. Trap focus, close on
  Escape, close on route change.
- Header does not need to be sticky. If it is, it must not obscure content on
  small screens.

### 4.3 Footer

- Vertical logo, short practice description, navigation column, contact column.
- **LinkedIn, Instagram, Facebook icons live here** — small, elegant, clear
  hover state (colour shift + slight lift).
- Phone, email, "Coral Gables, FL (South Florida)".
- Copyright, Privacy Policy, Accessibility Statement.

### 4.4 Buttons

- Primary: sage fill, white text, pill radius, subtle lift on hover.
- Secondary: graphite outline, transparent fill.
- Text link: graphite with salmon underline on hover.
- Minimum tap target 44×44px.

---

## 5. HOME PAGE

### Section 1 — Hero

**Copy**

- h1: `You Don't Have to Figure It All Out Alone.`
- Subline: `A safe, collaborative space to understand what's happening, make sense of the patterns beneath it, and find a way forward.`

**Cards** (5, centred below the subline):

1. Meet Vanessa → `/meet-vanessa`
2. Understand What I'm Experiencing → `/ways-we-work` *(see note)*
3. Explore Ways We Work → `/ways-we-work`
4. Explore Resources & Courses → `/resources`
5. Book a Consultation → `/consultation`

**Layout & behaviour**

- Centred composition, generous vertical space.
- **No buttons in this section.** The brief explicitly removes "Book Appointment"
  and "Contact Us" from the hero and forbids replacements. The cards carry
  navigation.
- Cards are elegant floating cards — soft card surface, hairline border, one
  shadow, gentle lift on hover. Not playing cards, not flat boxes.
- Entry animation: heading, then subline, then cards fading and rising in with
  an 80ms stagger.
- Cards are real `<Link>` elements — keyboard reachable and crawlable.
- Mobile: cards stack vertically full-width.

> **Decision needed from the client.** Card 2 ("Understand What I'm
> Experiencing") has no dedicated page in the brief. Point it at
> `/ways-we-work` for now, or build a short standalone page. Flag this rather
> than inventing content.

**Background**

- Replace the current watercolour/marbled background entirely.
- Soft editorial parchment base with very light atmospheric movement: one or two
  large, heavily blurred, low-opacity sage and salmon fields drifting very slowly
  (40s+ loops), plus optional fine grain at ~5% opacity.
- Calm and quiet. It should add depth, not draw attention.

**Out of scope for this build:** the interactive animated character. See §11.

### Section 2 — A Space to Pause

**Copy**

- Small heading: `A SPACE TO PAUSE`
- h2: `Sometimes, What's Happening on the Surface Isn't the Whole Story.`
- Paragraph: `Therapy can be a space to slow down, notice what's happening beneath the surface, and begin making sense of the patterns that shape how we feel, think, and respond.`

**Layout:** text left, image right. **No button in this section.**

**Image direction:** a calm, cinematic image of a person in a quiet, softly lit
environment. Requirements: natural light, lots of negative space, soft shadows,
neutral/cream surroundings, subtle blue/green tones. Explicitly **not**: a
therapy-room photo, Vanessa's portrait, an obviously clinical setting, an overly
sad expression, or a crying person.

**Animation:** the thin organic sage line curves behind/overlapping the image and
draws itself in on scroll. Gentle fade/slide for text and image.

### Section 3 — Understanding Your Experience

**Copy**

- Small heading: `UNDERSTANDING YOUR EXPERIENCE`
- h2: `You Don't Have to Carry It All By Yourself.`
- Paragraph: `Life can leave us carrying more than we realize—difficult experiences, relationship struggles, emotional patterns, or the feeling that something in our lives is no longer working the way it used to. In therapy, Vanessa creates a collaborative and supportive space to slow down, understand what may be underneath these experiences, and explore how past and present patterns may be affecting the way you think, feel, communicate, and respond. Together, the focus is not simply on identifying what is difficult, but on developing greater awareness and finding healthier ways to move forward.`
- Button: `Explore How We Work` → `/ways-we-work`

**Layout:** image left, text right (mirrors §2 deliberately).
**Image:** calm, emotionally relatable editorial image. Not a generic therapy-room stock photo.
**Animation:** image and text fade and slide in gently on viewport entry.

### Section 4 — Ways We Work

**Copy**

- Small heading: `WAYS WE WORK`
- h2: `There's More Than One Way to Begin.`
- Subline: `Whether you're navigating something within yourself, struggling in a relationship, or trying to create a healthier family dynamic, therapy can offer a space to understand what's happening and work toward meaningful change.`

**Four service cards, in this order:**

**1. Individual Therapy**
- `For when something feels stuck, overwhelming, or difficult to understand on your own.`
- Focus: `Self-worth, emotional patterns, trauma-related experiences, and healthier responses.`
- Button: `Explore Individual Therapy` → `/ways-we-work/individual-therapy`

**2. Couples Therapy**
- `For when you care about each other, but keep getting caught in the same patterns.`
- Focus: `Communication, emotional needs, attachment patterns, and relationship connection.`
- Button: `Explore Couples Therapy` → `/ways-we-work/couples-therapy`

**3. Parenting & Family Therapy**
- `For families navigating conflict, changing roles, and the challenges of raising children.`
- Focus: `Parenting dynamics, developmental stages, family conflict, and healthy authority.`
- Button: `Explore Parenting & Family Therapy` → `/ways-we-work/parenting-family-therapy`

**4. Trauma-Focused Therapy**
- `For when past experiences still affect how you feel, respond, or connect with others today.`
- Focus: `Trauma, childhood experiences, emotional regulation, and patterns shaped by the past.`
- Button: `Explore Trauma-Focused Therapy` → `/ways-we-work/trauma-focused-therapy`

**Layout:** 4 cards in one clean row on desktop; swipe or stack on mobile.
**Animation:** cards fade/slide up one after another.
**Important:** the homepage gives an introduction only. Detailed service and
trauma information belongs on the individual service pages.

### Section 5 — Meet Vanessa

**Copy**

- Small heading: `MEET VANESSA`
- h2: `The Person Behind the Work.`
- Paragraph: `Vanessa M. Sierra is a Licensed Marriage and Family Therapist with more than 20 years of experience working with adults, couples, families, and children. Her work is grounded in listening closely, understanding the patterns behind what clients are experiencing, and creating a supportive space where people can feel understood, safe, and ready to move toward change.`
- Button: `Meet Vanessa` → `/meet-vanessa`

**Layout:** text left, image right.
**Image:** real professional portrait of Vanessa (required asset from client).
**Extra:** add a small handwritten-style line or subtle organic element that
connects visually with the rest of the site.
**Animation:** image and text gently fade/slide in.

### Section 6 — Insights

**Copy**

- Small heading: `INSIGHTS`
- h2: `A Little More to Think About.`
- Subline: `Thoughtful ideas about relationships, emotions, patterns, parenting, and everyday challenges.`
- Button: `Explore All Insights` → `/insights`

**Requirements**

- Show the **3 latest pieces only**, pulled dynamically. Adding a new post must
  update the homepage automatically with no code change.
- A piece can be a blog/article, a video, or Instagram content.
- Seed with the three existing practice videos listed in §1.
- The connected Instagram feed is part of the Insights system — **not** a
  separate main navigation tab.
- Layout: 3 clean editorial cards. Animation: gentle staggered fade/slide.

### Section 7 — Resource Library

**Copy**

- Small heading: `RESOURCE LIBRARY`
- h2: `Explore at Your Own Pace.`
- Subline: `Start with a free resource, or go deeper with guided learning through our courses.`

**Two large side-by-side panels:**

**FREE RESOURCES** — `Guides, worksheets, reflection tools, and practical resources to explore on your own.` → button `Explore Free Resources`

**COURSES** — `Go deeper with structured learning designed around topics that matter in real life.` → button `Explore Courses`

**Direction:** use a book/notebook visual cue. Keep it visually simple and
premium. New resources and courses must be addable through the library data
files without redesigning the homepage.

*(The brief pairs the book cue with the animated guide. The guide is out of scope
— use the book/notebook visual on its own.)*

### Section 8 — What Clients Have Shared

**Copy**

- Small heading: `WHAT CLIENTS HAVE SHARED`
- h2: `A Few Words From Those I've Worked With.`
- Optional button: `Read More`

**Requirements**

- Show 2–3 selected testimonials.
- **Use the approved client wording exactly as it appears on the current site.**
  Do not rewrite, shorten, or turn testimonials into marketing claims. Carry over
  the Lissette, Roy and Michelle testimonials verbatim.
- Horizontal slider/carousel — **not** three large static boxes.
- Animation: soft horizontal movement / fade between testimonials.
- Background: very light warm cream.
- Slider must be keyboard operable and must auto-pause under reduced motion.
- If there aren't enough approved testimonials for a dedicated page, keep this
  homepage-only and omit the "Read More" button.

### Section 9 — Consultation

**Copy**

- Small heading: `READY WHEN YOU ARE`
- h2: `You Don't Have to Have Everything Figured Out Before Reaching Out.`
- Subline: `Start with a conversation about what you're experiencing, what you're looking for, and whether therapy feels like the right next step.`
- Primary button: `Book a Consultation` → `/consultation`
- Secondary link: `Have a Question?` → `/contact`

**Layout:** centred, spacious, minimal.
**Tone:** calm. This is explicitly **not** a hard-sell CTA — no urgency language,
no countdowns, no high-contrast conversion banner.

---

## 6. MEET VANESSA PAGE

This is the second most important page on the site. It should feel editorial and
spacious, not like a CV.

### Section 1 — Hero
- Small heading: `MEET VANESSA`
- h1: `The Person Behind the Work.`
- Subline: `A therapist, a listener, and a believer that the patterns we carry do not have to define the life we create.`
- Layout: text left, professional portrait right.
- **Image treatment:** use Vanessa's photo with the background cut out — no box,
  no frame. Place her cleanly against the page background with a gentle
  animation. (Requires a client-supplied cut-out PNG, or background removal.)
- Animation: very gentle fade-in only. No heavy effects.

### Section 2 — Short Intro
- Small heading: `A LITTLE ABOUT ME`
- h2: `Creating a Space Where People Feel Seen, Safe, and Understood.`
- Paragraph: `For over 20 years, I have worked with adults, couples, families, and children across nonprofit, educational, and private-practice settings. My work is grounded in listening closely to what people are saying, noticing the patterns underneath what they are experiencing, and creating a therapeutic space where they can feel understood without judgment. I believe meaningful change begins when we can make sense of what we have been carrying and begin seeing new possibilities for how we relate to ourselves and others.`
- Keep spacious and editorial. Optional: a subtle organic line running through
  the section.

### Section 3 — My Story
**Treat this as a major section, not a small paragraph.**

- Small heading: `MY STORY`
- h2: `I Learned Early That Feeling Safe Can Change Everything.`
- Paragraph 1: `As a shy and reserved child, I often found comfort in my imagination and was deeply sensitive to the feelings of others. As I grew, I became more observant of people and the spaces around me, paying close attention before deciding where I felt safe enough to connect.`
- Paragraph 2: `That sensitivity became especially meaningful in my first therapeutic work with foster children. I cared deeply about their stories, but over time I learned an important lesson: my role was not to rescue them. It was to help restore a sense of dignity, safety, and possibility - to create a space where they could discover that what they had experienced did not have to define who they were.`
- Paragraph 3: `That experience shaped the way I continue to see therapy today. I do not believe people need to be rescued. I believe they need a safe and guided space to understand what they have lived through, recognize their strengths, discover new ways of thinking and responding, and reconnect with the parts of themselves that deserve to be heard.`
- Layout: large text blocks plus one meaningful editorial image.
- Image: symbolic or quiet childhood-inspired imagery — **not** a literal
  childhood photo.
- Animation: image reveals gently on scroll.

### Section 4 — Why Couples Work Matters to Me
- Small heading: `A SHIFT IN PERSPECTIVE`
- h2: `Sometimes What Looks Like Distance Still Has Connection Underneath.`
- Paragraph 1: `Early in my career, I expected my work to focus mainly on children and families. Working with my first couple changed that. I began to see how much can become fragmented in a relationship without people realizing it, and how meaningful it can be to help two people slow down, understand what is happening between them, and discover what may still be underneath the hurt.`
- Paragraph 2: `Over the years, I have worked with couples who arrived feeling as though separation was the only option. With time, professional guidance, and clinical support, some began to see their relationship differently - to understand the patterns between them, create a new narrative, and reconnect with what still mattered to them.`
- **Signature visual:** two subtle abstract lines that begin apart and gradually
  move closer together as the visitor scrolls. This is another expression of the
  site's pattern/connection language — give it real space.

### Section 5 — How I Work
- Small heading: `HOW I WORK`
- h2: `I Start by Listening.`
- Paragraph: `I listen carefully to what clients say- and to what may be communicated through body language, emotional expression, communication style, beliefs, relationships, and patterns of response. I also pay attention to a person's history, support systems, self-awareness, readiness for change, and the connection between what they say they want from therapy and what may be keeping them stuck.`

Then four numbered steps with distinctive visual treatment:

| # | Title | Body |
|---|---|---|
| 01 | Listen | Understand the story, the present experience, and the patterns within it. |
| 02 | Notice | Explore emotions, beliefs, triggers, relationships, and responses. |
| 03 | Understand | Connect what is happening today with the experiences and patterns that may be influencing it. |
| 04 | Move Forward | Build awareness and practice healthier ways of responding, communicating, and relating. |

Direction: the brief asks for "aesthetic and creative visuals" here. Suggest a
connecting sage line threading through the four steps as they reveal in
sequence, tying into the organic-line motif. Avoid generic numbered icon boxes.

### Section 6 — My Approach
- Small heading: `MY APPROACH`
- h2: `Different People Need Different Paths.`
- Paragraph: `My work is collaborative and individualized. Depending on the person, the concern, and the goals of therapy, I may draw from approaches including EMDR, interpersonal therapy, narrative therapy, strength-based therapy, ACT, somatic and trauma-focused approaches, art therapy, and the Gottman Method for couples. Exercises such as grounding, breath work, movement, art, music, and narrative writing may also be used when they fit the work and the client's needs.`
- Layout: clean visual list or elegant expandable items.
- **Do not build a large certification wall.**

### Section 7 — Experience & Training
- Small heading: `EXPERIENCE & TRAINING`
- h2: `More Than 20 Years of Experience.`
- Content:
  - Licensed Marriage and Family Therapist
  - 20+ years of experience
  - Experience across nonprofit, educational, and private-practice settings
  - Work with adults, couples, families, and children
  - Training/certification includes: EMDR; Trauma-Focused CBT; ACT; Esther Perel's *Transformative Approach to Couples Therapy in Action*; The Gottman Method; Nurturing Parenting Skills
  - Additional advanced EMDR training related to chronic medical illness, dissociative disorders, sexual abuse, and children/youth therapies
  - Has presented trainings and workshops on mental-health topics for clinicians and clients/families
  - Florida Chapter Director for A Home Within
- **Build this from a data file** (e.g. `content/credentials.json`) so credentials
  can be updated without touching markup.

### Section 8 — Core Belief
**A strong branded moment. Give it the most visual weight on the page.**

- Small heading: `WHAT I BELIEVE`
- h2: `Your Past May Shape You. It Does Not Have to Define You.`
- Paragraph: `No one owns our identities. We do not have to remain chained to the voices of the past. I believe there is always room to understand what we have inherited, question what no longer serves us, and move toward a life that feels more aligned with who we are becoming.`
- Closing line: `There is an open door we have the right to walk through. Let's walk there together.`
- Visual: very minimal. Large Playfair typography, generous whitespace, no
  imagery competing with the words.

### Section 9 — Final CTA
- Small heading: `READY TO BEGIN?`
- h2: `You Don't Have to Have the Right Words Yet.`
- Subline: `Start with a conversation about what you're experiencing and what you hope to understand or change.`
- Button: `Book a Consultation` → `/consultation`
- Secondary link: `Explore Ways We Work` → `/ways-we-work`
- Keep simple and calm.

---

## 7. Remaining pages

The brief does not supply full copy for these. **Build the structure and layout;
do not invent clinical or biographical copy.** Use clearly-marked placeholder
text and flag it for the client to fill.

### `/ways-we-work`
Hub page. Intro using the §4 copy, then the four services expanded, each linking
to its own page. Detailed trauma/service content lives here and on the child
pages, not on the homepage.

### `/ways-we-work/[service]` × 4
Template page per service: hero (service name + the "For when…" line), focus
areas, what sessions look like, who it's for, FAQ block, CTA to consultation.
Placeholder body copy, consistent template.

### `/insights`
Index of all posts/videos/Instagram content, newest first, filterable by type.
Individual post route `/insights/[slug]` rendered from MDX.

### `/resources`
Two sections mirroring Home §7: Free Resources and Courses. Card grid per
category, driven by a data file.

### `/consultation`
Booking page. Calm layout, short explanation of what a consultation involves,
then the booking widget.
> **Confirm with the client:** if the Cal.com booking integration is the chosen
> route, embed it here and retire `booking.html`. Otherwise keep the existing
> booking method behind this route. Do not build two competing booking paths.

### `/faq`
Accordion. Use real questions from the client — fees, insurance, session length,
what a first session involves, how online sessions work. Mark as placeholder
until supplied. Add `FAQPage` structured data once real content lands.

### `/contact`
Form (name, email, message), phone, email, location, office hours, map optional.
Form must have proper labels, inline validation, and a real success state.
> **Privacy note:** this is a therapy practice. The contact form must not
> promise confidentiality it can't deliver. Include a short line advising against
> sending sensitive clinical information through the form, and confirm where
> submissions are routed before launch.

---

## 8. Accessibility requirements

Treat these as build requirements, not a final polish pass.

1. WCAG 2.1 AA contrast throughout — see the §3.1 warning about brand colours.
2. Full keyboard operability: nav, hamburger, carousel, accordion, all cards.
   Visible focus rings everywhere (never `outline: none` without a replacement).
3. `prefers-reduced-motion: reduce` disables all transitions, scroll reveals,
   drifting backgrounds, and carousel auto-advance.
4. Semantic landmarks (`header`, `nav`, `main`, `footer`), one `h1` per page,
   no skipped heading levels.
5. Descriptive `alt` text on every meaningful image; `alt=""` on decorative
   SVG/line motifs, plus `aria-hidden="true"`.
6. Skip-to-content link as the first focusable element.
7. Carousel and accordion built with correct ARIA roles and states.
8. Videos need captions before launch.

---

## 9. Performance & SEO

- Targets: LCP under 2.5s, CLS under 0.1, Lighthouse 90+ on all four categories.
- Images via `next/image`, WebP/AVIF, explicit dimensions, lazy-load below the
  fold. The hero image is `priority`.
- Background animation must not block or delay the LCP element.
- Unique `<title>` and meta description per page.
- **Rewrite the current meta description** — it is trauma-only and no longer
  matches the positioning.
- `LocalBusiness` / `MedicalBusiness` structured data with name, address (Coral
  Gables, FL), phone, and hours. `Person` schema on Meet Vanessa.
- `sitemap.xml` and `robots.txt`.
- Open Graph and Twitter card images per page.
- All 301 redirects from §2 in place and tested before the DNS cutover.

---

## 10. Assets needed from the client

Flag these early — the build will stall without them.

1. Professional portrait of Vanessa, **background removed** (PNG with alpha) for
   the Meet Vanessa hero.
2. A second portrait for Home §5.
3. Editorial images for Home §2, §3 and Meet Vanessa §3, matching the direction
   in each section. Stock is acceptable if it meets the constraints.
4. Real FAQ content.
5. Confirmation of which testimonials are approved for continued use.
6. Free resources and course content for `/resources`.
7. Instagram account handle/API access for the Insights feed.
8. Confirmation of the booking method (see §7).

---

## 11. Explicitly out of scope for this build

The **interactive animated character/guide** described in the content brief is
**not being implemented in this phase**. Ignore every reference to it, including:

- the animated guide in the hero,
- the card-shuffle gesture,
- the character appearing on internal pages,
- the character in Home §7 (Resource Library) and §9 (Consultation),
- the character in Meet Vanessa §9.

Build those sections without it, as specified above.

**But leave the door open.** Keep the hero's 5 cards as a discrete, self-contained
component, and don't hard-code hero content into page-level markup. The character
layer is designed to sit on top of this structure later without a rebuild.

---

## 12. Acceptance checklist

- [ ] All 8 nav tabs present, active state is a hand-drawn salmon squiggle
- [ ] Top strip contains only the location line — no phone, no social icons
- [ ] Social icons appear in the footer only, with hover states
- [ ] Vertical logo lockup, left-aligned in header, using the real `logo.svg`
- [ ] Hero has no buttons; 5 cards present and keyboard navigable
- [ ] Every string on Home and Meet Vanessa matches this document verbatim
- [ ] Testimonials carried over word-for-word from the existing site
- [ ] 3 existing practice videos live in Insights
- [ ] Insights and Resource Library update from data files, no code change needed
- [ ] All 301 redirects from old `.html` URLs resolve correctly
- [ ] `prefers-reduced-motion` verified — all motion stops
- [ ] Keyboard-only pass completed across every page and component
- [ ] Contrast audit passed, including all sage and salmon text
- [ ] Lighthouse 90+ across all four categories on Home and Meet Vanessa
- [ ] Mobile pass at 375px — no horizontal scroll anywhere
- [ ] No placeholder copy left unflagged
