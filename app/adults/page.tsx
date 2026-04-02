"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, Flame, Target, Users } from "lucide-react";
import { ContactCTA } from "@/components/ContactCTA";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const benefits = [
  {
    icon: Flame,
    title: "Unlock Your Full Potential",
    body: "Push past mental and physical barriers you never knew existed. Every session a new level unlocked.",
  },
  {
    icon: Target,
    title: "Increase Your Discipline",
    body: "Apply the 'Way of Judo' to your professional and personal life. Structure breeds freedom.",
  },
  {
    icon: Users,
    title: "Build Inner Confidence",
    body: "Carry yourself with authority and calm through self-defense mastery and consistent practice.",
  },
];

const courseSteps = [
  {
    num: "01",
    title: "The Foundation",
    desc: "Master 'Ukemi' (safe falling), basic grips, and movement patterns to ensure a safe and solid learning environment.",
    items: ["Intro to Judo Etiquette", "Breakfall Proficiency", "Basic Kuzushi (Off-balancing)"],
    highlight: false,
  },
  {
    num: "02",
    title: "The Kinetic Move",
    desc: "Introduction to major throwing techniques and ground control pin positions (Osaekomi-waza).",
    items: ["Seoi-Nage & O-Goshi", "Pinning Fundamentals", "Flow Drills"],
    highlight: true,
  },
  {
    num: "03",
    title: "Technical Mastery",
    desc: "Connecting techniques, Randori (free practice), and preparation for your first belt promotion.",
    items: ["Combination Attacks", "Transitional Judo", "Yellow Belt Grading"],
    highlight: false,
  },
];

const beyondBenefits = [
  {
    title: "Elite Functional Fitness",
    body: "Judo engages every muscle group. Develop core strength, explosive power, and metabolic conditioning without the boredom of a traditional gym.",
    accent: "bg-crimson",
  },
  {
    title: "Practical Self-Defence",
    body: "Learn how to control a situation from the feet to the ground. Our course focuses on high-percentage, realistic techniques for modern safety.",
    accent: "bg-navy",
  },
  {
    title: "A Welcoming Community",
    body: "Train with doctors, teachers, entrepreneurs, and parents. Our academy is a professional network as much as it is a dojo.",
    accent: "bg-crimson-light",
  },
];

export default function AdultsPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative flex min-h-screen items-center overflow-hidden"
      >
        {/* parallax image */}
        <motion.div className="absolute inset-0" style={{ y: heroImgY }}>
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZJ7BnZKaYIJ0duWyKSxhdryCr3EZOzYiPebEBrP0AZ20EyhBBHri5ezF05J_AD6_4FFKJ9GIfrnRJ-b1jpQxx4nnd8arVGDeCqeG44_KvNXbssihhipugm8R_gbQcI2ndZVJ9XrUvLKqUEe0xeHOu-YPF_FY1yZe8r7i3Nb98Mjn_Gr8PY3Rv_u3TiZ6XpA1CZzS73lU6VZmbwwfy5hMU969hsZi7qTn-AzLvMEylQmDH0-P1KR5phugMTX7XuyKOtonHCemcu8k"
            alt="Adult judo practitioners in action"
            fill
            className="object-cover object-center scale-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/50 to-ink/10" />
        </motion.div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 pb-20 md:px-10">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-block rounded-full border border-crimson/60 bg-crimson/20 px-4 py-1.5 font-headline text-xs font-bold uppercase tracking-widest text-white backdrop-blur-sm"
          >
            Adult Beginner Course — Enrolling Now
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-headline text-5xl font-black leading-[1.05] tracking-tighter text-white md:text-7xl lg:text-8xl max-w-4xl"
          >
            Transform Your{" "}
            <span className="italic text-crimson-muted">Body</span>{" "}
            and{" "}
            <span className="italic text-crimson-muted">Mind</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 max-w-lg text-xl leading-relaxed text-white/70"
          >
            A modern approach to a centuries-old martial art. Build resilience, focus, and peak physical conditioning — regardless of your starting point.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="mailto:hello@touchpointjudo.com"
              className="rounded-full bg-crimson px-8 py-4 font-headline font-bold text-white shadow-lg shadow-crimson/40 transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              Start Your Journey Today
            </a>
            <a
              href="#course"
              className="rounded-full border border-white/20 bg-white/10 px-8 py-4 font-headline font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              View the Course
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── ABC Section ──────────────────────────────────── */}
      <section className="relative overflow-hidden bg-surface-lightest py-28">
        <div className="pointer-events-none absolute -left-32 top-0 font-headline text-[18rem] font-black leading-none text-surface-mid/40 select-none">
          ABC
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-col items-start gap-20 lg:flex-row lg:items-center">
            {/* Copy */}
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-headline text-5xl font-black leading-none tracking-tighter text-ink md:text-7xl">
                  A DULT<br />
                  B EGINNER<br />
                  C OURSE
                </h2>
                <div className="mt-6 h-1 w-16 rounded-full bg-crimson" />
              </motion.div>

              <div className="mt-10 space-y-8">
                {benefits.map((b, i) => (
                  <motion.div
                    key={b.title}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex items-start gap-5"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-crimson/10">
                      <b.icon size={22} className="text-crimson" />
                    </div>
                    <div>
                      <h4 className="font-headline text-lg font-bold text-ink">{b.title}</h4>
                      <p className="mt-1 leading-relaxed text-ink/55">{b.body}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Image mosaic */}
            <div className="grid w-full gap-4 lg:w-1/2 lg:grid-cols-2">
              <div className="space-y-4 pt-10">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="aspect-[3/4] overflow-hidden rounded-4xl shadow-xl"
                >
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXDqZuPq9Nr15jCWQdIvA3qSCai_fumYdNu73rOb1Lya2UbS_qXYBP152QfIen4uBR6r5cxv0tglATw2iV4iDDFvCnU3jhDHQ9PpSHIWL0Q_9fVZ6pfOZ6siIftpvUEiZHn_ulVoYsJyeM_9lJWJbui-7QD9XdPodmyXAxcYkHAR8h7HLRbhZtQ33EgWboIz01dsqGLuV7PL29R4CB214Rp82yUFPQKpvx0vsl2LMSomAv7kRjCQ1oFm21CEiIQvy3uVnbeftAoN0"
                    alt="Judo black belt"
                    fill={false}
                    width={400}
                    height={540}
                    className="h-full w-full object-cover"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="rounded-3xl bg-crimson p-8 text-white"
                >
                  <p className="text-xl font-black italic leading-snug">
                    "Judo is the most efficient use of energy."
                  </p>
                  <p className="mt-3 text-sm font-bold text-white/60">— Jigoro Kano</p>
                </motion.div>
              </div>

              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                  className="aspect-square overflow-hidden rounded-4xl shadow-xl"
                >
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAm-NRHJCm8LWXPf5YTdmzCdDMxcO6p2XzBvSvXVOqJHLm-NrgGoDUu1Agyj-BJMyF4khjkcKNPjv1aXapA9BpMWwPSx-gEkEIwHYpJjsiSZU9UkzW1As6HiKP1K7adW2UPGhTTLYiae7s_TJQtaJvpTVIcFNQeKAafgmt_9Z0J7WZRDj4cjfoMMylccCSfp9iy9nBm5ETUYnKFJZiPn9nNY27_6bV436h9cpL49uLMKUuWR-6gVFyKwyBifeCup62JYG7S5qlK_1E"
                    alt="Judokas bowing"
                    fill={false}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.25 }}
                  className="aspect-[3/4] overflow-hidden rounded-4xl shadow-xl"
                >
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4nHPo43QU4kLmRXrJUw6DjFVNlU7VsOJuK-Z1obZzCXxymraF80x-54qPNb5Wxo_maiiPwFY8Php-MrHdpij3xzopDpKcdiqnuZe7KzMlCYraIFY5n4qe86cUT3tE4TYNXIq5LKq2ZlNTrbW_ahWeee5Z_9sycE_izWnwlfw-p18jHPhdenPnte7r0lt6bG86XPOEO5zFfBWPjU5wZEdD5UuZLykQpvfb4Cev4YjWsiR3alDk-9uK-V1Ib-zsYD9pxACxLkkhWps"
                    alt="Dynamic judo throw"
                    fill={false}
                    width={400}
                    height={540}
                    className="h-full w-full object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Course Structure ─────────────────────────────── */}
      <section className="bg-white py-28" id="course">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-16 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-headline text-4xl font-black tracking-tighter text-ink md:text-5xl"
            >
              Course Structure
            </motion.h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-crimson" />
            <p className="mt-6 text-ink/55">
              A structured 12-week progression designed specifically for the adult learner.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {courseSteps.map((step, i) => (
              <motion.div
                key={step.num}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className={`rounded-3xl p-10 ${
                  step.highlight
                    ? "bg-crimson text-white md:-translate-y-4"
                    : "bg-surface-lightest ring-1 ring-ink/5"
                }`}
              >
                <div
                  className={`mb-6 flex h-12 w-12 items-center justify-center rounded-2xl font-headline text-lg font-black ${
                    step.highlight ? "bg-white/20 text-white" : "bg-crimson/10 text-crimson"
                  }`}
                >
                  {step.num}
                </div>
                <h3
                  className={`mb-4 font-headline text-2xl font-black ${
                    step.highlight ? "text-white" : "text-ink"
                  }`}
                >
                  {step.title}
                </h3>
                <p className={`mb-8 leading-relaxed ${step.highlight ? "text-white/75" : "text-ink/55"}`}>
                  {step.desc}
                </p>
                <ul className="space-y-3">
                  {step.items.map((item) => (
                    <li
                      key={item}
                      className={`flex items-center gap-3 text-sm font-medium ${
                        step.highlight ? "text-white/90" : "text-ink/65"
                      }`}
                    >
                      <CheckCircle
                        size={15}
                        className={step.highlight ? "text-white/70 shrink-0" : "text-crimson shrink-0"}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Beyond the Mat ───────────────────────────────── */}
      <section className="bg-surface-lightest py-28 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
            {/* Image with rotation hover */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[110%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-crimson/10 blur-3xl" />
              <motion.div
                whileHover={{ rotate: 0 }}
                initial={{ rotate: 2 }}
                className="overflow-hidden rounded-5xl shadow-2xl"
              >
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDy1mIEoG5Ll31htB1OI4X3RGAqhTaRBMTBLI2mQAYU1pFk5-Zrdug6s9kYnxPK_Sb5XLzv2wlnQdom1_lQPbrjkmbU6y4RbvHhU8hQkNX3Zyl-HfxT8T3WFdCsCWVZ7HzBkJkx3tP9xfxppYPS_khwiqgbn07M0AS4-kYx_X5gAQBLDGtuN21BNEha82jK5qCMvu0Wjho9JtlXlDrs30sMHlt1c9jkFQ9DHKjUnTzGYsOzQ8mW6-bnfPWXGDrT5XLKwoVGVWytX84"
                  alt="Adult judoka tying belt"
                  width={560}
                  height={700}
                  className="aspect-[4/5] w-full object-cover"
                />
              </motion.div>
            </motion.div>

            {/* Benefits */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-headline text-4xl font-black leading-tight tracking-tighter text-ink md:text-5xl"
              >
                Beyond the Mat: Fitness & Protection
              </motion.h2>

              <div className="mt-10 space-y-5">
                {beyondBenefits.map((b, i) => (
                  <motion.div
                    key={b.title}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="rounded-2xl bg-white p-7 ring-1 ring-ink/5 shadow-sm overflow-hidden relative"
                  >
                    <div className={`absolute left-0 top-0 bottom-0 w-1 ${b.accent}`} />
                    <h4 className="font-headline text-lg font-bold text-ink pl-4">{b.title}</h4>
                    <p className="mt-2 text-ink/55 leading-relaxed pl-4">{b.body}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <ContactCTA
        heading="Ready to write your next chapter?"
        subtext="Spaces are strictly limited to ensure personal instruction for every student. Reach out today."
      />
    </>
  );
}
