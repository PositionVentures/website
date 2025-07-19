import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Position Ventures - Early Stage Venture Capital Fund | Your Story is Your Strategy',
    template: '%s | Position Ventures'
  },
  description: 'Position Ventures is an early-stage venture capital fund investing in exceptional founders building the future. Led by Jenny He, we help founders tell their stories and position themselves for success.',
  keywords: ['venture capital', 'startup investment', 'early stage VC', 'Position Ventures', 'Jenny He', 'seed funding', 'pre-seed investment', 'startup funding', 'venture fund', 'startup accelerator'],
  authors: [{ name: 'Position Ventures' }],
  creator: 'Position Ventures',
  publisher: 'Position Ventures',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://positionventures.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.png', type: 'image/png' }
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Position Ventures",
              "alternateName": "Position VC",
              "url": "https://positionventures.com",
              "logo": "https://positionventures.com/logo.png",
              "description": "Early-stage venture capital fund investing in exceptional founders. We help startups tell their stories and position themselves for success.",
              "slogan": "Your story is your strategy",
              "foundingDate": "2023",
              "founder": {
                "@type": "Person",
                "name": "Jenny He",
                "jobTitle": "Founder & General Partner",
                "url": "https://www.linkedin.com/in/jennyhe/",
                "sameAs": [
                  "https://www.linkedin.com/in/jennyhe/",
                  "https://twitter.com/jennydhe"
                ]
              },
              "areaServed": {
                "@type": "Country",
                "name": "United States"
              },
              "knowsAbout": [
                "Venture Capital",
                "Startup Investment",
                "Early Stage Funding",
                "B2B SaaS",
                "Fintech",
                "Enterprise Technology",
                "AI Startups"
              ],
              "sameAs": [
                "https://www.linkedin.com/company/position-ventures",
                "https://twitter.com/jennydhe"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "investor relations"
              }
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}