import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Position Ventures - Your Story is Your Strategy',
  description: 'Early-stage startup investment firm focused on helping founders with positioning and communications strategy.',
  keywords: ['venture capital', 'startup investment', 'positioning', 'communications strategy'],
  authors: [{ name: 'Position Ventures' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}