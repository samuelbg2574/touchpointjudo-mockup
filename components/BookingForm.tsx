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
    selectedClass: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", selectedClass: "" });
        setTimeout(() => setSubmitted(false), 4000);
      }
    } catch (error) {
      console.error("Booking failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Group classes by day for dropdown
  const classOptions = classes.map((cls) => ({
    label: `${cls.day} - ${cls.time} ${cls.program} (${cls.ageGroup})`,
    value: `${cls.day}-${cls.program}-${cls.time}`,
  }));

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
          name="selectedClass"
          value={formData.selectedClass}
          onChange={handleChange}
          required
          className="w-full rounded-lg border border-ink/10 bg-surface-lightest px-4 py-2.5 text-sm text-ink transition-colors focus:border-crimson focus:outline-none focus:ring-2 focus:ring-crimson/20"
        >
          <option value="">Select a class...</option>
          {classOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
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

      {submitted && (
        <p className="text-sm text-green-600">
          ✓ We'll be in touch soon to confirm your booking!
        </p>
      )}
    </form>
  );
}
