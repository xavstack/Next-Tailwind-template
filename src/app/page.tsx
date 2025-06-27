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
  title: "Xav's Full Stack Template - Production Ready Stack",
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
    title: "Xav's Full Stack Template - Live Demonstrations",
    description:
      "Interactive showcase of modern web development tools and capabilities. Explore animations, security features, and best practices in action.",
    type: "website",
  },
  twitter: {
    title: "Xav's Full Stack Template - Live Demonstrations",
    description:
      "Interactive showcase with real-time examples of modern web development capabilities.",
  },
});

// Documentation content for modals
const documentationContent = {
  reference: {
    title: "Complete Reference Guide",
    content: `# Next.js Template Reference

## 🎯 Quick Start
\`\`\`bash
npm install
npm run dev
\`\`\`

## 📦 Component Library
- **UI Components**: \`src/components/ui/\` (shadcn/ui)
- **Examples**: \`src/components/examples/\` (implementation patterns)
- **Custom**: \`src/components/\` (project-specific components)

## 🛠️ Utilities
- **SEO**: \`createPageMetadata()\`, \`createBlogPostSEO()\`
- **Styling**: \`cn()\` class merging utility
- **Data**: \`fetcher()\` for SWR integration
- **Validation**: Zod schemas for forms and APIs

## 🎨 Styling Guide
- Use Tailwind utilities first
- CSS variables for theming in \`globals.css\`
- shadcn/ui components for consistency
- \`@tailwindcss/forms\` for enhanced form styling

## 🔧 Development Commands
- \`npm run dev\` - Development server
- \`npm run build\` - Production build
- \`npm run lint\` - ESLint check
- \`npm run format\` - Prettier formatting
- \`npm test\` - Run tests
- \`./scripts/quality/ci-check.sh\` - Quality analysis

## 📊 Quality Tools
- Jest + React Testing Library for testing
- ESLint 9 with Next.js configuration
- Prettier with project-specific rules
- Husky pre-commit hooks
- Quality scoring system (100-point scale)

## 🚀 Deployment
Ready for Vercel, Netlify, or any Node.js hosting platform.
Environment variables in \`.env.example\`.`,
  },
  prompting: {
    title: "AI Prompting Examples",
    content: `# AI Prompting Guide

## 🎯 Component Creation
**Prompt**: "Create a hero section component with Framer Motion animations, using shadcn/ui Button and Card components, styled with Tailwind utilities only. Include TypeScript props interface and responsive design."

**Why it works**: Follows template constraints (Motion animations, shadcn/ui components, Tailwind-only styling, TypeScript)

## 📊 Data Integration
**Prompt**: "Build a user dashboard that fetches data using SWR with the configured fetcher, includes loading states, error handling, and displays results in a responsive grid using shadcn/ui Cards."

**Why it works**: Uses SWR patterns, proper error handling, shadcn/ui components, responsive design

## 🔍 SEO Implementation
**Prompt**: "Create a blog post page that uses the createBlogPostSEO utility for metadata, includes structured data, and renders content with proper semantic HTML and Tailwind styling."

**Why it works**: Leverages SEO utilities, structured data, semantic HTML, Tailwind styling

## 📝 Form Development
**Prompt**: "Build a contact form using React Hook Form with Zod validation, shadcn/ui form components, @tailwindcss/forms styling, and proper error handling with loading states."

**Why it works**: Uses established form patterns, validation, UI components, enhanced form styling

## 🎨 Animation Patterns
**Prompt**: "Add stagger animations to a list of cards using Framer Motion variants, with spring physics and hover interactions. Use the existing AnimatedCard pattern as reference."

**Why it works**: References existing patterns, specifies animation library, mentions physics

## 🛡️ Security Implementation
**Prompt**: "Add rate limiting to the contact API route using in-memory storage, include Zod validation for all inputs, and implement proper error sanitization for production."

**Why it works**: Specifies security measures, validation patterns, production considerations`,
  },
  testing: {
    title: "Testing Patterns & Guide",
    content: `# Testing Patterns

## 🧪 Component Testing
\`\`\`typescript
import { render, screen } from '@testing-library/react';
import { ContactForm } from '@/components/ContactForm';

test('renders contact form with validation', () => {
  render(<ContactForm />);
  expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
});
\`\`\`

## 🔗 API Testing
\`\`\`typescript
import { POST } from '@/app/api/contact/route';

test('validates contact form submission', async () => {
  const request = new Request('http://localhost', {
    method: 'POST',
    body: JSON.stringify({
      name: 'Test User',
      email: 'test@example.com',
      message: 'Test message that is long enough to pass validation'
    })
  });
  
  const response = await POST(request);
  expect(response.status).toBe(200);
});
\`\`\`

## 🎯 SEO Testing
\`\`\`typescript
import { createPageMetadata } from '@/lib/seo';

test('generates correct page metadata', () => {
  const metadata = createPageMetadata({
    title: 'Test Page',
    description: 'Test description'
  });
  
  expect(metadata.title).toBe(&apos;Test Page | Next.js Template&apos;);
  expect(metadata.description).toBe(&apos;Test description&apos;);
});
\`\`\`

## 🎨 Animation Testing
\`\`\`typescript
import { render } from '@testing-library/react';
import { AnimatedCard } from '@/components/examples/AnimatedCard';

test('renders animated card with motion props', () => {
  render(
    <AnimatedCard 
      title="Test" 
      description="Test description" 
      icon="🎯" 
      delay={0} 
    />
  );
  // Test implementation here
});
\`\`\`

## 📊 Coverage Requirements
- Minimum 75% coverage on all metrics
- Focus on critical user journeys
- Test error states and edge cases
- Mock external dependencies

## 🚀 Running Tests
- \`npm test\` - Run all tests
- \`npm test -- --watch\` - Watch mode
- \`npm test -- --coverage\` - With coverage report
- \`npm test -- --verbose\` - Detailed output`,
  },
  architecture: {
    title: "Architecture & Project Structure",
    content: `# Project Architecture

## 📁 Folder Structure
\`\`\`
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── examples/         # Implementation examples
│   └── providers/        # Context providers
├── lib/                   # Utility functions
│   ├── seo.ts            # SEO utilities
│   ├── utils.ts          # General utilities
│   ├── fetcher.ts        # SWR data fetching
│   └── env.ts            # Environment validation
└── middleware.ts          # Next.js middleware
\`\`\`

## 🎯 Design Principles
- **Separation of Concerns**: Clear boundaries between UI, logic, and data
- **Component Composition**: Build complex UIs from simple, reusable components
- **Type Safety**: Strict TypeScript with proper interfaces
- **Performance First**: Optimize for Core Web Vitals
- **Accessibility**: WCAG compliance with semantic HTML

## 🔧 Key Patterns
- **App Router**: Use app directory for routing and layouts
- **Server Components**: Default to server components, use 'use client' sparingly
- **Data Fetching**: SWR for client-side, native fetch for server-side
- **State Management**: React hooks + SWR for server state
- **Styling**: Tailwind utilities + CSS variables for theming

## 🛡️ Security Architecture
- **Input Validation**: Zod schemas for all user inputs
- **API Security**: Rate limiting + CSRF protection
- **Content Security Policy**: Strict CSP headers
- **Environment Variables**: Proper secrets management

## 📦 Dependencies Strategy
- **Core**: Next.js 15 + React 19 + TypeScript
- **UI**: Radix UI primitives + shadcn/ui components
- **Styling**: Tailwind CSS + @tailwindcss/forms
- **Animation**: Framer Motion + Embla Carousel + Lenis
- **Data**: SWR + React Hook Form + Zod
- **Quality**: ESLint + Prettier + Jest + Husky

## 🚀 Deployment
- **Build Output**: Static + server-rendered pages
- **Environment**: Node.js 18+ required
- **CDN**: Optimized for edge deployment
- **Monitoring**: Built-in performance tracking`,
  },
};

// Documentation Modal Component
function DocumentationModal({
  title,
  content,
  trigger,
}: {
  title: string;
  content: string;
  trigger: React.ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[85vh] overflow-hidden flex flex-col">
        <DialogHeader className="flex-shrink-0">
          <DialogTitle className="flex items-center gap-2">
            <Book className="h-5 w-5" />
            {title}
          </DialogTitle>
          <DialogDescription>
            Complete documentation and examples for this section
          </DialogDescription>
        </DialogHeader>
        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-muted-foreground/20 scrollbar-track-transparent">
          <div className="prose prose-sm max-w-none dark:prose-invert pr-4">
            <pre className="whitespace-pre-wrap text-sm leading-relaxed bg-muted p-4 rounded-lg border overflow-x-auto">
              {content}
            </pre>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function Home() {
  const carouselImages = [
    {
      src: "https://www.aesdes.org/wp-content/uploads/2025/01/post-image-4-e1738111951741.jpg",
      alt: "Retro Futuristic Cityscape",
      title: "Neon Cityscape",
    },
    {
      src: "https://www.aesdes.org/wp-content/uploads/2025/01/post-image-2.jpg",
      alt: "Futuristic Nature Scene",
      title: "Digital Nature",
    },
    {
      src: "/retrofuture.gif",
      alt: "Retro Future Animation",
      title: "Retro Future",
    },
  ];

  const techStackData = [
    {
      category: "Core Framework",
      icon: <Zap className="h-5 w-5" />,
      primary: "Next.js 15 + React 19",
      description: "App Router, Server Components, React 19 features",
      packages: ["next@^15.3.4", "react@^19.1.0", "typescript@^5"],
      features: ["App Router", "Server Components", "React 19 useOptimistic", "Turbopack"],
      color: "text-blue-600",
    },
    {
      category: "UI System",
      icon: <Component className="h-5 w-5" />,
      primary: "Radix UI + shadcn/ui",
      description: "Accessible primitives + pre-built components",
      packages: ["@radix-ui/react-*", "lucide-react@^0.518.0"],
      features: ["Dialog", "DropdownMenu", "Tooltip", "Tabs", "Form components"],
      color: "text-purple-600",
    },
    {
      category: "Styling",
      icon: <Palette className="h-5 w-5" />,
      primary: "Tailwind CSS 3.4",
      description: "Utility-first + enhanced form styling",
      packages: ["tailwindcss@^3.4.17", "@tailwindcss/forms@^0.5.10"],
      features: ["CSS variables", "Dark mode", "Responsive design", "Form styling"],
      color: "text-teal-600",
    },
    {
      category: "Animation",
      icon: <Sparkles className="h-5 w-5" />,
      primary: "Framer Motion + Embla + Lenis",
      description: "Complete animation ecosystem",
      packages: ["framer-motion@^12.18.1", "embla-carousel-react@^8.6.0", "lenis@^1.3.4"],
      features: ["Component animations", "Carousels", "Smooth scrolling", "Gesture handling"],
      color: "text-pink-600",
    },
    {
      category: "Data & Forms",
      icon: <Database className="h-5 w-5" />,
      primary: "SWR + React Hook Form + Zod",
      description: "Type-safe data fetching and validation",
      packages: ["swr@^2.3.3", "react-hook-form@^7.58.1", "zod@^3.25.67"],
      features: ["Data fetching", "Form validation", "Schema validation", "Error handling"],
      color: "text-green-600",
    },
    {
      category: "Security",
      icon: <Shield className="h-5 w-5" />,
      primary: "CSP + Rate Limiting + Validation",
      description: "Comprehensive security implementation",
      packages: ["next/server", "zod@^3.25.67"],
      features: ["Content Security Policy", "Rate limiting", "Input validation", "CSRF protection"],
      color: "text-red-600",
    },
  ];

  return (
    <SmoothScrollProvider>
      <main className="min-h-screen bg-background">
        {/* Header */}
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4">
            <div className="flex items-center space-x-2">
              <h2 className="text-xl font-bold">Xav&apos;s Full Stack Template</h2>
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
              Xav&apos;s full stack template
              <span className="text-primary"></span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Next.js 15 + React 19 with 30+ integrated libraries, security features, animations,
              and AI-optimized development workflow. Everything you need for production
              applications.
            </p>
            <div className="flex justify-center gap-4 mb-8">
              <Button size="lg" asChild>
                <a
                  href="https://github.com/xavstack/Next-Tailwind-template"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View on GitHub
                </a>
              </Button>
            </div>
          </div>

          {/* Compact Tech Stack - WITH CENTERED TITLES AND COLORS */}
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
                      <div className="text-center mb-4">
                        <div className="flex justify-center items-center gap-3 mb-3">
                          <div className={tech.color}>{tech.icon}</div>
                        </div>
                        <h3 className={`font-semibold ${tech.color}`}>{tech.primary}</h3>
                        <p className="text-sm text-muted-foreground">{tech.category}</p>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4 text-center">
                        {tech.description}
                      </p>
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
                        <div className={tech.color}>{tech.icon}</div>
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

          {/* Documentation & Resources Hub - WITH MODALS */}
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
                  <DocumentationModal
                    title={documentationContent.reference.title}
                    content={documentationContent.reference.content}
                    trigger={
                      <Button variant="outline" size="sm" className="w-full">
                        <FileText className="w-4 h-4 mr-2" />
                        View Reference
                      </Button>
                    }
                  />
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <Code className="h-8 w-8 mb-3 text-purple-600" />
                  <h3 className="font-semibold mb-2">AI Prompting Guide</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Effective prompts for AI development
                  </p>
                  <DocumentationModal
                    title={documentationContent.prompting.title}
                    content={documentationContent.prompting.content}
                    trigger={
                      <Button variant="outline" size="sm" className="w-full">
                        <Code className="w-4 h-4 mr-2" />
                        View Examples
                      </Button>
                    }
                  />
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <TestTube className="h-8 w-8 mb-3 text-green-600" />
                  <h3 className="font-semibold mb-2">Testing Patterns</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Component and API testing guides
                  </p>
                  <DocumentationModal
                    title={documentationContent.testing.title}
                    content={documentationContent.testing.content}
                    trigger={
                      <Button variant="outline" size="sm" className="w-full">
                        <TestTube className="w-4 h-4 mr-2" />
                        View Patterns
                      </Button>
                    }
                  />
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <Layers className="h-8 w-8 mb-3 text-orange-600" />
                  <h3 className="font-semibold mb-2">Architecture</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Project structure and patterns
                  </p>
                  <DocumentationModal
                    title={documentationContent.architecture.title}
                    content={documentationContent.architecture.content}
                    trigger={
                      <Button variant="outline" size="sm" className="w-full">
                        <Layers className="w-4 h-4 mr-2" />
                        View Architecture
                      </Button>
                    }
                  />
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button variant="outline" asChild>
                <a
                  href="https://github.com/xavstack/Next-Tailwind-template?tab=readme-ov-file#nextjs--tailwind-template"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Complete Developer Guide
                </a>
              </Button>
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
                  href="https://github.com/xavstack/Next-Tailwind-template"
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
