"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Brain, Zap, Users, CheckCircle, Star } from "lucide-react";
import { ContactCTA } from "@/components/ContactCTA";

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
    body: "Mastering new techniques builds unshakable self-belief that extends beyond the dojo into school and life.",
  },
  {
    icon: Brain,
    title: "Discipline",
    body: "We teach respect for instructors and peers, fostering a disciplined mindset that pays dividends in every area.",
  },
  {
    icon: Zap,
    title: "Coordination",
    body: "Dynamic judo movements improve balance, agility, and motor skills in ways no other sport can.",
  },
  {
    icon: Users,
    title: "Social Skills",
    body: "Making friends and working as a team in a safe, supportive environment builds lifelong social foundations.",
  },
];

const testimonials = [
  {
    quote:
      "Joining Touch Point Judo was the best decision we made for Leo. His focus in school has improved dramatically, and he looks forward to every session.",
    name: "Sarah Miller",
    since: "Parent since 2022",
    initials: "SM",
  },
  {
    quote:
      "The atmosphere is incredibly professional yet warm. My daughter was very shy, but the coaches make every child feel seen and valued.",
    name: "James Chen",
    since: "Parent since 2023",
    initials: "JC",
  },
];

export default function KidsPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-screen overflow-hidden bg-surface-lightest pt-20">
        {/* decorative blob */}
        <div className="pointer-events-none absolute -right-64 -top-64 h-[600px] w-[600px] rounded-full bg-crimson/5 blur-3xl" />

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-24 md:px-10 lg:grid-cols-2">
          {/* Copy */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-block rounded-full bg-crimson/10 px-4 py-1.5 font-headline text-xs font-bold uppercase tracking-widest text-crimson"
            >
              Elite Youth Program
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="font-headline text-5xl font-black leading-[1.05] tracking-tighter text-ink md:text-7xl"
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
              className="mt-6 max-w-md text-lg leading-relaxed text-ink/60"
            >
              Our Kids Judo Classes combine discipline, safety, and explosive fun to help your child grow into a confident and capable young individual.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="mailto:hello@touchpointjudo.com"
                className="rounded-full bg-crimson px-8 py-4 font-headline font-bold text-white shadow-lg shadow-crimson/25 transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                Book a Free Trial
              </a>
              <a
                href="#programs"
                className="rounded-full border border-ink/15 bg-white px-8 py-4 font-headline font-bold text-ink transition-all hover:bg-surface-light"
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
            <div className="overflow-hidden rounded-5xl shadow-2xl">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAd2Q9bqgM3o6d7tMNDVUSb9suFI-gVnzpDiENZaKkdwZC2EZ9ny5JzJFkNb1Dsc_2o8DOeA-f2GFFeVMlf2MAsiDqDjEO-6QXvlXJWb9Bm4YS_m86YGKkaOdWpsoVL1JrvoHpQYPvjDuZCHe36kZ84iU9a8Cm2kOV74bmzgqQdWYT3iq49cYskE4IQbSqjM6YADU4tXO-jvrIVxK_5E3fB06bkzQvfbwlvdrL6_qjDPz1g0ks-xkIHS6a1A_Geo0sUX57MV8g71cI"
                alt="Happy kids in judo class"
                width={700}
                height={800}
                className="h-[520px] w-full object-cover"
                priority
              />
            </div>
            {/* floating badge */}
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-5 shadow-xl ring-1 ring-ink/5">
              <div className="flex items-center gap-1 text-yellow-500 mb-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="font-headline text-sm font-bold text-ink">"Best decision we made for our son."</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Skills grid ──────────────────────────────────── */}
      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-16 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-headline text-4xl font-black tracking-tighter text-ink md:text-5xl"
            >
              Building Skills for Life
            </motion.h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-crimson" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {skills.map((s, i) => (
              <motion.div
                key={s.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="group rounded-3xl bg-surface-lightest p-8 ring-1 ring-ink/5 transition-shadow hover:shadow-xl"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-crimson/10 transition-colors group-hover:bg-crimson">
                  <s.icon size={22} className="text-crimson transition-colors group-hover:text-white" />
                </div>
                <h3 className="mb-2 font-headline text-xl font-bold text-ink">{s.title}</h3>
                <p className="text-sm leading-relaxed text-ink/55">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Programs ─────────────────────────────────────── */}
      <section className="bg-surface-lightest py-28" id="programs">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-headline text-4xl font-black tracking-tighter text-ink md:text-5xl"
            >
              Our Programs
            </motion.h2>
            <p className="mt-4 max-w-xl text-ink/55">
              Age-appropriate training designed to meet children at their developmental level.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Safety note */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-between rounded-3xl bg-crimson p-10 text-white lg:col-span-1"
            >
              <div>
                <h3 className="font-headline text-2xl font-black mb-4">Safety First</h3>
                <p className="text-white/75 leading-relaxed">
                  All classes are taught on professional-grade mats by certified, background-checked instructors. Your child's safety is our absolute priority.
                </p>
              </div>
              <div className="mt-10 space-y-3">
                {["DBS-checked coaches", "Professional tatami mats", "Small class sizes"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-white/70 shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Little Tigers */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-3xl bg-white p-10 ring-1 ring-ink/5 shadow-sm"
            >
              <div className="mb-2 inline-block rounded-full bg-orange-100 px-3 py-1 font-headline text-xs font-bold text-orange-600">
                Ages 4 – 7
              </div>
              <h3 className="mt-4 font-headline text-2xl font-black text-ink">Little Tigers</h3>
              <p className="mt-3 text-ink/55 leading-relaxed">
                Intro to Judo basics, fun coordination games, and focus & listening skills in a nurturing, playful environment.
              </p>
              <ul className="mt-8 space-y-3">
                {["Intro to Judo basics", "Fun coordination games", "Focus & listening skills"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium text-ink/70">
                    <CheckCircle size={16} className="text-crimson shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Young Samurais */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-3xl bg-ink p-10 text-white"
            >
              <div className="mb-2 inline-block rounded-full bg-white/15 px-3 py-1 font-headline text-xs font-bold text-white/80">
                Ages 8 – 12
              </div>
              <h3 className="mt-4 font-headline text-2xl font-black text-white">Young Samurais</h3>
              <p className="mt-3 text-white/60 leading-relaxed">
                Advanced technical Judo, controlled sparring, and a rank promotion system that rewards dedication and growth.
              </p>
              <ul className="mt-8 space-y-3">
                {["Advanced technical Judo", "Controlled sparring", "Rank promotion system"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium text-white/70">
                    <CheckCircle size={16} className="text-crimson-muted shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Action gallery ───────────────────────────────── */}
      <section className="bg-white py-28 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-headline text-4xl font-black tracking-tighter text-ink md:text-5xl max-w-lg"
            >
              Learning Through Action
            </motion.h2>
            <p className="text-ink/55 max-w-sm">
              Our students don't just learn martial arts — they build friendships and memories that last a lifetime.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="group relative h-[420px] overflow-hidden rounded-4xl"
            >
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAR5DVQnffs96QOC7Llo0xmi9qxqsTF3Xq-D6rERZ-SBdldSDIKCFFYxLdXsw0ErqNQVdLinsjEIWCUiKTcrF8g8yDS5UWQa93cCq8lg0G4NnWhy5jLmEORWM1PpWvGkF7Peuj-Q6B9fK6N1gcP5V1J-AK2x6helJ7U1NzvmGVUXjOsZ9-tiAVAOHnj2wCPwVf-F8MoSY7grwV43QkUL8WkRcXeB2E6CPavSCVRQIalk_Vwn0drqgi1_amR5bx9dlsaw6-T5I2Mzy4"
                alt="Young judoka focus and precision"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="absolute bottom-6 left-6 font-headline font-bold text-white opacity-0 transition-opacity group-hover:opacity-100">
                Focus & Precision
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex h-[420px] items-center justify-center rounded-4xl bg-crimson/5 p-10 text-center md:translate-y-10"
            >
              <div>
                <Star size={48} className="mx-auto mb-4 text-crimson" fill="currentColor" />
                <h4 className="font-headline text-2xl font-bold text-ink mb-3">Join Our Community</h4>
                <p className="text-sm leading-relaxed text-ink/55">
                  Our academy is more than just a gym — it's a family where everyone belongs.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="group relative h-[420px] overflow-hidden rounded-4xl"
            >
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDv3ANd6-b1Fi76mrfuAG0NCStE1CtNw7v_6dMP_hZkQ_TNQ8K5YTBHCG-5Z9dhhZwmMkD2uTdQK7KybcV95IAauy5q3Mwy-uXXYgkXL8YMIDbb7BYBMiXfYTyoQA_TQLYxxzQdFxTECcpsdAkvRYFVBpcMaDQeWWj_cCM9pHrOBWhI7igRPu0gxAinEgYocoa6Q4tE-4bs0cGptc_v1VJQN529QWOW3Ki_nJeRm18lCjJca-qm4DlL5plQJ5M4RZd2dRpnbAoFscE"
                alt="Coaching and community"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="absolute bottom-6 left-6 font-headline font-bold text-white opacity-0 transition-opacity group-hover:opacity-100">
                Coaching & Community
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────── */}
      <section className="bg-surface-lightest py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center font-headline text-4xl font-black tracking-tighter text-ink md:text-5xl"
          >
            What Parents Say
          </motion.h2>

          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="relative rounded-3xl bg-white p-10 shadow-sm ring-1 ring-ink/5"
              >
                <div className="absolute -top-5 left-10 flex h-10 w-10 items-center justify-center rounded-full bg-crimson">
                  <span className="font-headline text-xl font-black leading-none text-white">"</span>
                </div>
                <div className="mb-4 flex gap-1 text-yellow-400">
                  {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
                </div>
                <p className="mb-6 text-lg italic leading-relaxed text-ink/70">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-crimson/10 font-headline text-sm font-bold text-crimson">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-headline font-bold text-ink">{t.name}</p>
                    <p className="text-sm text-ink/50">{t.since}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <ContactCTA
        heading="Give your child the gift of Judo."
        subtext="Book a free, no-obligation trial session today. No gi required — just bring comfortable sports clothes."
      />
    </>
  );
}
