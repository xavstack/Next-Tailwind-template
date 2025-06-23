/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  generateRobotsTxt: true,
  generateIndexSitemap: false, // Generate a single sitemap file for better performance
  exclude: [
    "/server-sitemap-index.xml", // Exclude dynamic sitemap routes
    "/api/*", // Exclude API routes
    "/404", // Exclude 404 page
    "/500", // Exclude error pages
    "/_*", // Exclude Next.js internal routes
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/", "*.json$", "/404", "/500"],
      },
      // Special case for development
      ...(process.env.NODE_ENV === "development"
        ? [
            {
              userAgent: "*",
              disallow: "/", // Block crawlers in development
            },
          ]
        : []),
    ],
    additionalSitemaps: [
      // Add any additional sitemaps here
      // `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/server-sitemap.xml`,
    ],
  },
  transform: async (config, path) => {
    // Custom transform function to modify sitemap entries
    const priority = getPriorityForPath(path);
    const changefreq = getChangeFreqForPath(path);

    return {
      loc: path, // The URL
      changefreq, // Change frequency
      priority, // Priority (0.0 to 1.0)
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};

/**
 * Get priority based on page path
 * @param {string} path - The page path
 * @returns {number} Priority value between 0.0 and 1.0
 */
function getPriorityForPath(path) {
  // Homepage gets highest priority
  if (path === "/") {
    return 1.0;
  }

  // Main feature pages get high priority
  if (["/security-test", "/contact"].includes(path)) {
    return 0.8;
  }

  // Other pages get medium priority
  return 0.6;
}

/**
 * Get change frequency based on page path
 * @param {string} path - The page path
 * @returns {string} Change frequency
 */
function getChangeFreqForPath(path) {
  // Homepage changes more frequently
  if (path === "/") {
    return "weekly";
  }

  // Feature pages change occasionally
  if (["/security-test"].includes(path)) {
    return "monthly";
  }

  // Static pages change rarely
  return "monthly";
}
