"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, CheckCircle, Mail, MessageCircle, Phone, MapPin } from "lucide-react";
import { CONTACT_EMAIL, CONTACT_PHONE, WHATSAPP_URL, MAILTO_URL } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const sensei = {
  name: "Sensei David Chen",
  role: "Head Instructor & Founder",
  rank: "6th Dan Black Belt",
  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrtioFoKOmjIdGhCejxOaEo8tiFDxBJtGNJgdjSynxWvSypbvCznNpH20qD7-5Nzbl-uhCsko7u2b2Eoa-cl6rPNY9NbVaVrMoBNfhwz7eWvvty-Fa7JSQqnOYOWnVElt0u_uno-ohEjwchcgLg2KxcshFSBoQgCZVbeXRlEDJnrOsZqyrIn_x17yIos6M6db-qebTyw_EwaVDShiMGp950QDCxu1PPqEdz6U6JoT4jDl6Bx9nyoxFO1thiKRuBSI-jElQdqsR-u4",
  bio: [
    "With over 25 years of competitive and coaching experience, Sensei David Chen founded Touch Point Judo Academy on the belief that Judo is a vehicle for personal transformation — not just a sport.",
    "A former Olympic alternate and multiple-time national medallist, Sensei Chen brings world-class technical knowledge to every session while maintaining an approachable, student-first teaching philosophy.",
    "His coaching style blends traditional Japanese Judo values with modern sport science, ensuring students of all ages develop not only on the mat but in every area of their lives. He holds advanced coaching certifications from the BJA and is a qualified DBS-checked instructor.",
  ],
};

const facilityFeatures = [
  {
    title: "Olympic Standard Mats",
    body: "Professional-grade tatami with high impact absorption for maximum safety during throws.",
  },
  {
    title: "Modern Amenities",
    body: "Spacious changing rooms, clean showers, and a comfortable viewing area for parents.",
  },
  {
    title: "Dedicated S&C Zone",
    body: "A specialised strength and conditioning area tailored for martial arts functional training.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-surface-lightest pt-20">
        {/* Decorative blob — reduced size on mobile */}
        <div className="pointer-events-none absolute -right-32 top-0 h-[400px] w-[400px] rounded-full bg-crimson/5 blur-3xl md:-right-64 md:h-[700px] md:w-[700px]" />

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 md:gap-16 md:px-10 md:py-28 lg:grid-cols-2">
          {/* Copy */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5 inline-block rounded-full bg-crimson/10 px-4 py-1.5 font-headline text-xs font-bold uppercase tracking-widest text-crimson"
            >
              Established 2012
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="font-headline text-4xl font-black leading-[1.05] tracking-tighter text-ink sm:text-5xl md:text-7xl"
            >
              Our Academy,
              <br />
              <span className="italic text-crimson">Our Community</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 max-w-lg text-base leading-relaxed text-ink/60 md:mt-6 md:text-lg"
            >
              More than just a dojo. We are a family of martial artists dedicated to the principles of Maximum Efficiency and Mutual Benefit. Join a legacy of excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-3 md:mt-10 md:gap-4"
            >
              <a
                href="/kids"
                className="rounded-full bg-crimson px-6 py-3 font-headline text-sm font-bold text-white shadow-lg shadow-crimson/25 transition-all hover:-translate-y-0.5 hover:shadow-xl md:px-8 md:py-4"
              >
                Explore Our Programs
              </a>
              <a
                href="#contact"
                className="rounded-full border border-ink/15 bg-white px-6 py-3 font-headline text-sm font-bold text-ink transition-all hover:bg-surface-light md:px-8 md:py-4"
              >
                Get In Touch
              </a>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-4xl shadow-2xl">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0jIzY7qJkHNKrfsCw8roYRtRZGieo--jYCe-2U7XHLpNXbgiehO4fgsZCEUxAeTXTFevhV41HkRocgLB1P1YnOGXDmCOGEjT-XTHrXQpuEUu6m-rgsyKoAMaFuuSwXpIhr7mv2EtDiJr5QLnb5pPc1K1DqBrAKyTrhMimJ97x8xfMtp0LfLY6tzFvyTok8UI1t3163YRG_ZA466j0o_O_eGYVKiXhEXs4vIcMVQGYjdCQVFij75GscMfXJle38d6VPph-v7EU9Qk"
                alt="Touch Point Judo Academy community"
                width={700}
                height={875}
                className="aspect-[4/5] w-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            {/* floating review badge */}
            <div className="absolute -bottom-4 -left-4 hidden rounded-2xl bg-white p-4 shadow-xl ring-1 ring-ink/5 sm:-bottom-6 sm:-left-6 sm:block sm:p-5">
              <div className="mb-2 flex gap-0.5 text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="font-headline text-sm font-bold text-ink max-w-[160px]">
                &ldquo;The best community for growing athletes in the region.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Mission ──────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-4 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl bg-surface-lightest p-8 ring-1 ring-ink/5 md:col-span-2 md:p-12"
            >
              <h2 className="mb-5 font-headline text-2xl font-black text-ink md:text-3xl">Our Mission &amp; Values</h2>
              <p className="text-base leading-relaxed text-ink/60 md:text-lg">
                Touch Point Judo Academy was founded on the principle of{" "}
                <span className="font-bold text-crimson">Jita Kyoei</span>{" "}
                (Mutual Benefit and Welfare). Our goal is to forge resilient spirits and capable bodies through the traditional art of Judo, fostering a safe environment where every student reaches their highest potential.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col items-center justify-center rounded-3xl bg-crimson p-8 text-center text-white md:p-12"
            >
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                <Star size={28} fill="currentColor" className="text-white" />
              </div>
              <h3 className="mb-3 font-headline text-xl font-black md:text-2xl">Integrity First</h3>
              <p className="text-sm leading-relaxed text-white/70">
                Character development is at the heart of everything we do, on and off the mat.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Sensei ────────────────────────────────────────── */}
      <section className="bg-surface-lightest py-16 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-10 text-center md:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-headline text-3xl font-black tracking-tighter text-ink md:text-5xl"
            >
              Meet Our Sensei
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[auto_1fr] lg:gap-16">
            {/* Image + Name */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative mb-6 md:mb-8">
                {/* decorative rings */}
                <div className="absolute inset-0 rounded-full border-2 border-crimson/15 scale-[1.15]" />
                <div className="absolute inset-0 rounded-full border border-crimson/10 scale-[1.3]" />
                <div className="relative h-48 w-48 overflow-hidden rounded-full shadow-xl ring-4 ring-white md:h-56 md:w-56">
                  <Image
                    src={sensei.img}
                    alt={sensei.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <h3 className="font-headline text-xl font-black text-ink md:text-2xl">{sensei.name}</h3>
              <p className="mt-2 font-headline text-sm font-bold text-crimson">{sensei.role}</p>
              <div className="mt-3 inline-block rounded-full bg-crimson/10 px-4 py-1.5 font-headline text-xs font-bold uppercase tracking-widest text-crimson">
                {sensei.rank}
              </div>
            </motion.div>

            {/* Bio text */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="space-y-4 md:space-y-5"
            >
              {sensei.bio.map((paragraph, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="text-base leading-relaxed text-ink/60 md:text-lg"
                >
                  {paragraph}
                </motion.p>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="mt-6 flex flex-wrap gap-3 pt-2 md:mt-8 md:gap-4 md:pt-4"
              >
                {["BJA Certified Coach", "DBS Checked", "First Aid Trained", "Safeguarding Lead"].map((badge) => (
                  <div key={badge} className="flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-medium text-ink/70 ring-1 ring-ink/5 md:px-4 md:text-sm">
                    <CheckCircle size={14} className="text-crimson shrink-0" />
                    {badge}
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Facility ─────────────────────────────────────── */}
      <section className="overflow-hidden bg-white py-16 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Images */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full bg-crimson/5 blur-3xl" />
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqM0aaIT8hBVwMZTsjous4wnsL7YOTWQwsDxew7R2QzCLK2hNPwB6oy1MJ2h5fvryPecl-ifFnCb4hbUfnERFunkuSS1i47PyDBU-rZWr7jw6R8_2MbHTKY7HXO_QHikJ_rDenLAydhCoCHbWk_DXfb1G2K6XrdlEETmJOjFQZq547Z_YxazpKh0nxvEc5e4BR8gGRb_REciM3fs2xKBUnBT0B1X_woZbe74WfKF7k0pR6elfmupPXXg_JrhsPwSX1-zaV9Rkwsxo"
                alt="World-class dojo interior"
                width={640}
                height={480}
                className="relative z-10 w-full rounded-4xl shadow-2xl"
              />
              {/* inset detail image — hidden on mobile */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-8 -right-8 z-20 hidden h-40 w-40 overflow-hidden rounded-3xl bg-white p-2 shadow-xl md:block"
              >
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuByBleTJo44rdmuNmDPfIfkrg-bE6lZHXmh6YpDXyj_Mggj1jV9KJ_HQG2SPo7KeaPEFFQ2Z1jQrJMilZJEuph1HNuzgu78yPFgxZ9bfuOmwHZiVtdyya4mKQbeiP_Jb87N4MqnF5y4EUSgQinszQ0ISYYEtdpke5X5kCxkex_irzVc_abbqLuLu1d4RwkMQO47fmpB91uyY_TbUVQV8jlezZjGEXfPYHiJG9xxt9ESW6ClQq62ab_6uXV0gayT-tRtDa_agcO2rvI"
                  alt="Judo equipment"
                  fill
                  className="rounded-2xl object-cover"
                />
              </motion.div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-headline text-3xl font-black tracking-tighter text-ink md:text-5xl">
                World-Class Dojo Environment
              </h2>
              <div className="mt-8 space-y-5 md:mt-10 md:space-y-6">
                {facilityFeatures.map((f, i) => (
                  <motion.div
                    key={f.title}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex gap-4 md:gap-5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-crimson/10">
                      <CheckCircle size={20} className="text-crimson" />
                    </div>
                    <div>
                      <h5 className="font-headline font-bold text-ink">{f.title}</h5>
                      <p className="mt-1 text-sm leading-relaxed text-ink/55">{f.body}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Contact / Map ────────────────────────────────── */}
      <section className="bg-surface-lightest py-16 md:py-28" id="contact">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-10 text-center md:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-headline text-3xl font-black tracking-tighter text-ink md:text-5xl"
            >
              Visit Us
            </motion.h2>
            <p className="mt-4 text-ink/50">Come find us — the kettle is always on.</p>
          </div>

          <div className="overflow-hidden rounded-4xl shadow-xl ring-1 ring-ink/5 lg:flex">
            {/* Contact panel */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-ink p-8 text-white md:p-12 lg:w-1/3"
            >
              <h3 className="mb-6 font-headline text-2xl font-black md:mb-8">Get In Touch</h3>

              <div className="space-y-6 md:space-y-8">
                <div className="flex items-start gap-4">
                  <MapPin size={20} className="mt-0.5 shrink-0 text-crimson-muted" />
                  <div>
                    <p className="font-headline font-bold">Location</p>
                    <p className="mt-1 text-sm text-white/60">
                      Parkham Street<br />Battersea, London SW11 3DQ
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone size={20} className="mt-0.5 shrink-0 text-crimson-muted" />
                  <div>
                    <p className="font-headline font-bold">Call Us</p>
                    <a
                      href={`tel:${CONTACT_PHONE}`}
                      className="mt-1 block text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {CONTACT_PHONE}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail size={20} className="mt-0.5 shrink-0 text-crimson-muted" />
                  <div>
                    <p className="font-headline font-bold">Email Us</p>
                    <a
                      href={MAILTO_URL}
                      className="mt-1 block text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10 space-y-3 md:mt-12">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-green-500 px-6 py-3 font-headline text-sm font-bold text-white transition-colors hover:bg-green-600"
                >
                  <MessageCircle size={16} />
                  WhatsApp Us
                </a>
                <a
                  href={MAILTO_URL}
                  className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 font-headline text-sm font-bold text-white transition-colors hover:bg-white/10"
                >
                  <Mail size={16} />
                  Send an Email
                </a>
              </div>
            </motion.div>

            {/* Map */}
            <div className="relative min-h-[300px] flex-1 bg-surface-mid md:min-h-[400px]">
              <iframe
                src="https://www.google.com/maps?q=Touch%20Point%20Judo%20Academy%2C%20Parkham%20Street%2C%20Battersea%2C%20London%20SW11%203DQ&z=15&output=embed"
                title="Touch Point Judo Academy on Google Maps"
                className="h-full min-h-[300px] w-full md:min-h-[400px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
