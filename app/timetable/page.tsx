"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin } from "lucide-react";
import { ContactCTA } from "@/components/ContactCTA";
import { BookingForm } from "@/components/BookingForm";
import type { ClassEntry } from "@/lib/airtable";

type Filter = "all" | "kids" | "adults";

const statusConfig = {
  available: {
    label: "Available",
    className: "bg-green-50 text-green-700 border-green-200",
  },
  limited: {
    label: "Limited",
    className: "bg-orange-50 text-orange-600 border-orange-200",
  },
  enrolling: {
    label: "Enrolling",
    className: "bg-crimson/10 text-crimson border-crimson/30",
  },
};

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "All Classes" },
  { value: "kids", label: "Kids Programs" },
  { value: "adults", label: "Adult Programs" },
];

// Fallback schedule
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
        if (response.ok && response.status !== 204) {
          const data = await response.json();
          setClasses(data.length > 0 ? data : fallbackClasses);
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

  // Filter classes
  const filteredClasses = classes.filter(
    (c) => filter === "all" || c.category === filter
  );

  // Days of week
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const daysWithClasses = days.filter((day) =>
    filteredClasses.some((c) => c.day === day)
  );

  // Get unique times sorted
  const uniqueTimes = Array.from(
    new Set(filteredClasses.map((c) => c.time))
  ).sort((a, b) => {
    const timeToMinutes = (time: string) => {
      const [hours, minutes] = time.toLowerCase().includes("pm")
        ? [parseInt(time), parseInt(time)]
        : [parseInt(time), parseInt(time)];
      return hours * 60 + minutes;
    };
    return timeToMinutes(a) - timeToMinutes(b);
  });

  // Get class for a specific day and time
  const getClassesForSlot = (day: string, time: string) => {
    return filteredClasses.filter((c) => c.day === day && c.time === time);
  };

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

      {/* ── Schedule Grid ────────────────────────────────── */}
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

          {/* Calendar Grid */}
          <AnimatePresence mode="wait">
            {isLoading ? (
              <div className="text-center py-12 text-ink/60">Loading timetable...</div>
            ) : daysWithClasses.length === 0 ? (
              <div className="text-center py-12 text-ink/60">No classes available for this filter.</div>
            ) : (
              <motion.div
                key={filter}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                {/* Table Grid */}
                <div className="overflow-x-auto rounded-2xl ring-1 ring-ink/5">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-surface-lightest">
                        <th className="px-4 py-3 text-left font-headline text-xs font-bold text-ink/50 uppercase tracking-widest md:px-6 md:py-4">
                          Time
                        </th>
                        {daysWithClasses.map((day) => (
                          <th
                            key={day}
                            className="px-3 py-3 text-center font-headline text-sm font-black text-ink md:px-6 md:py-4"
                          >
                            {day}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-ink/5">
                      {uniqueTimes.map((time) => (
                        <tr key={time} className="bg-white hover:bg-surface-lightest/50 transition-colors">
                          <td className="sticky left-0 bg-white px-4 py-4 font-headline font-bold text-ink/70 text-sm md:px-6 z-10">
                            {time}
                          </td>
                          {daysWithClasses.map((day) => {
                            const slotClasses = getClassesForSlot(day, time);
                            return (
                              <td
                                key={`${day}-${time}`}
                                className="px-3 py-4 md:px-6 align-top"
                              >
                                {slotClasses.length > 0 && (
                                  <div className="space-y-2">
                                    {slotClasses.map((cls) => {
                                      const status = statusConfig[cls.status];
                                      const isKids = cls.category === "kids";
                                      return (
                                        <motion.div
                                          key={cls.id}
                                          initial={{ opacity: 0, scale: 0.95 }}
                                          animate={{ opacity: 1, scale: 1 }}
                                          transition={{ duration: 0.2 }}
                                          className={`rounded-lg border-2 p-3 text-xs md:text-sm ${status.className}`}
                                        >
                                          <div className="flex items-start gap-2">
                                            <div className={`h-2 w-2 rounded-full flex-shrink-0 mt-1 ${
                                              isKids ? "bg-crimson" : "bg-navy"
                                            }`} />
                                            <div className="flex-1 min-w-0">
                                              <p className="font-headline font-bold text-ink truncate">
                                                {cls.program}
                                              </p>
                                              <p className="text-ink/60 text-xs mt-0.5">
                                                {cls.ageGroup}
                                              </p>
                                              <p className="text-ink/50 text-[10px] mt-1">
                                                {cls.status === "available" && "Available"}
                                                {cls.status === "limited" && "Limited"}
                                                {cls.status === "enrolling" && "Enrolling"}
                                              </p>
                                            </div>
                                          </div>
                                        </motion.div>
                                      );
                                    })}
                                  </div>
                                )}
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Legend */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="mt-8 flex flex-wrap items-center gap-4 rounded-2xl bg-surface-lightest px-5 py-4 ring-1 ring-ink/5 md:gap-6 md:px-6"
                >
                  <span className="font-headline text-xs font-bold uppercase tracking-widest text-ink/35">
                    Key
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-crimson" />
                    <span className="text-sm font-medium text-ink/60">Kids</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-navy" />
                    <span className="text-sm font-medium text-ink/60">Adults</span>
                  </div>
                </motion.div>

                <p className="mt-6 text-center text-sm text-ink/40">
                  Schedule subject to change during school holidays. See booking form below to reserve a spot.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
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
