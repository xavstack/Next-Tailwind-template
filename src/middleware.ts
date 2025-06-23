import { NextRequest, NextResponse } from "next/server";
import { env } from "./lib/env";

// Simple in-memory rate limiting (for production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

// Security headers
const securityHeaders: Record<string, string> = {
  "Content-Security-Policy": [
    "default-src 'self'",
    "script-src 'self' 'unsafe-eval' 'unsafe-inline'", // Next.js requires unsafe-eval for dev
    "style-src 'self' 'unsafe-inline'", // Tailwind requires unsafe-inline
    "img-src 'self' data: https:",
    "font-src 'self' data:",
    "connect-src 'self'",
    "frame-ancestors 'none'",
  ].join("; "),
  "X-Frame-Options": "DENY",
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
};

// Add HSTS only in production
if (env.NODE_ENV === "production") {
  securityHeaders["Strict-Transport-Security"] = "max-age=31536000; includeSubDomains";
}

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const realIP = request.headers.get("x-real-ip");

  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }

  if (realIP) {
    return realIP;
  }

  // Fallback to a default value since NextRequest.ip is not available in all environments
  return "127.0.0.1";
}

function checkRateLimit(ip: string): boolean {
  if (!env.ENABLE_RATE_LIMITING) {
    return true;
  }

  const now = Date.now();
  const windowStart = now - env.RATE_LIMIT_WINDOW;

  // Clean up old entries
  for (const [key, value] of rateLimitMap.entries()) {
    if (value.resetTime < windowStart) {
      rateLimitMap.delete(key);
    }
  }

  const current = rateLimitMap.get(ip) || { count: 0, resetTime: now + env.RATE_LIMIT_WINDOW };

  if (current.resetTime < now) {
    // Reset the window
    current.count = 1;
    current.resetTime = now + env.RATE_LIMIT_WINDOW;
  } else {
    current.count++;
  }

  rateLimitMap.set(ip, current);

  return current.count <= env.RATE_LIMIT_MAX;
}

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Apply security headers
  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  // Rate limiting for API routes
  if (request.nextUrl.pathname.startsWith("/api/")) {
    const clientIP = getClientIP(request);

    if (!checkRateLimit(clientIP)) {
      return new NextResponse(JSON.stringify({ error: "Too many requests" }), {
        status: 429,
        headers: {
          "Content-Type": "application/json",
          "Retry-After": Math.ceil(env.RATE_LIMIT_WINDOW / 1000).toString(),
        },
      });
    }
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
