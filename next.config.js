/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com', 'cdn.prod.website-files.com', 'ubiquity6.com', 'www.persona-ai.ai'],
  },
}

module.exports = nextConfig