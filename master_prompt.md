# Master Prompt — Touch Point Judo Academy Website

Use this prompt with an AI coding assistant to recreate the entire project from scratch.

---

## Prompt

Build a complete Next.js 14 website for **Touch Point Judo Academy**, a judo club in Tooting, London. The site should be a modern, animation-heavy, mobile-first marketing site with an Airtable-backed timetable and booking system.

---

### Tech Stack

- **Next.js 14** App Router with TypeScript
- **Tailwind CSS 3.4** for styling
- **Framer Motion** for all animations
- **Lucide React** for icons
- **clsx + tailwind-merge** for conditional class names
- No other dependencies

---

### Design System

**Fonts** (Google Fonts, loaded via `next/font/google`):
- Headline: `Plus Jakarta Sans` (weights 400–800), CSS variable `--font-jakarta`, Tailwind class `font-headline`
- Body: `Inter` (weights 400–600), CSS variable `--font-inter`, Tailwind class `font-body`

**Color Palette** (extend Tailwind config):
- `crimson`: `#78000d` (primary accent), with `dark: #5a0009`, `light: #9a1d20`, `muted: #c94040`
- `ink`: `#1a1c1c` (text/dark bg), with `soft: #2f3131`
- `surface-lightest`: `#f9f9f9`, `surface-light`: `#f3f3f4`, `surface-mid`: `#e8e8e8`
- `navy`: `#505e7c` (secondary accent for adult classes)

**Border Radius** (extend Tailwind):
- `rounded-4xl`: `2rem`
- `rounded-5xl`: `2.5rem`

**Global CSS**:
- `body` applies `bg-surface-lightest text-ink font-body antialiased`
- `::selection` uses `bg-crimson/20 text-crimson`
- Custom utilities: `.text-balance { text-wrap: balance }`, `.mask-radial { mask-image: radial-gradient(ellipse at center, black 60%, transparent 100%) }`

**Section Rhythm**:
- Section padding: `py-16 md:py-28`
- Max width container: `max-w-7xl px-6 md:px-10`
- Card gap: `gap-4 md:gap-6`

**Animation Pattern** (reuse everywhere):
```ts
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};
```
Apply `whileInView` with `viewport={{ once: true }}` on all scroll-triggered animations.

---

### Contact Constants (`lib/utils.ts`)

```ts
export const CONTACT_EMAIL = "hello@touchpointjudo.com";
export const CONTACT_PHONE = "+447911123456";
export const WHATSAPP_URL = `https://wa.me/${CONTACT_PHONE.replace(/\D/g, "")}`;
export const MAILTO_URL = `mailto:${CONTACT_EMAIL}`;
```

Also export a `cn()` utility combining `clsx` and `tailwind-merge`.

---

### Project Structure

```
app/
  layout.tsx          — Root layout with Nav, Footer, Google fonts
  globals.css         — Tailwind directives + base styles
  page.tsx            — Homepage
  kids/page.tsx       — Kids classes page
  adults/page.tsx     — Adult classes page
  timetable/page.tsx  — Dynamic timetable + booking form
  about/page.tsx      — About, sensei bio, facility, contact/map
  api/
    classes/route.ts  — GET: fetch classes from Airtable
    booking/route.ts  — POST: submit booking to Airtable
components/
  Nav.tsx             — Fixed header with mobile drawer
  Footer.tsx          — Dark footer with links + contact
  ContactCTA.tsx      — Reusable CTA section
  BookingForm.tsx     — Booking form component
lib/
  utils.ts            — cn(), contact constants
  airtable.ts         — Airtable CRUD (classes + bookings)
  validation.ts       — Input validation + HTML sanitization
  rateLimit.ts        — In-memory IP rate limiter
```

---

### Pages — Detailed Specs

#### Root Layout (`app/layout.tsx`)
- Load Plus Jakarta Sans (400–800) and Inter (400–600) via `next/font/google`
- Set font CSS variables on `<html>`
- Render `<Nav />` → `<main>{children}</main>` → `<Footer />`
- Metadata: title "Touch Point Judo Academy | Empowering Kids & Adults"

#### Homepage (`app/page.tsx`)
All pages are `"use client"`.

1. **Hero** — Full-screen with background image (`images.unsplash.com/photo-1549824506-bfeba88865d6`), dark gradient overlay `from-ink/90 via-ink/60 to-transparent`. Badge "Welcome to the Mat", heading "Empowering Kids & Adults through Judo" (& in crimson-muted, "through Judo" in italic). Two buttons: WhatsApp Us (glass-style) and Learn More → /about. Animated scroll indicator at bottom (bouncing pill shape).
2. **Philosophy** — White bg, 2-col grid. Left: label "Our Philosophy", heading with "Confidence" and "Discipline" in crimson, red divider bar. Right: paragraph about "Maximum Efficiency, Mutual Welfare".
3. **Benefits** — 3-col grid of cards (Discipline/Shield, Confidence/Brain, Fitness/Zap icons). Cards have icon in crimson/10 bg that fills to crimson on hover, `whileHover={{ y: -6 }}`.
4. **Programs** — 2-col grid of large image cards (320–520px height). Kids card links to /kids (crimson accent), Adults card links to /adults (navy accent). Images zoom on hover. Overlay text at bottom.
5. **ContactCTA** — "Ready to step on the mat?"

#### Kids Page (`app/kids/page.tsx`)
1. **Hero** — Light bg, 2-col (copy + image). Badge "Elite Youth Program", heading "The Best Start for Your Child." (crimson). Image tilted `rotate: 2` that straightens on hover. Floating 5-star review badge.
2. **Skills Grid** — 4-col grid (Confidence, Discipline, Coordination, Social Skills) with icons, hover lift effect.
3. **Programs** — 3-col grid:
   - Safety First card (crimson bg, white text, checklist: DBS-checked, mats, small classes). Uses 3D perspective with `rotateY` animation.
   - Little Tigers (Ages 4–7, orange badge, white card, checklist). Uses `rotateX` entrance.
   - Young Samurais (Ages 8–12, white/15 badge, dark ink bg, checklist). Uses 3D perspective with `rotateY`.
4. **Action Gallery** — 3-col: left image, center "Join Our Community" card with star, right image. Center card offset `md:translate-y-10`.
5. **Testimonials Marquee** — Infinite horizontal scroll of testimonial cards (duplicated for seamless loop). 5 testimonials with quotes, names, initials badges, 5-star ratings. Fade edges on both sides. Duration 35s linear.
6. **ContactCTA** — "Give your child the gift of Judo."

Testimonials data:
- Sarah Miller (SM), Parent since 2022: "Joining Touch Point Judo was the best decision we made for Leo..."
- James Chen (JC), Parent since 2023: "The atmosphere is incredibly professional yet warm..."
- Emma Thompson (ET), Parent since 2021: "My son has grown so much in confidence..."
- David Park (DP), Parent since 2023: "Incredible discipline and respect being taught..."
- Rachel Adams (RA), Parent since 2022: "The community feel is unmatched..."

#### Adults Page (`app/adults/page.tsx`)
1. **Hero** — Full-screen parallax (use `useScroll` + `useTransform` for image `y` offset). Badge "Adult Beginner Course — Enrolling Now" (crimson border). Heading "Transform Your Body and Mind" (Body/Mind in italic crimson-muted). CTA: "Start Your Journey Today" email link.
2. **ABC Section** — Split layout. Left: giant stacked text "A DULT / B EGINNER / C OURSE" with space after first letter. Red divider. 3 benefits below (Unlock Your Full Potential/Flame, Increase Your Discipline/Target, Build Inner Confidence/Users). Right: 2-col image mosaic (4 items: tall image, Kano quote card on crimson bg, square image, another tall image). Background has huge faded "ABC" text.
3. **Course Structure** — 3-col cards with 3D perspective animations:
   - 01 The Foundation (Ukemi, Breakfall, Kuzushi)
   - 02 The Kinetic Move — HIGHLIGHTED (crimson bg): Seoi-Nage & O-Goshi, Pinning, Flow Drills. This card floats up `y: -16`.
   - 03 Technical Mastery (Combinations, Transitional Judo, Yellow Belt Grading)
   Each has a spinning number badge that rotates in from -180deg.
4. **Beyond the Mat** — 2-col: left image with blur blob and rotate-on-hover, right 3 benefit cards with colored left borders (crimson, navy, crimson-light): Elite Fitness, Self-Defence, Community.
5. **ContactCTA** — "Ready to write your next chapter?"

#### Timetable Page (`app/timetable/page.tsx`)
1. **Hero** — Light bg, badge "2026 Schedule", heading "Class Timetable", location pin with address.
2. **Schedule Section**:
   - **Filter tabs**: All Classes / Kids / Adults with animated pill (`layoutId="filter-pill"`).
   - **Day picker**: Horizontal scrolling buttons for Mon–Sun (Sun only shown if it has classes). Each button shows abbreviated day, date number, and month. Active day gets ink bg + white text. Disabled days (no classes) are faded.
   - **Class cards**: Each card has a colored left accent bar (crimson for kids, navy for adults), time display, program info, age group, category badge, and status badge. Status colors: available=emerald, limited=orange, enrolling=crimson, full=ink/50.
   - **Skeleton loader**: 3 pulsing placeholder cards while loading.
3. **Booking Form Section**: heading "Ready to join?", wraps `<BookingForm>` component.
4. **ContactCTA** — "Questions?"

Day logic: `nextDateForDay()` calculates the next occurrence of a weekday name. `timeToMinutes()` parses time strings for sorting.

Fallback classes (used when API unavailable):
- Monday: Adult Beginner Course 7:00–8:30 pm (enrolling)
- Tuesday: Little Tigers 4:30–5:30 pm (limited)
- Wednesday: Adult Beginner Course 7:00–8:30 pm (enrolling)
- Thursday: Young Samurais 5:00–6:15 pm (available)
- Friday: Open Mat 7:00–8:30 pm (available)
- Saturday: Little Tigers 9:00–10:00 am (limited), Young Samurais 10:15–11:30 am (available), Advanced Training 12:00–1:30 pm (available)

#### About Page (`app/about/page.tsx`)
1. **Hero** — Light bg, 2-col (copy + image). Badge "Established 2012", heading "Our Academy, Our Community" (community in italic crimson). Floating 5-star review badge.
2. **Mission & Values** — 3-col grid: left 2/3 card with mission text mentioning "Jita Kyoei" in bold crimson, right 1/3 crimson card with star icon and "Integrity First".
3. **Meet Our Sensei** — Circular image with decorative rings, name "Sensei David Chen", role "Head Instructor & Founder", rank "6th Dan Black Belt". 3 paragraphs of bio (25 years experience, former Olympic alternate, coaching style). 4 certification badges: BJA Certified Coach, DBS Checked, First Aid Trained, Safeguarding Lead.
4. **Facility** — 2-col: left image of dojo with blur blob and inset detail image, right 3 features (Olympic Standard Mats, Modern Amenities, Dedicated S&C Zone) with CheckCircle icons.
5. **Contact/Map** — Rounded card with dark left panel (contact info: location, phone, email, WhatsApp + Email buttons) and right embedded Google Maps iframe for "Touch Point Judo Academy, Beechcroft Road, London SW17 7DF".

---

### Components

#### Nav (`components/Nav.tsx`)
Fixed header with white/95 bg + backdrop-blur. Logo text "Touch Point Judo Academy" in crimson. Desktop: 5 nav links (Home, Kids, Adults, Timetable, About) with animated underline (`layoutId="nav-underline"`). "Get in Touch" CTA button. Mobile: hamburger menu with animated drawer (AnimatePresence). Drawer closes on route change.

#### Footer (`components/Footer.tsx`)
Dark `bg-ink` footer. 3-col grid: Brand (logo + description), Explore links, Get In Touch (email, phone, WhatsApp with icons + CTA buttons). Copyright bar at bottom.

#### ContactCTA (`components/ContactCTA.tsx`)
Reusable. Props: `heading`, `subtext`, `dark` (default true). Dark mode = ink bg + white text, light mode = surface-light bg + ink text. Decorative crimson blobs. Two buttons: WhatsApp (green) + Email (border). Small disclaimer text at bottom.

#### BookingForm (`components/BookingForm.tsx`)
Form fields: Name (required), Email (required), Phone (optional), Class dropdown (sorted by day then time). Submit button with loading spinner and success checkmark states. Error/success messages. Posts to `/api/booking`.

---

### API Routes

#### GET `/api/classes` (`app/api/classes/route.ts`)
- `export const dynamic = "force-dynamic"`
- Fetches classes and booking counts from Airtable in parallel
- For classes with `capacity` set: compute status based on remaining spots (≥40% = available, <40% = limited, ≤0 = full)
- Returns 204 if no classes, otherwise JSON array

#### POST `/api/booking` (`app/api/booking/route.ts`)
- Rate limit check (5 req/min per IP via `lib/rateLimit.ts`)
- Validate with `validateBooking()` from `lib/validation.ts`
- Create booking record in Airtable
- Returns 200/400/429/500

---

### Airtable Integration (`lib/airtable.ts`)

Types:
- `ClassEntry`: id, day, time, endTime, program, category ("kids"|"adults"), ageGroup, level, status ("available"|"limited"|"enrolling"|"full"), duration, capacity?
- `BookingRecord`: name, email, phone?, classDay, classTime, classEndTime, classProgram, classAgeGroup, classCategory

Functions:
- `fetchClasses()` — GET from Classes table, sanitize HTML on all text fields, revalidate every hour
- `fetchBookingCounts()` — GET from Bookings table filtered by `NOT({Status}='Cancelled')`, return map of `"Day|Program"` → count
- `createBooking()` — POST to Bookings table with status "New" and current timestamp

Environment variables: `AIRTABLE_TOKEN`, `AIRTABLE_BASE_ID`

---

### Security (`lib/validation.ts`, `lib/rateLimit.ts`, `next.config.mjs`)

**Validation**: Email regex, max length constraints (name: 100, email: 255, phone: 20), phone format allows `+`, `-`, `()`, spaces. `sanitizeHtml()` escapes `& < > " '`.

**Rate Limiting**: In-memory Map, 5 requests per minute per IP, auto-cleanup every 5 minutes via global interval.

**Security Headers** (in next.config.mjs): X-Content-Type-Options: nosniff, X-Frame-Options: DENY, X-XSS-Protection, Referrer-Policy: strict-origin-when-cross-origin, Permissions-Policy (no camera/mic/geo), HSTS, CSP allowing self + Airtable API + inline scripts/styles.

---

### Images

Use these exact Unsplash URLs for stock photos:
- Homepage hero: `images.unsplash.com/photo-1549824506-bfeba88865d6`
- Kids page hero: `images.unsplash.com/photo-1555597673-b21d5c935865`
- Kids programs: `images.unsplash.com/photo-1542937307-e90d0cc07237`
- Kids gallery left: `images.unsplash.com/photo-1560631820-5bc34db86fe7`
- Kids gallery right: `images.unsplash.com/photo-1564415315949-7a0c4c73aab4`
- Adults hero: `images.unsplash.com/photo-1515025617920-e1e674b5033c`
- Adults beyond the mat: `images.unsplash.com/photo-1514050566906-8d077bae7046`

For academy-specific images (sensei, dojo interior, judo action shots), use `lh3.googleusercontent.com/aida-public/...` placeholder URLs. Configure `next.config.mjs` with remote patterns for `lh3.googleusercontent.com`, `images.unsplash.com`, and `plus.unsplash.com`.

---

### Key Content

**Academy**: Touch Point Judo Academy, Beechcroft Road, London SW17 7DF, Est. 2012

**Programs**:
- Little Tigers (Ages 4–7): Intro to basics, fun games, focus skills
- Young Samurais (Ages 8–12): Advanced technique, controlled sparring, rank promotion
- Adult Beginner Course (ABC): 12-week, 3-phase program (Foundation → Kinetic Move → Technical Mastery)
- Open Mat (All levels)
- Advanced Training

**Sensei**: David Chen, 6th Dan Black Belt, Head Instructor & Founder, 25+ years experience, former Olympic alternate

**Philosophy**: "Maximum Efficiency, Mutual Welfare" / "Jita Kyoei" (Mutual Benefit and Welfare)

---

### Configuration Files

**next.config.mjs**: ESM format, remote image patterns, security headers
**tailwind.config.js**: CommonJS format, content paths for app/ and components/
**postcss.config.mjs**: tailwindcss + autoprefixer
**tsconfig.json**: Strict mode, `@/*` path alias to root

---

### .env.example

Include setup instructions as comments explaining how to:
1. Create an Airtable base with Classes and Bookings tables
2. List all required fields for each table with types
3. Explain the capacity-based auto-status system
4. Show where to get the token and base ID

---

Build every file completely. Every page should be `"use client"` (except the root layout). Use Framer Motion animations on every section. Make it mobile-first and fully responsive. All images use Next.js `<Image>` component. The site should gracefully fall back to hardcoded class data when Airtable credentials are missing.
