# Contextual AI Guidance System

_Smart Development Reminders & Best Practice Suggestions_

> **Purpose**: Provide contextual, non-intrusive guidance to developers about template capabilities and best practices at the right moments in their workflow.

---

## 🎯 **Guidance Philosophy**

### **When to Guide**:

- ✅ During natural workflow pauses (component completion, feature milestones)
- ✅ When working in areas with relevant optional features
- ✅ After implementing core functionality (suggest enhancements)
- ❌ Never interrupt active coding flow
- ❌ Never overwhelm with too many suggestions

### **Types of Guidance**:

1. **Contextual Reminders** - Based on current file/directory
2. **Milestone Suggestions** - After completing features
3. **Best Practice Prompts** - Template-specific recommendations
4. **Feature Discovery** - Introduce relevant capabilities

---

## 🧠 **Contextual Trigger System**

### **File-Based Context Triggers**

#### When editing `src/app/page.tsx` or layout files:

```
💡 Consider These Template Capabilities:
• SEO: Use createPageSEO() from lib/seo.ts for better metadata
• Performance: Add error.tsx/loading.tsx for better UX
• Analytics: Enable NEXT_PUBLIC_VERCEL_ANALYTICS for insights
```

#### When working in `src/components/`:

```
💡 Component Best Practices Available:
• Animation: Add Framer Motion transitions (examples in /examples)
• Testing: Create corresponding test in __tests__/
• Accessibility: Use Radix primitives for keyboard navigation
• Storybook: Document component if ENABLE_STORYBOOK=true
```

#### When creating API routes in `src/app/api/`:

```
💡 API Security & Quality Reminders:
• Validation: Use Zod schemas (see contact/route.ts example)
• Rate Limiting: Consider IP-based limits for public endpoints
• Error Handling: Sanitize error messages for production
• Testing: Add API tests with MSW (Mock Service Worker)
```

#### When editing `tailwind.config.ts` or CSS:

```
💡 Styling System Reminders:
• CSS Variables: Use semantic tokens from globals.css
• Dark Mode: Test both light/dark themes
• Responsive: Mobile-first approach (sm:, md:, lg:)
• Performance: Avoid custom CSS outside globals.css
```

### **Milestone-Based Suggestions**

#### After implementing authentication:

```
🔐 Post-Auth Implementation Checklist:
• Protected Routes: Create middleware for route protection
• User Management: Consider user profile components
• Session Handling: Implement proper logout/refresh flows
• Testing: Add auth-specific test scenarios
```

#### After adding forms:

```
📝 Form Enhancement Opportunities:
• Validation: Enhance with custom Zod schemas
• UX: Add loading states and success feedback
• Accessibility: Test keyboard navigation and screen readers
• Analytics: Track form completion rates if enabled
```

#### After deploying:

```
🚀 Post-Deployment Optimization:
• Performance: Run Lighthouse CI for baseline metrics
• Monitoring: Enable error tracking (Sentry, etc.)
• Analytics: Configure Vercel Analytics or Google Analytics
• SEO: Submit sitemap to search engines
```

### **Feature Discovery Prompts**

#### When working with images:

```
📸 Image Optimization Available:
• Next.js Image: Use next/image for automatic optimization
• Remote Patterns: Configure allowed domains in next.config.ts
• Performance: Consider lazy loading for galleries
• Template: ImageCarousel component ready to use
```

#### When building forms:

```
📋 Advanced Form Capabilities:
• Multi-step: Use React Hook Form with wizard patterns
• File Upload: Add drag-drop with proper validation
• Auto-save: Implement with SWR mutations
• CAPTCHA: Enable with ENABLE_CAPTCHA=true
```

---

## 🎨 **Smart Suggestion Engine**

### **Context Detection Rules**

```typescript
// AI Detection Logic for Contextual Suggestions

const contextualGuidance = {
  // File path triggers
  "src/app/**/page.tsx": () => suggestSEOAndPerformance(),
  "src/components/**/*.tsx": () => suggestTestingAndAnimation(),
  "src/app/api/**/*.ts": () => suggestSecurityAndValidation(),

  // Content-based triggers
  "contains:useState": () => suggestStateManagement(),
  "contains:fetch": () => suggestSWRMigration(),
  "contains:className": () => suggestTailwindBestPractices(),

  // Milestone triggers
  "after:component-complete": () => suggestEnhancements(),
  "after:api-route-added": () => suggestTesting(),
  "before:deployment": () => suggestOptimization(),
};
```

### **Suggestion Prioritization**

**High Priority** (always show):

- Security vulnerabilities
- Performance issues
- Accessibility problems

**Medium Priority** (show occasionally):

- Feature enhancements
- Best practice improvements
- Testing suggestions

**Low Priority** (show on request):

- Advanced features
- Optional integrations
- Experimental features

---

## 🎯 **Practical Implementation**

### **For AI Agents (Cursor AI)**

Add to `.cursorrules` contextual sections:

```markdown
## 🔍 Contextual Guidance Triggers

When user is working on:

### Components → Suggest:

- Testing patterns from **tests**/example.test.tsx
- Animation examples from components/examples/
- Accessibility improvements with Radix primitives

### API Routes → Suggest:

- Zod validation like contact/route.ts
- Rate limiting for public endpoints
- Error handling best practices

### Styling → Suggest:

- CSS variable usage from globals.css
- Responsive design patterns
- Dark mode considerations

### Deployment → Suggest:

- Environment variable validation
- Performance monitoring setup
- SEO optimization checklist
```

### **Suggestion Delivery Methods**

#### **Non-Intrusive Reminders**:

```
// At natural workflow pauses
✨ Quick Tip: Since you're working with forms, the template includes
   React Hook Form + Zod validation patterns. Check ContactForm.tsx
   for a complete example.
```

#### **Feature Discovery**:

```
// When relevant capabilities exist
💡 Did you know: This template includes SWR for data fetching with
   built-in error handling. See components/examples/SWRExample.tsx
   for implementation patterns.
```

#### **Best Practice Prompts**:

```
// Template-specific recommendations
🎯 Template Best Practice: Consider adding a loading.tsx file
   alongside this page.tsx for better UX. The template includes
   examples in the documentation.
```

### **Smart Timing**

#### **Good Times to Suggest**:

- After saving a file (small pause)
- When switching between related files
- After completing a component
- Before committing changes

#### **Avoid Suggesting During**:

- Active typing/editing
- Error states or debugging
- Complex refactoring sessions
- Time-pressured development

---

## 📋 **Feature Flag Integration**

### **Environment-Based Suggestions**

```bash
# .env.local
ENABLE_AI_GUIDANCE=true              # Enable contextual suggestions
AI_GUIDANCE_LEVEL=medium             # low|medium|high
ENABLE_MILESTONE_PROMPTS=true        # Milestone-based suggestions
ENABLE_FEATURE_DISCOVERY=true       # Show available features
```

### **Guidance Levels**

**Low**: Only critical security/performance
**Medium**: + best practices and testing
**High**: + feature discovery and enhancements

---

## 🧪 **Implementation Examples**

### **Context-Aware Component Guidance**

```typescript
// When creating a new component
const NewComponentGuidance = {
  suggest: [
    "Add TypeScript interface for props",
    "Include forwardRef if component accepts refs",
    "Consider animation with Framer Motion examples",
    "Create test file in __tests__ directory",
    "Document with JSDoc comments",
  ],

  templateResources: [
    "See examples/ directory for patterns",
    "Use shadcn/ui CLI: npx shadcn@latest add [component]",
    "Check decision-trees.md for component architecture",
  ],
};
```

### **API Development Guidance**

```typescript
// When working on API routes
const APIGuidance = {
  security: [
    "Add Zod validation for request body",
    "Implement rate limiting for public endpoints",
    "Sanitize error messages for production",
  ],

  testing: [
    "Create API tests with MSW",
    "Test error scenarios and edge cases",
    "Validate response schemas",
  ],

  performance: [
    "Consider caching for expensive operations",
    "Add proper HTTP status codes",
    "Implement pagination for large datasets",
  ],
};
```

---

## 🎮 **Usage Guidelines for Developers**

### **How to Request Guidance**

**Explicit Request**:

```
"What template features should I consider for this component?"
"Show me best practices for this API route"
"What optimization options are available?"
```

**Contextual Awareness**:

- AI will naturally suggest based on current file context
- Milestone-based prompts appear after completing features
- Feature discovery happens when working in related areas

### **Customizing Guidance**

```typescript
// In your development environment
const guidancePreferences = {
  frequency: "medium", // low|medium|high
  types: ["security", "performance", "testing"],
  timing: "milestone-based", // always|milestone-based|on-request
  verbosity: "concise", // concise|detailed|comprehensive
};
```

---

**This system turns the AI into a knowledgeable pair programming partner that knows your template's capabilities and suggests improvements at the right moments, without interrupting your flow.**
