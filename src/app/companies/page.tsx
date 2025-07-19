import { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

interface PortfolioCompany {
  name: string
  logo: string
  textLogo: boolean
  url: string
  invertOnHover?: boolean
}

export const metadata: Metadata = {
  title: 'Portfolio Companies - Position Ventures',
  description: 'Explore Position Ventures portfolio of innovative startups including Sesame, Twelve Labs, Anrok, Cartesia, Nova AI, and more. We invest in exceptional founders building the future across AI, fintech, and enterprise software.',
  keywords: 'Position Ventures portfolio, startup portfolio, venture capital investments, AI startups, fintech companies, enterprise software, Jenny He investments',
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
    url: 'https://positionventures.com/companies',
    title: 'Portfolio Companies - Position Ventures',
    description: 'Explore Position Ventures portfolio of innovative startups including Sesame, Twelve Labs, Anrok, and Cartesia. We invest in exceptional founders building the future across AI, fintech, and enterprise software.',
    siteName: 'Position Ventures',
    images: [
      {
        url: 'https://positionventures.com/og-image-companies.jpg',
        width: 1200,
        height: 630,
        alt: 'Position Ventures Portfolio Companies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio Companies - Position Ventures',
    description: 'Explore Position Ventures portfolio including Sesame, Twelve Labs, Anrok, and Cartesia across AI, fintech, and enterprise software.',
    creator: '@jennydhe',
    images: ['https://positionventures.com/og-image-companies.jpg'],
  },
  alternates: {
    canonical: 'https://positionventures.com/companies',
  },
}

export default function Companies() {
  const portfolioCompanies: PortfolioCompany[] = [
    {
      name: "Sesame",
      logo: "https://cdn.prod.website-files.com/65a58a670e9fc0f2a4c14901/67c6435fae4e753d43e35af8_Screenshot%202025-03-04%20at%208.03.20%E2%80%AFAM.png",
      textLogo: false,
      url: "https://www.sesame.com/"
    },
    {
      name: "Twelve Labs",
      logo: "https://cdn.sanity.io/images/rn4tswnp/production/308e843dc2da1dc80ed5e1dffe41c3a8735bf7fa-3000x1414.jpg",
      textLogo: false,
      url: "https://twelvelabs.io/"
    },
    {
      name: "Anrok",
      logo: "https://cdn.prod.website-files.com/65a58a670e9fc0f2a4c14901/6750d7146c3b938aa433a71b_Screenshot%202024-12-05%20at%206.19.50%E2%80%AFAM.png",
      textLogo: false,
      url: "https://www.anrok.com/"
    },
    {
      name: "Accordance",
      logo: "https://cdn.prod.website-files.com/65a58a670e9fc0f2a4c14901/67da13cb25e54712591e5fad_Screenshot%202025-03-19%20at%208.45.22%E2%80%AFAM.png",
      textLogo: false,
      url: "https://accordance.com/"
    },
    {
      name: "Lantern",
      logo: "https://cdn.prod.website-files.com/65a58a670e9fc0f2a4c14901/6750d71377253dd24d1a6ec6_Screenshot%202024-12-05%20at%206.20.47%E2%80%AFAM.png",
      textLogo: false,
      url: "https://newlantern.ai/"
    },
    {
      name: "Patlytics",
      logo: "https://cdn.prod.website-files.com/65a58a670e9fc0f2a4c14901/6750d7136b1f2b5e80ae01c9_Screenshot%202024-12-05%20at%206.21.11%E2%80%AFAM.png",
      textLogo: false,
      url: "https://www.patlytics.ai/"
    },
    {
      name: "Super",
      logo: "https://cdn.prod.website-files.com/65a58a670e9fc0f2a4c14901/6750d7140339d78cdacc871e_Screenshot%202024-12-05%20at%206.20.18%E2%80%AFAM.png",
      textLogo: false,
      url: "https://www.super.com/"
    },
    {
      name: "Cartesia",
      logo: "https://cdn.prod.website-files.com/65a58a670e9fc0f2a4c14901/67d4ab55a10bd11b3a0406e2_image.png",
      textLogo: false,
      url: "https://cartesia.ai/"
    },
    {
      name: "Nova AI",
      logo: "https://cdn.prod.website-files.com/65a58a670e9fc0f2a4c14901/67c604af60d4735062b4265b_Screenshot%202025-03-04%20at%203.35.50%E2%80%AFAM.png",
      textLogo: false,
      url: "https://www.novasoftware.ai/"
    },
    {
      name: "Town",
      logo: "https://cdn.prod.website-files.com/65a58a670e9fc0f2a4c14901/67d4aaf58214d7b388b9999b_TC85gGffvXs8pu34Ir9tZEBZUpI.png",
      textLogo: false,
      url: "https://town.com/"
    },
    {
      name: "Propel Code",
      logo: "https://cdn.prod.website-files.com/65a58a670e9fc0f2a4c14901/687013dd9e5340bcb6181078_Group%2027%20(1).png",
      textLogo: false,
      url: "https://www.propelcode.ai/"
    },
    {
      name: "Collective",
      logo: "https://cdn.prod.website-files.com/65a58a670e9fc0f2a4c14901/67d4aaf59a911f70ac77bafa_collective-logo.png",
      textLogo: false,
      url: "https://www.collective.com/"
    },
    {
      name: "WorkWhile",
      logo: "https://cdn.prod.website-files.com/65a58a670e9fc0f2a4c14901/6750d7144aba47eb18059ad1_Screenshot%202024-12-05%20at%206.21.31%E2%80%AFAM.png",
      textLogo: false,
      url: "https://www.workwhilejobs.com/"
    },
    {
      name: "Fractal",
      logo: "https://cdn.prod.website-files.com/65a58a670e9fc0f2a4c14901/6750d7133794cf6f445da414_Screenshot%202024-12-05%20at%206.21.44%E2%80%AFAM.png",
      textLogo: false,
      url: "https://www.fractal.is/"
    },
    {
      name: "Paramark",
      logo: "https://cdn.prod.website-files.com/65a58a670e9fc0f2a4c14901/6750d7144aba47eb18059a93_Screenshot%202024-12-05%20at%206.21.58%E2%80%AFAM.png",
      textLogo: false,
      url: "https://paramark.com/"
    },
    {
      name: "Bloom",
      logo: "https://cdn.prod.website-files.com/65a58a670e9fc0f2a4c14901/6750d714c9124b67a0d3a3f5_Screenshot%202024-12-05%20at%206.19.14%E2%80%AFAM.png",
      textLogo: false,
      url: "https://bloomapp.com/"
    },
    {
      name: "Regrello",
      logo: "https://cdn.prod.website-files.com/65a58a670e9fc0f2a4c14901/6750e4c8dc6b5509b9d9ecd1_Screenshot%202024-12-05%20at%207.24.37%E2%80%AFAM.png",
      textLogo: false,
      url: "https://www.regrello.com/"
    },
    {
      name: "Pine",
      logo: "https://cdn.prod.website-files.com/65a58a670e9fc0f2a4c14901/6750d714493f031c9c6d5749_Screenshot%202024-12-05%20at%206.23.35%E2%80%AFAM.png",
      textLogo: false,
      url: "https://www.pine.ca/"
    },
    {
      name: "Jadu",
      logo: "https://cdn.prod.website-files.com/65a58a670e9fc0f2a4c14901/6750d714050d6ef91f1d6b1a_Screenshot%202024-12-05%20at%206.23.47%E2%80%AFAM.png",
      textLogo: false,
      url: "https://jadu.ar/"
    },
    {
      name: "Swiftlane",
      logo: "https://cdn.prod.website-files.com/65a58a670e9fc0f2a4c14901/6750d7146b1f2b5e80ae020d_Screenshot%202024-12-05%20at%206.24.05%E2%80%AFAM.png",
      textLogo: false,
      url: "https://swiftlane.com/"
    },
    {
      name: "Zuma",
      logo: "https://cdn.prod.website-files.com/65a58a670e9fc0f2a4c14901/6750d71465c0a4e9a042ba0f_Screenshot%202024-12-05%20at%206.24.17%E2%80%AFAM.png",
      textLogo: false,
      url: "https://www.getzuma.com/"
    },
    {
      name: "Agora",
      logo: "https://cdn.prod.website-files.com/65a58a670e9fc0f2a4c14901/6750d71492b4ccc50e29f50a_Screenshot%202024-12-05%20at%206.24.52%E2%80%AFAM.png",
      textLogo: false,
      url: "https://www.agora.xyz/#Product"
    },
    {
      name: "Skyfall",
      logo: "https://cdn.prod.website-files.com/65a58a670e9fc0f2a4c14901/67c603e252521945c728823e_Screenshot%202025-03-04%20at%203.32.35%E2%80%AFAM.png",
      textLogo: false,
      url: "https://skyfall.ai/"
    },
    {
      name: "Callie",
      logo: "https://cdn.prod.website-files.com/65a58a670e9fc0f2a4c14901/685c97b2e0f727095e684e1d_Screenshot%202025-06-26%20at%208.43.10%E2%80%AFAM.png",
      textLogo: false,
      url: "https://www.joincallie.com/"
    },
    {
      name: "Stadium Live",
      logo: "https://cdn.prod.website-files.com/65a58a670e9fc0f2a4c14901/6750d7149ee9f5d01a1f4810_Screenshot%202024-12-05%20at%206.25.25%E2%80%AFAM.png",
      textLogo: false,
      url: "https://www.stadiumverse.com/"
    },
    {
      name: "Lavender",
      logo: "https://cdn.prod.website-files.com/65a58a670e9fc0f2a4c14901/6750e55aaaaa8ac13c06e4f8_Screenshot%202024-12-05%20at%207.27.04%E2%80%AFAM.png",
      textLogo: false,
      url: "https://www.lavender.ai/"
    },
    {
      name: "Oyster",
      logo: "https://cdn.prod.website-files.com/65a58a670e9fc0f2a4c14901/674647cf81ab41cb0a3936b7_Screenshot%202024-11-27%20at%206.12.09%E2%80%AFAM.png",
      textLogo: false,
      url: "https://www.withoyster.com/"
    },
    {
      name: "Savvy",
      logo: "https://cdn.prod.website-files.com/65a58a670e9fc0f2a4c14901/6750d71447f8ccd3a1bb8ab3_Screenshot%202024-12-05%20at%206.25.35%E2%80%AFAM.png",
      textLogo: false,
      url: "https://www.savvywealth.com/"
    },
    {
      name: "Olaclick",
      logo: "https://cdn.prod.website-files.com/65a58a670e9fc0f2a4c14901/6750d7148b44dc72d2b304f4_Screenshot%202024-12-05%20at%206.25.46%E2%80%AFAM.png",
      textLogo: false,
      url: "https://olaclick.com/en/"
    },
    {
      name: "District",
      logo: "https://cdn.prod.website-files.com/65a58a670e9fc0f2a4c14901/6750d714e6df952f62af1742_Screenshot%202024-12-05%20at%206.25.56%E2%80%AFAM.png",
      textLogo: false,
      url: "https://www.joindistrict.com/"
    },
    {
      name: "Ubiquity6",
      logo: "https://ubiquity6.com/images/logo_final_black.png",
      textLogo: false,
      url: "https://ubiquity6.com/"
    },
    {
      name: "Persona AI",
      logo: "https://www.persona-ai.ai/static/media/logo.e688029ff3c740a7d19309fd7bbc5265.svg",
      textLogo: false,
      url: "https://www.persona-ai.ai/"
    }
  ]

  // Generate structured data for portfolio
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Position Ventures Portfolio Companies",
    "description": "Our portfolio of innovative startups across AI, fintech, and enterprise software",
    "url": "https://positionventures.com/companies",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Position Ventures",
      "url": "https://positionventures.com"
    },
    "hasPart": portfolioCompanies.map(company => ({
      "@type": "Organization",
      "name": company.name,
      "url": company.url
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-white">
        <Navigation />

      {/* Companies Logo Grid */}
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0.5 bg-gray-200">
            {portfolioCompanies.map((company, index) => (
              <Link 
                key={index} 
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square flex items-center justify-center cursor-pointer transition-all duration-300 bg-white hover:bg-gray-100"
              >
                {company.textLogo ? (
                  <span className={`font-medium text-gray-900 ${
                    company.name === 'X' || company.name === '2F' 
                      ? 'text-5xl md:text-6xl font-bold' 
                      : company.name === 'Vercel'
                      ? 'text-4xl md:text-5xl'
                      : company.logo === company.logo.toUpperCase()
                      ? 'text-xl md:text-2xl tracking-wider'
                      : 'text-2xl md:text-3xl'
                  }`}>
                    {company.logo}
                  </span>
                ) : (
                  <img 
                    src={company.logo} 
                    alt={company.name}
                    className={`${
                      company.name === 'Town'
                        ? 'w-28 h-20'
                        : company.name === 'Propel Code'
                        ? 'w-36 h-28'
                        : company.name === 'Persona AI'
                        ? 'w-32 h-24' 
                        : company.name === 'Cartesia'
                        ? 'w-36 h-28'
                        : company.name === 'Callie'
                        ? 'w-48 h-40'
                        : company.name === 'WorkWhile' || company.name === 'Fractal' || company.name === 'Paramark' || 
                          company.name === 'Bloom' || company.name === 'Regrello' || company.name === 'Pine' || 
                          company.name === 'Zuma' || company.name === 'Swiftlane' || company.name === 'Agora' || 
                          company.name === 'Skyfall'
                        ? 'w-52 h-44'
                        : 'w-48 h-40'
                    } object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 mix-blend-multiply ${
                      company.invertOnHover ? 'invert group-hover:invert-0' : ''
                    } ${
                      company.name === 'Persona AI' ? 'invert' : ''
                    }`}
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
    </>
  )
}