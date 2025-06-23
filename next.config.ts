import type { NextConfig } from "next";
import { getAllowedImageHosts } from "./src/lib/env";

const config: NextConfig = {
  images: {
    remotePatterns: getAllowedImageHosts().map(hostname => ({
      protocol: "https",
      hostname,
    })),
  },
};

export default config;
