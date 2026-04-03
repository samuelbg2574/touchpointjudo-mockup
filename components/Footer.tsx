import Link from "next/link";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { CONTACT_EMAIL, CONTACT_PHONE, WHATSAPP_URL, MAILTO_URL } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="bg-ink text-white/60">
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-16">
        <div className="grid gap-8 md:gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <span className="block font-headline text-lg font-black text-white mb-3">
              Touch Point Judo Academy
            </span>
            <p className="text-sm leading-relaxed max-w-xs">
              Building stronger bodies, sharper minds, and lasting character through the art of Judo.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 font-headline text-xs font-bold uppercase tracking-widest text-white/40">
              Explore
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/kids", label: "Kids Classes" },
                { href: "/adults", label: "Adult Classes" },
                { href: "/timetable", label: "Timetable" },
                { href: "/about", label: "About Us" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-headline text-xs font-bold uppercase tracking-widest text-white/40">
              Get In Touch
            </h4>
            <div className="space-y-4">
              <a
                href={MAILTO_URL}
                className="flex items-center gap-3 text-sm transition-colors hover:text-white"
              >
                <Mail size={16} className="text-crimson shrink-0" />
                {CONTACT_EMAIL}
              </a>
              <a
                href={`tel:${CONTACT_PHONE}`}
                className="flex items-center gap-3 text-sm transition-colors hover:text-white"
              >
                <Phone size={16} className="text-crimson shrink-0" />
                {CONTACT_PHONE}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm transition-colors hover:text-white"
              >
                <MessageCircle size={16} className="text-green-400 shrink-0" />
                WhatsApp Us
              </a>
            </div>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-col gap-3">
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
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-xs text-white/30">
          © {new Date().getFullYear()} Touch Point Judo Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
