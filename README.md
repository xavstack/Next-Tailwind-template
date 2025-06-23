# Next.js + Tailwind CSS Template

A comprehensive, production-ready template built on the **T3 Stack principles** with modern React development tools and best practices.

## 🚀 T3 Stack Foundation

This template embraces the [T3 Stack philosophy](https://create.t3.gg/) of type safety, simplicity, and modularity while extending it with additional tools for animation, styling, and quality assurance. For new T3 Stack projects with tRPC, Prisma, and NextAuth.js, use `create-t3-app`. This template focuses on frontend excellence with a different but complementary approach.

## 🛠️ Complete Technology Stack

### Core Framework

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library with latest features
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type safety and developer experience

### Styling & Design System

- **[Tailwind CSS 3.4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[@tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms)** - Form styling plugin
- **[CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)** - Semantic color system with dark mode
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme switching system

### UI Components & Primitives

- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible UI primitives:
  - `@radix-ui/react-dialog` - Modals and overlays
  - `@radix-ui/react-dropdown-menu` - Context menus
  - `@radix-ui/react-tooltip` - Hover information
  - `@radix-ui/react-tabs` - Tabbed interfaces
  - `@radix-ui/react-label` - Accessible form labels
  - `@radix-ui/react-slot` - Component composition
- **[shadcn/ui](https://ui.shadcn.com/)** - Pre-built component library
- **[Lucide React](https://lucide.dev/)** - Modern icon library
- **[Class Variance Authority](https://cva.style/)** - Component variant management

### Animation & Motion

- **[Framer Motion 12](https://www.framer.com/motion/)** - Production-ready motion library
- **[Embla Carousel](https://www.embla-carousel.com/)** - Touch-friendly carousel library
- **[Lenis](https://lenis.studiofreight.com/)** - Smooth scrolling library

### Data Management & Forms

- **[SWR](https://swr.vercel.app/)** - Data fetching with caching and revalidation
- **[React Hook Form](https://react-hook-form.com/)** - Performant forms with validation
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation
- **[@hookform/resolvers](https://github.com/react-hook-form/resolvers)** - Form validation integration

### Utility Libraries

- **[clsx](https://github.com/lukeed/clsx)** - Conditional className utility
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Tailwind class merging
- **Custom utilities** - Type-safe helper functions in `lib/`

### Development & Quality Tools

- **[ESLint 9](https://eslint.org/)** - Linting with Next.js config
- **[Prettier](https://prettier.io/)** - Code formatting
- **[Jest](https://jestjs.io/)** - Testing framework
- **[Testing Library](https://testing-library.com/)** - Component testing utilities
- **[Husky](https://typicode.github.io/husky/)** - Git hooks for quality gates
- **[lint-staged](https://github.com/okonet/lint-staged)** - Pre-commit file processing
- **[ts-morph](https://ts-morph.com/)** - TypeScript AST manipulation

### Build & Deployment

- **Node.js 18+** - Runtime environment
- **npm 9+** - Package manager
- **[PostCSS](https://postcss.org/)** - CSS processing
- **[Autoprefixer](https://github.com/postcss/autoprefixer)** - CSS vendor prefixing

## ✨ Key Features

- 🎨 **Modern Design System** - Semantic color system with dark mode support
- 🎬 **Rich Animations** - Framer Motion, carousels, and smooth scrolling
- 📱 **Responsive Design** - Mobile-first approach with Tailwind breakpoints
- 🔍 **Type Safety** - Full TypeScript coverage with strict mode
- 🧪 **Testing Ready** - Jest and Testing Library configured
- 📊 **Data Fetching** - SWR integration with custom fetcher utility
- 🎭 **Component Library** - shadcn/ui components with Radix UI primitives
- 🔧 **Developer Experience** - Hot reload, linting, formatting, and git hooks
- 📈 **Code Quality** - Advanced analysis tools for dead code, duplicates, and compliance
- 🚀 **Production Ready** - Optimized builds and deployment configuration

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout with providers
│   └── page.tsx           # Homepage with live examples
├── components/
│   ├── ui/                # shadcn/ui and Radix UI components
│   ├── examples/          # Live demonstration components
│   ├── providers/         # Context providers (theme, etc.)
│   └── ContactForm.tsx    # Example form implementation
└── lib/                   # Utilities and configurations
    ├── utils.ts           # Shared utility functions
    ├── fetcher.ts         # SWR data fetching utility
    └── seo.ts             # SEO and metadata helpers
```

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm run test

# Code quality checks
npm run lint
npm run format
```

## 🧠 Smart AI Guidance

This template includes **contextual AI assistance** that transforms your development experience:

- **📍 File-based suggestions** - Smart reminders based on what you're currently editing
- **🎯 Milestone prompts** - Contextual guidance after completing features
- **✨ Feature discovery** - Learn about template capabilities at the right moments
- **🎨 Best practice reminders** - Non-intrusive tips for optimal code quality

**Quick Start**: Simply ask _"What template features should I consider for this component?"_ or work naturally - the AI provides contextual guidance automatically.

**Full Guide**: [`docs/ai-agents/smart-guidance-implementation.md`](docs/ai-agents/smart-guidance-implementation.md)

## 📖 Documentation & Resources

- **[🎯 Template Cheat Sheet](./docs/CHEATSHEET.md)** - Quick reference for all technologies and code examples
- **[🤖 AI Prompting Examples](./docs/AI_PROMPTING_EXAMPLES.md)** - Effective prompts for AI-assisted development
- **[🧠 Smart AI Guidance](./docs/ai-agents/smart-guidance-implementation.md)** - Contextual development assistance
- **[🏗️ Architecture Guide](./docs/architecture/folder-structure.md)** - Project structure and organization
- **[📋 Template Capabilities](./docs/CAPABILITIES.md)** - Comprehensive feature overview
- **[🎯 AI Agent Guidelines](./docs/ai-agents/)** - Context files for AI development

## 🎯 Use Cases

### Perfect For

- **Modern web applications** requiring rich interactions and animations
- **Component libraries** and design systems
- **Marketing websites** with engaging user experiences
- **Dashboards and admin panels** with complex UI requirements
- **E-commerce frontends** with carousels and interactive elements

### T3 Stack Integration

While this template focuses on frontend excellence, it pairs perfectly with T3 Stack backend services:

```bash
# For full-stack T3 applications
npx create-t3-app@latest my-t3-app

# For frontend-focused projects (this template)
git clone <this-repo> my-frontend-app
```

## 🤝 Development Workflow

1. **Start Development**: `npm run dev`
2. **Create Components**: Use shadcn/ui CLI or build custom components
3. **Add Animations**: Leverage Framer Motion examples in `src/components/examples/`
4. **Style with Tailwind**: Use semantic color system and responsive utilities
5. **Fetch Data**: Implement SWR hooks with the custom fetcher
6. **Test Components**: Write tests using Jest and Testing Library
7. **Quality Checks**: Run linting, formatting, and custom quality scripts

## 📊 Quality & Performance

Advanced code analysis tools included:

- **Dead Code Detection** - Find unused exports and components
- **Duplicate Code Analysis** - Identify copy-paste code patterns
- **Framework Compliance** - Ensure adherence to best practices
- **Bundle Size Analysis** - Monitor and optimize bundle size
- **CI Quality Gates** - Automated quality scoring system

Run quality checks:

```bash
npm run find-dead-code
npm run find-duplicates
npm run check-compliance
npm run check-bundle-size
```

## 🔧 Customization

### Adding New Technologies

The template is designed for extensibility. Common additions:

```bash
# Database & ORM
npm install prisma @prisma/client

# Authentication
npm install next-auth

# State Management
npm install zustand

# Additional UI Components
npx shadcn@latest add [component-name]
```

### Styling Customization

Modify `tailwind.config.ts` and `src/app/globals.css` for:

- Custom color schemes
- Typography scales
- Component variants
- Animation presets

## 🌟 Live Demo

Visit the [live demo](https://your-demo-url.vercel.app) to see all features in action, including:

- Interactive component showcase
- Animation examples
- Form implementations
- Theme switching
- Responsive design patterns

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

---

**Built with ❤️ for the modern React ecosystem**
