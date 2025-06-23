module.exports = {
  ci: {
    collect: {
      // URLs to test (using local development server)
      url: ["http://localhost:3000", "http://localhost:3000/security-test"],
      // Use Chrome in headless mode
      settings: {
        chromeFlags: "--no-sandbox --disable-dev-shm-usage",
      },
      // Number of runs per URL
      numberOfRuns: 3,
      // Start a local server for testing
      startServerCommand: "npm run start",
      startServerReadyPattern: "Ready on",
      startServerReadyTimeout: 30000,
    },
    assert: {
      // Performance budgets - warn-only to avoid blocking builds
      assertions: {
        "categories:performance": ["warn", { minScore: 0.7 }],
        "categories:accessibility": ["warn", { minScore: 0.9 }],
        "categories:best-practices": ["warn", { minScore: 0.85 }],
        "categories:seo": ["warn", { minScore: 0.85 }],
        "categories:pwa": "off", // PWA not implemented yet

        // Core Web Vitals thresholds
        "first-contentful-paint": ["warn", { maxNumericValue: 3000 }],
        "largest-contentful-paint": ["warn", { maxNumericValue: 4000 }],
        "cumulative-layout-shift": ["warn", { maxNumericValue: 0.1 }],
        "first-input-delay": ["warn", { maxNumericValue: 100 }],

        // Bundle size thresholds
        "total-byte-weight": ["warn", { maxNumericValue: 500000 }], // 500kB
        "unused-javascript": ["warn", { maxNumericValue: 100000 }], // 100kB
      },
    },
    upload: {
      // For now, just store results locally
      target: "filesystem",
      outputDir: "./lighthouse-reports",
    },
  },
};
