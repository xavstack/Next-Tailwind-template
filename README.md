# Next.js & Tailwind CSS Production-Ready Template

A robust, minimalist, and production-ready starter template for Next.js 15, Tailwind CSS, and `shadcn/ui`. Architected for stability, performance, and a superior developer experience.

This template is built on a stable foundation, having been audited and refactored to eliminate common pitfalls like dependency issues and incorrect configurations. It's designed to be "vibe code ready"—a solid base you can trust for any project.

---

## ✅ Core Philosophy

- **Stability Over Hype:** Uses stable, production-ready dependencies. No experimental features.
- **Minimalism:** Includes only what's necessary for a modern web application, avoiding dependency bloat.
- **Developer Experience:** Configured for code quality, type safety, and fast builds.
- **Theme-Ready:** Built with a CSS variables system, making theme implementation (like dark mode) trivial.

---

## 🛠️ Tech Stack & Features

This template provides a functional and tested foundation. Here's a cheat sheet of what's included and how to use it.

| Feature           | Tech Stack                       | Location & Usage                                                                                  |
| :---------------- | :------------------------------- | :------------------------------------------------------------------------------------------------ |
| **Framework**     | `Next.js 15`                     | `src/app/` - Uses the App Router for modern, server-first development.                            |
| **Styling**       | `Tailwind CSS 3`                 | `tailwind.config.ts`, `globals.css` - Theming via CSS variables. Use utility classes for styling. |
| **UI Components** | `shadcn/ui`                      | `src/components/ui/` - Add new components with `npx shadcn-ui@latest add [component]`.            |
| **Icons**         | `Lucide`                         | `lucide-react` - Import icons directly, e.g., `import { Mail } from 'lucide-react'`.              |
| **Forms**         | `React Hook Form` & `Zod`        | `src/components/ContactForm.tsx` - Example of a fully functional, validated form.                 |
| **Testing**       | `Jest` & `React Testing Library` | `__tests__/` - Run tests with `npm test`. Configured for component testing.                       |
| **Linting**       | `ESLint` & `TypeScript`          | `.eslintrc.mjs`, `tsconfig.json` - Strict rules are pre-configured. Run with `npm run lint`.      |
| **API Routes**    | `Next.js Route Handlers`         | `src/app/api/` - Example contact API route included.                                              |

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

3.  **Run the development server**

    ```bash
    npm run dev
    ```

4.  **Open your browser** to [http://localhost:3000](http://localhost:3000).

---

## 💡 Next Steps & Future Additions

This template provides a robust core but can be extended with additional features. Nothing is missing for core functionality, but the following are recommended additions for a richer user experience.

| Feature           | Recommended Library | Installation Command                |
| :---------------- | :------------------ | :---------------------------------- |
| **Animations**    | **Framer Motion**   | `npm install framer-motion`         |
| **Carousels**     | **Embla Carousel**  | `npm install embla-carousel-react`  |
| **Smooth Scroll** | **Lenis**           | `npm install @studio-freight/lenis` |

### **How to Implement Dark Mode (2-Minute Guide)**

The architecture is already prepared for theming. To add dark mode:

1.  **Install `next-themes`**: `npm install next-themes`
2.  **Create a Theme Provider**: Create a client component that uses the `ThemeProvider` from `next-themes`.
3.  **Wrap the Root Layout**: Wrap your `<html>` or `<body>` in `src/app/layout.tsx` with your new theme provider.
4.  **Create a Theme Toggle**: Build a simple button that calls `setTheme('dark')` or `setTheme('light')` from the `useTheme` hook.
    The CSS variables in `globals.css` will handle the rest automatically.

---

This README now accurately reflects the template's powerful, stable, and minimalist architecture, ready for you to build upon.
