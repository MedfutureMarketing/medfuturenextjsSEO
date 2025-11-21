import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   experimental: {
    optimizeCss: true, // inlines critical CSS to remove render-blocking
  },
};


export default nextConfig;
