import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    // Here you would typically send an email or save to a database
    // For development: console.log({ name, email, message });
    // TODO: Implement actual email sending or database storage

    return NextResponse.json({ success: true });
  } catch (error) {
    // Log error in development, use proper logging service in production
    if (process.env.NODE_ENV === "development") {
      console.error("Contact form error:", error);
    }
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
