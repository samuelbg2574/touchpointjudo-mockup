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
    title: "Get Properly Fit",
    body: "Judo is one of the most physically demanding sports there is. You'll build real, functional strength without setting foot on a treadmill.",
  },
  {
    icon: Target,
    title: "Learn a Practical Skill",
    body: "Every technique you learn works. Judo is one of the most effective martial arts for real self-defence situations.",
  },
  {
    icon: Users,
    title: "Meet Good People",
    body: "Our adult class is a mix of ages, backgrounds, and professions. You'll be surprised how quickly training partners become friends.",
  },
];

const courseSteps = [
  {
    num: "01",
    title: "Weeks 1-4",
    desc: "Learn how to fall safely (ukemi), basic grips, and how to move on the mat. Everything starts here.",
    items: ["Safe falling technique", "Basic grips and movement", "Judo etiquette and warm-ups"],
    highlight: false,
  },
  {
    num: "02",
    title: "Weeks 5-8",
    desc: "Your first proper throws and groundwork pins. This is where it starts to click and get really fun.",
    items: ["Hip and shoulder throws", "Pinning on the ground", "Partner drills"],
    highlight: true,
  },
  {
    num: "03",
    title: "Weeks 9-12",
    desc: "Putting techniques together, light sparring (randori), and preparing for your first belt grading if you're ready.",
    items: ["Linking throws together", "Free practice (randori)", "Yellow belt grading prep"],
    highlight: false,
  },
];

const beyondBenefits = [
  {
    title: "A Workout That Doesn't Feel Like One",
    body: "You'll use muscles you forgot you had. Judo builds grip strength, core stability, and cardio fitness all at once. Way more interesting than a gym session.",
    accent: "bg-crimson",
  },
  {
    title: "Self-Defence That Actually Works",
    body: "Judo is one of the few martial arts where you train at full resistance every session. The techniques work because you've tested them against someone who's trying to stop you.",
    accent: "bg-navy",
  },
  {
    title: "A Proper Social Club",
    body: "Our adult members grab a coffee after training, enter team competitions together, and genuinely look forward to seeing each other. It's a community, not just a class.",
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
            src="https://images.unsplash.com/photo-1515025617920-e1e674b5033c?w=1920&q=80&fit=crop"
            alt="Adult judo practitioners sparring"
            fill
            className="object-cover object-center scale-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/60 to-ink/20" />
        </motion.div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24 pb-16 md:pt-28 md:pb-20 md:px-10">
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
            className="font-headline text-4xl font-black leading-[1.05] tracking-tighter text-white sm:text-5xl md:text-7xl lg:text-8xl max-w-4xl"
          >
            Never Done Judo?{" "}
            <span className="italic text-crimson-muted">Perfect.</span>{" "}
            <span className="italic text-crimson-muted">Start Here.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-white/70 md:mt-8 md:text-xl"
          >
            Our 12-week beginner course is designed for people with zero experience. You don&apos;t need to be fit, flexible, or young. You just need to turn up.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-3 md:mt-10 md:gap-4"
          >
            <a
              href="mailto:hello@touchpointjudo.com"
              className="rounded-full bg-crimson px-6 py-3 font-headline text-sm font-bold text-white shadow-lg shadow-crimson/40 transition-all hover:-translate-y-0.5 hover:shadow-xl md:px-8 md:py-4"
            >
              Start Your Journey Today
            </a>
            <a
              href="#course"
              className="rounded-full border border-white/20 bg-white/10 px-6 py-3 font-headline text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20 md:px-8 md:py-4"
            >
              View the Course
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── ABC Section ──────────────────────────────────── */}
      <section className="relative overflow-hidden bg-surface-lightest py-16 md:py-28">
        {/* Decorative ABC text — only visible on larger screens */}
        <div className="pointer-events-none absolute -left-16 top-0 hidden select-none font-headline text-[10rem] font-black leading-none text-surface-mid/40 md:-left-32 md:block md:text-[18rem]">
          ABC
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-col items-start gap-12 md:gap-16 lg:flex-row lg:items-center lg:gap-20">
            {/* Copy */}
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-headline text-4xl font-black leading-none tracking-tighter text-ink sm:text-5xl md:text-7xl">
                  A DULT<br />
                  B EGINNER<br />
                  C OURSE
                </h2>
                <div className="mt-6 h-1 w-16 rounded-full bg-crimson" />
              </motion.div>

              <div className="mt-8 space-y-6 md:mt-10 md:space-y-8">
                {benefits.map((b, i) => (
                  <motion.div
                    key={b.title}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex items-start gap-4 md:gap-5"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-crimson/10 md:h-12 md:w-12">
                      <b.icon size={22} className="text-crimson" />
                    </div>
                    <div>
                      <h4 className="font-headline text-base font-bold text-ink md:text-lg">{b.title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-ink/55 md:text-base">{b.body}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Image mosaic */}
            <div className="grid w-full gap-4 sm:grid-cols-2 lg:w-1/2">
              <div className="space-y-4 sm:pt-10">
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
                  className="rounded-3xl bg-crimson p-6 text-white md:p-8"
                >
                  <p className="text-lg font-black italic leading-snug md:text-xl">
                    &ldquo;Judo is the most efficient use of energy.&rdquo;
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
      <section className="bg-white py-16 md:py-28" id="course">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-10 text-center md:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-headline text-3xl font-black tracking-tighter text-ink md:text-5xl"
            >
              Course Structure
            </motion.h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-crimson" />
            <p className="mt-6 text-sm text-ink/55 md:text-base">
              Here&apos;s what you&apos;ll cover over the 12 weeks. New courses start every term.
            </p>
          </div>

          <div className="grid gap-4 md:gap-6 md:grid-cols-3">
            {courseSteps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 60, rotateX: 10 }}
                whileInView={{ opacity: 1, y: step.highlight ? -16 : 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" }}
                whileHover={{
                  scale: 1.04,
                  rotateY: step.highlight ? 0 : i === 0 ? 3 : -3,
                  transition: { duration: 0.3 },
                }}
                className={`rounded-3xl p-7 md:p-10 ${
                  step.highlight
                    ? "bg-crimson text-white"
                    : "bg-surface-lightest ring-1 ring-ink/5"
                }`}
                style={{ transformPerspective: 1200 }}
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.15, type: "spring", stiffness: 200 }}
                  className={`mb-6 flex h-12 w-12 items-center justify-center rounded-2xl font-headline text-lg font-black ${
                    step.highlight ? "bg-white/20 text-white" : "bg-crimson/10 text-crimson"
                  }`}
                >
                  {step.num}
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                  className={`mb-4 font-headline text-xl font-black md:text-2xl ${
                    step.highlight ? "text-white" : "text-ink"
                  }`}
                >
                  {step.title}
                </motion.h3>
                <p className={`mb-6 text-sm leading-relaxed md:mb-8 md:text-base ${step.highlight ? "text-white/75" : "text-ink/55"}`}>
                  {step.desc}
                </p>
                <ul className="space-y-3">
                  {step.items.map((item, j) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.6 + i * 0.15 + j * 0.08 }}
                      className={`flex items-center gap-3 text-sm font-medium ${
                        step.highlight ? "text-white/90" : "text-ink/65"
                      }`}
                    >
                      <CheckCircle
                        size={15}
                        className={step.highlight ? "text-white/70 shrink-0" : "text-crimson shrink-0"}
                      />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Beyond the Mat ───────────────────────────────── */}
      <section className="bg-surface-lightest py-16 overflow-hidden md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
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
                className="overflow-hidden rounded-4xl shadow-2xl md:rounded-5xl"
              >
                <Image
                  src="https://images.unsplash.com/photo-1514050566906-8d077bae7046?w=800&q=80&fit=crop"
                  alt="Martial artist training"
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
                className="font-headline text-3xl font-black leading-tight tracking-tighter text-ink md:text-5xl"
              >
                Beyond the Mat: Fitness &amp; Protection
              </motion.h2>

              <div className="mt-8 space-y-4 md:mt-10 md:space-y-5">
                {beyondBenefits.map((b, i) => (
                  <motion.div
                    key={b.title}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="rounded-2xl bg-white p-5 ring-1 ring-ink/5 shadow-sm overflow-hidden relative md:p-7"
                  >
                    <div className={`absolute left-0 top-0 bottom-0 w-1 ${b.accent}`} />
                    <h4 className="font-headline text-base font-bold text-ink pl-4 md:text-lg">{b.title}</h4>
                    <p className="mt-2 text-sm text-ink/55 leading-relaxed pl-4 md:text-base">{b.body}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <ContactCTA
        heading="Interested? Get in touch."
        subtext="Next beginner course starts soon. Drop us a message to reserve your spot or ask any questions."
      />
    </>
  );
}
