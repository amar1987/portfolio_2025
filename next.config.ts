/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  // This line is essential for static site generation
  output: 'export',
  // Optional: Add a trailing slash for consistent static routing
  trailingSlash: true,
  // Other default configurations remain here...
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? '/portfolio_2025/' : '',
  basePath: isProd ? '/portfolio_2025' : '',
};

module.exports = nextConfig;