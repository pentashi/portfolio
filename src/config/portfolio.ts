/* ============================================================================
 *  portfolio.ts — THE ONE FILE YOU EDIT
 * ----------------------------------------------------------------------------
 *  Everything a visitor reads on this site is defined below. Fork the repo,
 *  change the values in this file, drop in your own images/resume, and you have
 *  your own portfolio — no need to touch the components.
 *
 *  Sections, top to bottom:
 *    1. site        → browser tab title, meta description, brand name, logo
 *    2. person      → your name, role, bio, skills, location, resume
 *    3. social      → GitHub / X / LinkedIn / email links
 *    4. hero        → the animated intro (terminal, diagram, quote)
 *    5. projects    → "Selected Work" cards
 *    6. essays      → "Technical Writing" gallery
 *    7. testimonials→ "Peer Signal" quotes
 *    8. nav         → header / footer links
 *    9. themes      → color themes the in-app tour can switch between
 *
 *  Tip: the in-app tour (bottom-right "Customize" button) walks through each of
 *  these live, lets you switch the site theme, and tells you which key edits what.
 * ========================================================================== */

/* ── 1. Site / SEO ─────────────────────────────────────────────────────────
 * Shown in the browser tab and by search engines & social cards. */
export const site = {
  /** Short brand shown in the header & footer (e.g. a handle or initials). */
  brand: 'mbe',
  /** <title> tag. */
  title: 'Mbongwe Brandon Egbe — Software Engineer',
  /** <meta name="description">. Keep it under ~160 characters. */
  description:
    'Software engineer in Dubai building production backend systems and cloud-native applications with NestJS, Next.js, TypeScript and Google Cloud.',
  /** Absolute URL the site is deployed at — used for canonical + social cards. */
  url: 'https://mbongwe-brandon.vercel.app',
  /** Path (in /public) to the logo used in the header, footer and favicon. */
  logo: '/assets/images/app_logo.png',
  /** Path (in /public) to the social share image (1200×630 works best). */
  ogImage: '/assets/images/app_logo.png',
};

/* ── 2. Person ─────────────────────────────────────────────────────────────
 * Who you are. Drives the hero "name spine", header, and footer. */
export const person = {
  firstName: 'Brandon',
  lastName: 'Egbe',
  /** The small eyebrow above your name (your title / role). */
  role: 'Software Engineer',
  /** One or two sentences under your name in the hero. */
  bio: 'I build production backend systems and cloud-native applications — event-driven NestJS APIs, PostgreSQL data models, and GCP infrastructure. Delivered systems across logistics, fintech and cross-border trade for international clients.',
  /** City, Country — shown next to the availability dot. */
  location: 'Dubai, UAE',
  /** Short availability line (set to '' to hide the green pulse + text). */
  availability: 'Open to full-stack & backend roles',
  /** Path (in /public) to your résumé PDF. */
  resumeUrl: 'assets/resume/resume.pdf',
  /** Skill pills under your bio. Add/remove freely. */
  skills: [
    'NestJS',
    'Next.js',
    'TypeScript',
    'PostgreSQL',
    'Google Cloud (ACE)',
    'Docker',
    'Terraform',
    'CI/CD',
  ],
};

/* ── 3. Social links ───────────────────────────────────────────────────────
 * `githubUsername` also powers the live contribution heatmap in "Peer Signal".
 * Leave any URL as '' to hide that icon. */
export const social = {
  githubUsername: 'pentashi',
  github: 'https://github.com/pentashi',
  twitter: '',
  linkedin: 'https://www.linkedin.com/in/mbongwe-brandon-egbe/',
  email: 'mbongweegbe@gmail.com',
};

/* ── 4. Hero ───────────────────────────────────────────────────────────────
 * The scroll-through intro. Three "vignettes" tell a mini story:
 *   0) a terminal (your recent commits)
 *   1) an architecture diagram (something you built)
 *   2) a peer quote
 * All of the *text* lives here; the animation lives in HeroSection.tsx. */
export const hero = {
  /** Label shown in the terminal window's title bar. */
  terminalTitle: `~/cargolink — zsh`,
  /** The prompt line, e.g. `~/you`. */
  terminalPrompt: `~/cargolink`,
  /** The command that appears to be typed. */
  terminalCommand: 'git log --oneline -5',
  /** Fake `git log` output. Each string = one commit line. */
  terminalCommits: [
    'f41c908 feat: stream GPS state updates over Socket.IO rooms',
    '9ab3d17 perf: batch position writes — 1,200 updates/min sustained',
    '2c7e550 feat: RBAC guards for carrier, shipper and admin roles',
    '86d1fa4 refactor: move shipment events onto the event bus',
    'b0592e3 chore: Cloud Build pipeline + containerised deploy',
  ],

  /** The architecture diagram (vignette 2). Nodes + arrows are drawn as SVG. */
  diagram: {
    label: 'arch // cargolink real-time tracking',
    caption: 'Event-driven NestJS core sustaining 1,200+ GPS state updates per minute.',
    // x/y are SVG coordinates in a 520×280 viewbox.
    nodes: [
      { x: 30, y: 110, label: 'GPS Units', sub: 'fleet' },
      { x: 210, y: 50, label: 'NestJS API', sub: 'event bus' },
      { x: 210, y: 170, label: 'PostgreSQL', sub: 'TypeORM' },
      { x: 390, y: 50, label: 'Socket.IO', sub: 'live rooms' },
      { x: 390, y: 170, label: 'Analytics', sub: 'reporting' },
    ],
    arrows: [
      { d: 'M 130 132 C 170 132 170 72 210 72', delay: '0.6s' },
      { d: 'M 130 132 C 170 132 170 192 210 192', delay: '0.8s' },
      { d: 'M 310 72 L 390 72', delay: '1.0s' },
      { d: 'M 310 192 L 390 192', delay: '1.2s' },
      { d: 'M 260 94 L 260 170', delay: '1.4s' },
    ],
    annotations: [
      { x: 155, y: 100, text: 'ingest', delay: '1.2s' },
      { x: 155, y: 200, text: 'persist', delay: '1.3s' },
      { x: 330, y: 65, text: 'push', delay: '1.4s' },
      { x: 330, y: 185, text: 'query', delay: '1.5s' },
    ],
  },

  /** The line that closes the hero (vignette 3). */
  quote: {
    text: 'I care about software that survives contact with real users and real cloud bills — cost-aware, secure, and built to scale.',
    name: 'Brandon Egbe',
    title: 'Software Engineer · Dubai',
    /** Optional avatar URL (leave '' to hide the photo). */
    avatar: '',
  },
};

/* ── 5. Projects ("Selected Work") ─────────────────────────────────────────
 * Each project is a full-width row. `embed` is the decorative demo shown beside
 * the text — a code snippet, a CLI transcript, or a metrics card. The visuals
 * live in ProjectSpotlight.tsx; the content is all here. */
export type ProjectEmbed =
  | { kind: 'code'; filename: string; code: string }
  | { kind: 'cli'; title: string; lines: { prompt?: boolean; text: string }[] }
  | {
      kind: 'metrics';
      label: string;
      status: string;
      note: string;
      metrics: { label: string; value: string; note: string }[];
    };

export interface Project {
  id: string;
  number: string; // display index, e.g. '01'
  title: string;
  tagline: string;
  tags: string[];
  annotation: string; // first-person story; blank line = new paragraph
  year: string;
  embed: ProjectEmbed;
  repoUrl: string;
  liveUrl?: string;
  reversed?: boolean; // flip the row layout
}

export const projects: Project[] = [
  {
    id: 'cargolink',
    number: '01',
    title: 'CargoLink — Logistics Backend & Real-Time Tracking',
    tagline:
      'Production backend for a logistics platform: order management, live shipment tracking, analytics, and role-based access.',
    tags: ['NestJS', 'PostgreSQL', 'Socket.IO', 'TypeScript'],
    annotation: `Freight operators lose money to blind spots — a truck goes quiet and nobody knows whether it is stuck at a border or three hours from the depot. CargoLink closes that gap.

The API is event-driven: GPS units push position updates through the event bus, which fans them out to Socket.IO rooms for live dashboards while batching writes to PostgreSQL. It sustains 1,200+ state updates per minute with sub-second synchronisation, behind JWT auth and role-based access for shippers, carriers and admins.`,
    year: '2025',
    embed: {
      kind: 'code',
      filename: 'tracking.gateway.ts',
      code: `// Fans GPS state changes out to every client watching a shipment
@WebSocketGateway({ namespace: '/tracking' })
export class TrackingGateway {
  @SubscribeMessage('shipment:watch')
  watch(@ConnectedSocket() client: Socket, @MessageBody() id: string) {
    return client.join(\`shipment:\${id}\`);
  }

  @OnEvent('position.updated')
  broadcast(event: PositionUpdated) {
    // batched upstream — one emit per shipment, not per ping
    this.server
      .to(\`shipment:\${event.shipmentId}\`)
      .emit('position', event.snapshot());
  }
}`,
    },
    repoUrl: 'https://github.com/pentashi',
    liveUrl: '',
    reversed: false,
  },
  {
    id: 'autopartage',
    number: '02',
    title: 'AutoPartage Gabon — Fleet Analytics Engine',
    tagline:
      'Multi-tenant fleet and rental platform handling complex rent-to-own lifecycles, with a live analytics dashboard.',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'GCP', 'Docker'],
    annotation: `Rent-to-own fleets are a state-machine problem disguised as a CRUD app: a vehicle can be reserved, on contract, in arrears, in maintenance, and part-owned by the driver all at once.

I modelled the lifecycle explicitly and drove the UI from that state machine, which killed a class of race conditions where two operators could act on the same vehicle. Reporting queries were the other half of the work — indexing and query rewrites cut reporting latency by 40%. Ships containerised, with automated health checks and GitHub Actions deploys.`,
    year: '2025',
    embed: {
      kind: 'metrics',
      label: 'autopartage // fleet',
      status: 'in production',
      note: 'Numbers from the operator dashboard after the reporting rewrite.',
      metrics: [
        { label: 'Reporting latency', value: '-40%', note: 'after query rewrite' },
        { label: 'Tenants', value: 'multi', note: 'isolated per operator' },
        { label: 'Lifecycle states', value: '9', note: 'rent-to-own' },
        { label: 'Uptime checks', value: 'auto', note: 'serverless probes' },
      ],
    },
    repoUrl: 'https://github.com/pentashi',
    liveUrl: '',
    reversed: true,
  },
  {
    id: 'receiptvault',
    number: '03',
    title: 'ReceiptVault — Expense Management Platform',
    tagline:
      'Cloud-native fintech SaaS on GCP that turns a photographed receipt into structured, auditable expense data.',
    tags: ['GCP', 'Document AI', 'Python', 'React', 'Cloud Build'],
    annotation: `UAE finance teams still key receipts in by hand. ReceiptVault photographs the problem away: uploads land in Google Cloud Storage, Document AI's expense processor extracts merchant, line items and totals, and the structured result is reconciled against the relational record.

The pipeline is asynchronous end to end, containerised with Docker, and deployed through Cloud Build to serverless runtimes so it scales horizontally without a standing bill.`,
    year: '2026',
    embed: {
      kind: 'cli',
      title: 'cloud build — deploy',
      lines: [
        { prompt: true, text: 'gcloud builds submit --config cloudbuild.yaml' },
        { text: '⠸ Building receiptvault-api:sha-4f10c2e ...' },
        { text: '✓ Image pushed to Artifact Registry' },
        { text: '' },
        { text: '┌─ Pipeline ───────────────────────────┐' },
        { text: '│  ocr        Document AI (expense)    │' },
        { text: '│  storage    GCS · signed URLs        │' },
        { text: '│  db         PostgreSQL · audited     │' },
        { text: '└──────────────────────────────────────┘' },
        { text: '' },
        { text: '  upload → parse     1.4s   ████░░░░░░' },
        { text: '  parse  → persist   0.3s   █░░░░░░░░░' },
        { text: '  deploy to Cloud Run       ✓ live' },
      ],
    },
    repoUrl: 'https://github.com/pentashi',
    liveUrl: '',
    reversed: false,
  },
  {
    id: 'cemac-ledger',
    number: '04',
    title: 'CEMAC Ledger — OHADA Accounting Backend',
    tagline:
      'Modular accounting engine for CEMAC-compliant bookkeeping, built for auditability from the first commit.',
    tags: ['NestJS', 'TypeORM', 'PostgreSQL', 'JWT'],
    annotation: `Regional accounting rules are unforgiving: entries must balance, nothing may be silently edited, and an auditor has to be able to reconstruct who did what.

So the domain is split into modules — invoices, partners, accounting, reporting, audit, notifications — with append-only audit logging across logins, CRUD and exports, and RBAC separating admin from ordinary users. The API is documented with Swagger so the client's own team can extend it.`,
    year: '2025',
    embed: {
      kind: 'code',
      filename: 'journal-entry.service.ts',
      code: `// An entry either balances and is recorded, or nothing is written
async record(dto: CreateEntryDto, actor: User) {
  const debit = sum(dto.lines, 'debit');
  const credit = sum(dto.lines, 'credit');

  if (debit !== credit) {
    throw new UnbalancedEntryError(debit, credit);
  }

  return this.db.transaction(async (tx) => {
    const entry = await tx.save(JournalEntry.from(dto));
    await this.audit.log(tx, { action: 'entry.created', actor, entry });
    return entry;
  });
}`,
    },
    repoUrl: 'https://github.com/pentashi',
    liveUrl: '',
    reversed: true,
  },
  {
    id: 'nannylink',
    number: '05',
    title: 'NannyLink — Caregiver Matching Platform',
    tagline:
      'Pay-per-unlock caregiver marketplace: parents pay once to reveal a verified caregiver’s contact details.',
    tags: ['NestJS', 'Next.js', 'Stripe', 'PostgreSQL', 'GCP'],
    annotation: `Marketplaces leak: introduce two parties for free and they transact off-platform. NannyLink charges at the moment of value instead — a single unlock per caregiver, settled through Stripe webhooks so the reveal only happens after the payment is confirmed.

Parents and caregivers are different products sharing one API, so auth is dual-role JWT with separate onboarding paths. Caregivers upload intro videos through GCS signed URLs, and everything lands in an admin verification queue before it is visible.`,
    year: '2026',
    embed: {
      kind: 'metrics',
      label: 'nannylink // unlocks',
      status: 'private beta',
      note: 'Payment-gated reveal: nothing is exposed before the webhook lands.',
      metrics: [
        { label: 'Unlock model', value: '1×', note: 'per caregiver' },
        { label: 'Payments', value: 'Stripe', note: 'webhook-confirmed' },
        { label: 'Roles', value: '2', note: 'parent · caregiver' },
        { label: 'Media', value: 'GCS', note: 'signed URLs' },
      ],
    },
    repoUrl: 'https://github.com/pentashi',
    liveUrl: '',
    reversed: false,
  },
  {
    id: 'ai-fitness-coach',
    number: '06',
    title: 'AI Fitness Coach',
    tagline:
      'Personal project: generates personalised workout plans from a Groq-hosted LLM, with a React front end on Firebase.',
    tags: ['React', 'Firebase', 'Groq', 'TailwindCSS'],
    annotation: `An early exploration of putting an LLM behind a product surface rather than a chat box.

The interesting part was not the prompt — it was constraining the model's output into a schema the UI could render, and handling the cases where it refuses to. Built to learn real-time AI API integration patterns; still the project I point at when explaining why structured output matters.`,
    year: '2025',
    embed: {
      kind: 'cli',
      title: 'plan generator',
      lines: [
        { prompt: true, text: 'coach plan --goal strength --days 4' },
        { text: '⠸ Calling Groq (llama-3.1-70b) ...' },
        { text: '✓ Plan validated against schema' },
        { text: '' },
        { text: '  mon   push     bench · ohp · dips' },
        { text: '  tue   pull     row · chin-up · curl' },
        { text: '  thu   legs     squat · rdl · calf' },
        { text: '  sat   full     deadlift · press · core' },
      ],
    },
    repoUrl: 'https://github.com/pentashi',
    liveUrl: '',
    reversed: true,
  },
];

/* ── 6. Essays ("Technical Writing") ───────────────────────────────────────
 * The rotated card grid. Empty by default — add entries here and re-add
 * <EssayGallery /> to src/app/page.tsx to show the section.
 * `rotate`/`translateY` are Tailwind classes that give each card its tilt. */
export interface Essay {
  id: number;
  title: string;
  excerpt: string;
  tags: string[];
  readTime: string;
  date: string;
  href: string; // where the card links to
  rotate: string;
  translateY: string;
  color: string; // accent bar color
}

/** Heading + intro for the essays section. */
export const essaysMeta = {
  eyebrow: 'Technical Writing',
  heading: 'Essays from the experience',
  intro:
    'Long-form writing on backend architecture, cloud cost, and the craft of building software that lasts.',
  /** Text + link for the "read all" footer (set label to '' to hide). */
  allLabel: '',
  allHref: '#',
};

export const essays: Essay[] = [];

/* ── 7. Testimonials ("Peer Signal") ───────────────────────────────────────
 * The first entry fills the big dark card; the rest stack beside it. Leave the
 * array empty to show only the live GitHub activity panel. */
export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  linkedin: string;
  avatar: string; // URL or '' to hide
  context: string; // small tag, e.g. "After a conference talk"
}

export const testimonials: Testimonial[] = [];

/** Heading for the section (shown above the testimonials / GitHub panel). */
export const peerMeta = {
  eyebrow: 'Signal',
  heading: 'Proof of work',
};

/* ── 8. Navigation ─────────────────────────────────────────────────────────
 * Header + footer links. `href` values starting with `#` scroll to a section. */
export const nav = {
  links: [
    { label: 'Work', href: '#work' },
    { label: 'Activity', href: '#peer' },
  ],
};

/* ── 9. Themes ─────────────────────────────────────────────────────────────
 * Color themes the visitor can switch between from the in-app tour's Theme
 * step. Each theme's colors live in src/styles/tailwind.css under
 * `:root[data-theme="<key>"]`; the `swatch` values here are just what the
 * picker shows (background · text · accent).
 *
 * There is no forced default — the site loads with the base look (styles/
 * tailwind.css `:root`) until a visitor picks a theme, and that choice is then
 * remembered. Add a theme: add a `swatch` entry here AND a matching
 * `[data-theme="…"]` block in tailwind.css. */
export interface Theme {
  key: string;
  label: string;
  /** [background, text, accent] — shown as the swatch in the tour. */
  swatch: [string, string, string];
}

export const themes: Theme[] = [
  { key: 'parchment', label: 'Parchment', swatch: ['#f5f0eb', '#3b3b3b', '#c2785c'] },
  { key: 'slate', label: 'Slate', swatch: ['#edf0f4', '#26313b', '#3e7ca6'] },
  { key: 'sage', label: 'Sage', swatch: ['#eef1e7', '#2e3a2b', '#5b8c5a'] },
  { key: 'ocean', label: 'Ocean', swatch: ['#eaf2f2', '#1e3838', '#2e8c8c'] },
  { key: 'rose', label: 'Rose', swatch: ['#fbf0f1', '#3e2b2e', '#c25c7a'] },
  { key: 'dusk', label: 'Dusk', swatch: ['#f1eff7', '#2f2a3d', '#b06cc2'] },
  { key: 'mono', label: 'Mono', swatch: ['#f4f4f3', '#2b2b2b', '#222222'] },
  { key: 'midnight', label: 'Midnight', swatch: ['#1b1f24', '#e7e3dc', '#d08a5e'] },
  { key: 'ember', label: 'Ember', swatch: ['#241c18', '#ede2d8', '#e0794e'] },
];
