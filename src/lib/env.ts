import { z } from "zod";

// Define the schema for environment variables
const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  NEXT_PUBLIC_APP_URL: z.string().url().default("http://localhost:3000"),

  // Security
  ALLOWED_IMG_HOSTS: z
    .string()
    .default("images.unsplash.com,res.cloudinary.com,avatars.githubusercontent.com"),
  ENABLE_RATE_LIMITING: z
    .string()
    .transform(val => val === "true")
    .default("true"),
  RATE_LIMIT_WINDOW: z
    .string()
    .transform(val => parseInt(val, 10))
    .default("900000"),
  RATE_LIMIT_MAX: z
    .string()
    .transform(val => parseInt(val, 10))
    .default("100"),

  // Contact Form
  CONTACT_EMAIL: z.string().email().optional(),
  SMTP_HOST: z.string().optional(),
  SMTP_PORT: z
    .string()
    .transform(val => parseInt(val, 10))
    .optional(),
  SMTP_USER: z.string().optional(),
  SMTP_PASS: z.string().optional(),

  // Optional Features
  ENABLE_CAPTCHA: z
    .string()
    .transform(val => val === "true")
    .default("false"),
  ENABLE_E2E: z
    .string()
    .transform(val => val === "true")
    .default("false"),
  ENABLE_MDX: z
    .string()
    .transform(val => val === "true")
    .default("false"),
  ENABLE_STORYBOOK: z
    .string()
    .transform(val => val === "true")
    .default("false"),
  ENABLE_TURBOPACK: z
    .string()
    .transform(val => val === "true")
    .default("false"),
  ENABLE_JAVA_BACKEND: z
    .string()
    .transform(val => val === "true")
    .default("false"),
  ENABLE_AUTH: z
    .string()
    .transform(val => val === "true")
    .default("false"),
  ENABLE_MONITORING: z
    .string()
    .transform(val => val === "true")
    .default("false"),
  ENABLE_I18N: z
    .string()
    .transform(val => val === "true")
    .default("false"),
  ENABLE_PWA: z
    .string()
    .transform(val => val === "true")
    .default("false"),
  ENABLE_DOCKER: z
    .string()
    .transform(val => val === "true")
    .default("false"),
  USE_CURSOR: z
    .string()
    .transform(val => val === "true")
    .default("true"),

  // Production secrets (optional)
  CAPTCHA_SITE_KEY: z.string().optional(),
  CAPTCHA_SECRET_KEY: z.string().optional(),
  SENTRY_DSN: z.string().url().optional(),
  DATABASE_URL: z.string().url().optional(),
});

// Validate and export environment variables
export const env = envSchema.parse(process.env);

// Type for environment variables
export type Env = z.infer<typeof envSchema>;

// Helper function to get allowed image hosts as array
export const getAllowedImageHosts = (): string[] => {
  return env.ALLOWED_IMG_HOSTS.split(",").map(host => host.trim());
};
