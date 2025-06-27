import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ContactForm } from "@/components/ContactForm";
import { AnimatedCard } from "@/components/examples/AnimatedCard";
import { ImageCarousel } from "@/components/examples/ImageCarousel";
import { SmoothScrollProvider } from "@/components/examples/SmoothScrollProvider";
import { SWRExample } from "@/components/examples/SWRExample";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { createPageMetadata } from "@/lib/seo";
import {
  CheckCircle,
  Code,
  Palette,
  Zap,
  Database,
  Settings,
  TestTube,
  Sparkles,
  Copy,
  ExternalLink,
  Shield,
  Gauge,
  Globe,
  Component,
  Book,
  FileText,
  Layers,
  ArrowRight,
} from "lucide-react";

// Demonstrate SEO utilities integration
export const metadata: Metadata = createPageMetadata({
  title: "Next.js Template - Production Ready Stack",
  description:
    "Complete Next.js 15 template with Radix UI, Framer Motion, SWR, security features, and 30+ integrated libraries. Production-ready with AI-optimized development workflow.",
  keywords: [
    "Next.js 15 template",
    "React 19",
    "Tailwind CSS",
    "TypeScript",
    "shadcn/ui",
    "Framer Motion",
    "SWR",
    "Security",
    "Production ready",
  ],
  openGraph: {
    title: "Next.js Template - Live Demonstrations",
    description:
      "Interactive showcase of modern web development tools and capabilities. Explore animations, security features, and best practices in action.",
    type: "website",
  },
  twitter: {
    title: "Next.js Template - Live Demonstrations",
    description:
      "Interactive showcase with real-time examples of modern web development capabilities.",
  },
});

export default function Home() {
  const carouselImages = [
    { src: "🖼️", alt: "Gallery Image 1", title: "Beautiful Landscape" },
    { src: "🎨", alt: "Gallery Image 2", title: "Abstract Art" },
    { src: "📸", alt: "Gallery Image 3", title: "Street Photography" },
    { src: "🌅", alt: "Gallery Image 4", title: "Sunrise View" },
  ];

  const techStackData = [
    {
      category: "Core Framework",
      icon: <Zap className="h-5 w-5" />,
      primary: "Next.js 15 + React 19",
      description: "App Router, Server Components, React 19 features",
      packages: ["next@^15.3.4", "react@^19.1.0", "typescript@^5"],
      features: ["App Router", "Server Components", "React 19 useOptimistic", "Turbopack"],
    },
    {
      category: "UI System",
      icon: <Component className="h-5 w-5" />,
      primary: "Radix UI + shadcn/ui",
      description: "Accessible primitives + pre-built components",
      packages: ["@radix-ui/react-*", "lucide-react@^0.518.0"],
      features: ["Dialog", "DropdownMenu", "Tooltip", "Tabs", "Form components"],
    },
    {
      category: "Styling",
      icon: <Palette className="h-5 w-5" />,
      primary: "Tailwind CSS 3.4",
      description: "Utility-first + enhanced form styling",
      packages: ["tailwindcss@^3.4.17", "@tailwindcss/forms@^0.5.10"],
      features: ["CSS variables", "Dark mode", "Responsive design", "Form styling"],
    },
    {
      category: "Animation",
      icon: <Sparkles className="h-5 w-5" />,
      primary: "Framer Motion + Embla + Lenis",
      description: "Complete animation ecosystem",
      packages: ["framer-motion@^12.18.1", "embla-carousel-react@^8.6.0", "lenis@^1.3.4"],
      features: ["Component animations", "Carousels", "Smooth scrolling", "Gesture handling"],
    },
    {
      category: "Data & Forms",
      icon: <Database className="h-5 w-5" />,
      primary: "SWR + React Hook Form + Zod",
      description: "Type-safe data fetching and validation",
      packages: ["swr@^2.3.3", "react-hook-form@^7.58.1", "zod@^3.25.67"],
      features: ["Data fetching", "Form validation", "Schema validation", "Error handling"],
    },
    {
      category: "Security",
      icon: <Shield className="h-5 w-5" />,
      primary: "CSP + Rate Limiting + Validation",
      description: "Comprehensive security implementation",
      packages: ["next/server", "zod@^3.25.67"],
      features: ["Content Security Policy", "Rate limiting", "Input validation", "CSRF protection"],
    },
  ];

  return (
    <SmoothScrollProvider>
      <main className="min-h-screen bg-background">
        {/* Header */}
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4">
            <div className="flex items-center space-x-2">
              <h2 className="text-xl font-bold">Next.js Template</h2>
              <Badge variant="secondary">Production Ready</Badge>
            </div>
            <div className="flex items-center space-x-2">
              <ThemeToggle />
              <Badge variant="outline" className="text-green-600 border-green-600">
                <CheckCircle className="w-3 h-3 mr-1" />
                All Systems Operational
              </Badge>
            </div>
          </div>
        </header>

        <div className="container mx-auto max-w-screen-2xl px-4 py-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-4">
              Complete Full-Stack Template
              <span className="text-primary"> Ready to Ship</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Next.js 15 + React 19 with 30+ integrated libraries, security features, animations,
              and AI-optimized development workflow. Everything you need for production
              applications.
            </p>
            <div className="flex justify-center gap-4 mb-8">
              <Button size="lg" asChild>
                <a
                  href="https://github.com/xavierstack/Next-Tailwind-Template"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View on GitHub
                </a>
              </Button>
              <Button variant="outline" size="lg">
                <Copy className="w-4 h-4 mr-2" />
                Use This Template
              </Button>
            </div>
          </div>

          {/* Documentation & Resources Hub - MOVED UP */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-2">📚 Documentation & Resources</h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Comprehensive guides, examples, and references. Everything you need to build
              efficiently.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <Book className="h-8 w-8 mb-3 text-blue-600" />
                  <h3 className="font-semibold mb-2">Complete Reference</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    All components, utilities, and patterns
                  </p>
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <a
                      href="https://github.com/xavierstack/Next-Tailwind-Template/blob/main/docs/REFERENCE.md"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      View Reference
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <Code className="h-8 w-8 mb-3 text-purple-600" />
                  <h3 className="font-semibold mb-2">AI Prompting Guide</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Effective prompts for AI development
                  </p>
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <a
                      href="https://github.com/xavierstack/Next-Tailwind-Template/blob/main/docs/AI_PROMPTING_EXAMPLES.md"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Code className="w-4 h-4 mr-2" />
                      View Examples
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <TestTube className="h-8 w-8 mb-3 text-green-600" />
                  <h3 className="font-semibold mb-2">Testing Patterns</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Component and API testing guides
                  </p>
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <a
                      href="https://github.com/xavierstack/Next-Tailwind-Template/blob/main/docs/testing-patterns.md"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TestTube className="w-4 h-4 mr-2" />
                      View Patterns
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <Layers className="h-8 w-8 mb-3 text-orange-600" />
                  <h3 className="font-semibold mb-2">Architecture</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Project structure and patterns
                  </p>
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <a
                      href="https://github.com/xavierstack/Next-Tailwind-Template/blob/main/docs/architecture/folder-structure.md"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Layers className="w-4 h-4 mr-2" />
                      View Architecture
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button variant="outline" asChild>
                <a
                  href="https://github.com/xavierstack/Next-Tailwind-Template/blob/main/docs/DEVELOPER_ONBOARDING.md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Complete Developer Guide
                </a>
              </Button>
            </div>
          </div>

          {/* Compact Tech Stack */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-2">⚡ Technology Stack</h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Modern, production-ready stack with comprehensive tooling and security features.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {techStackData.map((tech, index) => (
                <Dialog key={index}>
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-3 mb-3">
                        {tech.icon}
                        <div>
                          <h3 className="font-semibold">{tech.primary}</h3>
                          <p className="text-sm text-muted-foreground">{tech.category}</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{tech.description}</p>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" className="w-full">
                          <Code className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                      </DialogTrigger>
                    </CardContent>
                  </Card>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-2">
                        {tech.icon}
                        {tech.primary}
                      </DialogTitle>
                      <DialogDescription>{tech.description}</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Key Features:</h4>
                        <ul className="grid grid-cols-2 gap-2 text-sm">
                          {tech.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Key Packages:</h4>
                        <div className="flex flex-wrap gap-2">
                          {tech.packages.map((pkg, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {pkg}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>

          {/* Live Demonstrations */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-2">🚀 Live Demonstrations</h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Interactive examples of template capabilities. Study the implementation patterns.
            </p>

            <Tabs defaultValue="swr" className="max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="swr">Data Fetching</TabsTrigger>
                <TabsTrigger value="animations">Animations</TabsTrigger>
                <TabsTrigger value="carousel">Carousel</TabsTrigger>
                <TabsTrigger value="forms">Forms</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
              </TabsList>

              <TabsContent value="swr" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Database className="h-5 w-5" />
                      SWR Data Fetching
                    </CardTitle>
                    <CardDescription>
                      Complete implementation with loading states, error handling, and revalidation.
                      <code className="ml-2 text-xs bg-muted px-2 py-1 rounded">
                        components/examples/SWRExample.tsx
                      </code>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <SWRExample />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="animations" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Sparkles className="h-5 w-5" />
                      Framer Motion Animations
                    </CardTitle>
                    <CardDescription>
                      Stagger animations, hover effects, and spring physics.
                      <code className="ml-2 text-xs bg-muted px-2 py-1 rounded">
                        components/examples/AnimatedCard.tsx
                      </code>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      <AnimatedCard
                        title="Stagger Effect"
                        description="Children animate in sequence"
                        icon="🎭"
                        delay={0}
                      />
                      <AnimatedCard
                        title="Spring Physics"
                        description="Natural motion with spring"
                        icon="🌸"
                        delay={0.1}
                      />
                      <AnimatedCard
                        title="Hover Interactions"
                        description="Try hovering this card"
                        icon="✨"
                        delay={0.2}
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="carousel" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Globe className="h-5 w-5" />
                      Embla Carousel
                    </CardTitle>
                    <CardDescription>
                      Touch-friendly carousel with navigation controls.
                      <code className="ml-2 text-xs bg-muted px-2 py-1 rounded">
                        components/examples/ImageCarousel.tsx
                      </code>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="max-w-2xl mx-auto">
                      <ImageCarousel images={carouselImages} />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="forms" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Settings className="h-5 w-5" />
                      Enhanced Form with Validation
                    </CardTitle>
                    <CardDescription>
                      React Hook Form + Zod validation with enhanced styling.
                      <code className="ml-2 text-xs bg-muted px-2 py-1 rounded">
                        components/ContactForm.tsx
                      </code>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ContactForm />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="security" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5" />
                      Security Testing Suite
                    </CardTitle>
                    <CardDescription>
                      Comprehensive security testing including rate limiting, CSP, and input
                      validation.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <Shield className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                      <h3 className="text-lg font-semibold mb-2">Security Testing Dashboard</h3>
                      <p className="text-muted-foreground mb-4">
                        Test rate limiting, CSP policies, input validation, and security headers.
                      </p>
                      <Button asChild>
                        <a href="/security-test">
                          <Shield className="w-4 h-4 mr-2" />
                          Open Security Tests
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Development Tools */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-2">🔧 Development Tools</h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Built-in quality automation and development tools. All run automatically on commit.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Quality Gates
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="bg-muted p-3 rounded text-sm font-mono">
                    npm run lint && npm run test
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Auto-runs on commit via Husky hooks
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Gauge className="h-5 w-5" />
                    Quality Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="bg-muted p-3 rounded text-sm font-mono">
                    ./scripts/quality/ci-check.sh
                  </div>
                  <p className="text-sm text-muted-foreground">100-point quality scoring system</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TestTube className="h-5 w-5" />
                    Testing Suite
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="bg-muted p-3 rounded text-sm font-mono">npm test -- --watch</div>
                  <p className="text-sm text-muted-foreground">Jest + React Testing Library</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center py-8 border-t">
            <p className="text-muted-foreground mb-4">Built with ❤️ for modern web development</p>
            <div className="flex justify-center gap-4">
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://github.com/xavierstack/Next-Tailwind-Template"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="/security-test">
                  <Shield className="w-4 h-4 mr-2" />
                  Security Tests
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </SmoothScrollProvider>
  );
}
