import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // TODO: Remove when not lazy
  eslint: {
        ignoreDuringBuilds: true,
      },
  transpilePackages: ["next-mdx-remote"],
};

export default nextConfig;
