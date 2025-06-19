# Next.js & Tailwind CSS Starter Template

A production-ready starter template for building modern web applications with a curated, best-practices stack.

---

### **Quick Start & Cheatsheet**

| Task                               | Command / Location                                           |
| ---------------------------------- | ------------------------------------------------------------ |
| **Run Dev Server**                 | `npm run dev`                                                |
| **Run Tests**                      | `npm run test`                                               |
| **Add a UI Component**             | `npx shadcn@latest add [component-name]`                     |
| **Create a New Page**              | Add a new folder in `src/app/` (e.g., `src/app/about/page.tsx`) |
| **Create an API Route**            | Add a new folder in `src/app/api/` (e.g., `src/app/api/users/route.ts`) |
| **Define CSS Variables**           | `styles/tokens.css`                                          |
| **Use the Data Fetcher**           | `import fetcher from 'lib/fetcher';`                         |
| **See the Form Example**           | `src/components/ContactForm.tsx`                             |

---

This template is designed to be a solid foundation for your next project, with a focus on developer experience, performance, and scalability.

## Tech Stack

This template comes pre-configured with the following technologies:

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) built on top of [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Data Fetching**: [SWR](https://swr.vercel.app/) with a custom fetcher utility.
- **Form Management**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Testing**: [Jest](https://jestjs.io/) & [React Testing Library](https://testing-library.com/)
- **Future Additions**: The project is set up to easily integrate Motion.dev (animations), Embla Carousel, and Lenis (smooth scrolling).

## Getting Started

### Use this Template

The easiest way to get started is to use this repository as a GitHub template.

1.  Click the "**Use this template**" button at the top of the repository page.
2.  Choose "**Create a new repository**".
3.  Give your new repository a name, and you're ready to code!

### Scaffolding UI Components

This template uses `shadcn/ui` for its UI components. You can easily add new components from the command line:

```bash
npx shadcn@latest add [component]
```

For example, to add an accordion component, you would run: `npx shadcn@latest add accordion`.

## Key Features & Examples

This template isn't just an empty shell; it includes practical examples to get you started.

### Data Fetching

A reusable data fetching utility is located at `lib/fetcher.ts`. It's a simple wrapper around `fetch` that handles JSON parsing and basic error handling, designed to be used with SWR.

### Contact Form & API

A complete contact form example is included to demonstrate how to handle form submissions.

-   **Contact Form Component**: `src/components/ContactForm.tsx`
-   **API Route**: `src/app/api/contact/route.ts`

This provides a real-world example of using `React Hook Form` for state management, `Zod` for schema validation, and a Next.js API route for the backend logic.

### Testing

The project is configured for component testing with Jest and React Testing Library.

-   **Configuration**: `jest.config.js` and `jest.setup.js`
-   **Example Test**: `__tests__/example.test.tsx`

To run the test suite, use the following command:

```bash
npm run test
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
