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
import {
  CheckCircle,
  Code,
  Palette,
  Zap,
  Database,
  Search,
  Settings,
  TestTube,
  Sparkles,
  Copy,
  ExternalLink,
  Wand2,
  Shield,
  Gauge,
  Globe,
} from "lucide-react";

export default function Home() {
  const carouselImages = [
    { src: "🖼️", alt: "Gallery Image 1", title: "Beautiful Landscape" },
    { src: "🎨", alt: "Gallery Image 2", title: "Abstract Art" },
    { src: "📸", alt: "Gallery Image 3", title: "Street Photography" },
    { src: "🌅", alt: "Gallery Image 4", title: "Sunrise View" },
  ];

  const capabilitiesData = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Next.js 15 App Router",
      description: "Server Components, React 19, Turbopack",
      status: "Production Ready",
      details: "Latest framework features with optimal SSR/CSR performance.",
      cheatSheet: "app/layout.tsx for global layout, app/page.tsx for routes",
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Tailwind CSS + Forms",
      description: "Utility-first + enhanced form styling",
      status: "Configured",
      details: "@tailwindcss/forms provides consistent input styling across browsers.",
      cheatSheet: "className='bg-primary text-white p-4 rounded-lg'",
    },
    {
      icon: <Wand2 className="h-6 w-6" />,
      title: "Theme System",
      description: "next-themes with dark/light/system",
      status: "Phase 4 ✨",
      details: "Robust theme switching with CSS variables and system preference detection.",
      cheatSheet: "useTheme() hook, ThemeToggle component, CSS variables",
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "SEO Automation",
      description: "next-seo + structured data helpers",
      status: "Phase 4 ✨",
      details: "Comprehensive SEO utilities for pages, blog posts, and products.",
      cheatSheet: "createPageSEO(), createBlogPostSEO(), JSON-LD schemas",
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Framer Motion",
      description: "Declarative animations with physics",
      status: "Phase 2",
      details: "Professional animations with spring physics and gesture support.",
      cheatSheet: "<motion.div animate={{ x: 100 }} transition={{ type: 'spring' }}>",
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "SWR Data Fetching",
      description: "Smart caching with revalidation",
      status: "Phase 4 ✨",
      details: "Configured SWR with custom fetcher, error handling, and caching patterns.",
      cheatSheet: "useSWR('/api/data', fetcher) with loading states",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Quality Gates",
      description: "Husky + lint-staged automation",
      status: "Phase 4 ✨",
      details: "Pre-commit hooks ensure code quality with automated formatting and testing.",
      cheatSheet: "Runs automatically on git commit - lint, format, test",
    },
    {
      icon: <TestTube className="h-6 w-6" />,
      title: "Testing Suite",
      description: "Jest + React Testing Library",
      status: "Configured",
      details: "Comprehensive testing setup with component and integration test patterns.",
      cheatSheet: "render(<Component />), screen.getByText(), expect().toBeInTheDocument()",
    },
  ];

  const cheatSheetSections = [
    {
      title: "Styling Cheat Sheet",
      icon: <Palette className="h-5 w-5" />,
      items: [
        {
          label: "Theme Variables",
          code: "bg-background text-foreground border-border",
          description: "Use semantic color variables for theme compatibility",
        },
        {
          label: "Dark Mode Classes",
          code: "dark:bg-gray-800 dark:text-white",
          description: "Responsive dark mode styling with Tailwind modifiers",
        },
        {
          label: "Form Styling",
          code: "rounded-md border-gray-300 focus:border-primary focus:ring-primary",
          description: "@tailwindcss/forms provides consistent input styling",
        },
        {
          label: "Responsive Design",
          code: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
          description: "Mobile-first responsive layouts with Tailwind breakpoints",
        },
      ],
    },
    {
      title: "Animation Cheat Sheet",
      icon: <Sparkles className="h-5 w-5" />,
      items: [
        {
          label: "Basic Motion",
          code: "<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>",
          description: "Simple fade-in animation with Framer Motion",
        },
        {
          label: "Hover Effects",
          code: "<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>",
          description: "Interactive hover and tap animations",
        },
        {
          label: "Stagger Children",
          code: "variants={containerVariants} initial='hidden' animate='visible'",
          description: "Animate children in sequence with stagger effects",
        },
        {
          label: "Page Transitions",
          code: "<motion.div exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>",
          description: "Smooth page transitions between routes",
        },
      ],
    },
    {
      title: "Data Fetching Cheat Sheet",
      icon: <Database className="h-5 w-5" />,
      items: [
        {
          label: "Basic SWR",
          code: "const { data, error, isLoading } = useSWR('/api/users', fetcher)",
          description: "Standard data fetching with loading and error states",
        },
        {
          label: "Conditional Fetching",
          code: "useSWR(shouldFetch ? '/api/data' : null, fetcher)",
          description: "Fetch data conditionally based on state or props",
        },
        {
          label: "Mutation & Revalidation",
          code: "mutate('/api/users'); // Revalidate after changes",
          description: "Update cache and trigger revalidation after mutations",
        },
        {
          label: "Error Handling",
          code: "if (error) return <div>Failed to load</div>",
          description: "Handle error states gracefully with user feedback",
        },
      ],
    },
    {
      title: "SEO Cheat Sheet",
      icon: <Search className="h-5 w-5" />,
      items: [
        {
          label: "Page SEO",
          code: "createPageSEO({ title: 'Page Title', description: 'Description' })",
          description: "Generate SEO metadata for standard pages",
        },
        {
          label: "Blog Post SEO",
          code: "createBlogPostSEO({ title, slug, date, author, tags })",
          description: "Complete SEO setup for blog posts with structured data",
        },
        {
          label: "Product SEO",
          code: "createProductSEO({ title, price, currency, availability })",
          description: "E-commerce SEO with product-specific metadata",
        },
        {
          label: "JSON-LD Schema",
          code: "generateOrganizationSchema(), generateWebsiteSchema()",
          description: "Structured data for search engines and rich snippets",
        },
      ],
    },
  ];

  const aiPromptExamples = [
    {
      category: "Component Creation",
      prompt:
        "Create a hero section component with Framer Motion animations, using shadcn/ui Button and Card components, styled with Tailwind utilities only. Include TypeScript props interface and responsive design.",
      explanation:
        "Follows template constraints: Motion animations, shadcn/ui components, Tailwind-only styling, TypeScript",
    },
    {
      category: "Data Integration",
      prompt:
        "Build a user dashboard that fetches data using SWR with the configured fetcher, includes loading states, error handling, and displays results in a responsive grid using shadcn/ui Cards.",
      explanation:
        "Uses SWR patterns, proper error handling, shadcn/ui components, responsive design",
    },
    {
      category: "SEO Implementation",
      prompt:
        "Create a blog post page that uses the createBlogPostSEO utility for metadata, includes structured data, and renders content with proper semantic HTML and Tailwind styling.",
      explanation: "Leverages SEO utilities, structured data, semantic HTML, Tailwind styling",
    },
    {
      category: "Form Development",
      prompt:
        "Build a contact form using React Hook Form with Zod validation, shadcn/ui form components, @tailwindcss/forms styling, and proper error handling with loading states.",
      explanation:
        "Uses established form patterns, validation, UI components, enhanced form styling",
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
              <Badge variant="secondary">Phase 4 Complete</Badge>
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
              Template Onboarding
              <span className="text-primary"> & Quick Start</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Comprehensive guide to all template capabilities: SEO automation, theme system,
              animations, data fetching, quality gates, and more. Everything you need to build
              production-ready websites.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg">
                <ExternalLink className="w-4 h-4 mr-2" />
                View GitHub
              </Button>
              <Button variant="outline" size="lg">
                <Copy className="w-4 h-4 mr-2" />
                Copy Template
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-primary">219kB</div>
                <p className="text-sm text-muted-foreground">Total Bundle Size</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-green-600">100/100</div>
                <p className="text-sm text-muted-foreground">Quality Score</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-blue-600">3.0s</div>
                <p className="text-sm text-muted-foreground">Build Time</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-purple-600">8</div>
                <p className="text-sm text-muted-foreground">Core Features</p>
              </CardContent>
            </Card>
          </div>

          {/* Template Capabilities */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-2">Complete Template Capabilities</h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Everything included in this production-ready template. Click any card to see
              implementation details and cheat sheets.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {capabilitiesData.map((capability, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto mb-2 p-3 bg-primary/10 rounded-full w-fit">
                      {capability.icon}
                    </div>
                    <CardTitle className="text-lg">{capability.title}</CardTitle>
                    <CardDescription>{capability.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge
                      variant={capability.status.includes("Phase") ? "default" : "secondary"}
                      className="mb-3"
                    >
                      {capability.status}
                    </Badge>
                    <p className="text-sm text-muted-foreground mb-3">{capability.details}</p>
                    <div className="p-2 bg-muted rounded text-xs font-mono">
                      {capability.cheatSheet}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Cheat Sheets */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-2">Developer Cheat Sheets</h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Quick reference guides for all template capabilities. Copy these patterns to build
              efficiently.
            </p>

            <Tabs defaultValue="styling" className="max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="styling">Styling</TabsTrigger>
                <TabsTrigger value="animation">Animation</TabsTrigger>
                <TabsTrigger value="data">Data</TabsTrigger>
                <TabsTrigger value="seo">SEO</TabsTrigger>
              </TabsList>

              {cheatSheetSections.map((section, sectionIndex) => (
                <TabsContent
                  key={sectionIndex}
                  value={section.title.toLowerCase().split(" ")[0]}
                  className="space-y-6"
                >
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        {section.icon}
                        <CardTitle>{section.title}</CardTitle>
                      </div>
                      <CardDescription>
                        Essential patterns and code snippets for {section.title.toLowerCase()}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {section.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="border rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold">{item.label}</h4>
                            <Button variant="ghost" size="sm">
                              <Copy className="w-4 h-4" />
                            </Button>
                          </div>
                          <div className="bg-muted p-3 rounded text-sm font-mono mb-2 overflow-x-auto">
                            {item.code}
                          </div>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* AI Prompt Examples */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-2">AI Prompt Examples</h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Use these prompts with AI coding assistants to build features correctly within
              template constraints.
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {aiPromptExamples.map((example, index) => (
                <Card key={index} className="relative">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{example.category}</CardTitle>
                      <Badge variant="outline">{example.category.split(" ")[0]}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-sm font-medium mb-2">Example Prompt:</p>
                      <p className="text-sm italic">&ldquo;{example.prompt}&rdquo;</p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                      <p className="text-sm font-medium mb-2 text-green-800 dark:text-green-200">
                        Why this works:
                      </p>
                      <p className="text-sm text-green-700 dark:text-green-300">
                        {example.explanation}
                      </p>
                    </div>
                    <Button variant="ghost" size="sm" className="w-full">
                      <Copy className="w-4 h-4 mr-2" />
                      Copy Prompt
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Live Demonstrations */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-2">Live Feature Demonstrations</h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Interactive examples of all template capabilities in action. Study these patterns for
              your own implementations.
            </p>

            <Tabs defaultValue="swr" className="max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="swr">SWR Data</TabsTrigger>
                <TabsTrigger value="animations">Animations</TabsTrigger>
                <TabsTrigger value="carousel">Carousel</TabsTrigger>
                <TabsTrigger value="forms">Forms</TabsTrigger>
              </TabsList>

              <TabsContent value="swr" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Database className="h-5 w-5" />
                      SWR Data Fetching Demo
                    </CardTitle>
                    <CardDescription>
                      Complete SWR implementation with loading states, error handling, and
                      revalidation patterns. Study the code in components/examples/SWRExample.tsx
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
                      Stagger animations, hover effects, and spring physics. Code available in
                      components/examples/AnimatedCard.tsx
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
                      Embla Carousel Component
                    </CardTitle>
                    <CardDescription>
                      Touch-friendly carousel with navigation controls and responsive design.
                      Implementation in components/examples/ImageCarousel.tsx
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
                      React Hook Form + Zod validation with @tailwindcss/forms styling. Complete
                      implementation in components/ContactForm.tsx
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ContactForm />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Quality & Development Tools */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-2">Quality & Development Tools</h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Built-in quality automation, testing, and development tools. All commands run
              automatically on commit.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Quality Gates
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="bg-muted p-3 rounded text-sm font-mono">
                    npm run lint && npm run format && npm test
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Runs automatically on git commit via Husky + lint-staged
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
                <CardContent className="space-y-2">
                  <div className="bg-muted p-3 rounded text-sm font-mono">
                    ./scripts/quality/ci-check.sh
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive quality analysis with 100-point scoring system
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TestTube className="h-5 w-5" />
                    Testing Suite
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="bg-muted p-3 rounded text-sm font-mono">npm test -- --watch</div>
                  <p className="text-sm text-muted-foreground">
                    Jest + React Testing Library with component testing patterns
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Getting Started */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Build?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              You now have everything needed to build production-ready websites with this template.
              Use the cheat sheets, follow the AI prompts, and study the live examples.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg">
                <Code className="w-4 h-4 mr-2" />
                Start Building
              </Button>
              <Button variant="outline" size="lg">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </main>
    </SmoothScrollProvider>
  );
}
