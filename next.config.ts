import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "medfuturebucket.s3.ap-southeast-1.amazonaws.com",
        pathname: "/**",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Vary",
            value: "User-Agent",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
