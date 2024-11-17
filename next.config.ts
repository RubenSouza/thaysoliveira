import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["firebasestorage.googleapis.com", "img.youtube.com"],
  },
};

export default nextConfig;
