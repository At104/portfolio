import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      }
    ],
    formats: ['image/webp'],
  },
  // Configure custom paths for static assets if needed
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/at104.github.io/' : '',
};

export default nextConfig;
