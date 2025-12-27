/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com', 'cdn.prod.website-files.com', 'ubiquity6.com', 'www.persona-ai.ai'],
  },
  async headers() {
    return [
      {
        source: '/Form20-2.pdf',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, nofollow, noarchive' },
        ],
      },
    ]
  },
}

module.exports = nextConfig
