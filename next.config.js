/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  // Optimize memory usage
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        minimize: true,
      };
    }
    return config;
  },
  // Reduce memory usage during build
  experimental: {
    optimizeCss: true,
  },
};

module.exports = nextConfig;

