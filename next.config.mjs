/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // public/why and public/job are static pages; serve each index at its short path
  async rewrites() {
    return [
      { source: "/why", destination: "/why/index.html" },
      { source: "/job", destination: "/job/index.html" },
    ]
  },
}

export default nextConfig
