# AI Prompting Examples

Effective prompts for AI assistants when working with this Next.js + Tailwind CSS template.

## 🎨 UI Component Prompts

### Creating New Components

```
Create a pricing card component using shadcn/ui Card, Button, and Badge components.
Include three tiers (Basic, Pro, Enterprise) with Framer Motion hover animations
and proper TypeScript interfaces. Use the semantic color system from globals.css.
```

### Styling & Animation

```
Add a parallax hero section using Framer Motion's useScroll and useTransform hooks.
Implement smooth scrolling with Lenis and ensure it works with the existing
SmoothScrollProvider. Use Tailwind utilities only, no custom CSS.
```

```
Create a mobile-responsive navigation with Radix UI DropdownMenu for mobile
and standard nav for desktop. Include dark mode toggle using next-themes.
Add slide-in animation with Framer Motion.
```

## 📊 Data & Forms Prompts

### Form Implementation

```
Build a contact form using React Hook Form with Zod validation. Include fields
for name, email, message, and file upload. Use the existing ContactForm component
as reference and integrate with the /api/contact route. Add proper error handling
and loading states.
```

### Data Fetching

```
Create a dashboard component that fetches user data using SWR with the
lib/fetcher utility. Include loading states, error boundaries, and optimistic
updates. Display data in a responsive grid using shadcn/ui Cards with skeleton
loaders during loading states.
```

### API Integration

```
Build an API route at /api/users that connects to a database. Include proper
TypeScript types, error handling, and rate limiting. Create corresponding
client-side hooks using SWR for data fetching with automatic revalidation.
```

## 🎬 Animation & Interaction Prompts

### Page Transitions

```
Implement page transitions using Framer Motion's AnimatePresence. Create
slide transitions between routes with proper exit animations. Ensure it works
with Next.js App Router and doesn't interfere with the smooth scrolling.
```

### Carousel & Gallery

```
Create an image gallery using Embla Carousel with thumbnail navigation,
autoplay, and touch gestures. Include lightbox functionality using Radix UI
Dialog and proper image optimization with Next.js Image component.
```

### Micro-interactions

```
Add micro-interactions to the button components using Framer Motion. Include
tap animations, loading spinners, and success states. Ensure accessibility
with proper ARIA attributes and focus management.
```

## 🏗️ Architecture Prompts

### Layout & Structure

```
Create a dashboard layout with a collapsible sidebar, header with breadcrumbs,
and main content area. Use shadcn/ui components where possible and implement
proper responsive breakpoints. Include dark mode support and smooth animations.
```

### State Management

```
Implement a shopping cart feature using React's useReducer hook with TypeScript.
Include add/remove items, quantity updates, and local storage persistence.
Create a cart context provider and integrate with the existing theme provider.
```

### Error Handling

```
Create a comprehensive error handling system with custom error.tsx and
not-found.tsx pages. Include error boundaries for client components and
proper error logging. Use shadcn/ui components for consistent styling.
```

## 🔍 SEO & Performance Prompts

### Metadata & SEO

```
Implement dynamic metadata generation for a blog system. Include Open Graph
tags, Twitter cards, and JSON-LD structured data. Use Next.js generateMetadata
function with proper TypeScript types and fallback values.
```

### Performance Optimization

```
Optimize the image gallery component for performance. Implement lazy loading,
image optimization with Next.js Image, and proper loading states. Include
intersection observer for progressive image loading and Framer Motion for
smooth entrance animations.
```

### Accessibility

```
Audit and improve the accessibility of the navigation component. Add proper
ARIA labels, keyboard navigation support, and focus management. Ensure it
meets WCAG 2.1 AA standards and works with screen readers.
```

## 🧪 Testing Prompts

### Component Testing

```
Write comprehensive tests for the ContactForm component using Jest and
Testing Library. Include form validation testing, submission handling,
error states, and accessibility checks. Mock the API calls and test
loading states.
```

### Integration Testing

```
Create integration tests for the user authentication flow. Test login,
logout, and protected routes using Testing Library and MSW for API mocking.
Include tests for error scenarios and proper redirect behavior.
```

### Performance Testing

```
Write performance tests for the image carousel component. Test rendering
performance, memory usage, and smooth animations. Include tests for large
datasets and mobile performance considerations.
```

## 🎯 Specific Feature Prompts

### Authentication System

```
Implement a complete authentication system using NextAuth.js. Include login,
registration, password reset, and protected routes. Use shadcn/ui components
for forms and integrate with the existing theme system. Add proper TypeScript
types and error handling.
```

### Search Functionality

```
Create a search component with real-time filtering using SWR for data fetching.
Include debounced input, highlighting of search terms, and keyboard navigation.
Use Radix UI Combobox or Command components with proper accessibility.
```

### File Upload System

```
Build a drag-and-drop file upload component with progress tracking. Use
Framer Motion for upload animations and shadcn/ui Progress component.
Include file validation, preview functionality, and integration with
cloud storage APIs.
```

## 🔧 Utility & Tool Prompts

### Custom Hooks

```
Create a custom hook for managing local storage with TypeScript. Include
serialization/deserialization, error handling, and SSR compatibility.
Add proper types and integrate with the existing utility functions in lib/.
```

### Utility Functions

```
Build utility functions for date formatting, currency display, and text
truncation. Include proper TypeScript types, internationalization support,
and comprehensive unit tests. Add them to the lib/utils.ts file.
```

### Development Tools

```
Create a development-only component inspector that shows component props,
state, and performance metrics. Use environment variables to enable only
in development mode and integrate with the existing development workflow.
```

## 🚀 Deployment & Production Prompts

### Environment Configuration

```
Set up environment-specific configuration for development, staging, and
production. Include proper environment variable validation using Zod,
database connection handling, and feature flags. Document all required
environment variables.
```

### Performance Monitoring

```
Implement performance monitoring using Next.js built-in analytics and
Web Vitals reporting. Include custom metrics tracking, error logging,
and performance budgets. Create a dashboard for monitoring key metrics.
```

### CI/CD Integration

```
Create GitHub Actions workflows for automated testing, building, and
deployment. Include quality checks using the existing scripts in /scripts/,
proper secret management, and deployment to Vercel with preview deployments.
```

## 💡 Best Practices for AI Prompts

### Be Specific About Tech Stack

- Always mention which specific libraries to use (e.g., "Radix UI Dialog", "Framer Motion", "SWR")
- Reference existing components and utilities in the template
- Specify styling constraints (Tailwind only, semantic colors)

### Include Context

- Mention existing file structure and naming conventions
- Reference the project's TypeScript and ESLint configurations
- Consider the existing theme and design system

### Request Proper Testing

- Ask for TypeScript types and interfaces
- Request unit tests for new components
- Include accessibility considerations

### Consider Performance

- Ask for proper loading states and error handling
- Request optimization for Core Web Vitals
- Include mobile responsiveness requirements

### Example of a Well-Structured Prompt

```
Create a product comparison table component that:

Technical Requirements:
- Uses shadcn/ui Table and Card components
- Integrates with SWR for data fetching from /api/products
- Includes TypeScript interfaces for product data
- Uses Framer Motion for row hover animations

Design Requirements:
- Responsive design with horizontal scroll on mobile
- Dark mode support using semantic color variables
- Highlight differences between products
- Include action buttons for each product

Quality Requirements:
- Write unit tests using Jest and Testing Library
- Include proper ARIA labels for accessibility
- Add loading states and error handling
- Ensure proper focus management for keyboard navigation

Integration:
- Add to the existing examples/ directory
- Update the demo page to showcase this component
- Include usage documentation in the component file
```
