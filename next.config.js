/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'bna.1cdn.vn',
      },
      {
        protocol: 'https',
        hostname: 'scontent.fhan15-2.fna.fbcdn.net',
      },
      {
        protocol: 'https',
        hostname: '*',
      },
    ],
  },
};

module.exports = nextConfig;
