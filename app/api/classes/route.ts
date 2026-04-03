import { fetchClasses, fetchBookingCounts } from "@/lib/airtable";
import type { ClassEntry } from "@/lib/airtable";

export const dynamic = "force-dynamic";

function computeStatus(
  capacity: number,
  booked: number
): ClassEntry["status"] {
  const remaining = capacity - booked;
  if (remaining <= 0) return "full";
  if (remaining / capacity < 0.4) return "limited";
  return "available";
}

export async function GET() {
  try {
    const [classes, bookingCounts] = await Promise.all([
      fetchClasses(),
      fetchBookingCounts(),
    ]);

    if (classes.length === 0) {
      return new Response(null, { status: 204 });
    }

    const withStatus = classes.map((cls) => {
      if (!cls.capacity) return cls; // no capacity set → use manual status
      const booked = bookingCounts[`${cls.day}|${cls.program}`] ?? 0;
      return { ...cls, status: computeStatus(cls.capacity, booked) };
    });

    return Response.json(withStatus);
  } catch (error) {
    console.error("Failed to fetch classes:", error);
    return new Response(null, { status: 204 });
  }
}
