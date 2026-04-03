import { fetchClasses } from "@/lib/airtable";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const classes = await fetchClasses();
    // Return 204 when no data so the client knows to use fallback
    if (classes.length === 0) {
      return new Response(null, { status: 204 });
    }
    return Response.json(classes);
  } catch (error) {
    console.error("Failed to fetch classes:", error);
    return new Response(null, { status: 204 });
  }
}
