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
  async redirects() {
    return [
      {
        source: "/sitemap",
        destination: "/sitemap.html",
        permanent: true,
      },
      {
        source: "/sitemap/",
        destination: "/sitemap.html",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/sitemap.html",
        destination: "/sitemap",
      },
    ];
  },
};

export default nextConfig;
