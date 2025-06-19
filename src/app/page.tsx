import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ContactForm } from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Next.js Tailwind Template
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            A modern, fully-featured Next.js template with Tailwind CSS, shadcn/ui components, 
            TypeScript, and best practices built-in.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg">Get Started</Button>
            <Button variant="outline" size="lg">Learn More</Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <Card>
            <CardHeader>
              <CardTitle>⚡ Next.js 15</CardTitle>
              <CardDescription>Built with the latest Next.js features</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                App Router, Server Components, and modern React 19 support.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>🎨 Tailwind CSS</CardTitle>
              <CardDescription>Utility-first CSS framework</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Rapid UI development with modern design system tokens.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>🧩 shadcn/ui</CardTitle>
              <CardDescription>Beautiful and accessible components</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Production-ready components built with Radix UI primitives.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>📝 TypeScript</CardTitle>
              <CardDescription>Type-safe development</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Full TypeScript support with strict configuration.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>🧪 Testing Setup</CardTitle>
              <CardDescription>Jest and Testing Library</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Complete testing setup with modern testing tools.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>🔧 Developer Experience</CardTitle>
              <CardDescription>ESLint, Prettier, and more</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Configured with best practices for modern development.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Demo Tabs */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle>Component Examples</CardTitle>
            <CardDescription>Explore the included components and features</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="form" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="form">Contact Form</TabsTrigger>
                <TabsTrigger value="buttons">Buttons</TabsTrigger>
                <TabsTrigger value="cards">Cards</TabsTrigger>
              </TabsList>
              
              <TabsContent value="form" className="space-y-4">
                <h3 className="text-lg font-semibold">Contact Form with Validation</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  Built with react-hook-form, Zod validation, and includes API route handling.
                </p>
                <ContactForm />
              </TabsContent>
              
              <TabsContent value="buttons" className="space-y-4">
                <h3 className="text-lg font-semibold">Button Variants</h3>
                <div className="flex flex-wrap gap-4">
                  <Button>Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </div>
                <div className="flex flex-wrap gap-4 mt-4">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                </div>
              </TabsContent>
              
              <TabsContent value="cards" className="space-y-4">
                <h3 className="text-lg font-semibold">Card Components</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Example Card</CardTitle>
                      <CardDescription>This is a sample card component</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">Cards can contain any content and are fully customizable.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Another Card</CardTitle>
                      <CardDescription>With different content</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full">Call to Action</Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-gray-500 dark:text-gray-400">
          <p>Built with ❤️ using Next.js, Tailwind CSS, and shadcn/ui</p>
          <p className="text-sm mt-2">Ready for production • TypeScript • Modern tooling</p>
        </div>
      </div>
    </main>
  );
}
