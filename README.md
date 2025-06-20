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

### Enhanced Capabilities (Phase 2 ✅)

| Feature           | Library            | Usage & Location                                                                             |
| :---------------- | :----------------- | :------------------------------------------------------------------------------------------- |
| **Animations**    | `Framer Motion 12` | `src/components/examples/AnimatedCard.tsx` - Declarative animations with spring physics.     |
| **Carousels**     | `Embla Carousel 8` | `src/components/examples/ImageCarousel.tsx` - Touch-friendly, accessible carousel component. |
| **Smooth Scroll** | `Lenis 1.3`        | `src/components/examples/SmoothScrollProvider.tsx` - Buttery smooth scroll experience.       |

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18.18.0 or later
- npm, yarn, or pnpm

### Installation & Development

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

### Future Enhancements (Optional)

| Enhancement                  | Priority | Description                               |
| ---------------------------- | -------- | ----------------------------------------- |
| **Dark Mode Implementation** | MEDIUM   | Next-themes integration (2-minute setup)  |
| **Database Integration**     | LOW      | Add ORM (Prisma/Drizzle) example          |
| **Authentication**           | LOW      | NextAuth.js integration example           |
| **Email Service**            | LOW      | Connect contact form to email service     |
| **CI/CD Pipeline**           | LOW      | GitHub Actions for testing and deployment |

---

## 💡 Next Steps

### **Quick Dark Mode Setup (2-Minute Guide)**

The architecture is prepared for theming:

1.  **Install `next-themes`**: `npm install next-themes`
2.  **Create a Theme Provider**: Client component using `ThemeProvider` from `next-themes`
3.  **Wrap the Root Layout**: Add provider to `src/app/layout.tsx`
4.  **Create a Theme Toggle**: Button with `setTheme('dark')` / `setTheme('light')`

The CSS variables in `globals.css` handle the rest automatically.

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

## 🤖 AI Agent Optimization

This template is optimized for AI-assisted development:

- **`.cursorrules`** - Comprehensive AI agent guidelines
- **Consistent Patterns** - Predictable code structure
- **Type Safety** - TypeScript for better AI understanding
- **Documentation** - Inline comments and comprehensive README
- **Testing** - Example tests for AI pattern recognition

### Memory for AI Agents

[No blind coding][memory:6026545233071241453]] - Research thoroughly before implementing changes to avoid speculative or incomplete solutions.

---

## 📁 Project Structure

```
Next-Tailwind-Template/
├── src/
│   ├── app/
│   │   ├── api/contact/          # API routes
│   │   ├── globals.css           # Global styles with CSS variables
│   │   ├── layout.tsx            # Root layout
│   │   └── page.tsx              # Homepage with comprehensive demos
│   ├── components/
│   │   ├── ui/                   # shadcn/ui components
│   │   ├── examples/             # Enhanced capability examples
│   │   └── ContactForm.tsx       # Form with validation
│   └── lib/
│       ├── utils.ts              # Utility functions
│       └── fetcher.ts            # SWR data fetching
├── __tests__/                    # Test files
├── .cursorrules                  # AI agent guidelines
├── .env.example                  # Environment variables template
└── README.md                     # This file
```

---

This template is now production-ready with enhanced capabilities, comprehensive testing, and optimized for both human developers and AI agents. Ready for any project scale or complexity.
