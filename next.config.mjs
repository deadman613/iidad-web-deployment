/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
    ],
  },
  experimental: {
    turbo: {
      enabled: false,
    },
  },
};

export default nextConfig;
