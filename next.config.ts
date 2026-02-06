import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: true,
  },

  swcMinify: true,
  compress: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "medfuturebucket.s3.ap-southeast-1.amazonaws.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
