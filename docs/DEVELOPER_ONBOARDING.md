# Developer Onboarding Guide

_Welcome to the Next.js + Tailwind Template - Your AI-Powered Development Experience_

> **Goal**: Get you building production-ready applications immediately while learning the template's capabilities naturally through your development workflow.

---

## 🚀 **5-Minute Quick Start**

### **1. Environment Setup**

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
open http://localhost:3000
```

### **2. Activate AI Development Partner**

```bash
# Setup AI guidance system
npm run setup-ai

# Start getting contextual suggestions:
"What template features work for this component?"
"Show me testing patterns for this API"
```

### **3. Explore the Live Demo**

Visit `http://localhost:3000` to see:

- ✅ **Interactive Examples** - All components working live
- ✅ **AI Guidance System** - How contextual help works
- ✅ **Documentation Hub** - Quick access to all resources
- ✅ **Quality Tools** - Testing, linting, and optimization

---

## 🎯 **Your First Component - Guided Walkthrough**

Let's build a `UserCard` component to learn the template workflow:

### **Step 1: Create the Component**

```bash
# Create your component file
touch src/components/UserCard.tsx
```

When you open this file, **AI will automatically suggest**:

- 💡 "Consider using shadcn/ui Card component as base"
- 💡 "Add TypeScript interface for props"
- 💡 "Include accessibility attributes"

### **Step 2: Build with Template Features**

```typescript
// src/components/UserCard.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface UserCardProps {
  name: string;
  role: string;
  avatar: string;
  isOnline: boolean;
}

export function UserCard({ name, role, avatar, isOnline }: UserCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={avatar}
                alt={`${name}'s avatar`}
                className="w-10 h-10 rounded-full"
              />
              <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                isOnline ? 'bg-green-500' : 'bg-gray-400'
              }`} />
            </div>
            <div>
              <CardTitle className="text-lg">{name}</CardTitle>
              <CardDescription>{role}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Badge variant={isOnline ? "default" : "secondary"}>
            {isOnline ? "Online" : "Offline"}
          </Badge>
        </CardContent>
      </Card>
    </motion.div>
  );
}
```

**What the AI noticed you used:**

- ✅ shadcn/ui components (Card, Badge)
- ✅ Framer Motion for animations
- ✅ TypeScript interfaces
- ✅ Accessibility attributes
- ✅ Tailwind CSS utilities

### **Step 3: Add Testing (AI will suggest this)**

```bash
# AI suggests: "Don't forget to create tests for this component"
touch __tests__/UserCard.test.tsx
```

```typescript
// __tests__/UserCard.test.tsx
import { render, screen } from '@testing-library/react';
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

  it('shows offline status for offline users', () => {
    render(<UserCard {...mockUser} isOnline={false} />);

    expect(screen.getByText('Offline')).toBeInTheDocument();
  });
});
```

### **Step 4: Quality Check (Automatic)**

```bash
# These run automatically on git commit:
npm run lint    # ESLint checks
npm run format  # Prettier formatting
npm test        # Jest tests
```

**For detailed AI prompting strategies** → See [`AI_PROMPTING_EXAMPLES.md`](AI_PROMPTING_EXAMPLES.md)

---

💡 "Framer Motion examples available in components/examples/"
💡 "Use Lenis for smooth scrolling effects"

````

---

## 📚 **Essential Resources - Always Available**

### **Quick Reference (No memorization needed)**

| Resource                        | What it contains                         | When to use                        |
| ------------------------------- | ---------------------------------------- | ---------------------------------- |
| `docs/REFERENCE.md`             | All code examples, components, utilities, complete feature matrix | Daily reference while coding and planning |
| `docs/AI_PROMPTING_EXAMPLES.md` | Proven AI prompts                        | When you need better AI assistance |
| `docs/testing-patterns.md`      | Testing examples                         | Writing tests for any component    |

### **Development Workflow Files**

| File                 | Purpose                  | AI Integration                        |
| -------------------- | ------------------------ | ------------------------------------- |
| `.cursorrules`       | Active AI guidance rules | Automatically used by Cursor          |
| `package.json`       | All available scripts    | AI suggests relevant scripts          |
| `tsconfig.json`      | Path aliases and config  | AI understands your project structure |
| `tailwind.config.ts` | Design system config     | AI suggests appropriate classes       |

---

## 🛠️ **Common Development Patterns**

### **1. Building Pages**

```typescript
// src/app/dashboard/page.tsx
import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';

// AI suggests: Use SEO utilities for metadata
export const metadata: Metadata = createPageMetadata({
  title: 'Dashboard',
  description: 'User dashboard with analytics and settings',
});

export default function DashboardPage() {
  // AI suggests: Add loading states, error boundaries
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      {/* AI suggests: Consider UserCard component you just built */}
    </div>
  );
}
````

### **2. API Routes with Validation**

```typescript
// src/app/api/users/route.ts
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// AI suggests: Use Zod for validation
const userSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
});

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const validatedData = userSchema.parse(data);

    // AI suggests: Add rate limiting for public endpoints
    // AI suggests: Sanitize errors for production

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Invalid data" }, { status: 400 });
  }
}
```

### **3. Data Fetching with SWR**

```typescript
// src/components/UserList.tsx
import useSWR from 'swr';
import { fetcher } from '@/lib/fetcher';

export function UserList() {
  const { data, error, isLoading } = useSWR('/api/users', fetcher);

  // AI suggests: Add loading states and error handling
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading users</div>;

  return (
    <div className="grid gap-4">
      {data?.map(user => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  );
}
```

---

## ⚡ **Productivity Workflows**

### **Daily Development Cycle**

```bash
# 1. Start development
npm run dev

# 2. Build components (AI guides you)
# - Create component files
# - AI suggests best practices
# - Use template examples

# 3. Test as you go
npm test -- --watch

# 4. Quality check (automatic on commit)
git add .
git commit -m "feat: add UserCard component"
# Husky runs: lint, format, test automatically
```

### **Weekly Quality Review**

```bash
# Comprehensive quality analysis
./scripts/quality/ci-check.sh

# Dependency updates (automated via Dependabot)
npm audit

# Performance check
npm run build
# Check bundle size in output
```

### **Before Production Deployment**

```bash
# Final checks
npm run build
npm run lint
npm test

# AI suggests: Environment variable verification
# AI suggests: Security header testing
# AI suggests: Performance monitoring setup
```

---

## 🎯 **Advanced Features - Discover When Ready**

### **Animation Patterns**

```typescript
// AI suggests when you need animations
import { motion } from "framer-motion";

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};
```

### **Form Handling**

```typescript
// AI suggests when building forms
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const form = useForm({
  resolver: zodResolver(userSchema),
});
```

### **Security Testing**

```bash
# AI suggests security testing
Visit: http://localhost:3000/security-test
# Interactive dashboard for testing rate limiting, CSP, etc.
```

---

## 🚀 **Next Steps - Natural Progression**

### **Week 1: Foundation**

- ✅ Build your first components
- ✅ Learn AI guidance patterns
- ✅ Explore live examples

### **Week 2: Advanced Features**

- ✅ Add animations and interactions
- ✅ Implement forms with validation
- ✅ Set up proper testing

### **Week 3: Production Ready**

- ✅ Security testing and hardening
- ✅ Performance optimization
- ✅ CI/CD pipeline understanding

### **Ongoing: Mastery**

- ✅ Custom AI prompts for your use cases
- ✅ Advanced testing patterns
- ✅ Performance monitoring

---

## 💡 **Pro Tips**

### **Effective AI Collaboration**

```bash
# Instead of generic questions, be specific:
❌ "How do I make this better?"
✅ "What template features could improve this UserCard component?"

# Ask about current context:
❌ "How do I add animations?"
✅ "What animation patterns work best for this dashboard page?"

# Request template-specific guidance:
❌ "Help me with forms"
✅ "Show me how to use the React Hook Form + Zod pattern from this template"
```

### **Learning by Doing**

- 🎯 **Start building immediately** - AI guides you through the process
- 🎯 **Reference live examples** - All components working at localhost:3000
- 🎯 **Ask questions naturally** - AI understands your development context
- 🎯 **Let quality tools guide you** - Automatic linting, formatting, testing

### **Template Philosophy**

> "Tools should enhance your creativity, not constrain it. This template provides structure and AI guidance while keeping you in control of the development process."

---

## 🔧 **Troubleshooting & Support**

### **Common Issues & AI Solutions**

| Issue                 | AI Guidance                                             |
| --------------------- | ------------------------------------------------------- |
| "TypeScript errors"   | AI suggests type fixes and pattern corrections          |
| "Styling not working" | AI recommends proper Tailwind classes and CSS variables |
| "Tests failing"       | AI helps debug and suggests testing patterns            |
| "Performance issues"  | AI suggests optimization techniques and bundle analysis |

### **Getting Unstuck**

```bash
# When you're stuck, ask AI about your current context:
"What am I missing in this component?"
"What would you do differently here?"
"What template features could solve this problem?"
```

### **Community & Resources**

- 📚 **All documentation** is in the `docs/` folder
- 🤖 **AI assistance** is always available in Cursor
- 🔧 **Quality tools** provide automated feedback
- 📝 **Live examples** show best practices in action

---

**Remember**: This template is designed to grow with you. Start simple, let AI guide you, and gradually explore advanced features as you need them. The goal is productive development, not memorizing documentation.

**Happy coding! 🚀**
