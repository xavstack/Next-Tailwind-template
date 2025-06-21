# AI Agent Context Files

## Overview

This document provides key context files and information patterns that AI agents should reference when working with the Next.js Tailwind Template. These context snippets ensure consistent understanding and implementation.

## 📁 Project Structure Context

### Current File Organization

```
src/
├── app/
│   ├── api/contact/route.ts          # Form submission handler
│   ├── globals.css                   # CSS variables + reset
│   ├── layout.tsx                    # Root layout + ThemeProvider
│   └── page.tsx                      # Homepage with demos
├── components/
│   ├── examples/                     # Library demonstrations
│   │   ├── AnimatedCard.tsx          # Framer Motion patterns
│   │   ├── ImageCarousel.tsx         # Embla Carousel implementation
│   │   ├── SWRExample.tsx            # Comprehensive SWR demo
│   │   └── SmoothScrollProvider.tsx  # Lenis smooth scrolling
│   ├── ui/                           # shadcn/ui primitives
│   │   ├── theme-toggle.tsx          # Dark mode switcher
│   │   └── [other-components].tsx    # Standard shadcn/ui components
│   └── ContactForm.tsx               # Business logic component
└── lib/
    ├── fetcher.ts                    # SWR HTTP client
    └── utils.ts                      # Tailwind class utilities
```

### Import Path Patterns

```typescript
// ✅ Correct - Using @ alias
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import fetcher from "@/lib/fetcher";

// ❌ Incorrect - Relative paths in deep components
import { Button } from "../../ui/button";
import { cn } from "../../../lib/utils";
```

## 🎨 Styling Context

### CSS Variables System

```css
/* globals.css - Current variables in use */
:root {
  --background: 0 0% 100%; /* White background */
  --foreground: 222.2 84% 4.9%; /* Dark text */
  --primary: 221.2 83.2% 53.3%; /* Blue primary */
  --primary-foreground: 210 40% 98%; /* White on primary */
  /* ... more variables */
}

.dark {
  --background: 222.2 84% 4.9%; /* Dark background */
  --foreground: 210 40% 98%; /* Light text */
  /* ... dark mode overrides */
}
```

### Tailwind Usage Patterns

```typescript
// ✅ Preferred patterns
const className = cn(
  "base-classes",
  "hover:hover-classes",
  "dark:dark-classes",
  "md:responsive-classes",
  conditionalClass && "conditional-classes",
  props.className
);

// ✅ Responsive design
("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3");

// ✅ Dark mode support
("bg-background text-foreground border border-border");
```

## 🧩 Component Patterns

### shadcn/ui Component Extension

```typescript
// ✅ Extending existing components
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CustomButtonProps extends React.ComponentProps<typeof Button> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  loading?: boolean;
}

export function CustomButton({ loading, children, className, ...props }: CustomButtonProps) {
  return (
    <Button
      className={cn("relative", loading && "cursor-not-allowed", className)}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </Button>
  );
}
```

### Form Component Pattern

```typescript
// ✅ Standard form pattern with React Hook Form + Zod
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  field: z.string().min(1, "Field is required"),
});

export function ExampleForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { field: "" },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Handle form submission
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {/* Form fields */}
      </form>
    </Form>
  );
}
```

## 📊 Data Fetching Context

### SWR Implementation Pattern

```typescript
// ✅ Standard SWR usage with fetcher
import useSWR from "swr";
import fetcher from "@/lib/fetcher";

interface ApiData {
  id: number;
  name: string;
}

export function DataComponent() {
  const {
    data,
    error,
    isLoading,
    mutate
  } = useSWR<ApiData[], Error>(
    "/api/endpoint",
    fetcher,
    {
      revalidateOnFocus: false,
      refreshInterval: 0,
    }
  );

  if (error) return <div>Error: {error.message}</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>No data</div>;

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}
```

### API Route Pattern

```typescript
// ✅ Standard API route with error handling
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const requestSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = requestSchema.parse(body);

    // Process data

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid data", details: error.errors }, { status: 400 });
    }

    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
```

## 🎬 Animation Context

### Framer Motion Patterns

```typescript
// ✅ Standard animation patterns used in template
import { motion } from "framer-motion";

// Entrance animation
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

// Hover effects
const hoverScale = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
};

// Stagger children
const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
```

## 🧪 Testing Context

### Component Test Pattern

```typescript
// ✅ Standard testing pattern
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "@/components/ui/button";

describe("Button", () => {
  it("renders with correct text", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button", { name: /click me/i })).toBeInTheDocument();
  });

  it("handles click events", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

## 🔧 Configuration Context

### Key Configuration Files Status

```javascript
// tailwind.config.ts - ✅ Configured
module.exports = {
  darkMode: "class",                    // Dark mode enabled
  plugins: [require("@tailwindcss/forms")], // Forms plugin active
  // ... rest of config
};

// package.json - ✅ Configured
{
  "lint-staged": {                      // Pre-commit hooks active
    "*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"],
    "*.{json,md,css}": ["prettier --write"]
  }
}

// .cursorrules - ✅ Present
// Comprehensive AI agent guidelines in place
```

## 🌍 Environment Context

### Environment Variables Template

```bash
# .env.example - Available patterns
NEXT_PUBLIC_APP_URL=http://localhost:3000     # Client-side URL
JAVA_BACKEND_URL=http://localhost:8080        # Java integration ready
DATABASE_URL=postgresql://...                 # Database ready
NEXTAUTH_SECRET=your-secret                   # Auth ready
```

## 🚀 Performance Context

### Current Bundle Analysis

```
Route (app)                                 Size  First Load JS
┌ ○ /                                     118 kB         219 kB
├ ○ /_not-found                            977 B         102 kB
└ ƒ /api/contact                           136 B         101 kB
+ First Load JS shared by all             101 kB
  ├ chunks/4bd1b696-d8943805abf6c15b.js  53.2 kB
  ├ chunks/684-95338ea466906682.js       45.9 kB
  └ other shared chunks (total)           1.9 kB
```

**Bundle Size Guidelines:**

- ✅ Current size: 219kB (reasonable)
- ⚠️ Watch for: >300kB (investigate)
- 🚨 Alert at: >500kB (optimize required)

## 📋 Quality Context

### Git Commit Message Conventions

```
feat: add new feature
fix: resolve bug issue
docs: update documentation
style: formatting changes
refactor: code restructuring
perf: performance improvements
test: add or update tests
chore: maintenance tasks
```

### Code Quality Checklist

- ✅ TypeScript strict mode compliance
- ✅ ESLint warnings resolved
- ✅ Prettier formatting applied
- ✅ Tests passing
- ✅ Build successful
- ✅ No console.log in production code

## 🎯 Current Implementation Status

### Phase 4A ✅ Complete

- Dark mode (next-themes + Tailwind)
- Form styling (@tailwindcss/forms)
- Git hooks (Husky + lint-staged)
- Environment setup (.env.example)
- SWR examples (comprehensive demo)

### Phase 4B ✅ Complete

- Architecture documentation
- Official links reference
- Context files (this document)

### Phase 4C 🚧 In Progress

- Decision trees (completed)
- AI agent cheat sheets (this document)

## 💡 AI Agent Quick Reference

### When Creating Components:

1. Check if shadcn/ui component exists first
2. Use TypeScript interfaces for props
3. Include forwardRef if needed
4. Apply cn() for className merging
5. Add proper ARIA attributes

### When Styling:

1. Try Tailwind utilities first (99% of cases)
2. Use CSS variables for theme colors
3. Include dark mode variants
4. Add responsive breakpoints
5. Only use CSS modules for edge cases

### When Fetching Data:

1. Use SWR for GET requests
2. Use native fetch for mutations
3. Always use the configured fetcher
4. Handle error and loading states
5. Include proper TypeScript types

This context ensures AI agents maintain consistency with established patterns and can make informed decisions about implementation approaches.
