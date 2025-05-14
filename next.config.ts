import type { NextConfig } from "next";
import { createMDX } from "fumadocs-mdx/next";
const withMDX = createMDX();

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "*",
      },
    ],
  },
};

export default withMDX(nextConfig);
