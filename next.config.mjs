/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'cdn.myshop.com',
      'images.footballstore.ru',
      'media.example.com',
      'example.com',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // barcha HTTPS hostlar
        pathname: '/**', // barcha path
      },
      {
        protocol: 'http',
        hostname: '**', // barcha HTTP hostlar
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;