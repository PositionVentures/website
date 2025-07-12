import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Position Ventures - Early Stage Venture Capital Fund',
    template: '%s | Position Ventures'
  },
  description: 'Position Ventures is an early-stage venture capital fund investing in founders who are building the future. Led by Jenny He, we partner with exceptional entrepreneurs.',
  keywords: ['venture capital', 'startup investment', 'early stage', 'Position Ventures', 'Jenny He', 'VC fund'],
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
              "url": "https://positionventures.com",
              "logo": "https://positionventures.com/logo.png",
              "description": "Position Ventures is an early-stage venture capital fund investing in founders who are building the future.",
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
              "sameAs": [
                "https://www.linkedin.com/company/position-ventures",
                "https://twitter.com/jennydhe"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "business"
              }
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}