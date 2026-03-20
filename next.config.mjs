// import type { NextConfig } from "next";
import CopyPlugin from "copy-webpack-plugin";

const nextConfig = {
  /* config options here */
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  distDir: 'static_dist',
  transpilePackages: ["next-mdx-remote"],
  webpack: (config) => {
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: "./posts/",
            to: "../public/b/log/",
            globOptions: {
              ignore: ["**/*.mdx"],
            },
            noErrorOnMissing: true,
          },
        ],
      })
    );
    return config;
  },
};

export default nextConfig;
