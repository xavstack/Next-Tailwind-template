import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "Next.js Tailwind Template",
    template: "%s | Next.js Tailwind Template",
  },
  description:
    "A modern, production-ready Next.js template with Tailwind CSS, shadcn/ui components, TypeScript, and best practices built-in.",
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "TypeScript",
    "shadcn/ui",
    "Template",
    "Framer Motion",
    "SWR",
  ],
  authors: [{ name: "Next.js Tailwind Template" }],
  creator: "Next.js Tailwind Template",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Next.js Tailwind Template",
    description:
      "A modern, production-ready Next.js template with Tailwind CSS, shadcn/ui components, TypeScript, and best practices built-in.",
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Next.js Tailwind Template",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js Tailwind Template",
    description:
      "A modern, production-ready Next.js template with Tailwind CSS, shadcn/ui components, TypeScript, and best practices built-in.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  other: {
    "format-detection": "telephone=no, date=no, email=no, address=no",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
