"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";
import { WHATSAPP_URL, MAILTO_URL } from "@/lib/utils";

interface ContactCTAProps {
  heading?: string;
  subtext?: string;
  dark?: boolean;
}

export function ContactCTA({
  heading = "Ready to start your journey?",
  subtext = "No experience or equipment required for your first session. Reach out — we'd love to hear from you.",
  dark = true,
}: ContactCTAProps) {
  return (
    <section
      className={`relative overflow-hidden py-16 md:py-28 ${
        dark ? "bg-ink text-white" : "bg-surface-light text-ink"
      }`}
    >
      {/* decorative blobs */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-crimson/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-crimson/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-headline text-3xl font-black leading-tight md:text-6xl text-balance"
        >
          {heading}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className={`mt-6 text-lg leading-relaxed ${
            dark ? "text-white/60" : "text-ink/60"
          }`}
        >
          {subtext}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 font-headline text-sm font-bold text-white shadow-lg shadow-green-500/30 transition-all hover:-translate-y-0.5 hover:bg-green-600 hover:shadow-xl md:px-8 md:py-4 md:text-base"
          >
            <MessageCircle size={18} />
            WhatsApp Us
          </a>
          <a
            href={MAILTO_URL}
            className={`flex items-center gap-2 rounded-full border px-6 py-3 font-headline text-sm font-bold transition-all hover:-translate-y-0.5 md:px-8 md:py-4 md:text-base ${
              dark
                ? "border-white/20 text-white hover:bg-white/10"
                : "border-ink/20 text-ink hover:bg-ink/5"
            }`}
          >
            <Mail size={18} />
            Send an Email
          </a>
        </motion.div>

        <p
          className={`mt-8 text-xs font-medium uppercase tracking-widest ${
            dark ? "text-white/30" : "text-ink/30"
          }`}
        >
          No experience or equipment required for your first session
        </p>
      </div>
    </section>
  );
}
