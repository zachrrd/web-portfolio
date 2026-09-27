import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.21", "localhost"],
  
  // Opsional: biar turbopack tidak bingung dengan package-lock di luar
  // turbopack: {
  //   root: process.cwd(),
  // },
};

export default nextConfig;