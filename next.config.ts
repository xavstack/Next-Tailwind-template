import type { NextConfig } from "next";

const config: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // Enable cross-origin for mobile testing (development only)
  async headers() {
    if (process.env.NODE_ENV === "development") {
      return [
        {
          source: "/(.*)",
          headers: [
            {
              key: "Access-Control-Allow-Origin",
              value: "*",
            },
          ],
        },
      ];
    }
    return [];
  },
};

export default config;
