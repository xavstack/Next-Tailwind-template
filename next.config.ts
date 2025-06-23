import type { NextConfig } from "next";
import { getAllowedImageHosts } from "./src/lib/env";
import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const config: NextConfig = {
  images: {
    remotePatterns: getAllowedImageHosts().map(hostname => ({
      protocol: "https",
      hostname,
    })),
  },
  // Bundle size monitoring handled by our custom scripts
};

export default withBundleAnalyzer(config);
