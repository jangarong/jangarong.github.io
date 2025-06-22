// import type { NextConfig } from "next";

const nextConfig = {
  /* config options here */
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  distDir: 'static_dist',
  transpilePackages: ["next-mdx-remote"],
};

export default nextConfig;
