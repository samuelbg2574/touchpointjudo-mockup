# Touch Point Judo Academy — Next.js Site

## Project
- Next.js 14 App Router, TypeScript, Tailwind CSS, Framer Motion
- Mostly static site with two dynamic API routes (`/api/classes`, `/api/booking`)
- Deployed from `main` branch
- Repo: https://github.com/samuelbg2574/touchpointjudo-mockup.git

## Design System
- Fonts: `font-headline` (Jakarta), `font-body` (Inter)
- Colors: `crimson` (#78000d), `ink` (#1a1c1c), `surface-lightest/light/mid`, `navy` (#505e7c)
- Border radius: `rounded-3xl`, `rounded-4xl`, `rounded-5xl`
- Animations: Framer Motion `whileInView` with `viewport={{ once: true }}`
- Section padding: `py-16 md:py-28`
- Max width: `max-w-7xl px-6 md:px-10`

## Pages
- `/` — Homepage (hero, philosophy, benefits, programs)
- `/kids` — Kids classes (Little Tigers 4-7, Young Samurais 8-12)
- `/adults` — Adult Beginner Course (ABC)
- `/timetable` — Weekly class schedule with filter tabs
- `/about` — Academy info, sensei bio, facility, contact/map

## Key Info
- Address: Beechcroft Road, London SW17 7DF
- Contact constants in `lib/utils.ts` (email, phone, WhatsApp)
- Images: mix of `lh3.googleusercontent.com` and `images.unsplash.com`
- Remote image domains configured in `next.config.js`

## Airtable Integration
- `lib/airtable.ts` — fetches classes and creates booking records
- Requires `.env.local` with `AIRTABLE_TOKEN` and `AIRTABLE_BASE_ID`
- Timetable falls back to hardcoded schedule if Airtable creds are missing
- Two Airtable tables needed: `Classes` (timetable) and `Bookings` (form submissions)
- Bookings table fields: Name, Email, Phone, Day, Time, Class, Age Group, Category, Status, Submitted At
- See `.env.example` for setup instructions

## Remaining TODOs
- [ ] **Owner: set up Airtable base** — create `Classes` and `Bookings` tables per `.env.example` instructions
- [ ] **Owner: add `.env.local`** — add `AIRTABLE_TOKEN` and `AIRTABLE_BASE_ID` to production environment variables (Vercel/Netlify dashboard)
- [ ] **Email notifications** — optionally wire up Resend/SendGrid so owner gets an email when a new booking comes in (commented-out scaffold exists in `app/api/booking/route.ts`)
- [ ] **Booking confirmations** — send an automated reply email to the person who booked
- [ ] **Cancellation flag** — add a `cancelled` boolean field to Airtable `Classes` table so owner can mark a class cancelled and it shows as such on the site (currently status options are available/limited/enrolling)

## Preferences
- Always build (`npm run build`) before pushing
- Push to git only when explicitly asked
- Mobile-first responsive design throughout
- Keep WhatsApp as primary CTA channel
- Keep "Remaining TODOs" section in CLAUDE.md up to date — check off items as they're completed, add new items as they're discovered
