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
  status: "available" | "limited" | "enrolling";
  duration: string;
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
      day: record.fields.day || "",
      time: record.fields.time || "",
      endTime: record.fields.endTime || "",
      program: record.fields.program || "",
      category: record.fields.category || "kids",
      ageGroup: record.fields.ageGroup || "",
      level: record.fields.level || "",
      status: record.fields.status || "available",
      duration: record.fields.duration || "",
    }));
  } catch (error) {
    console.error("Failed to fetch from Airtable:", error);
    return [];
  }
}
