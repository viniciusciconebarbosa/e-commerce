import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  eslint: {
    ignoreDuringBuilds: true, 
  },

  images: {
    domains: ["images.unsplash.com"],
  },
};

export default nextConfig;
