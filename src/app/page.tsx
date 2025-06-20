import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ContactForm } from "@/components/ContactForm";
import { AnimatedCard } from "@/components/examples/AnimatedCard";
import { ImageCarousel } from "@/components/examples/ImageCarousel";
import { SmoothScrollProvider } from "@/components/examples/SmoothScrollProvider";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Code, Palette, Zap } from "lucide-react";

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
  ];

  return (
    <SmoothScrollProvider>
      <main className="min-h-screen bg-background">
        {/* Header */}
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4">
            <div className="flex items-center space-x-2">
              <h2 className="text-xl font-bold">Next.js Template</h2>
              <Badge variant="secondary">Test Suite</Badge>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="outline" className="text-green-600 border-green-600">
                <CheckCircle className="w-3 h-3 mr-1" />
                All Systems Operational
              </Badge>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Next.js Template
              <span className="block text-2xl md:text-3xl text-muted-foreground mt-2">
                Comprehensive Test & Demo Suite
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              This page demonstrates all the features, components, and capabilities built into this
              template. Perfect for onboarding developers and showcasing what&apos;s possible.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg">Get Started</Button>
              <Button variant="outline" size="lg">
                View Documentation
              </Button>
              <Button variant="ghost" size="lg">
                Run Tests
              </Button>
            </div>
          </div>

          {/* Status Overview */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Template Status Overview</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {featuresData.map((feature, index) => (
                <Card key={index} className="relative">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {feature.icon}
                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                      </div>
                      <Badge variant="secondary">{feature.status}</Badge>
                    </div>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{feature.details}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Enhanced Features Demo */}
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
              Built-in components from shadcn/ui, ready to use and customize.
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
                      React Hook Form + Zod validation with error handling
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
                    <CardTitle>Responsive Grid Layout</CardTitle>
                    <CardDescription>Tailwind responsive grid system demonstration</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {[1, 2, 3, 4].map(item => (
                        <div key={item} className="bg-muted p-4 rounded-lg text-center">
                          <p className="font-medium">Grid Item {item}</p>
                          <p className="text-sm text-muted-foreground">Responsive layout</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Technical Implementation Details */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Technical Implementation</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Development Setup</CardTitle>
                  <CardDescription>Commands and workflow for development</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="bg-muted p-3 rounded font-mono text-sm">
                    <div>npm run dev # Start development server</div>
                    <div>npm run build # Production build</div>
                    <div>npm run lint # Run ESLint</div>
                    <div>npm run format # Format with Prettier</div>
                    <div>npm run test # Run Jest tests</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Testing & Quality</CardTitle>
                  <CardDescription>Built-in testing and code quality tools</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Jest + React Testing Library</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">ESLint + Prettier configured</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">TypeScript strict mode</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Build optimization enabled</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center py-8 border-t">
            <p className="text-muted-foreground">
              Next.js Tailwind Template - Ready for production use
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              All components and features on this page are fully functional and tested.
            </p>
          </div>
        </div>
      </main>
    </SmoothScrollProvider>
  );
}
