/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // The scrapbook in public/why is a static site; serve its index at /why
  async rewrites() {
    return [{ source: "/why", destination: "/why/index.html" }]
  },
}

export default nextConfig
