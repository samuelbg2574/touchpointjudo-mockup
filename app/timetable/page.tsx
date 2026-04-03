"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, ChevronRight, MapPin } from "lucide-react";
import { ContactCTA } from "@/components/ContactCTA";
import { BookingForm } from "@/components/BookingForm";
import type { ClassEntry } from "@/lib/airtable";

type Filter = "all" | "kids" | "adults";

interface DaySchedule {
  day: string;
  classes: ClassEntry[];
}

const statusConfig = {
  available: {
    label: "Available",
    className: "bg-green-50 text-green-700",
  },
  limited: {
    label: "Limited Spaces",
    className: "bg-orange-50 text-orange-600",
  },
  enrolling: {
    label: "Enrolling Now",
    className: "bg-crimson/10 text-crimson",
  },
};

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "All Classes" },
  { value: "kids", label: "Kids Programs" },
  { value: "adults", label: "Adult Programs" },
];

// Fallback schedule for when Airtable is not available
const fallbackClasses: ClassEntry[] = [
  {
    id: "1",
    category: "adults",
    program: "Adult Beginner Course",
    ageGroup: "18+",
    time: "7:00 pm",
    endTime: "8:30 pm",
    duration: "90 min",
    level: "Beginner",
    status: "enrolling",
    day: "Monday",
  },
  {
    id: "2",
    category: "kids",
    program: "Little Tigers",
    ageGroup: "Ages 4–7",
    time: "4:30 pm",
    endTime: "5:30 pm",
    duration: "60 min",
    level: "Beginner",
    status: "limited",
    day: "Tuesday",
  },
  {
    id: "3",
    category: "adults",
    program: "Adult Beginner Course",
    ageGroup: "18+",
    time: "7:00 pm",
    endTime: "8:30 pm",
    duration: "90 min",
    level: "Beginner",
    status: "enrolling",
    day: "Wednesday",
  },
  {
    id: "4",
    category: "kids",
    program: "Young Samurais",
    ageGroup: "Ages 8–12",
    time: "5:00 pm",
    endTime: "6:15 pm",
    duration: "75 min",
    level: "Intermediate",
    status: "available",
    day: "Thursday",
  },
  {
    id: "5",
    category: "adults",
    program: "Open Mat",
    ageGroup: "18+",
    time: "7:00 pm",
    endTime: "8:30 pm",
    duration: "90 min",
    level: "All levels",
    status: "available",
    day: "Friday",
  },
  {
    id: "6",
    category: "kids",
    program: "Little Tigers",
    ageGroup: "Ages 4–7",
    time: "9:00 am",
    endTime: "10:00 am",
    duration: "60 min",
    level: "Beginner",
    status: "limited",
    day: "Saturday",
  },
  {
    id: "7",
    category: "kids",
    program: "Young Samurais",
    ageGroup: "Ages 8–12",
    time: "10:15 am",
    endTime: "11:30 am",
    duration: "75 min",
    level: "Intermediate",
    status: "available",
    day: "Saturday",
  },
  {
    id: "8",
    category: "adults",
    program: "Advanced Training",
    ageGroup: "18+",
    time: "12:00 pm",
    endTime: "1:30 pm",
    duration: "90 min",
    level: "Advanced",
    status: "available",
    day: "Saturday",
  },
];

export default function TimetablePage() {
  const [filter, setFilter] = useState<Filter>("all");
  const [classes, setClasses] = useState<ClassEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadClasses() {
      try {
        const response = await fetch("/api/classes");
        if (response.ok) {
          const data = await response.json();
          setClasses(data);
        } else {
          setClasses(fallbackClasses);
        }
      } catch (error) {
        console.warn("Failed to load classes, using fallback:", error);
        setClasses(fallbackClasses);
      } finally {
        setIsLoading(false);
      }
    }

    loadClasses();
  }, []);

  // Group classes by day
  const scheduleByDay = (classes: ClassEntry[]): DaySchedule[] => {
    const days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    return days
      .map((day) => ({
        day,
        classes: classes.filter((c) => c.day === day),
      }))
      .filter((day) => day.classes.length > 0);
  };

  const schedule = scheduleByDay(classes);

  const visibleSchedule = schedule
    .map((day) => ({
      ...day,
      classes: day.classes.filter(
        (c) => filter === "all" || c.category === filter
      ),
    }))
    .filter((day) => day.classes.length > 0);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-surface-lightest pb-12 pt-24 md:pb-16 md:pt-32">
        {/* Decorative blob */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-[300px] w-[300px] rounded-full bg-crimson/5 blur-3xl md:-right-64 md:-top-64 md:h-[600px] md:w-[600px]" />

        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-block rounded-full bg-crimson/10 px-4 py-1.5 font-headline text-xs font-bold uppercase tracking-widest text-crimson"
          >
            2025 Schedule
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
            <MapPin size={14} className="text-crimson shrink-0" />
            <span>Beechcroft Road, London SW17 7DF</span>
          </motion.div>
        </div>
      </section>

      {/* ── Schedule ─────────────────────────────────────── */}
      <section className="bg-white py-10 md:py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10">

          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mb-10 flex w-fit items-center gap-1 rounded-2xl bg-surface-lightest p-1.5 ring-1 ring-ink/5 md:mb-12"
          >
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
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

          {/* Day rows */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-6 md:space-y-8"
            >
              {visibleSchedule.map((day, di) => (
                <motion.div
                  key={day.day}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: di * 0.06 }}
                  className="grid grid-cols-1 gap-4 md:grid-cols-[140px_1fr] md:gap-6 lg:grid-cols-[180px_1fr]"
                >
                  {/* Day label */}
                  <div className="flex items-center gap-3 md:block md:pt-6">
                    <h3 className="font-headline text-lg font-black text-ink md:text-xl">
                      {day.day}
                    </h3>
                    <div className="h-px flex-1 bg-surface-mid md:hidden" />
                  </div>

                  {/* Class cards */}
                  <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                    {day.classes.map((cls, ci) => {
                      const status = statusConfig[cls.status];
                      const isKids = cls.category === "kids";
                      return (
                        <motion.div
                          key={cls.id}
                          initial={{ opacity: 0, scale: 0.97 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: ci * 0.07 }}
                          className="group relative overflow-hidden rounded-2xl bg-surface-lightest p-5 ring-1 ring-ink/5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg md:p-6"
                        >
                          {/* Left accent border */}
                          <div
                            className={`absolute left-0 top-0 bottom-0 w-[3px] ${
                              isKids ? "bg-crimson" : "bg-navy"
                            }`}
                          />

                          <div className="pl-4">
                            {/* Status */}
                            <span
                              className={`inline-block rounded-full px-2.5 py-0.5 font-headline text-[11px] font-bold ${status.className}`}
                            >
                              {status.label}
                            </span>

                            {/* Program name */}
                            <h4 className="mt-3 font-headline text-base font-black text-ink md:text-lg">
                              {cls.program}
                            </h4>

                            {/* Tags */}
                            <div className="mt-2 flex flex-wrap items-center gap-2">
                              <span
                                className={`rounded-full px-2.5 py-0.5 font-headline text-[11px] font-bold ${
                                  isKids
                                    ? "bg-crimson/10 text-crimson"
                                    : "bg-navy/10 text-navy"
                                }`}
                              >
                                {cls.ageGroup}
                              </span>
                              <span className="text-xs text-ink/40">{cls.level}</span>
                            </div>

                            {/* Time */}
                            <div className="mt-4 flex items-center gap-2 text-sm text-ink/55">
                              <Clock size={13} className="shrink-0 text-ink/35" />
                              <span className="font-medium">
                                {cls.time} – {cls.endTime}
                              </span>
                              <span className="text-xs text-ink/35">
                                · {cls.duration}
                              </span>
                            </div>

                            {/* Book CTA */}
                            <div className={`mt-4 inline-flex items-center gap-1 font-headline text-xs font-bold transition-all ${
                              isKids
                                ? "text-crimson"
                                : "text-navy"
                            }`}>
                              <span>See form below</span>
                              <ChevronRight
                                size={13}
                                className="transition-transform duration-200"
                              />
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Legend */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-4 rounded-2xl bg-surface-lightest px-5 py-4 ring-1 ring-ink/5 md:mt-14 md:gap-6 md:px-6"
          >
            <span className="font-headline text-xs font-bold uppercase tracking-widest text-ink/35">
              Key
            </span>
            <div className="flex items-center gap-2">
              <div className="h-3.5 w-[3px] rounded-full bg-crimson" />
              <span className="text-sm font-medium text-ink/60">Kids Programs</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3.5 w-[3px] rounded-full bg-navy" />
              <span className="text-sm font-medium text-ink/60">Adult Programs</span>
            </div>
            <div className="ml-auto flex flex-wrap gap-2">
              <span className="rounded-full bg-green-50 px-3 py-1 font-headline text-xs font-bold text-green-700">
                Available
              </span>
              <span className="rounded-full bg-orange-50 px-3 py-1 font-headline text-xs font-bold text-orange-600">
                Limited Spaces
              </span>
              <span className="rounded-full bg-crimson/10 px-3 py-1 font-headline text-xs font-bold text-crimson">
                Enrolling Now
              </span>
            </div>
          </motion.div>

          {/* Note */}
          <p className="mt-6 text-center text-sm text-ink/40">
            Schedule subject to change during school holidays. Contact us to confirm availability.
          </p>
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
              Fill in your details and choose a class. We'll be in touch to confirm your booking.
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
              <div className="text-center py-8 text-ink/60">Loading form...</div>
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
