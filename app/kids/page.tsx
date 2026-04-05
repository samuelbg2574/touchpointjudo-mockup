"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Brain, Zap, Users, CheckCircle, Star, MessageCircle } from "lucide-react";
import { ContactCTA } from "@/components/ContactCTA";
import { WHATSAPP_URL } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const skills = [
  {
    icon: Shield,
    title: "Confidence",
    body: "Kids who train judo carry themselves differently. Earning a new belt or landing a technique for the first time gives them genuine pride.",
  },
  {
    icon: Brain,
    title: "Discipline",
    body: "Every class starts with a bow and follows a clear structure. Children learn to listen, wait their turn, and respect their training partners.",
  },
  {
    icon: Zap,
    title: "Coordination",
    body: "Judo develops balance, agility, and body awareness. Parents often notice improvements in other sports and general physical confidence.",
  },
  {
    icon: Users,
    title: "Social Skills",
    body: "Your child will train with kids their own age in a supportive setting. Many of our students have made their closest friendships here.",
  },
];

const testimonials = [
  {
    quote:
      "Leo was really struggling with focus at school and we didn't know what to try next. After a few months here his teacher actually asked us what had changed. He loves it.",
    name: "Sarah M.",
    since: "Parent since 2022",
    initials: "SM",
  },
  {
    quote:
      "My daughter is naturally quite shy and I was worried she'd hate it. She cried after the first class because she didn't want to leave. The coaches are brilliant with the little ones.",
    name: "James C.",
    since: "Parent since 2023",
    initials: "JC",
  },
  {
    quote:
      "We've tried football, swimming, rugby. Judo is the only thing that's stuck. He's been coming for three years now and just graded to orange belt. Couldn't be prouder.",
    name: "Emma T.",
    since: "Parent since 2021",
    initials: "ET",
  },
  {
    quote:
      "Both our girls train here. The older one helps the younger ones during class which is lovely to watch. It's taught them respect in a way we couldn't manage at home!",
    name: "David P.",
    since: "Parent since 2023",
    initials: "DP",
  },
  {
    quote:
      "We only signed up for the free trial but that was two years ago. Saturday mornings at judo are now a family routine. Other parents are great too, proper little community.",
    name: "Rachel A.",
    since: "Parent since 2022",
    initials: "RA",
  },
];

export default function KidsPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-surface-lightest pt-20">
        {/* decorative blob — hidden on small screens to avoid overflow */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-[300px] w-[300px] rounded-full bg-crimson/5 blur-3xl md:-right-64 md:-top-64 md:h-[600px] md:w-[600px]" />

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 md:gap-16 md:px-10 md:py-24 lg:grid-cols-2">
          {/* Copy */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5 inline-block rounded-full bg-crimson/10 px-4 py-1.5 font-headline text-xs font-bold uppercase tracking-widest text-crimson"
            >
              Kids Judo Classes
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="font-headline text-4xl font-black leading-[1.05] tracking-tighter text-ink sm:text-5xl md:text-7xl"
            >
              The Best Start{" "}
              <br />
              for{" "}
              <span className="text-crimson">Your Child.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 max-w-md text-base leading-relaxed text-ink/60 md:mt-6 md:text-lg"
            >
              Structured, safe, and genuinely fun. Our kids classes build confidence, coordination, and friendships that last well beyond the dojo.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-3 md:mt-10 md:gap-4"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-crimson px-6 py-3 font-headline text-sm font-bold text-white shadow-lg shadow-crimson/25 transition-all hover:-translate-y-0.5 hover:shadow-xl md:px-8 md:py-4"
              >
                <MessageCircle size={18} />
                Book a Free Trial
              </a>
              <a
                href="#programs"
                className="rounded-full border border-ink/15 bg-white px-6 py-3 font-headline text-sm font-bold text-ink transition-all hover:bg-surface-light md:px-8 md:py-4"
              >
                Our Programs
              </a>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ rotate: 0 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-4xl shadow-2xl sm:rounded-5xl">
              <Image
                src="https://images.unsplash.com/photo-1555597673-b21d5c935865?w=1200&q=80&fit=crop"
                alt="Young martial artist in white gi"
                width={700}
                height={800}
                className="h-[320px] w-full object-cover sm:h-[420px] md:h-[520px]"
                priority
              />
            </div>
            {/* floating badge — hidden on very small screens */}
            <div className="absolute -bottom-4 -left-4 hidden rounded-2xl bg-white p-4 shadow-xl ring-1 ring-ink/5 sm:-bottom-6 sm:-left-6 sm:block sm:p-5">
              <div className="flex items-center gap-1 text-yellow-500 mb-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="font-headline text-sm font-bold text-ink">&ldquo;He hasn&apos;t missed a single Saturday.&rdquo;</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Skills grid ──────────────────────────────────── */}
      <section className="bg-white py-16 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-10 text-center md:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-headline text-3xl font-black tracking-tighter text-ink md:text-5xl"
            >
              Building Skills for Life
            </motion.h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-crimson" />
          </div>

          <div className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((s, i) => (
              <motion.div
                key={s.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="group rounded-3xl bg-surface-lightest p-6 ring-1 ring-ink/5 transition-shadow hover:shadow-xl md:p-8"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-crimson/10 transition-colors group-hover:bg-crimson md:mb-6">
                  <s.icon size={22} className="text-crimson transition-colors group-hover:text-white" />
                </div>
                <h3 className="mb-2 font-headline text-lg font-bold text-ink md:text-xl">{s.title}</h3>
                <p className="text-sm leading-relaxed text-ink/55">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Programs ─────────────────────────────────────── */}
      <section className="bg-surface-lightest py-16 md:py-28" id="programs">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-10 md:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-headline text-3xl font-black tracking-tighter text-ink md:text-5xl"
            >
              Our Programs
            </motion.h2>
            <p className="mt-4 max-w-xl text-ink/55">
              Two age groups so your child trains with kids at a similar stage.
            </p>
          </div>

          <div className="grid gap-4 md:gap-6 lg:grid-cols-3">
            {/* Safety note */}
            <motion.div
              initial={{ opacity: 0, rotateY: -15, scale: 0.92 }}
              whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              className="flex flex-col justify-between rounded-3xl bg-crimson p-7 text-white md:p-10 lg:col-span-1"
              style={{ transformPerspective: 1200 }}
            >
              <div>
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="font-headline text-2xl font-black mb-4"
                >
                  Safety First
                </motion.h3>
                <p className="text-white/75 leading-relaxed text-sm md:text-base">
                  All classes run on proper judo mats with qualified, DBS-checked coaches. We keep groups small so every child gets the attention they need.
                </p>
              </div>
              <div className="mt-8 space-y-3">
                {["All coaches DBS-checked", "Full-size tatami mats", "Max 16 kids per class"].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle size={16} className="text-white/70 shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Little Tigers */}
            <motion.div
              initial={{ opacity: 0, y: 60, rotateX: 8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)", transition: { duration: 0.3 } }}
              className="rounded-3xl bg-white p-7 ring-1 ring-ink/5 shadow-sm md:p-10"
              style={{ transformPerspective: 1200 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4, type: "spring", stiffness: 200 }}
                className="mb-2 inline-block rounded-full bg-orange-100 px-3 py-1 font-headline text-xs font-bold text-orange-600"
              >
                Ages 4 – 7
              </motion.div>
              <h3 className="mt-4 font-headline text-2xl font-black text-ink">Little Tigers</h3>
              <p className="mt-3 text-ink/55 leading-relaxed text-sm md:text-base">
                A playful introduction to judo for the little ones. Lots of games, movement, and learning to listen and take turns.
              </p>
              <ul className="mt-6 space-y-3 md:mt-8">
                {["Intro to Judo basics", "Fun coordination games", "Focus & listening skills"].map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                    className="flex items-center gap-3 text-sm font-medium text-ink/70"
                  >
                    <CheckCircle size={16} className="text-crimson shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Young Samurais */}
            <motion.div
              initial={{ opacity: 0, rotateY: 15, scale: 0.92 }}
              whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              className="rounded-3xl bg-ink p-7 text-white md:p-10"
              style={{ transformPerspective: 1200 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.55, type: "spring", stiffness: 200 }}
                className="mb-2 inline-block rounded-full bg-white/15 px-3 py-1 font-headline text-xs font-bold text-white/80"
              >
                Ages 8 – 12
              </motion.div>
              <h3 className="mt-4 font-headline text-2xl font-black text-white">Young Samurais</h3>
              <p className="mt-3 text-white/60 leading-relaxed text-sm md:text-base">
                More technical judo with proper throws, groundwork, and light sparring. Kids work towards belt gradings throughout the year.
              </p>
              <ul className="mt-6 space-y-3 md:mt-8">
                {["Throws and groundwork", "Light, supervised sparring", "Belt gradings twice a year"].map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.65 + i * 0.1 }}
                    className="flex items-center gap-3 text-sm font-medium text-white/70"
                  >
                    <CheckCircle size={16} className="text-crimson-muted shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Action gallery ───────────────────────────────── */}
      <section className="bg-white py-16 overflow-hidden md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-10 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-headline text-3xl font-black tracking-tighter text-ink md:text-5xl max-w-lg"
            >
              Learning Through Action
            </motion.h2>
            <p className="text-ink/55 max-w-sm text-sm md:text-base">
              Have a look at what a typical session looks like. Parents are welcome to watch from the viewing area.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="group relative h-[280px] overflow-hidden rounded-4xl sm:h-[360px] md:h-[420px]"
            >
              <Image
                src="https://images.unsplash.com/photo-1560631820-5bc34db86fe7?w=800&q=80&fit=crop"
                alt="Martial artists preparing to spar"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="absolute bottom-6 left-6 font-headline font-bold text-white opacity-0 transition-opacity group-hover:opacity-100">
                Focus &amp; Precision
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex h-[280px] items-center justify-center rounded-4xl bg-crimson/5 p-8 text-center sm:h-[360px] md:h-[420px] md:translate-y-10 md:p-10"
            >
              <div>
                <Star size={48} className="mx-auto mb-4 text-crimson" fill="currentColor" />
                <h4 className="font-headline text-xl font-bold text-ink mb-3 md:text-2xl">Try a Free Class</h4>
                <p className="text-sm leading-relaxed text-ink/55">
                  Not sure if judo is right for your child? Come along and watch, or let them join in. No commitment, no pressure.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="group relative h-[280px] overflow-hidden rounded-4xl sm:h-[360px] md:h-[420px]"
            >
              <Image
                src="https://images.unsplash.com/photo-1564415315949-7a0c4c73aab4?w=800&q=80&fit=crop"
                alt="Dynamic martial arts sparring action"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="absolute bottom-6 left-6 font-headline font-bold text-white opacity-0 transition-opacity group-hover:opacity-100">
                Coaching &amp; Community
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Testimonials Carousel ────────────────────────── */}
      <section className="bg-surface-lightest py-16 overflow-hidden md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center font-headline text-3xl font-black tracking-tighter text-ink md:mb-16 md:text-5xl"
          >
            What Parents Say
          </motion.h2>
        </div>

        {/* Marquee — duplicated list for seamless loop */}
        <div className="relative">
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-12 bg-gradient-to-r from-surface-lightest to-transparent md:w-24" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-12 bg-gradient-to-l from-surface-lightest to-transparent md:w-24" />

          <motion.div
            className="flex gap-4 md:gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: { repeat: Infinity, repeatType: "loop", duration: 35, ease: "linear" },
            }}
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={`${t.name}-${i}`}
                className="relative w-[280px] shrink-0 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-ink/5 sm:w-[340px] md:w-[380px] md:p-8"
              >
                <div className="absolute -top-4 left-8 flex h-8 w-8 items-center justify-center rounded-full bg-crimson">
                  <span className="font-headline text-lg font-black leading-none text-white">&ldquo;</span>
                </div>
                <div className="mb-3 flex gap-1 text-yellow-400">
                  {[...Array(5)].map((_, j) => <Star key={j} size={13} fill="currentColor" />)}
                </div>
                <p className="mb-5 text-sm italic leading-relaxed text-ink/70">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-crimson/10 font-headline text-xs font-bold text-crimson">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-headline text-sm font-bold text-ink">{t.name}</p>
                    <p className="text-xs text-ink/50">{t.since}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <ContactCTA
        heading="Book a free trial session"
        subtext="No judo suit needed for the first class. Just comfortable sports clothes and bare feet. We'll sort the rest."
      />
    </>
  );
}
