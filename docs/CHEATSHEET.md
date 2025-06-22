# Template Cheat Sheet

Quick reference for all technologies, libraries, and tools available in this Next.js + Tailwind CSS template.

## 🏗️ Framework & Core

### Next.js 15 (App Router)

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

### React 19

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

## 🎨 Styling & UI

### Tailwind CSS + CSS Variables

```tsx
// Semantic color system
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

### Radix UI Components

```tsx
// Dialog
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

<Dialog>
  <DialogTrigger asChild>
    <Button>Open</Button>
  </DialogTrigger>
  <DialogContent>
    <p>Dialog content</p>
  </DialogContent>
</Dialog>;

// Dropdown Menu
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";

<DropdownMenu>
  <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Item 1</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>;

// Tooltip
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

<Tooltip>
  <TooltipTrigger>Hover me</TooltipTrigger>
  <TooltipContent>Tooltip content</TooltipContent>
</Tooltip>;
```

### Available UI Components

- `Button` - CVA-styled button with variants
- `Card` - Content containers with header/body/footer
- `Badge` - Status indicators and labels
- `Input` - Form inputs with proper styling
- `Textarea` - Multi-line text inputs
- `Label` - Accessible form labels
- `Form` - React Hook Form integration
- `Dialog` - Modal dialogs and overlays
- `DropdownMenu` - Context menus and dropdowns
- `Tabs` - Tabbed interfaces
- `Tooltip` - Hover information
- `ThemeToggle` - Dark/light mode switcher

## 🎬 Animation & Motion

### Framer Motion

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

### Embla Carousel

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

### Lenis Smooth Scroll

```tsx
"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2 }}>
      {children}
    </ReactLenis>
  );
}

// Scroll-triggered animations
import { useScroll, useTransform, motion } from "framer-motion";

function ParallaxComponent() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return <motion.div style={{ y }}>Parallax content</motion.div>;
}
```

## 📊 Data & Forms

### SWR Data Fetching

```tsx
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";

function DataComponent() {
  const { data, error, isLoading } = useSWR("/api/data", fetcher);

  if (error) return <div>Error loading data</div>;
  if (isLoading) return <div>Loading...</div>;

  return <div>{data.message}</div>;
}

// With revalidation
const { data, mutate } = useSWR("/api/data", fetcher);

// Update optimistically
mutate(updatedData, false);
```

### React Hook Form + Zod

```tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
});

type FormData = z.infer<typeof schema>;

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} />
      {errors.name && <span>{errors.name.message}</span>}

      <input {...register("email")} type="email" />
      {errors.email && <span>{errors.email.message}</span>}

      <button type="submit">Submit</button>
    </form>
  );
}
```

## 🛠️ Utilities & Tools

### Class Management

```tsx
import { cn } from "@/lib/utils";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function (in lib/utils.ts)
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Usage
<div className={cn("base-classes", condition && "conditional-classes", "override-classes")}>
  Content
</div>;
```

### Class Variance Authority (CVA)

```tsx
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
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

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
```

### Icons (Lucide React)

```tsx
import { Check, X, ChevronDown, User, Mail } from 'lucide-react';

<Button>
  <Check className="mr-2 h-4 w-4" />
  Success
</Button>

<Mail className="h-5 w-5 text-muted-foreground" />
```

## 🧪 Testing & Quality

### Jest + Testing Library

```tsx
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "@/components/ui/button";

describe("Button", () => {
  it("renders with correct text", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button", { name: "Click me" })).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

### TypeScript Patterns

```tsx
// Generic component props
interface BaseProps<T = any> {
  data: T;
  onSelect: (item: T) => void;
}

function GenericComponent<T>({ data, onSelect }: BaseProps<T>) {
  return <div onClick={() => onSelect(data)}>{JSON.stringify(data)}</div>;
}

// Discriminated unions
type Status =
  | { type: "loading" }
  | { type: "success"; data: string }
  | { type: "error"; error: string };

function StatusComponent({ status }: { status: Status }) {
  switch (status.type) {
    case "loading":
      return <div>Loading...</div>;
    case "success":
      return <div>{status.data}</div>;
    case "error":
      return <div>Error: {status.error}</div>;
  }
}
```

## 📦 Build & Development Tools

### Package Scripts

```bash
# Development
npm run dev           # Start development server
npm run build         # Build for production
npm run start         # Start production server

# Code Quality
npm run lint          # ESLint check
npm run lint:fix      # ESLint fix
npm run format        # Prettier format
npm run format:check  # Prettier check
npm run test          # Run Jest tests

# Quality Scripts
npm run check-bundle-size     # Analyze bundle size
npm run find-dead-code        # Find unused code
npm run find-duplicates       # Find duplicate code
npm run check-compliance      # Framework compliance check
```

### Environment Variables

```bash
# .env.local
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=https://api.example.com
DATABASE_URL=postgresql://...
API_SECRET_KEY=your-secret-key
```

```tsx
// Usage in components (client-side)
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

// Usage in API routes (server-side)
const secretKey = process.env.API_SECRET_KEY;
```

## 🔗 Common Patterns

### Layout Composition

```tsx
// app/layout.tsx
import { Providers } from "@/components/providers";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

// Nested layouts
// app/dashboard/layout.tsx
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <nav>Dashboard Navigation</nav>
      <main className="flex-1">{children}</main>
    </div>
  );
}
```

### Error Handling

```tsx
// error.tsx
"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}

// loading.tsx
export default function Loading() {
  return <div>Loading...</div>;
}

// not-found.tsx
export default function NotFound() {
  return <div>Page not found</div>;
}
```

### Metadata & SEO

```tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Title",
  description: "Page description",
  openGraph: {
    title: "Page Title",
    description: "Page description",
    images: ["/og-image.jpg"],
  },
};

// Dynamic metadata
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const post = await fetchPost(params.id);

  return {
    title: post.title,
    description: post.excerpt,
  };
}
```
