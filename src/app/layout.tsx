import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js Tailwind Template",
  description: "A modern, production-ready Next.js template with Tailwind CSS, shadcn/ui components, TypeScript, and best practices built-in.",
  keywords: ["Next.js", "React", "Tailwind CSS", "TypeScript", "shadcn/ui", "Template"],
  authors: [{ name: "Next.js Tailwind Template" }],
  creator: "Next.js Tailwind Template",
  openGraph: {
    title: "Next.js Tailwind Template",
    description: "A modern, production-ready Next.js template with Tailwind CSS, shadcn/ui components, TypeScript, and best practices built-in.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js Tailwind Template",
    description: "A modern, production-ready Next.js template with Tailwind CSS, shadcn/ui components, TypeScript, and best practices built-in.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider defaultTheme="system" storageKey="next-tailwind-template-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
