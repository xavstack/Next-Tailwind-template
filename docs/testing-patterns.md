# Testing Patterns Guide

_Comprehensive testing strategies for the Next.js Tailwind Template_

## 🎯 Testing Philosophy

### Testing Pyramid Approach

1. **Unit Tests** (70%) - Fast, isolated, component and utility testing
2. **Integration Tests** (20%) - API routes, form workflows, user interactions
3. **E2E Tests** (10%) - Critical user journeys and cross-browser validation

### Quality Standards

- **Coverage**: Maintain ≥80% test coverage
- **Performance**: Unit tests should run in <2 seconds
- **Reliability**: Tests should be deterministic and not flaky
- **Maintainability**: Tests should be easy to read and update

## 🧪 Testing Stack Overview

### Core Testing Tools

- **Jest** - Test runner and assertion library
- **@testing-library/react** - Component testing utilities
- **@testing-library/jest-dom** - Extended Jest matchers
- **@swc/jest** - Fast TypeScript compilation

### Available Utilities

- **Mock Service Worker (MSW)** - API mocking (ready for installation)
- **jest-axe** - Accessibility testing (ready for installation)
- **Playwright** - E2E testing (ready for installation)

## 🏗️ Component Testing Patterns

### Basic Component Testing

```typescript
// __tests__/components/Button.test.tsx
import { render, screen } from '@testing-library/react';
import { Button } from '@/components/ui/button';

describe('Button Component', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('applies variant styles correctly', () => {
    render(<Button variant="destructive">Delete</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-destructive');
  });

  it('handles disabled state', () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('aria-disabled', 'true');
  });
});
```

### Interactive Component Testing

```typescript
// __tests__/components/ContactForm.test.tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ContactForm } from '@/components/ContactForm';

// Mock the API call
global.fetch = jest.fn();

describe('ContactForm Component', () => {
  beforeEach(() => {
    (fetch as jest.Mock).mockClear();
  });

  it('submits form with valid data', async () => {
    const user = userEvent.setup();
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ message: 'Success' }),
    });

    render(<ContactForm />);

    // Fill out form
    await user.type(screen.getByLabelText(/name/i), 'John Doe');
    await user.type(screen.getByLabelText(/email/i), 'john@example.com');
    await user.type(screen.getByLabelText(/message/i), 'Test message');

    // Submit form
    await user.click(screen.getByRole('button', { name: /send message/i }));

    // Verify API call
    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'John Doe',
          email: 'john@example.com',
          message: 'Test message',
        }),
      });
    });
  });

  it('displays validation errors for invalid data', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    // Submit empty form
    await user.click(screen.getByRole('button', { name: /send message/i }));

    // Check for validation errors
    await waitFor(() => {
      expect(screen.getByText(/name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/email is required/i)).toBeInTheDocument();
      expect(screen.getByText(/message is required/i)).toBeInTheDocument();
    });
  });
});
```

## 🌐 API Testing Patterns

### API Route Testing

```typescript
// __tests__/api/contact.test.tsx
import { createMocks } from "node-mocks-http";
import handler from "@/app/api/contact/route";

describe("/api/contact", () => {
  it("handles valid POST request", async () => {
    const { req, res } = createMocks({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: {
        name: "John Doe",
        email: "john@example.com",
        message: "Test message",
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    const data = JSON.parse(res._getData());
    expect(data.message).toBe("Message sent successfully!");
  });

  it("validates required fields", async () => {
    const { req, res } = createMocks({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: {
        name: "",
        email: "invalid-email",
        message: "",
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(400);
    const data = JSON.parse(res._getData());
    expect(data.error).toBe("Validation failed");
    expect(data.details).toHaveLength(3); // name, email, message errors
  });
});
```

### Mock Service Worker (MSW) Setup

```typescript
// __tests__/setup/msw.ts
import { setupServer } from "msw/node";
import { rest } from "msw";

export const server = setupServer(
  // Mock external API calls
  rest.get("https://jsonplaceholder.typicode.com/posts/:id", (req, res, ctx) => {
    const { id } = req.params;
    return res(
      ctx.json({
        id: Number(id),
        title: "Mock Post Title",
        body: "Mock post body content",
        userId: 1,
      })
    );
  }),

  // Mock contact API
  rest.post("/api/contact", (req, res, ctx) => {
    return res(
      ctx.json({
        message: "Message sent successfully!",
      })
    );
  })
);

// Establish API mocking before all tests
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
```

## ♿ Accessibility Testing Patterns

### Basic Accessibility Testing

```typescript
// __tests__/accessibility/basic.test.tsx
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Button } from '@/components/ui/button';

// Extend Jest matchers
expect.extend(toHaveNoViolations);

describe('Accessibility Tests', () => {
  it('Button component has no accessibility violations', async () => {
    const { container } = render(<Button>Accessible Button</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('Form has proper labels and ARIA attributes', () => {
    render(
      <form>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          aria-describedby="email-help"
          aria-required="true"
        />
        <div id="email-help">We'll never share your email</div>
      </form>
    );

    const emailInput = screen.getByLabelText(/email address/i);
    expect(emailInput).toHaveAttribute('aria-required', 'true');
    expect(emailInput).toHaveAttribute('aria-describedby', 'email-help');
  });
});
```

### Keyboard Navigation Testing

```typescript
// __tests__/accessibility/keyboard.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '@/components/ui/button';

describe('Keyboard Navigation', () => {
  it('supports tab navigation', async () => {
    const user = userEvent.setup();

    render(
      <div>
        <Button>First Button</Button>
        <Button>Second Button</Button>
        <input placeholder="Text Input" />
      </div>
    );

    const firstButton = screen.getByRole('button', { name: /first button/i });
    const secondButton = screen.getByRole('button', { name: /second button/i });
    const textInput = screen.getByPlaceholderText(/text input/i);

    // Start with first button focused
    firstButton.focus();
    expect(firstButton).toHaveFocus();

    // Tab through elements
    await user.tab();
    expect(secondButton).toHaveFocus();

    await user.tab();
    expect(textInput).toHaveFocus();
  });
});
```

## 🔧 Testing Utilities & Helpers

### Custom Render Function

```typescript
// __tests__/utils/test-utils.tsx
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { SWRConfig } from 'swr';
import { fetcher } from '@/lib/fetcher';

// Custom render function with providers
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <SWRConfig value={{ fetcher, dedupingInterval: 0 }}>
        {children}
      </SWRConfig>
    </ThemeProvider>
  );
};

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
```

### Test Data Factories

```typescript
// __tests__/utils/factories.ts
export const createUser = (overrides?: Partial<User>) => ({
  id: Math.random().toString(36),
  name: "John Doe",
  email: "john@example.com",
  createdAt: new Date(),
  ...overrides,
});

export const createContactFormData = (overrides?: Partial<ContactFormData>) => ({
  name: "John Doe",
  email: "john@example.com",
  message: "Test message content",
  ...overrides,
});
```

## 📊 Testing Scripts & Configuration

### Package.json Scripts

```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "test:ci": "jest --ci --coverage --watchAll=false",
    "test:accessibility": "jest --testPathPattern=accessibility",
    "test:integration": "jest --testPathPattern=integration"
  }
}
```

## 📚 Best Practices Summary

### ✅ Do's

- **Write descriptive test names** that explain what is being tested
- **Use accessible queries** (role, label, text) over data-testid
- **Test user behavior**, not implementation details
- **Mock external dependencies** (APIs, third-party libraries)
- **Clean up after tests** (clear mocks, reset state)

### ❌ Don'ts

- **Don't test implementation details** (internal state, private methods)
- **Don't write overly complex tests** - keep them simple and focused
- **Don't test third-party libraries** - trust they work
- **Don't ignore accessibility** in your tests
- **Don't make tests dependent** on each other

### 🎯 Testing Checklist

- [ ] Component renders without crashing
- [ ] Props are handled correctly
- [ ] User interactions work as expected
- [ ] Error states are handled gracefully
- [ ] Accessibility requirements are met
- [ ] Loading states are tested
- [ ] API integrations are mocked and tested
- [ ] Edge cases are covered

## 🔗 Additional Resources

### Documentation Links

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [Testing Library Docs](https://testing-library.com/docs/)
- [Jest DOM Matchers](https://github.com/testing-library/jest-dom)
- [MSW Documentation](https://mswjs.io/docs/)

### Template-Specific Examples

- See `__tests__/contact.test.tsx` for API testing patterns
- See `__tests__/seo.test.ts` for utility function testing
- See `__tests__/example.test.tsx` for basic component testing

### Next Steps

1. **Install additional tools**: `npm install --save-dev jest-axe msw`
2. **Set up E2E testing**: Install Playwright for comprehensive testing
3. **Add performance monitoring**: Bundle size and runtime performance tests

---

_This guide provides a comprehensive foundation for testing in the Next.js Tailwind Template. All patterns are production-ready and follow industry best practices._
