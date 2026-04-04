"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin } from "lucide-react";
import { ContactCTA } from "@/components/ContactCTA";
import { BookingForm } from "@/components/BookingForm";
import type { ClassEntry } from "@/lib/airtable";

type Filter = "all" | "kids" | "adults";

const DAY_ORDER = [
  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
];
const DAY_SHORT: Record<string, string> = {
  Monday: "Mon", Tuesday: "Tue", Wednesday: "Wed",
  Thursday: "Thu", Friday: "Fri", Saturday: "Sat", Sunday: "Sun",
};
const JS_DAY_MAP: Record<number, string> = {
  0: "Sunday", 1: "Monday", 2: "Tuesday", 3: "Wednesday",
  4: "Thursday", 5: "Friday", 6: "Saturday",
};

const statusConfig = {
  available: { label: "Available", text: "text-emerald-700", bg: "bg-emerald-50" },
  limited:   { label: "Limited",   text: "text-orange-600", bg: "bg-orange-50"  },
  enrolling: { label: "Enrolling", text: "text-crimson",    bg: "bg-crimson/10" },
  full:      { label: "Full",      text: "text-ink/50",     bg: "bg-ink/5"      },
};

const filters: { value: Filter; label: string }[] = [
  { value: "all",    label: "All Classes" },
  { value: "kids",   label: "Kids"        },
  { value: "adults", label: "Adults"      },
];

// Returns the date for a weekday within the current week (Mon–Sun), always sequential
function nextDateForDay(dayName: string): string {
  const targetIndex = DAY_ORDER.indexOf(dayName); // 0=Mon … 6=Sun
  const today = new Date();
  // JS getDay(): 0=Sun,1=Mon…6=Sat → convert to Mon-based index
  const todayIndex = (today.getDay() + 6) % 7;
  // Find Monday of this week, then add targetIndex days
  const monday = new Date(today);
  monday.setDate(today.getDate() - todayIndex);
  const target = new Date(monday);
  target.setDate(monday.getDate() + targetIndex);
  return target.toLocaleDateString("en-GB", { day: "numeric", month: "short" });
}

function timeToMinutes(time: string): number {
  const lower = time.toLowerCase().trim();
  const isPm = lower.includes("pm");
  const cleaned = lower.replace(/[apm\s]/g, "");
  const [h, m = "0"] = cleaned.split(":");
  let hours = parseInt(h);
  if (isPm && hours !== 12) hours += 12;
  if (!isPm && hours === 12) hours = 0;
  return hours * 60 + parseInt(m);
}

const fallbackClasses: ClassEntry[] = [
  { id: "1", category: "adults", program: "Adult Beginner Course", ageGroup: "18+",       time: "7:00 pm",  endTime: "8:30 pm",  duration: "90 min", level: "Beginner",     status: "enrolling", day: "Monday"    },
  { id: "2", category: "kids",   program: "Little Tigers",         ageGroup: "Ages 4–7",  time: "4:30 pm",  endTime: "5:30 pm",  duration: "60 min", level: "Beginner",     status: "limited",   day: "Tuesday"   },
  { id: "3", category: "adults", program: "Adult Beginner Course", ageGroup: "18+",       time: "7:00 pm",  endTime: "8:30 pm",  duration: "90 min", level: "Beginner",     status: "enrolling", day: "Wednesday" },
  { id: "4", category: "kids",   program: "Young Samurais",        ageGroup: "Ages 8–12", time: "5:00 pm",  endTime: "6:15 pm",  duration: "75 min", level: "Intermediate", status: "available", day: "Thursday"  },
  { id: "5", category: "adults", program: "Open Mat",              ageGroup: "18+",       time: "7:00 pm",  endTime: "8:30 pm",  duration: "90 min", level: "All levels",   status: "available", day: "Friday"    },
  { id: "6", category: "kids",   program: "Little Tigers",         ageGroup: "Ages 4–7",  time: "9:00 am",  endTime: "10:00 am", duration: "60 min", level: "Beginner",     status: "limited",   day: "Saturday"  },
  { id: "7", category: "kids",   program: "Young Samurais",        ageGroup: "Ages 8–12", time: "10:15 am", endTime: "11:30 am", duration: "75 min", level: "Intermediate", status: "available", day: "Saturday"  },
  { id: "8", category: "adults", program: "Advanced Training",     ageGroup: "18+",       time: "12:00 pm", endTime: "1:30 pm",  duration: "90 min", level: "Advanced",     status: "available", day: "Saturday"  },
];

// Skeleton pulse rows
function SkeletonCards() {
  return (
    <div className="space-y-3">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex overflow-hidden rounded-2xl bg-surface-lightest ring-1 ring-ink/5 animate-pulse">
          <div className="w-1 shrink-0 bg-ink/10" />
          <div className="flex flex-1 flex-col gap-3 px-5 py-5">
            <div className="h-7 w-28 rounded-lg bg-ink/8" />
            <div className="h-4 w-48 rounded-lg bg-ink/6" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function TimetablePage() {
  const todayName = JS_DAY_MAP[new Date().getDay()];

  const [filter, setFilter]         = useState<Filter>("all");
  const [selectedDay, setSelectedDay] = useState<string>(
    DAY_ORDER.includes(todayName) ? todayName : "Monday"
  );
  const [classes, setClasses]       = useState<ClassEntry[]>([]);
  const [isLoading, setIsLoading]   = useState(true);

  useEffect(() => {
    async function loadClasses() {
      try {
        const res = await fetch("/api/classes");
        if (res.ok && res.status !== 204) {
          const data = await res.json();
          setClasses(data.length > 0 ? data : fallbackClasses);
        } else {
          setClasses(fallbackClasses);
        }
      } catch {
        setClasses(fallbackClasses);
      } finally {
        setIsLoading(false);
      }
    }
    loadClasses();
  }, []);

  const filteredClasses = classes.filter(
    (c) => filter === "all" || c.category === filter
  );

  const daysWithClasses = DAY_ORDER.filter((day) =>
    filteredClasses.some((c) => c.day === day)
  );

  // When filter changes, snap to first available day if current day has no classes
  const handleFilterChange = (next: Filter) => {
    setFilter(next);
    const available = DAY_ORDER.filter((day) =>
      classes
        .filter((c) => next === "all" || c.category === next)
        .some((c) => c.day === day)
    );
    if (available.length > 0 && !available.includes(selectedDay)) {
      setSelectedDay(available[0]);
    }
  };

  const dayClasses = filteredClasses
    .filter((c) => c.day === selectedDay)
    .sort((a, b) => timeToMinutes(a.time) - timeToMinutes(b.time));

  // Show Mon–Sat always; Sunday only if it has classes
  const visibleDays = DAY_ORDER.filter(
    (d) => d !== "Sunday" || daysWithClasses.includes("Sunday")
  );

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-surface-lightest pb-12 pt-24 md:pb-16 md:pt-32">
        <div className="pointer-events-none absolute -right-32 -top-32 h-[300px] w-[300px] rounded-full bg-crimson/5 blur-3xl md:-right-64 md:-top-64 md:h-[600px] md:w-[600px]" />

        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-block rounded-full bg-crimson/10 px-4 py-1.5 font-headline text-xs font-bold uppercase tracking-widest text-crimson"
          >
            2026 Schedule
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="font-headline text-4xl font-black leading-[1.05] tracking-tighter text-ink sm:text-5xl md:text-7xl"
          >
            Class Timetable
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 max-w-xl text-base leading-relaxed text-ink/60 md:mt-6 md:text-lg"
          >
            Weekly classes for kids and adults at our Tooting dojo. Find a session that fits your schedule and get in touch to reserve your spot.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-5 flex items-center gap-2 text-sm text-ink/50"
          >
            <MapPin size={14} className="shrink-0 text-crimson" />
            <span>Beechcroft Road, London SW17 7DF</span>
          </motion.div>
        </div>
      </section>

      {/* ── Schedule ─────────────────────────────────────── */}
      <section className="bg-white py-10 md:py-16">
        <div className="mx-auto max-w-3xl px-6 md:px-10">

          {/* Category filter */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mb-6 flex w-fit items-center gap-1 rounded-2xl bg-surface-lightest p-1.5 ring-1 ring-ink/5"
          >
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => handleFilterChange(f.value)}
                className="relative rounded-xl px-4 py-2 font-headline text-sm font-bold transition-colors sm:px-5 sm:py-2.5"
              >
                {filter === f.value && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-xl bg-white shadow-sm ring-1 ring-ink/5"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span
                  className={`relative z-10 transition-colors ${
                    filter === f.value ? "text-ink" : "text-ink/45 hover:text-ink/70"
                  }`}
                >
                  {f.label}
                </span>
              </button>
            ))}
          </motion.div>

          {/* Day picker */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mb-8 flex gap-2 overflow-x-auto pb-1"
            style={{ scrollbarWidth: "none" }}
          >
            {visibleDays.map((day) => {
              const hasClasses = daysWithClasses.includes(day);
              const isSelected = day === selectedDay;
              return (
                <button
                  key={day}
                  onClick={() => hasClasses && setSelectedDay(day)}
                  disabled={!hasClasses}
                  className={`relative flex shrink-0 flex-col items-center rounded-2xl px-4 py-3 font-headline font-bold transition-all duration-200
                    ${isSelected
                      ? "bg-ink text-white shadow-md"
                      : hasClasses
                        ? "bg-surface-lightest text-ink hover:bg-surface-light ring-1 ring-ink/5"
                        : "bg-surface-lightest text-ink/20 cursor-not-allowed ring-1 ring-ink/5"
                    }`}
                >
                  <span className={`text-[10px] font-extrabold uppercase tracking-widest ${isSelected ? "text-white/60" : "text-ink/40"}`}>
                    {DAY_SHORT[day]}
                  </span>
                  <span className={`mt-0.5 text-xs font-semibold ${isSelected ? "text-white" : hasClasses ? "text-ink/70" : "text-ink/20"}`}>
                    {nextDateForDay(day).split(" ")[0]}
                  </span>
                  <span className={`text-[10px] ${isSelected ? "text-white/50" : hasClasses ? "text-ink/40" : "text-ink/15"}`}>
                    {nextDateForDay(day).split(" ")[1]}
                  </span>
                </button>
              );
            })}
          </motion.div>

          {/* Class cards */}
          {isLoading ? (
            <SkeletonCards />
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={`${filter}-${selectedDay}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
              >
                {dayClasses.length === 0 ? (
                  <p className="py-12 text-center text-ink/40">
                    No {filter === "all" ? "" : filter + " "}classes on {selectedDay}.
                  </p>
                ) : (
                  <div className="space-y-3">
                    {dayClasses.map((cls, i) => {
                      const isKids  = cls.category === "kids";
                      const status  = statusConfig[cls.status];
                      return (
                        <motion.div
                          key={cls.id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.25, delay: i * 0.07 }}
                          className="flex overflow-hidden rounded-2xl bg-surface-lightest ring-1 ring-ink/5"
                        >
                          {/* Category accent bar */}
                          <div className={`w-1 shrink-0 ${isKids ? "bg-crimson" : "bg-navy"}`} />

                          <div className="flex flex-1 flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:gap-0">
                            {/* Time */}
                            <div className="shrink-0 sm:w-36">
                              <p className="font-headline text-2xl font-black tracking-tight text-ink">
                                {cls.time}
                              </p>
                              <p className="mt-0.5 text-xs text-ink/45">
                                until {cls.endTime} · {cls.duration}
                              </p>
                            </div>

                            {/* Program info */}
                            <div className="flex-1 sm:px-5">
                              <p className="font-headline text-base font-black leading-tight text-ink">
                                {cls.program}
                              </p>
                              <p className="mt-1 text-sm text-ink/55">
                                {cls.ageGroup}
                                {cls.level ? ` · ${cls.level}` : ""}
                              </p>
                            </div>

                            {/* Badges */}
                            <div className="flex items-center gap-2 sm:flex-col sm:items-end sm:gap-1.5">
                              <span
                                className={`rounded-full px-2.5 py-1 font-headline text-xs font-bold ${
                                  isKids
                                    ? "bg-crimson/10 text-crimson"
                                    : "bg-navy/10 text-navy"
                                }`}
                              >
                                {isKids ? "Kids" : "Adults"}
                              </span>
                              <span
                                className={`rounded-full px-2.5 py-1 text-xs font-semibold ${status.bg} ${status.text}`}
                              >
                                {status.label}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                )}

                <p className="mt-6 text-center text-xs text-ink/35">
                  Schedule subject to change during school holidays.
                </p>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </section>

      {/* ── Booking Form ──────────────────────────────────── */}
      <section className="bg-surface-lightest py-16 md:py-28">
        <div className="mx-auto max-w-2xl px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-headline text-3xl font-black text-ink md:text-5xl">
              Ready to join?
            </h2>
            <p className="mt-3 text-lg text-ink/60">
              Fill in your details and choose a class. We&apos;ll be in touch to confirm your booking.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8 rounded-3xl bg-white p-8 ring-1 ring-ink/5 md:p-10"
          >
            {isLoading ? (
              <div className="py-8 text-center text-ink/60">Loading form...</div>
            ) : (
              <BookingForm classes={classes} />
            )}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <ContactCTA
        heading="Questions?"
        subtext="Get in touch on WhatsApp or email us directly for any inquiries about our programs."
      />
    </>
  );
}
