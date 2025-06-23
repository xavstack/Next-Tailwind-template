import { createPageSEO, generateOrganizationSchema, generateWebsiteSchema } from "@/lib/seo";

describe("SEO utilities", () => {
  describe("createPageSEO", () => {
    it("should create basic page metadata", () => {
      const result = createPageSEO({
        title: "Test Page",
        description: "This is a test page description",
      });

      expect(result.title).toBe("Test Page");
      expect(result.titleTemplate).toBe("%s | Next.js Tailwind Template");
      expect(result.description).toBe("This is a test page description");
      expect(result.openGraph?.title).toBe("Next.js Tailwind Template");
      expect(result.openGraph?.description).toBe(
        "A modern, production-ready Next.js template with Tailwind CSS, shadcn/ui components, TypeScript, and best practices built-in."
      );
    });

    it("should handle custom canonical URL", () => {
      const result = createPageSEO({
        title: "Test Page",
        description: "Test description",
        canonical: "https://example.com/custom-url",
      });

      expect(result.canonical).toBe("https://example.com/custom-url");
      expect(result.openGraph?.url).toBe("http://localhost:3000");
    });

    it("should handle custom OpenGraph images", () => {
      const result = createPageSEO({
        title: "Test Page",
        description: "Test description",
        openGraph: {
          images: [
            {
              url: "https://example.com/image.jpg",
              alt: "Test Image",
              width: 1200,
              height: 630,
            },
          ],
        },
      });

      expect(result.openGraph?.images).toContainEqual(
        expect.objectContaining({
          url: "https://example.com/image.jpg",
          alt: "Test Image",
        })
      );
    });

    it("should merge with default configuration", () => {
      const result = createPageSEO({
        title: "Test Page",
        description: "Test description",
      });

      expect(result.titleTemplate).toContain("Next.js Tailwind Template");
      expect(result.openGraph?.type).toBe("website");
      expect(result.openGraph?.locale).toBe("en_US");
      expect(result.twitter?.cardType).toBe("summary_large_image");
    });
  });

  describe("Schema generators", () => {
    it("should generate website structured data", () => {
      const result = generateWebsiteSchema();

      expect(result["@context"]).toBe("https://schema.org");
      expect(result["@type"]).toBe("WebSite");
      expect(result.name).toBe("Next.js Tailwind Template");
      expect(result.url).toBe("http://localhost:3000");
    });

    it("should generate organization structured data", () => {
      const result = generateOrganizationSchema();

      expect(result["@context"]).toBe("https://schema.org");
      expect(result["@type"]).toBe("Organization");
      expect(result.name).toBe("Next.js Tailwind Template");
      expect(result.url).toBe("http://localhost:3000");
    });
  });
});
