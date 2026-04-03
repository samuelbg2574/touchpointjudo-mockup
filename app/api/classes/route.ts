import { fetchClasses } from "@/lib/airtable";

export async function GET() {
  try {
    const classes = await fetchClasses();
    return Response.json(classes);
  } catch (error) {
    console.error("Failed to fetch classes:", error);
    return Response.json([], { status: 200 });
  }
}
