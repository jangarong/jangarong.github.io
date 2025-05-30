// import type { NextConfig } from "next";

const nextConfig = {
  /* config options here */
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  transpilePackages: ["next-mdx-remote"],
};

// export default nextConfig;
