import { NextRequest, NextResponse } from "next/server";
import { createBooking } from "@/lib/airtable";
import { validateBooking } from "@/lib/validation";
import { isRateLimited, getClientIp } from "@/lib/rateLimit";

export async function POST(req: NextRequest) {
  try {
    // Check rate limit
    const clientIp = getClientIp(req);
    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { name, email, phone, classDay, classTime, classEndTime, classProgram, classAgeGroup, classCategory } = body;

    // Validate input
    const validation = validateBooking({
      name,
      email,
      phone,
      classProgram,
      classDay,
      classTime,
      classAgeGroup,
      classCategory,
    });

    if (!validation.valid) {
      return NextResponse.json(
        { error: "Validation failed", details: validation.errors },
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
