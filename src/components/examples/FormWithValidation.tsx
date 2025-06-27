"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";

// Validation schema with comprehensive rules
const formSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),

  email: z
    .string()
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters"),

  phone: z
    .string()
    .optional()
    .refine(val => !val || /^[\+]?[1-9][\d]{0,15}$/.test(val), "Please enter a valid phone number"),

  subject: z
    .string()
    .min(5, "Subject must be at least 5 characters")
    .max(100, "Subject must be less than 100 characters"),

  message: z
    .string()
    .min(20, "Message must be at least 20 characters")
    .max(1000, "Message must be less than 1000 characters"),

  terms: z.boolean().refine(val => val === true, "You must accept the terms and conditions"),
});

type FormData = z.infer<typeof formSchema>;

export default function FormWithValidation() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
    reset,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange", // Validate on change for better UX
  });

  // Watch message length for character counter
  const messageValue = watch("message", "");

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulate API call
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      const result = await response.json();

      setSubmitStatus("success");
      setSubmitMessage(result.message || "Form submitted successfully!");
      reset(); // Clear form on success
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage(
        error instanceof Error ? error.message : "An unexpected error occurred. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Contact Form Example</CardTitle>
        <CardDescription>
          Demonstrates React Hook Form + Zod validation, error handling, and accessibility patterns
        </CardDescription>
      </CardHeader>

      <CardContent>
        {/* Success/Error Messages */}
        {submitStatus === "success" && (
          <Alert className="mb-6 border-green-200 bg-green-50">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">{submitMessage}</AlertDescription>
          </Alert>
        )}

        {submitStatus === "error" && (
          <Alert className="mb-6 border-red-200 bg-red-50">
            <AlertCircle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-800">{submitMessage}</AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="name">
              Full Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="name"
              {...register("name")}
              placeholder="Enter your full name"
              aria-describedby={errors.name ? "name-error" : undefined}
              className={errors.name ? "border-red-500 focus:ring-red-500" : ""}
            />
            {errors.name && (
              <p id="name-error" className="text-sm text-red-600" role="alert">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email">
              Email Address <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              placeholder="Enter your email address"
              aria-describedby={errors.email ? "email-error" : undefined}
              className={errors.email ? "border-red-500 focus:ring-red-500" : ""}
            />
            {errors.email && (
              <p id="email-error" className="text-sm text-red-600" role="alert">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone Field (Optional) */}
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number (Optional)</Label>
            <Input
              id="phone"
              type="tel"
              {...register("phone")}
              placeholder="Enter your phone number"
              aria-describedby={errors.phone ? "phone-error" : undefined}
              className={errors.phone ? "border-red-500 focus:ring-red-500" : ""}
            />
            {errors.phone && (
              <p id="phone-error" className="text-sm text-red-600" role="alert">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Subject Field */}
          <div className="space-y-2">
            <Label htmlFor="subject">
              Subject <span className="text-red-500">*</span>
            </Label>
            <Input
              id="subject"
              {...register("subject")}
              placeholder="Enter the subject"
              aria-describedby={errors.subject ? "subject-error" : undefined}
              className={errors.subject ? "border-red-500 focus:ring-red-500" : ""}
            />
            {errors.subject && (
              <p id="subject-error" className="text-sm text-red-600" role="alert">
                {errors.subject.message}
              </p>
            )}
          </div>

          {/* Message Field with Character Counter */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label htmlFor="message">
                Message <span className="text-red-500">*</span>
              </Label>
              <span className="text-sm text-muted-foreground">{messageValue.length}/1000</span>
            </div>
            <Textarea
              id="message"
              {...register("message")}
              placeholder="Enter your message"
              rows={4}
              aria-describedby={errors.message ? "message-error" : undefined}
              className={errors.message ? "border-red-500 focus:ring-red-500" : ""}
            />
            {errors.message && (
              <p id="message-error" className="text-sm text-red-600" role="alert">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Terms Checkbox */}
          <div className="space-y-2">
            <div className="flex items-start space-x-2">
              <input
                id="terms"
                type="checkbox"
                {...register("terms")}
                className="mt-1 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                aria-describedby={errors.terms ? "terms-error" : undefined}
              />
              <Label htmlFor="terms" className="text-sm leading-5">
                I agree to the{" "}
                <a href="/terms" className="text-primary hover:underline">
                  terms and conditions
                </a>{" "}
                and{" "}
                <a href="/privacy" className="text-primary hover:underline">
                  privacy policy
                </a>
                <span className="text-red-500 ml-1">*</span>
              </Label>
            </div>
            {errors.terms && (
              <p id="terms-error" className="text-sm text-red-600" role="alert">
                {errors.terms.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <Button type="submit" disabled={isSubmitting || !isValid || !isDirty} className="w-full">
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Submitting...
              </>
            ) : (
              "Send Message"
            )}
          </Button>
        </form>

        {/* Development Info */}
        <div className="mt-8 p-4 bg-muted rounded-lg">
          <h3 className="font-semibold mb-2">Key Features Demonstrated:</h3>
          <ul className="text-sm space-y-1 text-muted-foreground">
            <li>• React Hook Form with Zod validation</li>
            <li>• Real-time validation and error handling</li>
            <li>• Accessibility with ARIA attributes and labels</li>
            <li>• Loading states and user feedback</li>
            <li>• Character counters and form state management</li>
            <li>• API integration with error handling</li>
            <li>• TypeScript type safety throughout</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
