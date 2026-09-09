import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    'localhost:3000',
    'localhost:3001',
    '127.0.0.1:3000',
    '127.0.0.1:3001',
    '192.168.1.72:3000',
    '192.168.1.72:3001',
    '192.168.1.72',
  ],
};

export default nextConfig;

