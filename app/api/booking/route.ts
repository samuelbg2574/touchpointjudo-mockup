import { NextRequest, NextResponse } from "next/server";
import { CONTACT_EMAIL } from "@/lib/utils";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, selectedClass } = await req.json();

    // Validate inputs
    if (!name || !email || !selectedClass) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Send email using your email service (SendGrid, Resend, etc.)
    // For now, log it and return success
    // You can integrate Resend, SendGrid, or Nodemailer here

    console.log("New booking inquiry:", {
      name,
      email,
      phone,
      selectedClass,
      timestamp: new Date().toISOString(),
    });

    // TODO: Integrate email service
    // Example with Resend (install: npm install resend):
    // import { Resend } from "resend";
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "bookings@touchpointjudo.com",
    //   to: CONTACT_EMAIL,
    //   subject: `New Class Booking: ${name}`,
    //   html: `<p>${name} wants to book ${selectedClass}</p><p>Email: ${email}</p><p>Phone: ${phone || "Not provided"}</p>`,
    // });

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
