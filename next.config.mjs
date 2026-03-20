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
  trailingSlash: true,
  transpilePackages: ["next-mdx-remote"],
  // this is added so that the post files copy over on `next dev`
  async rewrites() {
    return [
      {
        source: '/b/log/:post/:file(.+)', 
        destination: '/posts/:post/:file', 
      },
    ]
  },
  // this is added so that the post files copy over on build (they get gitignored though!) 
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
