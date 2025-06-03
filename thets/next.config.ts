import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true, // ✅ correct location
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ correct location
  },
};

export default nextConfig;
