import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ContactForm } from "@/components/ContactForm";
import { AnimatedCard } from "@/components/examples/AnimatedCard";
import { ImageCarousel } from "@/components/examples/ImageCarousel";
import { SmoothScrollProvider } from "@/components/examples/SmoothScrollProvider";

export default function Home() {
  const carouselImages = [
    { src: "🖼️", alt: "Gallery Image 1", title: "Beautiful Landscape" },
    { src: "🎨", alt: "Gallery Image 2", title: "Abstract Art" },
    { src: "📸", alt: "Gallery Image 3", title: "Street Photography" },
    { src: "🌅", alt: "Gallery Image 4", title: "Sunrise View" },
  ];

  return (
    <SmoothScrollProvider>
      <main className="min-h-screen bg-background">
        {/* Header */}
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto flex h-14 max-w-screen-2xl items-center justify-between px-4">
            <div className="flex items-center space-x-2">
              <h2 className="text-lg font-bold">Next.js Template</h2>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Next.js Tailwind Template</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              A modern, fully-featured Next.js template with Tailwind CSS, shadcn/ui components,
              TypeScript, and best practices built-in.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg">Get Started</Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>

          {/* Enhanced Features Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Enhanced Capabilities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatedCard
                title="Framer Motion"
                description="Smooth animations and transitions"
                icon="🎭"
                delay={0}
              />
              <AnimatedCard
                title="Embla Carousel"
                description="Touch-friendly image carousels"
                icon="🎠"
                delay={0.1}
              />
              <AnimatedCard
                title="Lenis Scrolling"
                description="Buttery smooth scroll experience"
                icon="🌊"
                delay={0.2}
              />
            </div>
          </div>

          {/* Carousel Demo Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Interactive Carousel</h2>
            <div className="max-w-2xl mx-auto">
              <ImageCarousel images={carouselImages} />
            </div>
          </div>

          {/* Original Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <Card>
              <CardHeader>
                <CardTitle>⚡ Next.js 15</CardTitle>
                <CardDescription>Built with the latest Next.js features</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  App Router, Server Components, and modern React 19 support.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>🎨 Tailwind CSS</CardTitle>
                <CardDescription>Utility-first CSS framework</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Rapid UI development with modern design system tokens.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>🧩 shadcn/ui</CardTitle>
                <CardDescription>Beautiful, accessible components</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Copy-paste components built on Radix UI primitives.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>📝 TypeScript</CardTitle>
                <CardDescription>Type-safe development</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Catch errors early with static type checking.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>🧪 Testing Ready</CardTitle>
                <CardDescription>Jest & React Testing Library</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Comprehensive testing setup for reliable applications.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>⚙️ Developer Experience</CardTitle>
                <CardDescription>Optimized for productivity</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  ESLint, Prettier, and hot reloading for smooth development.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Tabs Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Getting Started</h2>
            <Tabs defaultValue="install" className="max-w-2xl mx-auto">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="install">Install</TabsTrigger>
                <TabsTrigger value="develop">Develop</TabsTrigger>
                <TabsTrigger value="deploy">Deploy</TabsTrigger>
              </TabsList>
              <TabsContent value="install" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Installation</CardTitle>
                    <CardDescription>Get up and running in minutes</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <code className="block bg-muted p-2 rounded text-sm">
                      git clone https://github.com/xavstack/Next-Tailwind-template.git
                    </code>
                    <code className="block bg-muted p-2 rounded text-sm">npm install</code>
                    <code className="block bg-muted p-2 rounded text-sm">npm run dev</code>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="develop" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Development Commands</CardTitle>
                    <CardDescription>Essential commands for development</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <code className="block bg-muted p-2 rounded text-sm">npm run dev</code>
                    <code className="block bg-muted p-2 rounded text-sm">npm run build</code>
                    <code className="block bg-muted p-2 rounded text-sm">npm run lint</code>
                    <code className="block bg-muted p-2 rounded text-sm">npm run format</code>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="deploy" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Deployment Ready</CardTitle>
                    <CardDescription>Deploy to your favorite platform</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      This template is optimized for deployment on Vercel, Netlify, or any Node.js
                      hosting platform.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Contact Section */}
          <div className="max-w-md mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Get In Touch</h2>
            <ContactForm />
          </div>
        </div>
      </main>
    </SmoothScrollProvider>
  );
}
