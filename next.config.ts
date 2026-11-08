import type { NextConfig } from "next";

// Static export, served by Cloudflare Workers static assets from ./out.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
