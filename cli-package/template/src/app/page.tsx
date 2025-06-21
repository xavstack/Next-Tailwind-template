import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ContactForm } from "@/components/ContactForm";
import { AnimatedCard } from "@/components/examples/AnimatedCard";
import { ImageCarousel } from "@/components/examples/ImageCarousel";
import { SmoothScrollProvider } from "@/components/examples/SmoothScrollProvider";
import { SWRExample } from "@/components/examples/SWRExample";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Code, Palette, Zap, Database } from "lucide-react";

export default function Home() {
  const carouselImages = [
    { src: "🖼️", alt: "Gallery Image 1", title: "Beautiful Landscape" },
    { src: "🎨", alt: "Gallery Image 2", title: "Abstract Art" },
    { src: "📸", alt: "Gallery Image 3", title: "Street Photography" },
    { src: "🌅", alt: "Gallery Image 4", title: "Sunrise View" },
  ];

  const featuresData = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Next.js 15",
      description: "App Router, Server Components, React 19",
      status: "Production Ready",
      details:
        "Built with the latest Next.js features including App Router, Server Components, and React 19 support for optimal performance.",
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Tailwind CSS 3",
      description: "Utility-first styling with CSS variables",
      status: "Configured",
      details:
        "Complete Tailwind setup with CSS variables for theming, dark mode ready, and optimized for performance.",
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "TypeScript Strict",
      description: "Full type safety and IDE support",
      status: "Strict Mode",
      details:
        "Comprehensive TypeScript configuration with strict mode enabled for maximum type safety and developer productivity.",
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "SWR Data Fetching",
      description: "Smart data fetching with caching",
      status: "Phase 4A ✨",
      details:
        "Configured SWR with custom fetcher, error handling, and revalidation patterns for optimal data management.",
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
              <Badge variant="secondary">Phase 4A</Badge>
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
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-4">
              Next.js Tailwind
              <span className="text-primary"> Template</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Production-ready template with modern stack, enhanced with Phase 4A capabilities: dark
              mode, forms styling, SWR data fetching, and comprehensive environment setup.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg">Get Started</Button>
              <Button variant="outline" size="lg">
                View on GitHub
              </Button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Core Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuresData.map((feature, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-2 p-3 bg-primary/10 rounded-full w-fit">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge
                      variant={feature.status.includes("Phase 4A") ? "default" : "secondary"}
                      className="mb-3"
                    >
                      {feature.status}
                    </Badge>
                    <p className="text-sm text-muted-foreground">{feature.details}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Phase 4A: SWR Data Fetching Demo */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              Phase 4A: SWR Data Fetching
              <Badge variant="default" className="ml-2">
                New
              </Badge>
            </h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Comprehensive SWR implementation with the configured fetcher utility, demonstrating
              loading states, error handling, and revalidation patterns.
            </p>
            <SWRExample />
          </div>

          {/* Enhanced Animation Libraries */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Enhanced Animation Libraries</h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Phase 2 enhancements include modern animation and interaction libraries. All
              components below are live demonstrations.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatedCard
                title="Framer Motion"
                description="Declarative animations with spring physics"
                icon="🎭"
                delay={0}
              />
              <AnimatedCard
                title="Embla Carousel"
                description="Touch-friendly, accessible carousel component"
                icon="🎠"
                delay={0.1}
              />
              <AnimatedCard
                title="Lenis Smooth Scroll"
                description="Buttery smooth scroll experience (active now!)"
                icon="🌊"
                delay={0.2}
              />
            </div>
          </div>

          {/* Interactive Carousel Demo */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Interactive Carousel Component</h2>
            <p className="text-center text-muted-foreground mb-8">
              Live demonstration of the Embla Carousel with navigation controls and responsive
              design.
            </p>
            <div className="max-w-2xl mx-auto">
              <ImageCarousel images={carouselImages} />
            </div>
          </div>

          {/* Component Library Showcase */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">shadcn/ui Components</h2>
            <p className="text-center text-muted-foreground mb-8">
              Built-in components from shadcn/ui, ready to use and customize. Now with enhanced form
              styling via @tailwindcss/forms.
            </p>

            <Tabs defaultValue="buttons" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="buttons">Buttons</TabsTrigger>
                <TabsTrigger value="cards">Cards</TabsTrigger>
                <TabsTrigger value="forms">Forms</TabsTrigger>
                <TabsTrigger value="layout">Layout</TabsTrigger>
              </TabsList>

              <TabsContent value="buttons" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Button Variants</CardTitle>
                    <CardDescription>All available button styles and sizes</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <Button>Default</Button>
                      <Button variant="destructive">Destructive</Button>
                      <Button variant="outline">Outline</Button>
                      <Button variant="secondary">Secondary</Button>
                      <Button variant="ghost">Ghost</Button>
                      <Button variant="link">Link</Button>
                    </div>
                    <div className="flex flex-wrap gap-2 items-center">
                      <Button size="sm">Small</Button>
                      <Button size="default">Default</Button>
                      <Button size="lg">Large</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="cards" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Basic Card</CardTitle>
                      <CardDescription>Simple card with header and content</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        This is a basic card component showcasing the default styling and layout.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-muted">
                    <CardHeader>
                      <CardTitle>Styled Card</CardTitle>
                      <CardDescription>Card with custom background</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Cards can be easily styled with Tailwind classes for different appearances.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="forms" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Form Demo</CardTitle>
                    <CardDescription>
                      React Hook Form + Zod validation with error handling. Enhanced with
                      @tailwindcss/forms styling.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ContactForm />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="layout" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Phase 4A Enhancements</CardTitle>
                    <CardDescription>
                      New capabilities added in Phase 4A documentation & best practices
                      implementation
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4">
                      <div className="flex items-center gap-3 p-3 border rounded-lg">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div>
                          <p className="font-medium">Dark Mode Support</p>
                          <p className="text-sm text-muted-foreground">
                            next-themes integration with system preference detection
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 border rounded-lg">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div>
                          <p className="font-medium">Enhanced Form Styling</p>
                          <p className="text-sm text-muted-foreground">
                            @tailwindcss/forms plugin for consistent input styling
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 border rounded-lg">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div>
                          <p className="font-medium">Git Quality Gates</p>
                          <p className="text-sm text-muted-foreground">
                            Husky + lint-staged for automated code quality
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 border rounded-lg">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div>
                          <p className="font-medium">Environment Setup</p>
                          <p className="text-sm text-muted-foreground">
                            Comprehensive .env.example with Java backend patterns
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </SmoothScrollProvider>
  );
}
