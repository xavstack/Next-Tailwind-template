# Next.js + Tailwind Template

**AI-powered development experience** with modern React stack, comprehensive tooling, and intelligent contextual guidance.

## 🚀 **5-Minute Start**

```bash
# Install and setup
npm install && npm run setup-ai

# Start development with live demo
npm run dev

# Visit http://localhost:3000 for interactive examples and onboarding
```

## 🧠 **AI-Powered Development**

This template transforms your workflow with **intelligent contextual assistance**:

- **📍 Smart file analysis** - AI understands what you're building and suggests relevant features
- **🎯 Milestone prompts** - Get guidance after completing components, APIs, or pages
- **✨ Feature discovery** - Learn template capabilities when you need them
- **🎨 Workflow integration** - Non-intrusive suggestions that enhance your development flow

### **Quick AI Examples**

```bash
# Ask AI about any file you're working on:
"What template features should I consider for this component?"
"Show me the testing patterns for this API route"
"What optimization opportunities are available here?"
```

## 🎯 **What's Included**

**Core Stack**: Next.js 15 • React 19 • TypeScript 5 • Tailwind CSS 3.4  
**UI System**: shadcn/ui components • Radix UI primitives • Lucide icons  
**Animation**: Framer Motion • Embla Carousel • Lenis smooth scroll  
**Data & Forms**: SWR • React Hook Form • Zod validation  
**Quality**: Jest/Testing Library • ESLint/Prettier • Git hooks • AI guidance  
**Production**: Security headers • Performance optimization • SEO utilities

## 📚 **Documentation**

| Resource                                                    | Purpose                                 | Best For                            |
| ----------------------------------------------------------- | --------------------------------------- | ----------------------------------- |
| **[🎯 Developer Onboarding](docs/DEVELOPER_ONBOARDING.md)** | Complete guided walkthrough             | First-time users, learning workflow |
| **[📖 Template Reference](docs/REFERENCE.md)**              | All components, code examples, patterns | Daily development reference         |
| **[🤖 AI Prompting Guide](docs/AI_PROMPTING_EXAMPLES.md)**  | Effective AI assistance prompts         | Getting better AI suggestions       |
| **[🧪 Testing Patterns](docs/testing-patterns.md)**         | Component and API testing examples      | Writing comprehensive tests         |

## 🎯 **Use Cases**

**Perfect For:**

- Modern web applications with rich interactions
- Component libraries and design systems
- Marketing websites with engaging animations
- Dashboards and admin panels
- E-commerce frontends with carousels

**T3 Stack Integration:**

```bash
# For full-stack applications with database/auth
npx create-t3-app@latest my-app --tailwind --nextAuth --prisma

# For frontend-focused projects (this template)
git clone https://github.com/xavstack/Next-Tailwind-template.git
```

## ⚡ **Development Workflow**

```bash
# 1. Start development
npm run dev                    # Hot reload + type checking

# 2. Build components (AI guides you)
# - Ask AI: "What template features work for this component?"
# - Use live examples: src/components/examples/
# - Reference: docs/REFERENCE.md

# 3. Quality checks (automatic on commit)
npm test                       # Jest + Testing Library
npm run lint                   # ESLint + auto-fix
npm run format                 # Prettier formatting

# 4. Advanced analysis
./scripts/quality/ci-check.sh  # 100-point quality scoring
```

## 🚀 **AI-First Development**

This template is optimized for **Cursor AI** and similar tools:

- ✅ **Predictable patterns** - Consistent file structure and naming
- ✅ **Type-safe contracts** - Clear interfaces for AI understanding
- ✅ **Live examples** - Working patterns for AI reference
- ✅ **Quality automation** - Automatic error catching and formatting
- ✅ **Contextual guidance** - Smart suggestions based on current work

**How it works**: AI observes your file context → suggests relevant template features → guides implementation → quality tools ensure correctness.

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
