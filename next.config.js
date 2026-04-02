/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['weqtechnologies.com', 'i0.wp.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.weqtechnologies.com',
      },
      {
        protocol: 'https',
        hostname: 'i0.wp.com',
      },
    ],
  },
}

module.exports = nextConfig
