import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './testSetup.js', 
  }
};

export default nextConfig;