# Touch Point Judo Academy — Next.js Site

## Project
- Next.js 14 App Router, TypeScript, Tailwind CSS, Framer Motion
- Static site (no API routes, no database)
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

## Preferences
- Always build (`npm run build`) before pushing
- Push to git only when explicitly asked
- Mobile-first responsive design throughout
- Keep WhatsApp as primary CTA channel
