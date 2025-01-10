/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.suiai.fun',
        port: '',
        pathname: '/uploads/**',
      },
    ],
  },
}

export default nextConfig;
