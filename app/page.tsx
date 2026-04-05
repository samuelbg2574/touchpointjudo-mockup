"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Shield, Brain, Zap } from "lucide-react";
import { ContactCTA } from "@/components/ContactCTA";
import { WHATSAPP_URL } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const benefits = [
  {
    icon: Shield,
    title: "Discipline",
    body: "Kids learn to listen, follow instructions, and stick with things even when they're hard. Adults find structure that carries over into daily life.",
  },
  {
    icon: Brain,
    title: "Confidence",
    body: "There's nothing quite like landing your first throw. Every small win on the mat builds real, earned self-belief.",
  },
  {
    icon: Zap,
    title: "Fitness",
    body: "Judo is a full-body workout disguised as fun. You'll build strength, balance, and coordination without ever touching a treadmill.",
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        {/* background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1549824506-bfeba88865d6?w=1920&q=80&fit=crop"
            alt="Two judokas sparring in a dojo"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/60 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24 pb-16 md:pt-28 md:pb-20 md:px-10">
          <motion.span
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mb-6 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-headline text-xs font-bold uppercase tracking-widest text-white backdrop-blur-sm"
          >
            Welcome to the Mat
          </motion.span>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="font-headline text-4xl sm:text-5xl font-black leading-[1.05] tracking-tighter text-white md:text-7xl lg:text-8xl max-w-3xl"
          >
            Judo for Kids{" "}
            <span className="text-crimson-muted">&amp;</span> Adults{" "}
            <span className="italic font-extrabold">in Tooting</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-md text-base leading-relaxed text-white/70 md:mt-8 md:text-xl"
          >
            Friendly, welcoming classes for all ages and abilities. Whether your child needs a confidence boost or you fancy trying something new yourself, we&apos;d love to have you.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-8 flex flex-wrap gap-3 md:mt-10 md:gap-4"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 font-headline text-sm font-bold text-white backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white/20 hover:shadow-xl md:px-8 md:py-4 md:text-base"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
            <Link
              href="/about"
              className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 font-headline text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20 md:px-8 md:py-4 md:text-base"
            >
              Learn More <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        {/* scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="h-10 w-6 rounded-full border-2 border-white/30 flex items-start justify-center pt-1.5"
          >
            <div className="h-2 w-1 rounded-full bg-white/60" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── Philosophy ───────────────────────────────────── */}
      <section className="bg-white py-16 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid items-center gap-10 md:gap-16 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="mb-4 inline-block font-headline text-xs font-bold uppercase tracking-widest text-crimson">
                Our Philosophy
              </span>
              <h2 className="font-headline text-3xl font-black leading-tight tracking-tighter text-ink md:text-6xl">
                Building{" "}
                <span className="text-crimson">Confidence</span>{" "}
                and{" "}
                <span className="text-crimson">Discipline</span>
              </h2>
              <div className="mt-6 h-1 w-16 rounded-full bg-crimson" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-base leading-relaxed text-ink/60 md:text-lg">
                At Touch Point, we believe judo teaches you more than how to throw someone. It teaches patience, respect, and how to pick yourself up when things don&apos;t go your way. We keep classes small, coaches qualified, and the atmosphere friendly. If you&apos;re looking for somewhere your child can thrive, or a challenge for yourself, come and see what we&apos;re about.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Benefits ─────────────────────────────────────── */}
      <section className="bg-surface-lightest py-16 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-10 text-center md:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-headline text-3xl font-black tracking-tighter text-ink md:text-5xl"
            >
              Why Choose Judo?
            </motion.h2>
            <p className="mt-4 text-ink/50">
              It&apos;s not just about sport. Here&apos;s what our students actually get out of training.
            </p>
          </div>

          <div className="grid gap-4 md:gap-6 md:grid-cols-3">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="group rounded-3xl bg-white p-7 shadow-sm ring-1 ring-ink/5 transition-shadow hover:shadow-xl md:p-10"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-crimson/10 transition-colors group-hover:bg-crimson md:mb-8">
                  <b.icon
                    size={26}
                    className="text-crimson transition-colors group-hover:text-white"
                  />
                </div>
                <h3 className="mb-3 font-headline text-xl font-bold text-ink md:text-2xl">
                  {b.title}
                </h3>
                <p className="leading-relaxed text-ink/55 text-sm md:text-base">{b.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Programs ─────────────────────────────────────── */}
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
              Our Programs
            </motion.h2>
          </div>

          <div className="grid gap-4 md:gap-6 lg:grid-cols-2">
            {/* Kids */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="group relative h-[320px] overflow-hidden rounded-4xl sm:h-[420px] md:h-[520px]"
            >
              <Image
                src="https://images.unsplash.com/photo-1542937307-e90d0cc07237?w=1200&q=80&fit=crop"
                alt="Kids practicing martial arts together"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-10">
                <h3 className="mb-2 font-headline text-3xl font-black text-white md:mb-3 md:text-4xl">
                  Kids Classes
                </h3>
                <p className="mb-4 max-w-sm text-white/75 text-sm md:mb-6 md:text-base">
                  Fun, structured sessions for ages 4 to 12. First class is free.
                </p>
                <Link
                  href="/kids"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 font-headline text-sm font-bold text-crimson transition-all hover:bg-crimson hover:text-white md:px-7 md:py-3"
                >
                  Learn More <ArrowRight size={15} />
                </Link>
              </div>
            </motion.div>

            {/* Adults */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="group relative h-[320px] overflow-hidden rounded-4xl sm:h-[420px] md:h-[520px]"
            >
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwPncJOBBm27hYNefF8e_oFwsU6lHEti_YUVseGIC2O8k93ZsSaL5K2clYUMf7HuukcvqFY-muHwVu6fsIE64hOfbAgDqSXVim33s32dr0UZ4hjjGt5whHXG1OjFKql60j215G7NungVUrZc1nzhmV5AEudw7ewRTgMaT_oia9YnDiIP0Q9rLkZ7eVNVYFw8idE9cAy_X9ABeQL2YgHF-hilajACcUqQIfaBa1EoQlab5HtitkJfh5ZAX8kt17dqk3eHCPKTLgEWI"
                alt="Adults judo class"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-10">
                <h3 className="mb-2 font-headline text-3xl font-black text-white md:mb-3 md:text-4xl">
                  Adult Classes
                </h3>
                <p className="mb-4 max-w-sm text-white/75 text-sm md:mb-6 md:text-base">
                  Complete beginners welcome. No experience or fitness level needed.
                </p>
                <Link
                  href="/adults"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 font-headline text-sm font-bold text-navy transition-all hover:bg-navy hover:text-white md:px-7 md:py-3"
                >
                  Learn More <ArrowRight size={15} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <ContactCTA
        heading="Come and try a class"
        subtext="Your first session is free and you don't need any equipment. Just drop us a message and we'll get you booked in."
      />
    </>
  );
}
