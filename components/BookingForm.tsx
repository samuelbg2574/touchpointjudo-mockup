"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Loader2 } from "lucide-react";
import type { ClassEntry } from "@/lib/airtable";

interface BookingFormProps {
  classes: ClassEntry[];
}

export function BookingForm({ classes }: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    selectedClassId: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const selectedClass = classes.find((c) => c.id === formData.selectedClassId);
    if (!selectedClass) {
      setError("Please select a class.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          classDay: selectedClass.day,
          classTime: selectedClass.time,
          classEndTime: selectedClass.endTime,
          classProgram: selectedClass.program,
          classAgeGroup: selectedClass.ageGroup,
          classCategory: selectedClass.category,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", selectedClassId: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error("Booking failed:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Sort classes by day order then time for the dropdown
  const dayOrder = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const sortedClasses = [...classes].sort(
    (a, b) => dayOrder.indexOf(a.day) - dayOrder.indexOf(b.day)
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-ink mb-1.5">
          Your Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="John Doe"
          className="w-full rounded-lg border border-ink/10 bg-surface-lightest px-4 py-2.5 text-sm text-ink placeholder-ink/40 transition-colors focus:border-crimson focus:outline-none focus:ring-2 focus:ring-crimson/20"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-ink mb-1.5">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="john@example.com"
          className="w-full rounded-lg border border-ink/10 bg-surface-lightest px-4 py-2.5 text-sm text-ink placeholder-ink/40 transition-colors focus:border-crimson focus:outline-none focus:ring-2 focus:ring-crimson/20"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-ink mb-1.5">
          Phone (optional)
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+44 7911 123456"
          className="w-full rounded-lg border border-ink/10 bg-surface-lightest px-4 py-2.5 text-sm text-ink placeholder-ink/40 transition-colors focus:border-crimson focus:outline-none focus:ring-2 focus:ring-crimson/20"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-ink mb-1.5">
          Which class interests you?
        </label>
        <select
          name="selectedClassId"
          value={formData.selectedClassId}
          onChange={handleChange}
          required
          className="w-full rounded-lg border border-ink/10 bg-surface-lightest px-4 py-2.5 text-sm text-ink transition-colors focus:border-crimson focus:outline-none focus:ring-2 focus:ring-crimson/20"
        >
          <option value="">Select a class...</option>
          {sortedClasses.map((cls) => (
            <option key={cls.id} value={cls.id}>
              {cls.day} · {cls.time}–{cls.endTime} — {cls.program} ({cls.ageGroup})
            </option>
          ))}
        </select>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={isSubmitting || submitted}
        className="w-full rounded-lg bg-crimson px-6 py-3 font-headline font-bold text-white transition-all disabled:opacity-70"
      >
        {submitted ? (
          <span className="flex items-center justify-center gap-2">
            <Check size={16} />
            Submitted!
          </span>
        ) : isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <Loader2 size={16} className="animate-spin" />
            Sending...
          </span>
        ) : (
          "Reserve Your Spot"
        )}
      </motion.button>

      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}

      {submitted && (
        <p className="text-sm text-green-600">
          ✓ We'll be in touch soon to confirm your booking!
        </p>
      )}
    </form>
  );
}
