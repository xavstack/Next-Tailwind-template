
# Next.js Tailwind Template

A modern, production-ready Next.js template with Tailwind CSS, shadcn/ui components, TypeScript, and best practices built-in.

![Next.js](https://img.shields.io/badge/Next.js-15.3.4-black)
![React](https://img.shields.io/badge/React-19.1.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-38bdf8)

## ✨ Features

- **⚡ Next.js 15** - Latest Next.js with App Router and Server Components
- **⚛️ React 19** - Latest React with modern hooks and features
- **🎨 Tailwind CSS 4** - Utility-first CSS framework with modern features
- **🧩 shadcn/ui** - Beautiful and accessible UI components built on Radix UI
- **📝 TypeScript** - Full type safety with strict configuration
- **🔧 ESLint & Prettier** - Code quality and formatting
- **🧪 Jest & Testing Library** - Complete testing setup
- **📱 Responsive Design** - Mobile-first approach with modern design patterns
- **🌙 Dark Mode Ready** - Built-in dark mode support
- **🚀 Performance Optimized** - Built with performance best practices

## 🏗️ Tech Stack

### Core

- [Next.js 15](https://nextjs.org/) - React framework for production
- [React 19](https://react.dev/) - JavaScript library for user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript

### Styling

- [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Re-usable components built using Radix UI
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components
- [Lucide React](https://lucide.dev/) - Beautiful & consistent icons

### Forms & Validation

- [React Hook Form](https://react-hook-form.com/) - Performant forms with easy validation
- [Zod](https://zod.dev/) - TypeScript-first schema validation

### Data Fetching

- [SWR](https://swr.vercel.app/) - Data fetching with caching, revalidation, and more

### Development

- [ESLint](https://eslint.org/) - JavaScript linter
- [Jest](https://jestjs.io/) - JavaScript testing framework
- [Testing Library](https://testing-library.com/) - Testing utilities

## 🚀 Quick Start

### Prerequisites

- Node.js 18.18.0 or later
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd next-tailwind-template
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000) to see your application.

## 📁 Project Structure

```
next-tailwind-template/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── api/            # API routes
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   ├── components/         # React components
│   │   ├── ui/            # shadcn/ui components
│   │   └── ContactForm.tsx # Example form component
│   └── lib/               # Utility functions
├── styles/                # Design tokens and styles
├── __tests__/            # Test files
├── public/               # Static assets
├── next.config.ts        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies and scripts
```

## 🧪 Testing

Run the test suite:

```bash
npm run test
# or
yarn test
# or
pnpm test
```

## 🏗️ Building for Production

Create a production build:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

Start the production server:

```bash
npm run start
# or
yarn start
# or
pnpm start
```

## 🎨 Available Components

This template includes several pre-built components from shadcn/ui:

- **Button** - Various button styles and sizes
- **Card** - Content containers with headers and descriptions
- **Form** - Form components with validation
- **Input** - Text input fields
- **Label** - Form labels
- **Tabs** - Tabbed interfaces
- **Dialog** - Modal dialogs
- **Textarea** - Multi-line text input
- **Tooltip** - Hover tooltips

### Adding New Components

To add new shadcn/ui components:

```bash
npx shadcn@latest add [component-name]
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for environment variables:

```env
# Add your environment variables here
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Tailwind CSS

Customize Tailwind in `tailwind.config.ts`:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  // Your custom configuration
};
```

### Next.js

Configure Next.js in `next.config.ts`:

```typescript
import type { NextConfig } from "next";

const config: NextConfig = {
  // Your custom configuration
};
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) team for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [shadcn](https://twitter.com/shadcn) for the beautiful UI components
- [Vercel](https://vercel.com/) for hosting and deployment platform

---
**Happy coding!** 🚀