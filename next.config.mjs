/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Remove or comment out "appDir" if you're not using the app directory feature
    // appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    return config;
  },
};

export default nextConfig;
