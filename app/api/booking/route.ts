import { NextRequest, NextResponse } from "next/server";
import { createBooking } from "@/lib/airtable";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, classDay, classTime, classEndTime, classProgram, classAgeGroup, classCategory } = body;

    if (!name || !email || !classProgram) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await createBooking({
      name,
      email,
      phone,
      classDay,
      classTime,
      classEndTime,
      classProgram,
      classAgeGroup,
      classCategory,
    });

    return NextResponse.json(
      { message: "Booking submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Booking error:", error);
    return NextResponse.json(
      { error: "Failed to process booking" },
      { status: 500 }
    );
  }
}
