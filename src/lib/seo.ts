import { NextSeoProps } from "next-seo";

// Base SEO configuration
export const defaultSEOConfig: NextSeoProps = {
  title: "Next.js Tailwind Template",
  titleTemplate: "%s | Next.js Tailwind Template",
  description:
    "A modern, production-ready Next.js template with Tailwind CSS, shadcn/ui components, TypeScript, and best practices built-in.",
  canonical: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
    siteName: "Next.js Tailwind Template",
    title: "Next.js Tailwind Template",
    description:
      "A modern, production-ready Next.js template with Tailwind CSS, shadcn/ui components, TypeScript, and best practices built-in.",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Next.js Tailwind Template",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    handle: "@yourtwitterhandle",
    site: "@yourtwitterhandle",
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    {
      name: "keywords",
      content: "Next.js, React, Tailwind CSS, TypeScript, shadcn/ui, Template, Framer Motion, SWR",
    },
    {
      name: "author",
      content: "Next.js Tailwind Template",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      httpEquiv: "x-ua-compatible",
      content: "IE=edge",
    },
  ],
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      href: "/favicon.ico",
      sizes: "76x76",
    },
    {
      rel: "manifest",
      href: "/manifest.json",
    },
  ],
};

// Page-specific SEO helpers
export const createPageSEO = (overrides: Partial<NextSeoProps>): NextSeoProps => {
  return {
    ...defaultSEOConfig,
    ...overrides,
    openGraph: {
      ...defaultSEOConfig.openGraph,
      ...overrides.openGraph,
    },
    twitter: {
      ...defaultSEOConfig.twitter,
      ...overrides.twitter,
    },
  };
};

// Blog post SEO configuration
export const createBlogPostSEO = ({
  title,
  description,
  slug,
  date,
  author,
  tags,
  image,
}: {
  title: string;
  description: string;
  slug: string;
  date: string;
  author: string;
  tags: string[];
  image?: string;
}): NextSeoProps => {
  const url = `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/blog/${slug}`;
  const imageUrl =
    image || `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/og-image.jpg`;

  return createPageSEO({
    title,
    description,
    canonical: url,
    openGraph: {
      type: "article",
      url,
      title,
      description,
      article: {
        publishedTime: date,
        authors: [author],
        tags,
      },
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
          type: "image/jpeg",
        },
      ],
    },
    additionalMetaTags: [
      {
        name: "keywords",
        content: tags.join(", "),
      },
      {
        name: "author",
        content: author,
      },
      {
        property: "article:author",
        content: author,
      },
      {
        property: "article:published_time",
        content: date,
      },
      {
        property: "article:tag",
        content: tags.join(", "),
      },
    ],
  });
};

// Product page SEO configuration
export const createProductSEO = ({
  title,
  description,
  slug,
  price,
  currency = "USD",
  availability = "InStock",
  image,
  brand,
}: {
  title: string;
  description: string;
  slug: string;
  price: number;
  currency?: string;
  availability?: string;
  image?: string;
  brand?: string;
}): NextSeoProps => {
  const url = `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/products/${slug}`;
  const imageUrl =
    image || `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/og-image.jpg`;

  return createPageSEO({
    title,
    description,
    canonical: url,
    openGraph: {
      type: "website",
      url,
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
          type: "image/jpeg",
        },
      ],
    },
    additionalMetaTags: [
      {
        property: "product:price:amount",
        content: price.toString(),
      },
      {
        property: "product:price:currency",
        content: currency,
      },
      {
        property: "product:availability",
        content: availability,
      },
      ...(brand ? [{ property: "product:brand", content: brand }] : []),
    ],
  });
};

// JSON-LD structured data helpers
export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Next.js Tailwind Template",
    url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
    logo: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/logo.png`,
    description:
      "A modern, production-ready Next.js template with Tailwind CSS, shadcn/ui components, TypeScript, and best practices built-in.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      url: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/contact`,
    },
    sameAs: [
      "https://twitter.com/yourtwitterhandle",
      "https://github.com/yourorganization",
      "https://linkedin.com/company/yourcompany",
    ],
  };
};

export const generateWebsiteSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Next.js Tailwind Template",
    url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
    description:
      "A modern, production-ready Next.js template with Tailwind CSS, shadcn/ui components, TypeScript, and best practices built-in.",
    potentialAction: {
      "@type": "SearchAction",
      target: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
};

export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
};
