"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/kids", label: "Kids" },
  { href: "/adults", label: "Adults" },
  { href: "/about", label: "About" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-xl shadow-sm transition-all duration-500"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        {/* Logo */}
        <Link
          href="/"
          className="font-headline text-lg font-black tracking-tight text-crimson"
        >
          Touch Point Judo Academy
        </Link>

        {/* Desktop links */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "relative font-headline text-sm font-bold tracking-tight transition-colors",
                  active ? "text-crimson" : "text-ink/60 hover:text-ink"
                )}
              >
                {l.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-crimson"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <a
          href="mailto:hello@touchpointjudo.com"
          className="hidden rounded-full bg-crimson px-5 py-2 font-headline text-sm font-bold text-white shadow-md shadow-crimson/30 transition-all hover:bg-crimson-dark hover:shadow-lg md:inline-flex"
        >
          Get in Touch
        </a>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="rounded-full p-2 text-ink transition-colors hover:bg-surface-mid md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-surface-mid bg-white/95 backdrop-blur-xl px-6 pb-6 pt-4 md:hidden"
          >
            <nav className="flex flex-col gap-4">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "font-headline text-base font-bold",
                    pathname === l.href ? "text-crimson" : "text-ink/70"
                  )}
                >
                  {l.label}
                </Link>
              ))}
              <a
                href="mailto:hello@touchpointjudo.com"
                className="mt-2 rounded-full bg-crimson px-6 py-3 text-center font-headline font-bold text-white"
              >
                Get in Touch
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
