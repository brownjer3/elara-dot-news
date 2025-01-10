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
  webpack: (config) => {
    config.module.rules.push({
      test: /\.ts$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    });
    return config;
  },
}

export default nextConfig;
