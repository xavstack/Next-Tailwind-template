import { Metadata } from "next";

// Base SEO configuration for Next.js App Router
export const defaultMetadata: Metadata = {
  title: {
    default: "Next.js Tailwind Template",
    template: "%s | Next.js Tailwind Template",
  },
  description:
    "A modern, production-ready Next.js template with Tailwind CSS, shadcn/ui components, TypeScript, and best practices built-in.",
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "TypeScript",
    "shadcn/ui",
    "Template",
    "Framer Motion",
    "SWR",
  ],
  authors: [{ name: "Next.js Tailwind Template" }],
  creator: "Next.js Tailwind Template",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Next.js Tailwind Template",
    title: "Next.js Tailwind Template",
    description:
      "A modern, production-ready Next.js template with Tailwind CSS, shadcn/ui components, TypeScript, and best practices built-in.",
    images: [
      {
        url: `/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Next.js Tailwind Template",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle",
    creator: "@yourtwitterhandle",
    title: "Next.js Tailwind Template",
    description:
      "A modern, production-ready Next.js template with Tailwind CSS, shadcn/ui components, TypeScript, and best practices built-in.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  other: {
    "format-detection": "telephone=no, date=no, email=no, address=no",
  },
};

// Page-specific SEO helpers for Next.js App Router
export const createPageMetadata = (overrides: Metadata): Metadata => {
  return {
    ...defaultMetadata,
    ...overrides,
    title: overrides.title || defaultMetadata.title,
    openGraph: {
      ...defaultMetadata.openGraph,
      ...overrides.openGraph,
    },
    twitter: {
      ...defaultMetadata.twitter,
      ...overrides.twitter,
    },
  };
};

// Blog post SEO configuration for Next.js App Router
export const createBlogPostMetadata = ({
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
}): Metadata => {
  const url = `/blog/${slug}`;
  const imageUrl = image || `/og-image.jpg`;

  return createPageMetadata({
    title,
    description,
    keywords: tags,
    authors: [{ name: author }],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      url,
      title,
      description,
      publishedTime: date,
      authors: [author],
      tags,
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
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    other: {
      "article:author": author,
      "article:published_time": date,
      "article:tag": tags.join(", "),
    },
  });
};

// Product page SEO configuration for Next.js App Router
export const createProductMetadata = ({
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
}): Metadata => {
  const url = `/products/${slug}`;
  const imageUrl = image || `/og-image.jpg`;

  return createPageMetadata({
    title,
    description,
    alternates: {
      canonical: url,
    },
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
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    other: {
      "product:price:amount": price.toString(),
      "product:price:currency": currency,
      "product:availability": availability,
      ...(brand ? { "product:brand": brand } : {}),
    },
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
