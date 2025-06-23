import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Home, ExternalLink, Compass } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import { SearchInput } from "@/components/SearchInput";
import { BackButton } from "@/components/BackButton";

export const metadata: Metadata = {
  title: "Page Not Found (404)",
  description:
    "The page you are looking for could not be found. Explore our available pages or return to the homepage.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  // Common pages that users might be looking for
  const suggestedPages = [
    { name: "Home", href: "/", description: "Template showcase and demos" },
    {
      name: "Security Testing",
      href: "/security-test",
      description: "Interactive security testing tools",
    },
    { name: "Contact", href: "/contact", description: "Get in touch with us" },
  ];

  const quickFeatures = [
    { name: "Next.js 15", type: "Framework" },
    { name: "React 19", type: "Library" },
    { name: "Tailwind CSS", type: "Styling" },
    { name: "TypeScript", type: "Language" },
    { name: "shadcn/ui", type: "Components" },
    { name: "Framer Motion", type: "Animation" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="w-full max-w-4xl mx-auto space-y-8">
        {/* Main 404 Card */}
        <Card className="text-center shadow-lg">
          <CardHeader className="pb-4">
            <div className="text-8xl font-bold text-primary mb-4">404</div>
            <CardTitle className="text-3xl font-bold mb-2">Page Not Found</CardTitle>
            <CardDescription className="text-lg">
              The page you are looking for might have been moved, deleted, or never existed.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Quick Search */}
            <SearchInput />

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link href="/">
                  <Home className="h-4 w-4" />
                  Go to Homepage
                </Link>
              </Button>

              <BackButton />

              <Button variant="outline" size="lg" asChild className="gap-2">
                <Link href="/security-test">
                  <Compass className="h-4 w-4" />
                  Explore Features
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Suggested Pages */}
        <div className="grid gap-4 md:grid-cols-3">
          {suggestedPages.map((page, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
              <Link href={page.href} className="block">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{page.name}</CardTitle>
                  <CardDescription>{page.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Visit page</span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>

        {/* Template Features */}
        <Card>
          <CardHeader>
            <CardTitle className="text-center">What You Can Explore</CardTitle>
            <CardDescription className="text-center">
              This template includes modern web development tools and features
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 justify-center">
              {quickFeatures.map((feature, index) => (
                <Badge key={index} variant="secondary" className="gap-1">
                  {feature.name}
                  <span className="text-xs opacity-70">({feature.type})</span>
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Help Text */}
        <div className="text-center text-sm text-muted-foreground">
          <p>
            If you believe this is an error, please{" "}
            <Link href="/contact" className="text-primary hover:underline">
              contact us
            </Link>{" "}
            or{" "}
            <Link href="/" className="text-primary hover:underline">
              return to the homepage
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
