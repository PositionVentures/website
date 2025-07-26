import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PerksContent from './PerksContent'

export const metadata: Metadata = {
  title: 'Portfolio Perks | Position Ventures - Exclusive Deals for Startups',
  description: 'Access exclusive deals and discounts on essential startup tools and services. Save thousands with perks from Stripe, Notion, JP Morgan, Dropbox, and Ramp as a Position Ventures portfolio company.',
  keywords: 'startup perks, startup discounts, AWS credits, Google Cloud credits, SaaS discounts, startup tools, venture capital perks, Position Ventures benefits',
  authors: [{ name: 'Position Ventures' }],
  creator: 'Position Ventures',
  publisher: 'Position Ventures',
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://positionventures.com/portfolio-perks',
    title: 'Portfolio Perks - Exclusive Startup Deals',
    description: 'Save thousands on essential startup tools. Exclusive deals from top partners for Position Ventures portfolio companies.',
    siteName: 'Position Ventures',
    images: [
      {
        url: 'https://positionventures.com/og-image-perks.jpg',
        width: 1200,
        height: 630,
        alt: 'Position Ventures Portfolio Perks - Exclusive Startup Deals',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio Perks - Exclusive Startup Deals',
    description: 'Stripe payment processing, Notion workspace, JP Morgan banking, and more. Exclusive perks for Position Ventures portfolio companies.',
    creator: '@jennydhe',
    images: ['https://positionventures.com/og-image-perks.jpg'],
  },
  alternates: {
    canonical: 'https://positionventures.com/portfolio-perks',
  },
}

interface Perk {
  id: string
  partner: string
  logo?: string
  discount: string
  description: string
  category: string
  link?: string
}

export default function PortfolioPerks() {
  const perks: Perk[] = [
    {
      id: 'stripe',
      partner: 'Stripe',
      discount: 'Waived fees on $50k processing',
      description: '$1,500 in credits to offset fees for Stripe Payments, Connect, Billing, and more. Expert insights, guidance on integrations, exclusive events, and eligibility for custom pricing review.',
      category: 'Payments',
      link: 'https://stripe.com/startup-benefits/position-ventures'
    },
    {
      id: 'dropbox',
      partner: 'Dropbox',
      discount: 'AI-powered search & assistant',
      description: 'Search anything instantly across tools (Drive, Slack, Notion), auto-organized content stacks, and GPT-style AI assistant over your connected company content.',
      category: 'Productivity',
      link: 'https://capture.dropbox.com/pPEDPZ2QOsHexLBx'
    },
    {
      id: 'jp-morgan',
      partner: 'JP Morgan',
      discount: 'Fees waived for 3 years',
      description: 'Complete banking solution with account fees waived for 3 years, Money Market Deposit Account, CashFlow 360, Cap Table Management, Corporate Credit Card, and more.',
      category: 'Banking',
      link: 'https://drive.google.com/drive/folders/1KHrNNiaLw-w56WRivwhD2ugKZivQ7QAj?usp=sharing'
    },
    {
      id: 'notion',
      partner: 'Notion',
      discount: 'Up to 6 months free Business Plan',
      description: 'Get up to 6 months free on the Business Plan with unlimited AI access. Total value up to $12,000 for all-in-one workspace and collaboration.',
      category: 'Productivity',
      link: 'http://ntn.so/positionventures'
    },
    {
      id: 'ramp',
      partner: 'Ramp',
      discount: '$500 referral bonus',
      description: 'Corporate card and expense management with $500 referral bonus for each client referred, expedited underwriting, white glove support, and dedicated Partner-Manager.',
      category: 'Finance',
      link: 'https://ramp.com/partners/position-ventures?k_is=opl&q_mailing_7TUwnLRio5bqoBbU1vuPzGZXCYyTNekKfvuJH=RonYnqkthNYQiy9HoRbAR46BFJKWYXSxbXGdMr6QcdK5scgZw9kjtSZtN&utm_id=amVubnlAcG9zaXRpb252ZW50dXJlcy5jb20%3D'
    },
    {
      id: 'zendesk',
      partner: 'Zendesk',
      discount: '6 months free',
      description: 'Customer service software platform with ticketing, knowledge base, and customer support tools. Get 6 months free access to help scale your customer support operations.',
      category: 'Customer Support',
      link: 'https://www.zendesk.com/lp/vc-startup-partner/?ref=gen&partner_account=0016R00003A0x04QAB'
    }
  ]

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <PerksContent perks={perks} />
        <Footer />
      </div>
    </>
  )
}