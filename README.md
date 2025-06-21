# Next.js & Tailwind CSS Production-Ready Template

A robust, fully-featured, and production-ready starter template for Next.js 15, Tailwind CSS, and `shadcn/ui`. Architected for stability, performance, and superior developer experience with modern animation and interaction capabilities.

**🎉 Phase 2 Complete**: Enhanced with Framer Motion, Embla Carousel, and Lenis smooth scroll. Includes comprehensive test/demo page for easy developer onboarding.

---

## ✅ Core Philosophy

- **Stability Over Hype:** Uses stable, production-ready dependencies. No experimental features.
- **Enhanced Capabilities:** Includes modern animation and interaction libraries ready to use.
- **Developer Experience:** Configured for code quality, type safety, fast builds, and AI-assisted development.
- **Vibe-Coding Ready:** Optimized for AI agents with comprehensive documentation and testing.
- **Theme-Ready:** Built with a CSS variables system, making theme implementation (like dark mode) trivial.

---

## 🛠️ Tech Stack & Features

This template provides a functional and tested foundation with enhanced capabilities. Here's what's included:

### Core Stack

| Feature           | Tech Stack                       | Location & Usage                                                                                  |
| :---------------- | :------------------------------- | :------------------------------------------------------------------------------------------------ |
| **Framework**     | `Next.js 15`                     | `src/app/` - Uses the App Router for modern, server-first development.                            |
| **Styling**       | `Tailwind CSS 3`                 | `tailwind.config.ts`, `globals.css` - Theming via CSS variables. Use utility classes for styling. |
| **UI Components** | `shadcn/ui`                      | `src/components/ui/` - Add new components with `npx shadcn@latest add [component]`.               |
| **Icons**         | `Lucide React`                   | `lucide-react` - Import icons directly, e.g., `import { Mail } from 'lucide-react'`.              |
| **Forms**         | `React Hook Form` & `Zod`        | `src/components/ContactForm.tsx` - Example of a fully functional, validated form.                 |
| **Testing**       | `Jest` & `React Testing Library` | `__tests__/` - Run tests with `npm test`. Configured for component testing.                       |
| **Linting**       | `ESLint` & `Prettier`            | Strict rules pre-configured. `npm run lint` and `npm run format`.                                 |
| **API Routes**    | `Next.js Route Handlers`         | `src/app/api/` - Example contact API route included.                                              |

### Enhanced Capabilities (Phase 2-4 ✅)

| Feature           | Library              | Usage & Location                                                                                |
| :---------------- | :------------------- | :---------------------------------------------------------------------------------------------- |
| **Animations**    | `Framer Motion 12`   | `src/components/examples/AnimatedCard.tsx` - Declarative animations with spring physics.        |
| **Carousels**     | `Embla Carousel 8`   | `src/components/examples/ImageCarousel.tsx` - Touch-friendly, accessible carousel component.    |
| **Smooth Scroll** | `Lenis 1.3`          | `src/components/examples/SmoothScrollProvider.tsx` - Buttery smooth scroll experience.          |
| **Data Fetching** | `SWR 2.3`            | `src/components/examples/SWRExample.tsx` - Complete data fetching patterns with error handling. |
| **Dark Mode**     | `next-themes 0.4`    | `src/components/ui/theme-toggle.tsx` - Theme switching with system preference detection.        |
| **Form Styling**  | `@tailwindcss/forms` | Automatic - Enhanced input styling for better form UX.                                          |

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18.18.0 or later
- npm, yarn, or pnpm

### Two Ways to Start

#### Option 1: Use This Template Directly

1.  **Clone the repository**

    ```bash
    git clone https://github.com/xavstack/Next-Tailwind-template.git
    cd Next-Tailwind-template
    ```

2.  **Install dependencies**

    ```bash
    npm install
    ```

3.  **Set up environment variables (optional)**

    ```bash
    cp .env.example .env.local
    # Edit .env.local with your values
    ```

4.  **Run the development server**

    ```bash
    npm run dev
    ```

5.  **Open your browser** to [http://localhost:3000](http://localhost:3000) to see the comprehensive test/demo page.

#### Option 2: Use T3 Stack (Recommended for Full-Stack)

For full-stack applications with database, authentication, and tRPC:

```bash
# Create a new T3 app with similar configuration
npx create-t3-app@latest my-app --tailwind --nextAuth --prisma --trpc

# Or interactive setup
npx create-t3-app@latest
```

**When to use each:**

- **This template**: Frontend-focused projects, prototyping, component libraries
- **T3 Stack**: Full-stack applications with database, auth, and API layers

---

## 🧪 Testing & Quality

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run format       # Format code with Prettier
npm run format:check # Check formatting
npm run test         # Run Jest tests

# Quality Scripts
./scripts/quality/ci-check.sh          # Comprehensive CI/CD quality check
./scripts/quality/check-bundle-size.sh # Bundle size validation
```

### Built-in Quality Tools

- ✅ **ESLint + Prettier** - Code formatting and linting
- ✅ **TypeScript Strict Mode** - Maximum type safety
- ✅ **Jest + React Testing Library** - Component testing
- ✅ **Automated Formatting** - Consistent code style
- ✅ **AI Agent Optimization** - `.cursorrules` for Cursor AI

---

## 📋 Comprehensive Test Page

Visit the homepage at `http://localhost:3000` to see:

- **Live Demonstrations** of all enhanced capabilities
- **Component Showcase** with interactive examples
- **Technical Implementation** details and usage patterns
- **Developer Onboarding** guide with all features explained

Perfect for:

- ✅ Onboarding new developers
- ✅ Testing all functionality
- ✅ Showcasing capabilities to stakeholders
- ✅ Debugging and development reference

---

## 🎯 Remaining Tasks & Optimization

### Vibe-Coding Optimization Status

| Task                        | Status  | Priority | Description                                    |
| --------------------------- | ------- | -------- | ---------------------------------------------- |
| **Core Template**           | ✅ Done | HIGH     | Next.js 15, Tailwind, TypeScript, shadcn/ui    |
| **Enhanced Libraries**      | ✅ Done | HIGH     | Framer Motion, Embla, Lenis integration        |
| **Prettier + ESLint**       | ✅ Done | HIGH     | Code formatting and linting automation         |
| **Comprehensive Test Page** | ✅ Done | HIGH     | Developer onboarding and demo suite            |
| **Environment Variables**   | ✅ Done | MEDIUM   | `.env.example` with documented options         |
| **API Route Cleanup**       | ✅ Done | MEDIUM   | Removed console.log, proper error handling     |
| **Documentation Update**    | ✅ Done | MEDIUM   | README reflects current state and capabilities |

### Phase 6: Intelligent Code Quality ✅

Advanced quality automation tools implemented:

| Tool                      | Status  | Description                                |
| ------------------------- | ------- | ------------------------------------------ |
| **Dead Code Detection**   | ✅ Done | AST analysis for unused exports/imports    |
| **Duplicate Code Finder** | ✅ Done | Detects code patterns, similar components  |
| **Framework Compliance**  | ✅ Done | Tailwind-only enforcement, scoring system  |
| **Enhanced CI Pipeline**  | ✅ Done | 4-phase quality checks with colored output |
| **Quality Gates**         | ✅ Done | 100-point scoring with quality levels      |

**Usage:**

```bash
# Run comprehensive quality checks
./scripts/quality/ci-check.sh

# Individual quality tools
./scripts/quality/find-dead-code.sh
./scripts/quality/find-duplicates.sh
./scripts/quality/check-framework-compliance.sh
```

### Future Enhancements (Optional)

| Enhancement              | Priority | Description                           |
| ------------------------ | -------- | ------------------------------------- |
| **Database Integration** | MEDIUM   | Add ORM (Prisma/Drizzle) example      |
| **Authentication**       | MEDIUM   | NextAuth.js integration example       |
| **Email Service**        | LOW      | Connect contact form to email service |
| **Advanced CI/CD**       | LOW      | Extended deployment automation        |

---

## 💡 Next Steps

### **Dark Mode Already Implemented ✅**

Dark mode is now fully functional (Phase 4A):

- ✅ **next-themes** integrated with ThemeProvider
- ✅ **Theme Toggle** component in header
- ✅ **System preference** detection
- ✅ **CSS variables** for seamless switching

**Usage**: Click the theme toggle in the header or use the `useTheme()` hook in components.

### **Adding New Components**

```bash
# Add shadcn/ui components
npx shadcn@latest add [component-name]

# Example: Add a data table
npx shadcn@latest add table
```

### **Extending Animations**

```typescript
// Use Framer Motion for custom animations
import { motion } from "framer-motion";

const MyComponent = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    Your content
  </motion.div>
);
```

---

## 📚 Documentation & Architecture

### For AI Agents & Developers

- **[Architecture Guide](docs/architecture/folder-structure.md)** - Complete project structure and design decisions
- **[Decision Trees](docs/ai-agents/decision-trees.md)** - Technology choice guidance for AI agents
- **[Context Files](docs/ai-agents/context-files.md)** - Implementation patterns and conventions
- **[Official References](docs/references/official-links.md)** - All official documentation links

### Human-Readable Quick Reference

- **[Core Philosophy](#-core-philosophy)** - Project principles and approach
- **[Tech Stack](#-tech-stack--features)** - What's included and how to use it
- **[Quality Tools](#-testing--quality)** - Testing, linting, and quality assurance

> **Note**: The `/docs` directory contains comprehensive AI-agent optimized documentation. This README serves as a human-friendly entry point and quick reference.

---

## 🤖 AI Agent Optimization

This template is optimized for AI-assisted development:

- **`.cursorrules`** - Project-specific AI agent guidelines
- **`docs/ai-agents/`** - Decision trees and context files for consistent AI behavior
- **Consistent Patterns** - Predictable code structure
- **Type Safety** - TypeScript for better AI understanding
- **Documentation** - Inline comments and comprehensive README
- **Testing** - Example tests for AI pattern recognition

### Memory for AI Agents

[No blind coding][memory:6026545233071241453]] - Research thoroughly before implementing changes to avoid speculative or incomplete solutions.

## 📋 Development Best Practices

### Code Quality Standards

- **TypeScript Strict Mode** - All code must be type-safe
- **ESLint + Prettier** - Automated linting and formatting
- **Component Testing** - Jest + React Testing Library for all components
- **Conventional Commits** - Structured commit messages for clear history
- **Single Responsibility** - Keep components focused and composable

### Development Workflow

1. **Create Feature Branch** - `git checkout -b feat/your-feature`
2. **Install Dependencies** - Use `npx shadcn@latest add [component]` for UI components
3. **Write Tests First** - TDD approach for new functionality
4. **Format & Lint** - `npm run format && npm run lint` before commits
5. **Test Build** - `npm run build` to ensure production readiness
6. **Commit Changes** - Use conventional commit format
7. **Merge to Main** - Clean merge with tested code

### Key Commands Reference

```bash
# Development
npm run dev              # Start dev server (http://localhost:3000)
npm run build            # Production build
npm run start            # Start production server

# Code Quality
npm run lint             # Check code quality
npm run lint:fix         # Auto-fix linting issues
npm run format           # Format code with Prettier
npm run format:check     # Check if code is formatted

# Testing
npm run test             # Run all tests
```

---

## 📁 Project Structure & File Reference

### Core Configuration Files

| File                            | Purpose              | Description                                           |
| ------------------------------- | -------------------- | ----------------------------------------------------- |
| **`.cursorrules`**              | AI Agent Rules       | Comprehensive guidelines for AI-assisted development  |
| **`.env.example`**              | Environment Template | Documented environment variables with examples        |
| **`.gitignore`**                | Git Exclusions       | Files and directories to exclude from version control |
| **`.prettierrc`**               | Code Formatting      | Prettier configuration for consistent code style      |
| **`README.md`**                 | Documentation        | This comprehensive guide and reference                |
| **`VIBE_CODING_ASSESSMENT.md`** | Development Log      | Detailed implementation history and status            |

### Build & Configuration Files

| File                     | Purpose                | Description                                         |
| ------------------------ | ---------------------- | --------------------------------------------------- |
| **`components.json`**    | shadcn/ui Config       | Configuration for shadcn/ui component management    |
| **`eslint.config.mjs`**  | Code Linting           | ESLint rules and configuration                      |
| **`jest.config.js`**     | Testing Config         | Jest testing framework configuration                |
| **`next.config.ts`**     | Next.js Config         | Next.js framework configuration                     |
| **`package.json`**       | Dependencies & Scripts | Project dependencies and npm scripts                |
| **`package-lock.json`**  | Dependency Lock        | Exact dependency versions for reproducible installs |
| **`postcss.config.mjs`** | CSS Processing         | PostCSS configuration for Tailwind CSS              |
| **`tailwind.config.ts`** | Tailwind Config        | Tailwind CSS configuration and theme setup          |
| **`tsconfig.json`**      | TypeScript Config      | TypeScript compiler configuration                   |

### Directory Structure

```
Next-Tailwind-Template/
├── src/
│   ├── app/
│   │   ├── api/contact/          # API routes with Next.js Route Handlers
│   │   ├── globals.css           # Global styles with CSS variables
│   │   ├── layout.tsx            # Root layout with providers
│   │   └── page.tsx              # Homepage with comprehensive demos
│   ├── components/
│   │   ├── ui/                   # shadcn/ui components (add via CLI)
│   │   ├── examples/             # Enhanced capability examples
│   │   └── ContactForm.tsx       # Form with React Hook Form + Zod
│   └── lib/
│       ├── utils.ts              # Utility functions and cn() helper
│       └── fetcher.ts            # SWR data fetching utility
├── __tests__/                    # Jest + React Testing Library tests
├── public/                       # Static assets (images, icons, etc.)
└── lib/                          # Additional utility functions
```

---

This template is now production-ready with enhanced capabilities, comprehensive testing, and optimized for both human developers and AI agents. Ready for any project scale or complexity.
