# AI Agent Decision Trees

## Overview

This document provides decision trees to help AI agents make consistent, optimal choices when working with the Next.js Tailwind Template. Each tree represents a decision point with clear criteria and outcomes.

## 🎨 Styling Decision Tree

```
Need to style something?
│
├─ 99% of cases → Use Tailwind utilities
│   │
│   ├─ Basic styling → Direct classes (text-red-500, p-4, etc.)
│   ├─ Complex responsive → sm:, md:, lg: prefixes
│   ├─ Dark mode → dark: prefix
│   └─ States → hover:, focus:, active: prefixes
│
├─ Form elements → @tailwindcss/forms (already configured)
│   │
│   ├─ Input/textarea/select → Automatic base styling
│   ├─ Checkboxes/radio → Enhanced defaults
│   └─ Complex forms → Combine with shadcn/ui form components
│
├─ Theming → CSS variables in globals.css
│   │
│   ├─ Primary colors → --primary, --primary-foreground
│   ├─ Background colors → --background, --foreground
│   └─ New theme tokens → Add to both :root and .dark
│
└─ Edge cases → Component-scoped CSS Modules
    │
    ├─ Complex animations (not Framer Motion)
    ├─ Third-party integration styling
    └─ Browser-specific hacks
```

**Key Rules:**

- ❌ Never use global CSS outside of globals.css
- ❌ Never use styled-components or CSS-in-JS
- ✅ Always try Tailwind first
- ✅ Use CSS variables for theme tokens
- ✅ Component-scoped modules only as last resort

## 🎬 Animation Decision Tree

```
Need to add motion/animation?
│
├─ Component animations → Framer Motion
│   │
│   ├─ Entrance/exit → initial, animate, exit props
│   ├─ Hover/tap → whileHover, whileTap props
│   ├─ Layout changes → layout prop
│   └─ Complex sequences → AnimationControls + useAnimation
│
├─ Image galleries/carousels → Embla Carousel
│   │
│   ├─ Simple image carousel → ImageCarousel component (exists)
│   ├─ Custom carousel → useEmblaCarousel hook
│   ├─ Auto-play → Embla autoplay plugin
│   └─ Infinite loop → loop: true option
│
├─ Page/scroll interactions → Lenis + Framer Motion
│   │
│   ├─ Smooth scrolling → SmoothScrollProvider (exists)
│   ├─ Scroll-triggered animations → useScroll + motion
│   ├─ Parallax effects → useTransform + motion
│   └─ Page transitions → Framer Motion page animations
│
├─ 3D scenes/WebGL → React Three Fiber
│   │
│   ├─ Simple 3D → <Canvas> + basic meshes
│   ├─ Complex scenes → drei helpers
│   ├─ Physics → react-three-cannon
│   └─ Performance → @react-three/fiber optimization
│
└─ Vector animations/micro-interactions → Lottie React
    │
    ├─ After Effects exports → lottie-react player
    ├─ Interactive animations → Lottie interactivity
    ├─ Lightweight icons → Lottie icon packs
    └─ Complex transitions → Lottie + React state
```

**Priority Order:**

1. **Framer Motion** - First choice for component animations (✅ INSTALLED)
2. **Embla Carousel** - Carousels and sliding content (✅ INSTALLED)
3. **Lenis** - Smooth scrolling (✅ INSTALLED)
4. **React Three Fiber** - 3D content (❌ NOT INSTALLED - `npm i @react-three/fiber three`)
5. **Lottie React** - Vector animations (❌ NOT INSTALLED - `npm i lottie-react`)

## 📊 Data Fetching Decision Tree

```
Need to fetch data?
│
├─ Client-side data → SWR (preferred)
│   │
│   ├─ REST API → useSWR + fetcher.ts (exists)
│   ├─ Error handling → error property + ErrorBoundary
│   ├─ Loading states → isLoading property
│   ├─ Revalidation → mutate function
│   └─ Conditional fetching → key can be null
│
├─ Server-side data → Native fetch
│   │
│   ├─ Server Components → Direct fetch in component
│   ├─ API routes → fetch in route handlers
│   ├─ Static generation → fetch in generateStaticParams
│   └─ Error handling → try/catch + proper error responses
│
├─ Real-time data → WebSocket + SWR
│   │
│   ├─ WebSocket connection → useEffect + cleanup
│   ├─ SWR integration → mutate for updates
│   └─ Connection management → reconnection logic
│
└─ Form submissions → Native fetch (not SWR)
    │
    ├─ POST/PUT/DELETE → Direct fetch calls
    ├─ Error handling → response.ok checks
    ├─ Loading states → useState for loading
    └─ Success handling → redirect or UI update
```

**Key Rules:**

- ✅ Use SWR for GET requests (data fetching)
- ❌ Don't use SWR for POST/PUT/DELETE (mutations)
- ✅ Always use the configured fetcher.ts utility
- ❌ Never install axios (conflicts with SWR + fetch)

## 🧩 Component Decision Tree

```
Need to create a component?
│
├─ UI primitive needed → shadcn/ui
│   │
│   ├─ Component exists → npx shadcn@latest add [component]
│   ├─ Customization → Modify after installation
│   ├─ Variants → Use cva() patterns from existing components
│   └─ Composition → Combine multiple primitives
│
├─ Business logic component → Custom component
│   │
│   ├─ Simple logic → Functional component in src/components/
│   ├─ Complex logic → Custom hook + component
│   ├─ Reusable → Consider adding to examples/
│   └─ Form component → React Hook Form + Zod + shadcn/ui
│
├─ Animation component → examples/ folder
│   │
│   ├─ Framer Motion demo → Similar to AnimatedCard
│   ├─ Carousel demo → Similar to ImageCarousel
│   └─ Interaction demo → Combine libraries
│
└─ Layout component → App router layout
    │
    ├─ Page layout → layout.tsx in app directory
    ├─ Route group → (group) folder structure
    └─ Shared layout → nested layout.tsx
```

**File Organization:**

- `src/components/ui/` - shadcn/ui primitives only
- `src/components/examples/` - Library demonstrations
- `src/components/` - Business logic components
- `src/app/` - Layouts and pages

## 🗄️ State Management Decision Tree

```
Need to manage state?
│
├─ Component-local state → useState
│   │
│   ├─ Simple values → useState directly
│   ├─ Objects → useState with spread updates
│   ├─ Arrays → useState with proper immutability
│   └─ Complex logic → useReducer
│
├─ Form state → React Hook Form
│   │
│   ├─ Simple forms → useForm hook
│   ├─ Validation → Zod schema + zodResolver
│   ├─ Complex forms → Controller component
│   └─ Multi-step → Form context + steps
│
├─ Server state → SWR
│   │
│   ├─ API data → useSWR hook
│   ├─ Mutations → mutate function
│   ├─ Global cache → SWR global configuration
│   └─ Optimistic updates → mutate with optimistic data
│
├─ Theme state → next-themes (already configured)
│   │
│   ├─ Theme switching → useTheme hook
│   ├─ System preference → automatic detection
│   └─ Persistence → localStorage handling
│
└─ Complex client state → Zustand (if needed)
    │
    ├─ Global state → create store
    ├─ Persistence → persist middleware
    ├─ DevTools → devtools middleware
    └─ TypeScript → proper typing
```

**Escalation Path:**

1. **useState** - Start here for simple state
2. **React Hook Form** - Forms specifically
3. **SWR** - Server state and caching
4. **next-themes** - Theme state (already done)
5. **Zustand** - Complex client state (install if needed)

## 🧪 Testing Decision Tree

```
Need to test something?
│
├─ Component testing → React Testing Library
│   │
│   ├─ Rendering → render() function
│   ├─ User interactions → userEvent library
│   ├─ Assertions → expect() with jest-dom matchers
│   └─ Mocking → jest.mock() for external dependencies
│
├─ API testing → MSW (Mock Service Worker)
│   │
│   ├─ REST mocking → rest.get(), rest.post()
│   ├─ SWR testing → Mock API responses
│   ├─ Error scenarios → Error responses
│   └─ Loading states → Delayed responses
│
├─ Hook testing → @testing-library/react-hooks
│   │
│   ├─ Custom hooks → renderHook()
│   ├─ SWR hooks → Mock fetch responses
│   ├─ State changes → act() wrapper
│   └─ Async operations → waitFor() helper
│
└─ E2E testing → Playwright (if needed)
    │
    ├─ Critical paths → User journey tests
    ├─ Form submissions → Full workflow tests
    ├─ Dark mode → Theme switching tests
    └─ Mobile testing → Responsive behavior
```

**Testing Philosophy:**

- ✅ Test user behavior, not implementation
- ✅ Mock external dependencies
- ✅ Focus on critical user paths
- ❌ Don't test library internals

## 🚀 Performance Decision Tree

```
Performance issue detected?
│
├─ Bundle size → Analyze and optimize
│   │
│   ├─ Large components → Dynamic imports
│   ├─ Heavy libraries → Code splitting
│   ├─ Unused code → Tree shaking verification
│   └─ Bundle analysis → next-bundle-analyzer
│
├─ Runtime performance → React optimization
│   │
│   ├─ Unnecessary re-renders → React.memo()
│   ├─ Expensive calculations → useMemo()
│   ├─ Heavy event handlers → useCallback()
│   └─ Large lists → Virtual scrolling
│
├─ Data fetching → SWR optimization
│   │
│   ├─ Too many requests → Request deduplication
│   ├─ Stale data → Revalidation strategies
│   ├─ Slow responses → Loading states + optimistic updates
│   └─ Large payloads → Pagination + lazy loading
│
└─ Images → Next.js Image optimization
    │
    ├─ Large images → next/image component
    ├─ Multiple formats → WebP/AVIF automatic conversion
    ├─ Lazy loading → Built-in lazy loading
    └─ Remote images → domains configuration
```

## 🔧 Build & Deployment Decision Tree

```
Ready to deploy?
│
├─ Pre-deployment checks
│   │
│   ├─ npm run build → Must succeed
│   ├─ npm run lint → No warnings
│   ├─ npm test → All tests pass
│   └─ Type checking → No TypeScript errors
│
├─ Environment setup
│   │
│   ├─ Copy .env.example → .env.local
│   ├─ Configure API URLs → Environment-specific
│   ├─ Database connections → If applicable
│   └─ Third-party keys → Secure storage
│
├─ Platform choice
│   │
│   ├─ Vercel → Recommended (zero config)
│   ├─ Netlify → Alternative with build plugins
│   ├─ Railway → Full-stack applications
│   └─ Docker → Custom deployment
│
└─ Post-deployment
    │
    ├─ Domain configuration → Custom domains
    ├─ Analytics → Vercel Analytics / Google Analytics
    ├─ Monitoring → Error tracking / performance
    └─ Backup strategy → Database and assets
```

## 💡 Quick Decision Helpers

### "Should I install a new dependency?"

1. **Check if functionality exists** in current stack
2. **Check bundle size impact** (use bundlephobia.com)
3. **Check maintenance status** (GitHub stars, last update)
4. **Consider alternatives** in current stack
5. **Ask: Does this solve a real problem?**

### "Should I create a custom component?"

1. **Check shadcn/ui** for existing primitives
2. **Check examples/** for similar patterns
3. **Consider composition** of existing components
4. **Only create if truly unique** business logic needed

### "Should I add this to global state?"

1. **Start with component state** (useState)
2. **Use SWR** if it's server data
3. **Consider prop drilling** for 1-2 levels
4. **Only go global** if shared across many components

---

## 🎯 AI Agent Success Metrics

Follow these decision trees to achieve:

- ✅ Consistent technology choices
- ✅ Minimal bundle size growth
- ✅ Maintainable code patterns
- ✅ Optimal user experience
- ✅ Fast development velocity

Each decision tree prioritizes the template's existing stack and established patterns while providing escape hatches for edge cases.
