import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "qahkmyxtgnmzgmynsmne.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/pictures/**",
      },
    ],
  },
};

export default nextConfig;
