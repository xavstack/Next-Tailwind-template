# Folder Structure & Architecture

## Overview

This document explains the architectural decisions and folder structure of the Next.js Tailwind Template. The structure is designed for scalability, maintainability, and optimal developer experience.

## 📁 Root Level Structure

```
Next-Tailwind-Template/
├── .cursorrules                   # AI agent configuration (project-specific rules)
├── .env.example                   # Environment variables template
├── .husky/                        # Git hooks configuration
├── .nvmrc                         # Node.js version specification
├── LICENSE                        # MIT license
├── README.md                      # Project documentation
├── VIBE_CODING_ASSESSMENT.md      # Development progress tracking
├── __tests__/                     # Test files
├── components.json                # shadcn/ui configuration
├── docs/                          # Documentation (this folder)
├── lib/                           # Legacy - moved to src/lib/
├── next.config.ts                 # Next.js configuration
├── package.json                   # Dependencies and scripts
├── public/                        # Static assets
├── scripts/                       # Build and quality scripts
├── src/                           # Source code
└── tailwind.config.ts             # Tailwind CSS configuration
```

## 🎯 Core Architectural Principles

### 1. **App Router First**

- Next.js 15 App Router (no Pages Router)
- Server Components by default
- Client Components only when needed (`"use client"`)

### 2. **Utility-First Styling**

- Tailwind CSS for 99% of styling
- CSS variables for theming in `globals.css`
- Component-scoped CSS Modules only for edge cases

### 3. **Component-Driven Architecture**

- shadcn/ui as the foundation
- Composition over inheritance
- Single responsibility principle

### 4. **Type-Safe Development**

- TypeScript strict mode
- Zod for runtime validation
- Proper interfaces for all props

## 📂 Source (`src/`) Structure

### `src/app/` - Next.js App Router

```
src/app/
├── api/                           # API routes
│   └── contact/
│       └── route.ts               # Contact form handler
├── favicon.ico                    # App icon
├── globals.css                    # Global styles & CSS variables
├── layout.tsx                     # Root layout with providers
└── page.tsx                       # Homepage
```

**Key Decisions:**

- **Root Layout**: Includes ThemeProvider for dark mode
- **Metadata**: Enhanced SEO configuration
- **Global Styles**: Only CSS variables and reset styles

### `src/components/` - Component Library

```
src/components/
├── examples/                      # Demo & example components
│   ├── AnimatedCard.tsx           # Framer Motion demo
│   ├── ImageCarousel.tsx          # Embla Carousel demo
│   ├── SmoothScrollProvider.tsx   # Lenis smooth scroll
│   └── SWRExample.tsx             # SWR data fetching demo
├── ui/                            # shadcn/ui primitives
│   ├── badge.tsx
│   ├── button.tsx
│   ├── card.tsx
│   ├── dropdown-menu.tsx
│   ├── form.tsx
│   ├── input.tsx
│   ├── label.tsx
│   ├── tabs.tsx
│   ├── textarea.tsx
│   ├── theme-toggle.tsx           # Custom theme switcher
│   └── tooltip.tsx
└── ContactForm.tsx                # Business logic component
```

**Component Categories:**

1. **UI Primitives** (`ui/`): Basic building blocks from shadcn/ui
2. **Examples** (`examples/`): Demonstration components for each library
3. **Business Components** (root): Application-specific components

### `src/lib/` - Utilities & Configuration

```
src/lib/
├── fetcher.ts                     # SWR fetcher utility
└── utils.ts                       # Tailwind merge utility
```

**Key Utilities:**

- **fetcher.ts**: SWR-compatible HTTP client with error handling
- **utils.ts**: `cn()` function for conditional class merging

## 🔧 Configuration Files

### `tailwind.config.ts`

- CSS variables integration
- Dark mode configuration
- @tailwindcss/forms plugin
- Design token system

### `.cursorrules`

- AI agent workflow guidelines
- Commit message conventions
- Code quality standards
- Technology decision trees

### `package.json`

- lint-staged configuration
- Husky integration
- Comprehensive scripts
- Engine requirements

## 🚀 Data Flow Architecture

### Client-Side Data Fetching

```
Component → useSWR → fetcher.ts → API → Response
                  ↓
              Cache & Revalidation
```

### Form Handling

```
Form → React Hook Form → Zod Validation → API Route → Response
                       ↓
                 Error Handling & UI Updates
```

### Theme Management

```
User Action → ThemeProvider → CSS Variables → DOM Classes
                           ↓
                    System Preference Detection
```

## 📱 Responsive Design Strategy

### Tailwind Breakpoints

- `sm:` - 640px+ (Mobile landscape)
- `md:` - 768px+ (Tablet)
- `lg:` - 1024px+ (Desktop)
- `xl:` - 1280px+ (Large desktop)
- `2xl:` - 1536px+ (Extra large)

### Mobile-First Approach

1. Design for mobile (320px+)
2. Enhance for larger screens
3. Progressive enhancement

## 🧪 Testing Strategy

### Test Structure

```
__tests__/
├── example.test.tsx               # Component testing example
└── [component].test.tsx           # Future component tests
```

### Testing Philosophy

- Test user interactions, not implementation
- Mock external dependencies
- Focus on critical user paths
- Maintain reasonable coverage

## 🔐 Security Considerations

### Environment Variables

- `.env.example` provides templates
- Client-side variables prefixed with `NEXT_PUBLIC_`
- Server-side variables kept private
- No secrets in version control

### API Security

- Input validation with Zod
- Error message sanitization
- Rate limiting ready (commented in .env.example)
- CORS configuration templates

## 🚀 Performance Optimizations

### Bundle Analysis

- Current bundle: ~219kB First Load JS
- Code splitting by route
- Dynamic imports for heavy components
- Tree shaking enabled

### Image Optimization

- Next.js Image component ready
- Remote patterns configured
- WebP/AVIF support

### Loading Strategies

- SWR for client-side caching
- Suspense boundaries where appropriate
- Progressive enhancement

## 🔄 Development Workflow

### Git Workflow

1. Feature branches (`feat/`, `fix/`, `chore/`)
2. Conventional commits
3. Pre-commit hooks (lint + format)
4. Build verification before merge

### Code Quality Gates

- ESLint + Prettier on commit
- TypeScript strict checking
- Jest tests must pass
- Build must succeed

## 🎯 Scalability Considerations

### Component Growth

- Nested folders by feature when needed
- Barrel exports for cleaner imports
- Shared utilities in `lib/`

### API Routes

- Organized by resource (`/api/users/`, `/api/posts/`)
- Middleware for common concerns
- Proper error handling patterns

### State Management

- Start with React hooks
- SWR for server state
- Consider Zustand for complex client state

## 📚 Further Reading

- [Next.js App Router Documentation](https://nextjs.org/docs/app)
- [Tailwind CSS Best Practices](https://tailwindcss.com/docs/reusing-styles)
- [shadcn/ui Component Library](https://ui.shadcn.com/)
- [SWR Data Fetching](https://swr.vercel.app/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

This architecture supports rapid development while maintaining code quality and scalability. Each decision is made to optimize for developer experience and long-term maintainability.
