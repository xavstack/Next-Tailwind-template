# Next.js & Tailwind CSS Production-Ready Template

A robust, fully-featured, and production-ready starter template for Next.js 15, Tailwind CSS, and `shadcn/ui`. Architected for stability, performance, and superior developer experience with modern animation, interaction capabilities, and comprehensive SEO automation.

**🎉 Phase 4 Complete**: Enhanced with SEO automation, theme system, quality gates, and comprehensive environment setup. Template is now production-ready with all essential capabilities.

---

## 🎯 Template Philosophy & Constraints

**⚠️ READ THIS FIRST** - To use this template correctly and avoid misuse:

### Core Principles

- **Tailwind-Only Styling**: NO custom CSS outside of `globals.css`. Use utility classes exclusively.
- **TypeScript Strict Mode**: All code must be type-safe. No `any` types allowed.
- **Component Composition**: Use shadcn/ui components, compose with Tailwind classes.
- **App Router Only**: No Pages Router. All routes in `src/app/` directory.
- **Quality Gates**: Code must pass lint, format, and type checks before commits.

### Template Constraints (What NOT To Do)

❌ **Don't Add These:**

- Custom CSS files (use Tailwind utilities)
- CSS-in-JS libraries (styled-components, emotion)
- Pages Router patterns
- jQuery or legacy libraries
- Bootstrap or other CSS frameworks

✅ **Do This Instead:**

- Use `className` with Tailwind utilities
- Add shadcn/ui components: `npx shadcn@latest add [component]`
- Use built-in animations (Framer Motion)
- Follow TypeScript patterns
- Use provided quality scripts

---

## 🚀 Template Capabilities Cheat Sheet

### 🎨 Styling & Theming

```typescript
// Dark/Light Mode (next-themes)
import { useTheme } from "next-themes"
const { theme, setTheme } = useTheme()

// Tailwind Classes with Theme Variables
className="bg-background text-foreground border-border"

// Form Styling (@tailwindcss/forms)
<input type="text" className="rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary" />
```

### 🎭 Animations (Framer Motion)

```typescript
import { motion } from "framer-motion"

// Basic Animation
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>

// Stagger Children
<motion.div variants={containerVariants} initial="hidden" animate="visible">
  {items.map((item, i) => (
    <motion.div key={i} variants={itemVariants}>
      {item}
    </motion.div>
  ))}
</motion.div>
```

### 🎠 Carousels (Embla Carousel)

```typescript
import useEmblaCarousel from 'embla-carousel-react'

const [emblaRef] = useEmblaCarousel({ loop: true })
return <div className="embla" ref={emblaRef}>...</div>
```

### 🌊 Smooth Scrolling (Lenis)

```typescript
// Already configured in SmoothScrollProvider
// Wrap your app content:
<SmoothScrollProvider>
  <YourContent />
</SmoothScrollProvider>
```

### 📡 Data Fetching (SWR)

```typescript
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";

const { data, error, isLoading } = useSWR("/api/users", fetcher);
```

### 🔍 SEO Automation (next-seo)

```typescript
import { createPageSEO, createBlogPostSEO } from "@/lib/seo";

// Page SEO
const pageSEO = createPageSEO({
  title: "Custom Page Title",
  description: "Page description",
});

// Blog Post SEO
const blogSEO = createBlogPostSEO({
  title: "Blog Post Title",
  description: "Post description",
  slug: "blog-post-slug",
  date: "2025-01-01",
  author: "Author Name",
  tags: ["tag1", "tag2"],
});
```

### 📝 Forms (React Hook Form + Zod)

```typescript
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, "Name required"),
});

const form = useForm({
  resolver: zodResolver(schema),
});
```

### 🧪 Testing (Jest + RTL)

```typescript
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

test('renders component', () => {
  render(<YourComponent />)
  expect(screen.getByText('Expected Text')).toBeInTheDocument()
})
```

---

## 💬 Example AI Prompts for Website Building

### For New Pages/Components

```
Create a new [page/component] following the template's constraints:
- Use Next.js 15 App Router patterns
- Style with Tailwind utilities only (no custom CSS)
- Add TypeScript types for all props
- Use shadcn/ui components where applicable
- Include Framer Motion animations for interactions
- Implement proper SEO with the lib/seo utilities
- Add responsive design with mobile-first approach
```

### For Data Fetching

```
Implement data fetching for [feature] using:
- SWR with the configured fetcher from lib/fetcher.ts
- Proper loading states and error handling
- TypeScript interfaces for API responses
- Optimistic updates where appropriate
- Follow the SWRExample.tsx patterns
```

### For Animations

```
Add animations to [component] using:
- Framer Motion for all interactions
- Stagger animations for lists
- Page transitions between routes
- Respect user's motion preferences
- Follow the AnimatedCard.tsx patterns
```

### For SEO Optimization

```
Optimize [page] for SEO using:
- The createPageSEO utility from lib/seo.ts
- Proper meta descriptions and titles
- Open Graph and Twitter Card meta tags
- JSON-LD structured data where applicable
- Semantic HTML structure
```

---

## 🛠️ Complete Tech Stack & Capabilities

### Core Framework

| Technology     | Version | Purpose         | Cheat Sheet                                         |
| -------------- | ------- | --------------- | --------------------------------------------------- |
| **Next.js**    | 15.3.4  | React Framework | `app/` directory, Server Components, Route Handlers |
| **React**      | 19      | UI Library      | Server Components, `use client` for interactivity   |
| **TypeScript** | Latest  | Type Safety     | Strict mode, no `any` types, proper interfaces      |

### Styling & UI

| Technology                   | Version | Purpose               | Cheat Sheet                                    |
| ---------------------------- | ------- | --------------------- | ---------------------------------------------- |
| **Tailwind CSS**             | 3.4     | Utility-First CSS     | `className="bg-primary text-white p-4"`        |
| **@tailwindcss/forms**       | 0.5     | Form Styling          | Auto-styled inputs, selects, checkboxes        |
| **shadcn/ui**                | Latest  | Component Library     | `npx shadcn@latest add button`                 |
| **Radix UI Primitives**      | Latest  | Accessible Components | Dialog, Dropdown, Label, Slot, Tabs, Tooltip   |
| **Lucide React**             | 0.518   | Icons                 | `import { Mail } from "lucide-react"`          |
| **next-themes**              | 0.4     | Theme System          | `useTheme()` hook, system preference detection |
| **class-variance-authority** | 0.7     | Component Variants    | `cva()` for consistent component APIs          |
| **clsx**                     | 2.1     | Conditional Classes   | `clsx({ 'active': isActive })`                 |
| **tailwind-merge**           | 3.3     | Class Merging         | `twMerge()` prevents Tailwind class conflicts  |

### Animation & Interaction

| Technology         | Version | Purpose       | Cheat Sheet                         |
| ------------------ | ------- | ------------- | ----------------------------------- |
| **Framer Motion**  | 12      | Animations    | `<motion.div animate={{ x: 100 }}>` |
| **Embla Carousel** | 8       | Carousels     | `useEmblaCarousel({ loop: true })`  |
| **Lenis**          | 1.3     | Smooth Scroll | Wrap with `<SmoothScrollProvider>`  |

### Data & State Management

| Technology              | Version | Purpose          | Cheat Sheet                                      |
| ----------------------- | ------- | ---------------- | ------------------------------------------------ |
| **SWR**                 | 2.3     | Data Fetching    | `useSWR('/api/data', fetcher)`                   |
| **React Hook Form**     | 7.58    | Form Management  | `useForm({ resolver: zodResolver(schema) })`     |
| **Zod**                 | 3.25    | Validation       | `z.string().min(1, "Required")`                  |
| **@hookform/resolvers** | 5.1     | Form Integration | `zodResolver(schema)` for validation integration |

### SEO & Performance

| Technology            | Version | Purpose         | Cheat Sheet                             |
| --------------------- | ------- | --------------- | --------------------------------------- |
| **next-seo**          | Latest  | SEO Automation  | `createPageSEO({ title, description })` |
| **Built-in Metadata** | Next.js | Static Metadata | `export const metadata: Metadata = {}`  |

### Quality & Development

| Technology                    | Version | Purpose               | Cheat Sheet                                 |
| ----------------------------- | ------- | --------------------- | ------------------------------------------- |
| **TypeScript**                | 5.x     | Type Safety           | Strict mode, interfaces, type checking      |
| **ESLint**                    | 9.x     | Code Linting          | `npm run lint`, Next.js rules included      |
| **Prettier**                  | 3.5     | Code Formatting       | `npm run format`, auto-formatting           |
| **Husky**                     | 9.1     | Git Hooks             | Pre-commit quality checks automation        |
| **lint-staged**               | 16.1    | Staged File Linting   | Runs linters on git staged files            |
| **Jest**                      | 30.x    | Testing Framework     | `npm test`, with SWC transformer            |
| **React Testing Library**     | 16.3    | Component Testing     | `render()`, `screen.getBy*()`               |
| **@testing-library/jest-dom** | 6.6     | Jest DOM Matchers     | `.toBeInTheDocument()` assertions           |
| **ts-morph**                  | 26.x    | TypeScript AST        | Code analysis for quality scripts           |
| **PostCSS**                   | 8.4     | CSS Processing        | Autoprefixer, Tailwind processing           |
| **Autoprefixer**              | 10.4    | CSS Vendor Prefixes   | Automatic browser compatibility             |
| **@swc/jest**                 | 0.2     | Fast Jest Transformer | Speedy TypeScript/JSX compilation for tests |

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18.18.0+ (specified in `.nvmrc`)
- npm 9.0.0+

### Installation & Setup

```bash
# 1. Clone the template
git clone https://github.com/xavstack/Next-Tailwind-template.git my-project
cd my-project

# 2. Install dependencies
npm install

# 3. Set up environment (optional)
cp .env.example .env.local
# Edit .env.local with your values

# 4. Start development
npm run dev

# 5. Open http://localhost:3000
```

### Alternative: T3 Stack for Full-Stack

```bash
# For database-driven apps with authentication
npx create-t3-app@latest my-fullstack-app --tailwind --nextAuth --prisma --trpc
```

**When to use which:**

- **This Template**: Frontend projects, landing pages, prototypes, component libraries
- **T3 Stack**: Full-stack apps with database, authentication, API layers

---

## 📋 Development Commands Cheat Sheet

### Essential Commands

```bash
# Development
npm run dev              # Start dev server (localhost:3000)
npm run build            # Production build
npm run start            # Start production server

# Code Quality (runs automatically on git commit)
npm run lint             # Check ESLint rules
npm run lint:fix         # Auto-fix ESLint issues
npm run format           # Format with Prettier
npm run format:check     # Check formatting
npm run test             # Run Jest tests
npm run test:watch       # Watch mode for tests

# Quality Analysis
./scripts/quality/ci-check.sh                    # Full quality analysis
./scripts/quality/find-dead-code.sh              # Find unused exports
./scripts/quality/find-duplicates.sh             # Find duplicate code
./scripts/quality/check-framework-compliance.sh  # Check Tailwind compliance
```

### Adding New Components

```bash
# Add shadcn/ui components
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add form
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu

# See all available components
npx shadcn@latest add
```

### Environment Variables

```bash
# Copy example environment file
cp .env.example .env.local

# Key variables for different use cases:
NEXT_PUBLIC_APP_URL=https://yourdomain.com
API_URL=https://api.yourdomain.com
DATABASE_URL=postgresql://...
NEXTAUTH_SECRET=your-secret
JAVA_BACKEND_URL=http://localhost:8080
```

---

## 🎯 Feature Implementation Guide

### Adding a New Page with SEO

```typescript
// app/about/page.tsx
import { Metadata } from 'next'
import { createPageSEO } from '@/lib/seo'

const seoConfig = createPageSEO({
  title: "About Us",
  description: "Learn about our company and mission",
  canonical: "/about"
})

export const metadata: Metadata = {
  title: seoConfig.title,
  description: seoConfig.description,
  openGraph: seoConfig.openGraph,
  twitter: seoConfig.twitter
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      {/* Content with Tailwind classes only */}
    </div>
  )
}
```

### Creating an Animated Component

```typescript
// components/FeaturedSection.tsx
'use client'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export function FeaturedSection() {
  return (
    <motion.section
      className="py-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {features.map((feature, i) => (
        <motion.div key={i} variants={itemVariants}>
          {/* Feature content */}
        </motion.div>
      ))}
    </motion.section>
  )
}
```

### Implementing Data Fetching

```typescript
// components/UserList.tsx
'use client'
import useSWR from 'swr'
import { fetcher } from '@/lib/fetcher'

interface User {
  id: number
  name: string
  email: string
}

export function UserList() {
  const { data: users, error, isLoading } = useSWR<User[]>('/api/users', fetcher)

  if (isLoading) return <div className="animate-pulse">Loading users...</div>
  if (error) return <div className="text-red-500">Failed to load users</div>

  return (
    <div className="space-y-4">
      {users?.map(user => (
        <div key={user.id} className="p-4 border rounded-lg">
          <h3 className="font-semibold">{user.name}</h3>
          <p className="text-muted-foreground">{user.email}</p>
        </div>
      ))}
    </div>
  )
}
```

### Creating a Form with Validation

```typescript
// components/NewsletterForm.tsx
'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const schema = z.object({
  email: z.string().email("Invalid email address"),
  name: z.string().min(2, "Name must be at least 2 characters")
})

type FormData = z.infer<typeof schema>

export function NewsletterForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(schema)
  })

  const onSubmit = (data: FormData) => {
    // Handle form submission
    console.log(data)
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <Input
        {...form.register('name')}
        placeholder="Your name"
        className="w-full"
      />
      {form.formState.errors.name && (
        <p className="text-red-500 text-sm">{form.formState.errors.name.message}</p>
      )}

      <Input
        {...form.register('email')}
        type="email"
        placeholder="your@email.com"
        className="w-full"
      />
      {form.formState.errors.email && (
        <p className="text-red-500 text-sm">{form.formState.errors.email.message}</p>
      )}

      <Button type="submit" className="w-full">
        Subscribe
      </Button>
    </form>
  )
}
```

---

## 📚 Documentation & Resources

### Template Documentation

- **[Complete Demo Page](http://localhost:3000)** - Interactive showcase of all features
- **[Capabilities Cheat Sheet](docs/CAPABILITIES.md)** - Quick reference for all features
- **[Architecture Guide](docs/architecture/folder-structure.md)** - Project structure explained
- **[AI Agent Guidelines](docs/ai-agents/)** - Context files for AI development

### Official Documentation Links

- **[Next.js 15 Docs](https://nextjs.org/docs)** - Framework documentation
- **[Tailwind CSS](https://tailwindcss.com/docs)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable component library
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[SWR](https://swr.vercel.app/)** - Data fetching library
- **[React Hook Form](https://react-hook-form.com/)** - Form management
- **[next-seo](https://github.com/garmeeh/next-seo)** - SEO optimization

---

## 🔍 Quality Assurance & Best Practices

### Automated Quality Checks

The template includes comprehensive quality automation:

```bash
# Complete quality analysis (100-point scoring system)
./scripts/quality/ci-check.sh

# Individual quality checks
./scripts/quality/find-dead-code.sh              # Unused exports/imports
./scripts/quality/find-duplicates.sh             # Duplicate code patterns
./scripts/quality/check-framework-compliance.sh  # Tailwind-only enforcement
```

### Quality Scoring System

- **Excellent (90%+)**: Production ready, meets all standards
- **Good (80%+)**: Minor improvements needed
- **Acceptable (70%+)**: Requires attention before production

Current template score: **100/100** ✅

### Pre-commit Quality Gates

Husky + lint-staged automatically run on every commit:

- ESLint checking
- Prettier formatting
- TypeScript compilation
- Test suite execution

### Development Workflow

1. Create feature branch: `git checkout -b feat/feature-name`
2. Develop with proper TypeScript types
3. Style with Tailwind utilities only
4. Add tests for new functionality
5. Quality checks run automatically on commit
6. Merge to main after review

---

## 🎯 Template Usage Guidelines

### ✅ Correct Usage Patterns

**Styling:**

```typescript
// ✅ Use Tailwind utilities
<div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">

// ✅ Use CSS variables for theming
<div className="bg-background text-foreground border-border">
```

**Components:**

```typescript
// ✅ Use shadcn/ui components
import { Button } from '@/components/ui/button'
<Button variant="outline" size="lg">Click me</Button>

// ✅ Add animations with Framer Motion
<motion.div whileHover={{ scale: 1.05 }}>
```

**Data Fetching:**

```typescript
// ✅ Use SWR with configured fetcher
import { fetcher } from "@/lib/fetcher";
const { data } = useSWR("/api/endpoint", fetcher);
```

### ❌ Incorrect Usage Patterns

**Styling:**

```typescript
// ❌ Don't create custom CSS files
// styles/custom.css

// ❌ Don't use CSS-in-JS
const StyledDiv = styled.div`background: blue;`

// ❌ Don't use inline styles
<div style={{ backgroundColor: 'blue' }}>
```

**Components:**

```typescript
// ❌ Don't install @shadcn/ui as package
npm install @shadcn/ui

// ❌ Don't create primitive components manually
// Use: npx shadcn@latest add button
```

---

## 🚀 Production Deployment

### Environment Setup

1. Copy `.env.example` to `.env.production`
2. Set production environment variables
3. Configure domain in `NEXT_PUBLIC_APP_URL`
4. Set up analytics and monitoring

### Deployment Checklist

- [ ] All tests passing: `npm test`
- [ ] Production build successful: `npm run build`
- [ ] Quality score >90%: `./scripts/quality/ci-check.sh`
- [ ] Environment variables configured
- [ ] SEO metadata updated for production
- [ ] Performance optimizations applied

### Recommended Platforms

- **Vercel**: Zero-config Next.js deployment
- **Netlify**: Static site hosting with Edge Functions
- **AWS Amplify**: Full-stack deployment platform
- **Railway**: Simple deployment with database options

---

## 🤖 AI-Assisted Development

This template is optimized for AI coding assistants:

### Cursor AI Configuration

- **`.cursorrules`**: Comprehensive project-specific guidelines
- **Type Safety**: Full TypeScript for better AI understanding
- **Consistent Patterns**: Predictable code structure
- **Documentation**: Inline comments and comprehensive guides

### Best Practices for AI Development

1. Always reference the template's constraints in prompts
2. Use the provided cheat sheets for consistent patterns
3. Test AI-generated code with quality scripts
4. Leverage the example components as patterns
5. Follow the established file structure

### Memory for AI Agents

This template enforces best practices and provides clear patterns for consistent AI-assisted development.

---

This template provides everything needed for modern web development while maintaining consistency, quality, and performance. The comprehensive tooling ensures your project stays maintainable and production-ready as it grows.
