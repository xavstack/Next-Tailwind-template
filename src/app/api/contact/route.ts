import { NextResponse } from "next/server";
import { z } from "zod";

// Contact form validation schema
const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z
    .string()
    .email("Invalid email address")
    .max(255, "Email must be less than 255 characters"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate request body with Zod
    const validationResult = contactSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: validationResult.error.errors.map(err => ({
            field: err.path.join("."),
            message: err.message,
          })),
        },
        { status: 400 }
      );
    }

    const { name, email, message } = validationResult.data;

    // Here you would typically send an email or save to a database
    // TODO: Implement actual email sending or database storage
    if (process.env.NODE_ENV === "development") {
      console.log("Contact form submission:", {
        name,
        email,
        message: message.substring(0, 50) + "...",
      });
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been received. We'll get back to you soon!",
    });
  } catch (error) {
    // Log error details in development only
    if (process.env.NODE_ENV === "development") {
      console.error("Contact form error:", error);
    }

    // Return sanitized error message
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
