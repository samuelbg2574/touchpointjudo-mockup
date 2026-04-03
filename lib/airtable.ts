import { sanitizeHtml } from "@/lib/validation";

const AIRTABLE_API_BASE = "https://api.airtable.com/v0";
const TOKEN = process.env.AIRTABLE_TOKEN;
const BASE_ID = process.env.AIRTABLE_BASE_ID;
const TABLE_NAME = "Classes"; // Change if your table has a different name

export interface ClassEntry {
  id: string;
  day: string;
  time: string;
  endTime: string;
  program: string;
  category: "kids" | "adults";
  ageGroup: string;
  level: string;
  status: "available" | "limited" | "enrolling" | "full";
  duration: string;
  capacity?: number;
}

export interface BookingRecord {
  name: string;
  email: string;
  phone?: string;
  classDay: string;
  classTime: string;
  classEndTime: string;
  classProgram: string;
  classAgeGroup: string;
  classCategory: string;
}

export async function createBooking(booking: BookingRecord): Promise<void> {
  if (!TOKEN || !BASE_ID) {
    throw new Error("Airtable credentials missing");
  }

  const url = `${AIRTABLE_API_BASE}/${BASE_ID}/Bookings`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      records: [
        {
          fields: {
            Name: booking.name,
            Email: booking.email,
            Phone: booking.phone || "",
            Day: booking.classDay,
            Time: `${booking.classTime} – ${booking.classEndTime}`,
            Class: booking.classProgram,
            "Age Group": booking.classAgeGroup,
            Category: booking.classCategory,
            Status: "New",
            "Submitted At": new Date().toISOString(),
          },
        },
      ],
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(`Airtable error: ${JSON.stringify(error)}`);
  }
}

export async function fetchClasses(): Promise<ClassEntry[]> {
  if (!TOKEN || !BASE_ID) {
    console.warn("Airtable credentials missing. Using fallback data.");
    return [];
  }

  try {
    const url = `${AIRTABLE_API_BASE}/${BASE_ID}/${TABLE_NAME}`;
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!response.ok) {
      throw new Error(`Airtable API error: ${response.status}`);
    }

    const data = await response.json();

    return data.records.map((record: any) => ({
      id: record.id,
      day: sanitizeHtml(record.fields.day || ""),
      time: sanitizeHtml(record.fields.time || ""),
      endTime: sanitizeHtml(record.fields.endTime || ""),
      program: sanitizeHtml(record.fields.program || ""),
      category: sanitizeHtml(record.fields.category || "kids"),
      ageGroup: sanitizeHtml(record.fields.ageGroup || ""),
      level: sanitizeHtml(record.fields.level || ""),
      status: record.fields.status || "available",
      duration: sanitizeHtml(record.fields.duration || ""),
      capacity: record.fields.capacity ? Number(record.fields.capacity) : undefined,
    }));
  } catch (error) {
    console.error("Failed to fetch from Airtable:", error);
    return [];
  }
}

// Returns a map of "Day|Program" → confirmed booking count (excludes Cancelled)
export async function fetchBookingCounts(): Promise<Record<string, number>> {
  if (!TOKEN || !BASE_ID) return {};

  try {
    const params = new URLSearchParams({
      "fields[]": "Day",
      filterByFormula: "NOT({Status}='Cancelled')",
      maxRecords: "1000",
    });
    // Airtable requires repeated keys for multiple fields[]
    params.append("fields[]", "Class");

    const url = `${AIRTABLE_API_BASE}/${BASE_ID}/Bookings?${params.toString()}`;
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${TOKEN}` },
      next: { revalidate: 3600 },
    });

    if (!res.ok) return {};

    const data = await res.json();
    const counts: Record<string, number> = {};

    for (const record of data.records) {
      const day = record.fields.Day || "";
      const cls = record.fields.Class || "";
      if (day && cls) {
        const key = `${day}|${cls}`;
        counts[key] = (counts[key] || 0) + 1;
      }
    }

    return counts;
  } catch {
    return {};
  }
}
