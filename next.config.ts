import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // NOTE: Don't hardcode Turbopack root paths. It must stay inside this project
  // or Turbopack can panic with "Invalid distDirRoot".
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
