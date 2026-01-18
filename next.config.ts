import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  // Transpile Sanity packages
  transpilePackages: ["sanity", "@sanity/vision"],
};

export default nextConfig;
