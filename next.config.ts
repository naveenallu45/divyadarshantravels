import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Silence turbopack inference warning
  // @ts-ignore
  turbopack: {
    root: "/Users/naveenallu/shareeftravels",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
