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
    body: "Learn consistency, respect, and the power of focused practice in a structured, purposeful environment.",
  },
  {
    icon: Brain,
    title: "Confidence",
    body: "Through skill mastery and physical challenge, students build an unshakeable sense of self-worth and resilience.",
  },
  {
    icon: Zap,
    title: "Fitness",
    body: "Improve balance, flexibility, and functional strength through dynamic movements and full-body conditioning.",
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
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoNvvqmzSr9gF1ghCOGwr6K8L0cPpwQNBPRMl0_Nk2wdZRsMEqzjQNiYXM-bIt0MEdead7lP9OwMnU1nhNgJ_r54GB5VKc9KkfqgqPnx0jHwzIlEo00xA8ARS5eGwrIg_R_IWFNXlN-J-HF4KTzItcZmTS1028InU_yNFrKYZMmKw1BxXILhs850524RpuC-qUe5YDnR-MBVOFFaqQ2kAewfTGVDG6wyin8kYMHBZ0-p7-5_SQibrpU2Dr03u6ij0miNjjfsPRDq8"
            alt="Touch Point Judo Academy"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/50 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 pb-20 md:px-10">
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
            className="font-headline text-5xl font-black leading-[1.05] tracking-tighter text-white md:text-7xl lg:text-8xl max-w-3xl"
          >
            Empowering Kids{" "}
            <span className="text-crimson-muted">&amp;</span> Adults{" "}
            <span className="italic font-extrabold">through Judo</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-8 max-w-md text-lg leading-relaxed text-white/70 md:text-xl"
          >
            Discover the art of balance, discipline, and respect. Join a community dedicated to personal growth and athletic excellence.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-green-500 px-8 py-4 font-headline text-base font-bold text-white shadow-lg shadow-green-500/40 transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
            <Link
              href="/about"
              className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 font-headline text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20"
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
      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="mb-4 inline-block font-headline text-xs font-bold uppercase tracking-widest text-crimson">
                Our Philosophy
              </span>
              <h2 className="font-headline text-4xl font-black leading-tight tracking-tighter text-ink md:text-6xl">
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
              <p className="text-lg leading-relaxed text-ink/60">
                Judo is more than a sport — it's a way of life. At Touch Point, we live by the philosophy of{" "}
                <em>"Maximum Efficiency, Mutual Welfare."</em>{" "}
                Whether you're a parent seeking a structured activity for your child or an adult ready for a new challenge, our academy offers a safe, supportive environment where growth is inevitable.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Benefits ─────────────────────────────────────── */}
      <section className="bg-surface-lightest py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-16 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-headline text-4xl font-black tracking-tighter text-ink md:text-5xl"
            >
              Why Choose Judo?
            </motion.h2>
            <p className="mt-4 text-ink/50">
              Foundational skills that transcend the mat and impact every area of life.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="group rounded-3xl bg-white p-10 shadow-sm ring-1 ring-ink/5 transition-shadow hover:shadow-xl"
              >
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-crimson/10 transition-colors group-hover:bg-crimson">
                  <b.icon
                    size={26}
                    className="text-crimson transition-colors group-hover:text-white"
                  />
                </div>
                <h3 className="mb-3 font-headline text-2xl font-bold text-ink">
                  {b.title}
                </h3>
                <p className="leading-relaxed text-ink/55">{b.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Programs ─────────────────────────────────────── */}
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
              Our Programs
            </motion.h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Kids */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="group relative h-[520px] overflow-hidden rounded-4xl"
            >
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDv3ANd6-b1Fi76mrfuAG0NCStE1CtNw7v_6dMP_hZkQ_TNQ8K5YTBHCG-5Z9dhhZwmMkD2uTdQK7KybcV95IAauy5q3Mwy-uXXYgkXL8YMIDbb7BYBMiXfYTyoQA_TQLYxxzQdFxTECcpsdAkvRYFVBpcMaDQeWWj_cCM9pHrOBWhI7igRPu0gxAinEgYocoa6Q4tE-4bs0cGptc_v1VJQN529QWOW3Ki_nJeRm18lCjJca-qm4DlL5plQJ5M4RZd2dRpnbAoFscE"
                alt="Kids judo class"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full p-10">
                <h3 className="mb-3 font-headline text-4xl font-black text-white">
                  Kids Classes
                </h3>
                <p className="mb-6 max-w-sm text-white/75">
                  Coordination, confidence, and character — for ages 5 and up.
                </p>
                <Link
                  href="/kids"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-headline text-sm font-bold text-crimson transition-all hover:bg-crimson hover:text-white"
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
              className="group relative h-[520px] overflow-hidden rounded-4xl"
            >
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwPncJOBBm27hYNefF8e_oFwsU6lHEti_YUVseGIC2O8k93ZsSaL5K2clYUMf7HuukcvqFY-muHwVu6fsIE64hOfbAgDqSXVim33s32dr0UZ4hjjGt5whHXG1OjFKql60j215G7NungVUrZc1nzhmV5AEudw7ewRTgMaT_oia9YnDiIP0Q9rLkZ7eVNVYFw8idE9cAy_X9ABeQL2YgHF-hilajACcUqQIfaBa1EoQlab5HtitkJfh5ZAX8kt17dqk3eHCPKTLgEWI"
                alt="Adults judo class"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full p-10">
                <h3 className="mb-3 font-headline text-4xl font-black text-white">
                  Adult Classes
                </h3>
                <p className="mb-6 max-w-sm text-white/75">
                  From first steps to competition. Technique, fitness, and community.
                </p>
                <Link
                  href="/adults"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-headline text-sm font-bold text-navy transition-all hover:bg-navy hover:text-white"
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
        heading="Ready to step on the mat?"
        subtext="No experience needed. Just the willingness to try. Reach out and we'll take care of the rest."
      />
    </>
  );
}
