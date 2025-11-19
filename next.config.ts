/** @type {import('next').NextConfig} */
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
};

module.exports = nextConfig;