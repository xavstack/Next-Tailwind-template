import { createPageMetadata, generateOrganizationSchema, generateWebsiteSchema } from "@/lib/seo";

describe("SEO utilities", () => {
  describe("createPageMetadata", () => {
    it("should create basic page metadata", () => {
      const result = createPageMetadata({
        title: "Test Page",
        description: "This is a test page description",
      });

      expect(result.title).toBe("Test Page");
      expect(result.description).toBe("This is a test page description");
      expect(result.openGraph?.title).toBe("Next.js Tailwind Template");
      expect(result.openGraph?.description).toBe(
        "A modern, production-ready Next.js template with Tailwind CSS, shadcn/ui components, TypeScript, and best practices built-in."
      );
    });

    it("should handle custom canonical URL", () => {
      const result = createPageMetadata({
        title: "Test Page",
        description: "Test description",
        alternates: {
          canonical: "/custom-url",
        },
      });

      expect(result.alternates?.canonical).toBe("/custom-url");
      expect(result.openGraph?.url).toBe("/");
    });

    it("should handle custom OpenGraph images", () => {
      const result = createPageMetadata({
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
      const result = createPageMetadata({
        title: "Test Page",
        description: "Test description",
      });

      // @ts-expect-error - openGraph.type exists but may not be in current type definition
      expect(result.openGraph?.type).toBe("website");
      expect(result.openGraph?.locale).toBe("en_US");
      // @ts-expect-error - twitter.card exists but type definition may not include it
      expect(result.twitter?.card).toBe("summary_large_image");
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
