# Template Reference Guide

_Complete reference for all technologies, capabilities, and code patterns in this Next.js + Tailwind template_

> **Purpose**: Single source of truth for template features, code examples, and implementation patterns. Optimized for both human reference and AI contextual understanding.

---

## 🎯 **Template Capabilities Overview**

### **Production-Ready Stack**

| Technology       | Version | Purpose                             | Configuration        |
| ---------------- | ------- | ----------------------------------- | -------------------- |
| **Next.js**      | 15.x    | React framework with App Router     | `next.config.ts`     |
| **React**        | 19.x    | UI library with concurrent features | TypeScript ready     |
| **TypeScript**   | 5.x     | Type safety with strict mode        | `tsconfig.json`      |
| **Tailwind CSS** | 3.4.x   | Utility-first styling               | `tailwind.config.ts` |
| **PostCSS**      | 8.x     | CSS processing                      | `postcss.config.mjs` |

### **What This Template Provides**

- ✅ **Modern UI Components** - shadcn/ui + Radix UI primitives
- ✅ **Rich Animations** - Framer Motion, carousels, smooth scrolling
- ✅ **Type Safety** - Full TypeScript coverage with strict mode
- ✅ **Quality Automation** - Testing, linting, formatting, git hooks
- ✅ **AI-Powered Development** - Contextual guidance and smart suggestions
- ✅ **Production Ready** - Security, performance, SEO optimization

---

## 🏗️ **Framework & Core Patterns**

### **Next.js 15 (App Router)**

```typescript
// Server Component
async function ServerComponent() {
  const data = await fetch('https://api.example.com/data');
  return <div>{data}</div>;
}

// Client Component
'use client';
import { useState } from 'react';

function ClientComponent() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}

// API Route
// src/app/api/example/route.ts
export async function GET() {
  return Response.json({ message: 'Hello World' });
}
```

### **React 19 Features**

```typescript
// Server Actions
"use server";
async function submitForm(formData: FormData) {
  const name = formData.get("name");
  // Process form
}

// useOptimistic Hook
import { useOptimistic } from "react";

function OptimisticComponent() {
  const [optimisticMessages, addOptimistic] = useOptimistic(messages);
  // Usage
}
```

---

## 🎨 **UI Components & Styling**

### **Available Components**

| Component      | Purpose                         | Import                          | Usage                                                                                                 |
| -------------- | ------------------------------- | ------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `Button`       | CVA-styled button with variants | `@/components/ui/button`        | `<Button variant="default">Click</Button>`                                                            |
| `Card`         | Content containers              | `@/components/ui/card`          | `<Card><CardHeader><CardTitle>Title</CardTitle></CardHeader></Card>`                                  |
| `Badge`        | Status indicators               | `@/components/ui/badge`         | `<Badge variant="secondary">New</Badge>`                                                              |
| `Input`        | Form inputs                     | `@/components/ui/input`         | `<Input type="email" placeholder="Email" />`                                                          |
| `Textarea`     | Multi-line inputs               | `@/components/ui/textarea`      | `<Textarea placeholder="Message" />`                                                                  |
| `Label`        | Accessible labels               | `@/components/ui/label`         | `<Label htmlFor="email">Email</Label>`                                                                |
| `Dialog`       | Modal dialogs                   | `@/components/ui/dialog`        | `<Dialog><DialogTrigger>Open</DialogTrigger></Dialog>`                                                |
| `DropdownMenu` | Context menus                   | `@/components/ui/dropdown-menu` | `<DropdownMenu><DropdownMenuTrigger>Menu</DropdownMenuTrigger></DropdownMenu>`                        |
| `Tabs`         | Tabbed interfaces               | `@/components/ui/tabs`          | `<Tabs defaultValue="tab1"><TabsList><TabsTrigger value="tab1">Tab 1</TabsTrigger></TabsList></Tabs>` |
| `Tooltip`      | Hover information               | `@/components/ui/tooltip`       | `<Tooltip><TooltipTrigger>Hover</TooltipTrigger><TooltipContent>Info</TooltipContent></Tooltip>`      |
| `ThemeToggle`  | Dark/light mode                 | `@/components/ui/theme-toggle`  | `<ThemeToggle />`                                                                                     |

### **Styling System**

```tsx
// Semantic color system with CSS variables
<div className="bg-background text-foreground">
  <div className="bg-card text-card-foreground p-4 rounded-lg">
    <h2 className="text-primary">Title</h2>
    <p className="text-muted-foreground">Description</p>
  </div>
</div>;

// Dark mode with next-themes
("use client");
import { useTheme } from "next-themes";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>Toggle Theme</button>
  );
}
```

### **Styling Philosophy**

- ✅ **Tailwind utilities ONLY** - No custom CSS outside `globals.css`
- ✅ **CSS variables** for theming
- ✅ **No CSS-in-JS** or styled-components
- ✅ **Responsive-first** design patterns

---

## 🎬 **Animation & Motion Patterns**

### **Framer Motion**

```tsx
import { motion, AnimatePresence } from 'framer-motion';

// Basic animation
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>

// Page transitions
<AnimatePresence mode="wait">
  <motion.div
    key={pathname}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    {children}
  </motion.div>
</AnimatePresence>

// Stagger animations
<motion.div
  variants={{
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }}
  initial="hidden"
  animate="show"
>
  {items.map(item => (
    <motion.div
      key={item.id}
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
      }}
    >
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

### **Embla Carousel**

```tsx
import useEmblaCarousel from "embla-carousel-react";

function Carousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        <div className="flex-none w-full">Slide 1</div>
        <div className="flex-none w-full">Slide 2</div>
        <div className="flex-none w-full">Slide 3</div>
      </div>
    </div>
  );
}
```

### **Lenis Smooth Scroll**

```tsx
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

function SmoothScrollProvider({ children }) {
  return <ReactLenis root>{children}</ReactLenis>;
}

// In component
function Component() {
  const lenis = useLenis(({ scroll }) => {
    // Scroll callback
  });
}
```

---

## 📡 **Data Fetching & API Patterns**

### **SWR Data Fetching**

```tsx
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";

function UserList() {
  const { data, error, isLoading } = useSWR("/api/users", fetcher);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading users</div>;

  return (
    <div className="grid gap-4">{data?.map(user => <UserCard key={user.id} {...user} />)}</div>
  );
}

// Custom hook pattern
function useUsers() {
  const { data, error, mutate } = useSWR("/api/users", fetcher);

  return {
    users: data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
}
```

### **API Route Patterns**

```typescript
// src/app/api/users/route.ts
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const userSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
});

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const validatedData = userSchema.parse(data);

    // Process data
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Invalid data" }, { status: 400 });
  }
}

export async function GET() {
  try {
    // Fetch data
    const users = await fetchUsers();
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
```

### **Form Handling with React Hook Form + Zod**

```tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

function ContactForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values) {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        // Success handling
      }
    } catch (error) {
      // Error handling
    }
  }

  return <form onSubmit={form.handleSubmit(onSubmit)}>{/* Form fields */}</form>;
}
```

---

## 🧪 **Testing & Quality Patterns**

### **Component Testing**

```typescript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { UserCard } from '@/components/UserCard';

describe('UserCard', () => {
  const mockUser = {
    name: 'John Doe',
    role: 'Developer',
    avatar: '/avatar.jpg',
    isOnline: true,
  };

  it('renders user information correctly', () => {
    render(<UserCard {...mockUser} />);

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Developer')).toBeInTheDocument();
    expect(screen.getByText('Online')).toBeInTheDocument();
  });

  it('handles click interactions', async () => {
    const handleClick = jest.fn();
    render(<UserCard {...mockUser} onClick={handleClick} />);

    await userEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalled();
  });
});
```

### **API Testing**

```typescript
import { POST } from "@/app/api/contact/route";

describe("/api/contact", () => {
  it("should validate required fields", async () => {
    const request = new Request("http://localhost/api/contact", {
      method: "POST",
      body: JSON.stringify({}),
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error).toBeDefined();
  });

  it("should accept valid data", async () => {
    const validData = {
      name: "John Doe",
      email: "john@example.com",
      message: "Hello world",
    };

    const request = new Request("http://localhost/api/contact", {
      method: "POST",
      body: JSON.stringify(validData),
    });

    const response = await POST(request);
    expect(response.status).toBe(200);
  });
});
```

---

## 🛠️ **Development Workflow**

### **Available Scripts**

```bash
# Development
npm run dev              # Start dev server
npm run build            # Production build
npm run start            # Start production server

# Code Quality
npm run lint             # ESLint check
npm run lint:fix         # Fix ESLint issues
npm run format           # Format with Prettier
npm run format:check     # Check formatting
npm test                # Run Jest tests

# AI & Setup
npm run setup-ai         # Configure AI guidance system

# Advanced Quality Analysis
./scripts/quality/ci-check.sh                    # Full pipeline (100/100 scoring)
./scripts/quality/find-dead-code.sh              # Unused code detection
./scripts/quality/find-duplicates.sh             # Code duplication analysis
./scripts/quality/check-framework-compliance.sh  # Framework compliance
```

### **File Organization**

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── globals.css        # Global styles & CSS variables
│   ├── layout.tsx         # Root layout with providers
│   └── page.tsx           # Homepage with live examples
├── components/
│   ├── ui/                # shadcn/ui components
│   ├── examples/          # Live demonstration components
│   ├── providers/         # Context providers (theme, etc.)
│   └── *.tsx              # Custom components
└── lib/
    ├── utils.ts           # Shared utility functions
    ├── fetcher.ts         # SWR data fetching utility
    └── seo.ts             # SEO and metadata helpers
```

### **Import Patterns**

```typescript
// Use path aliases for clean imports
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { fetcher } from "@/lib/fetcher";
import { cn } from "@/lib/utils";

// Component exports
export { UserCard } from "./UserCard";
export type { UserCardProps } from "./UserCard";
```

---

## 🚀 **SEO & Metadata Patterns**

### **Page Metadata**

```typescript
import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Dashboard',
  description: 'User dashboard with analytics and settings',
  keywords: ['dashboard', 'analytics', 'user'],
  openGraph: {
    type: 'website',
    title: 'Dashboard - My App',
    description: 'User dashboard with analytics and settings',
  },
});

export default function DashboardPage() {
  return <div>Dashboard content</div>;
}
```

### **Dynamic Metadata**

```typescript
interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const user = await fetchUser(params.id);

  return {
    title: `${user.name} - User Profile`,
    description: `Profile page for ${user.name}`,
    openGraph: {
      title: `${user.name} - User Profile`,
      description: `Profile page for ${user.name}`,
      images: [user.avatar],
    },
  };
}
```

---

## 🔧 **Utility Functions**

### **Class Name Utilities**

```typescript
import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";

// Class merging with Tailwind
const classes = cn("base-classes", condition && "conditional-classes", "more-classes");

// Component variants with CVA
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
```

### **Type-Safe Environment Variables**

```typescript
// lib/env.ts
import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_APP_URL: z.string().url(),
  DATABASE_URL: z.string().optional(),
  API_KEY: z.string().optional(),
});

export const env = envSchema.parse(process.env);

// Usage
const apiUrl = env.NEXT_PUBLIC_APP_URL;
```

---

## 🎯 **AI-Optimized Development**

### **Contextual File Naming for AI**

- ✅ **Predictable structure**: `src/components/[Feature]/[Component].tsx`
- ✅ **Clear imports**: `@/components/ui/button` vs relative paths
- ✅ **Consistent patterns**: All components follow same structure
- ✅ **Type exports**: `export type { ComponentProps }`

### **AI-Friendly Code Patterns**

- ✅ **TypeScript interfaces**: Clear contracts for AI understanding
- ✅ **JSDoc comments**: Additional context for complex functions
- ✅ **Consistent naming**: `handle[Action]`, `is[State]`, `use[Hook]`
- ✅ **Example components**: Live patterns in `src/components/examples/`

### **Quality Automation for AI**

- ✅ **Prettier formatting**: Consistent code style
- ✅ **ESLint rules**: Catch AI-generated errors
- ✅ **TypeScript strict**: Type safety for AI suggestions
- ✅ **Pre-commit hooks**: Automatic quality gates

---

## 📋 **Quick Reference Tables**

### **Component Import Map**

```typescript
// UI Components
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

// Layout & Navigation
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Interactive
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ThemeToggle } from "@/components/ui/theme-toggle";

// Icons
import { Mail, User, Settings, Menu, X } from "lucide-react";
```

### **Color System Reference**

```css
/* CSS Variables in globals.css */
--background: 0 0% 100%;
--foreground: 222.2 84% 4.9%;
--primary: 222.2 47.4% 11.2%;
--primary-foreground: 210 40% 98%;
--secondary: 210 40% 96%;
--secondary-foreground: 222.2 84% 4.9%;
--muted: 210 40% 96%;
--muted-foreground: 215.4 16.3% 46.9%;
--accent: 210 40% 96%;
--accent-foreground: 222.2 84% 4.9%;
--destructive: 0 84.2% 60.2%;
--destructive-foreground: 210 40% 98%;
--border: 214.3 31.8% 91.4%;
--input: 214.3 31.8% 91.4%;
--ring: 222.2 84% 4.9%;
```

---

This reference guide provides comprehensive coverage of all template capabilities while maintaining clear organization for both human developers and AI assistants. Each section includes practical code examples and follows consistent patterns for optimal development workflow.
