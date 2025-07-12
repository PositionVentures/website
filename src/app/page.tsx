import { Metadata } from 'next'
import Hero from '@/components/Hero'
import Team from '@/components/Team'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Position Ventures - Early Stage Venture Capital Fund',
  description: 'Position Ventures is an early-stage venture capital fund investing in founders who are building the future. Led by Jenny He, we partner with exceptional entrepreneurs to help them tell their stories and scale their companies.',
  keywords: 'venture capital, startup funding, early stage investing, Position Ventures, Jenny He, VC fund, startup accelerator, tech investing',
  authors: [{ name: 'Position Ventures' }],
  creator: 'Position Ventures',
  publisher: 'Position Ventures',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://positionventures.com',
    title: 'Position Ventures - Early Stage Venture Capital Fund',
    description: 'Position Ventures is an early-stage venture capital fund investing in founders who are building the future. Led by Jenny He, we partner with exceptional entrepreneurs.',
    siteName: 'Position Ventures',
    images: [
      {
        url: 'https://positionventures.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Position Ventures - Your story is your strategy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Position Ventures - Early Stage Venture Capital Fund',
    description: 'Early-stage venture capital fund investing in founders who are building the future.',
    creator: '@jennydhe',
    images: ['https://positionventures.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://positionventures.com',
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Team />
      <Footer />
    </main>
  )
}