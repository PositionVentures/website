import Link from 'next/link'
import TestimonialCarousel from '@/components/TestimonialCarousel'

export default function Companies() {
  const portfolioCompanies = [
    {
      name: "Sesame",
      logo: "https://cdn.prod.website-files.com/65a58a670e9fc0f2a4c14901/67c6435fae4e753d43e35af8_Screenshot%202025-03-04%20at%208.03.20%E2%80%AFAM.png",
      textLogo: false
    },
    {
      name: "Twelve Labs",
      logo: "https://cdn.prod.website-files.com/65a58a670e9fc0f2a4c14901/6750d7146e21285ff100a578_Screenshot%202024-12-05%20at%206.20.05%E2%80%AFAM.png",
      textLogo: false
    },
    {
      name: "Anrok",
      logo: "https://cdn.prod.website-files.com/65a58a670e9fc0f2a4c14901/6750d7146c3b938aa433a71b_Screenshot%202024-12-05%20at%206.19.50%E2%80%AFAM.png",
      textLogo: false
    },
    {
      name: "Accordance",
      logo: "https://cdn.prod.website-files.com/65a58a670e9fc0f2a4c14901/67da13cb25e54712591e5fad_Screenshot%202025-03-19%20at%208.45.22%E2%80%AFAM.png",
      textLogo: false
    },
    {
      name: "Lantern",
      logo: "https://cdn.prod.website-files.com/65a58a670e9fc0f2a4c14901/6750d71377253dd24d1a6ec6_Screenshot%202024-12-05%20at%206.20.47%E2%80%AFAM.png",
      textLogo: false
    },
    {
      name: "Patlytics",
      logo: "https://cdn.prod.website-files.com/65a58a670e9fc0f2a4c14901/6750d7136b1f2b5e80ae01c9_Screenshot%202024-12-05%20at%206.21.11%E2%80%AFAM.png",
      textLogo: false
    },
    {
      name: "Super",
      logo: "https://cdn.prod.website-files.com/65a58a670e9fc0f2a4c14901/6750d7140339d78cdacc871e_Screenshot%202024-12-05%20at%206.20.18%E2%80%AFAM.png",
      textLogo: false
    },
    {
      name: "Cartesia",
      logo: "https://cdn.prod.website-files.com/65a58a670e9fc0f2a4c14901/67d4ab55a10bd11b3a0406e2_image.png",
      textLogo: false
    },
    {
      name: "Nova AI",
      logo: "https://cdn.prod.website-files.com/65a58a670e9fc0f2a4c14901/67c604af60d4735062b4265b_Screenshot%202025-03-04%20at%203.35.50%E2%80%AFAM.png",
      textLogo: false
    },
    {
      name: "Town",
      logo: "https://cdn.prod.website-files.com/65a58a670e9fc0f2a4c14901/67d4aaf58214d7b388b9999b_TC85gGffvXs8pu34Ir9tZEBZUpI.png",
      textLogo: false
    },
    {
      name: "Propel Code",
      logo: "https://cdn.prod.website-files.com/65a58a670e9fc0f2a4c14901/687013dd9e5340bcb6181078_Group%2027%20(1).png",
      textLogo: false
    },
    {
      name: "Collective",
      logo: "https://cdn.prod.website-files.com/65a58a670e9fc0f2a4c14901/67d4aaf59a911f70ac77bafa_collective-logo.png",
      textLogo: false
    },
    {
      name: "WorkWhile",
      logo: "https://cdn.prod.website-files.com/65a58a670e9fc0f2a4c14901/6750d7144aba47eb18059ad1_Screenshot%202024-12-05%20at%206.21.31%E2%80%AFAM.png",
      textLogo: false
    },
    {
      name: "Fractal",
      logo: "https://cdn.prod.website-files.com/65a58a670e9fc0f2a4c14901/6750d7133794cf6f445da414_Screenshot%202024-12-05%20at%206.21.44%E2%80%AFAM.png",
      textLogo: false
    },
    {
      name: "Paramark",
      logo: "https://cdn.prod.website-files.com/65a58a670e9fc0f2a4c14901/6750d7144aba47eb18059a93_Screenshot%202024-12-05%20at%206.21.58%E2%80%AFAM.png",
      textLogo: false
    },
    {
      name: "Bloom",
      logo: "https://cdn.prod.website-files.com/65a58a670e9fc0f2a4c14901/6750d714c9124b67a0d3a3f5_Screenshot%202024-12-05%20at%206.19.14%E2%80%AFAM.png",
      textLogo: false
    },
    {
      name: "Regrello",
      logo: "https://cdn.prod.website-files.com/65a58a670e9fc0f2a4c14901/6750e4c8dc6b5509b9d9ecd1_Screenshot%202024-12-05%20at%207.24.37%E2%80%AFAM.png",
      textLogo: false
    },
    {
      name: "Pine",
      logo: "https://cdn.prod.website-files.com/65a58a670e9fc0f2a4c14901/6750d714493f031c9c6d5749_Screenshot%202024-12-05%20at%206.23.35%E2%80%AFAM.png",
      textLogo: false
    },
    {
      name: "Jadu",
      logo: "https://cdn.prod.website-files.com/65a58a670e9fc0f2a4c14901/6750d714050d6ef91f1d6b1a_Screenshot%202024-12-05%20at%206.23.47%E2%80%AFAM.png",
      textLogo: false
    },
    {
      name: "Swiftlane",
      logo: "https://cdn.prod.website-files.com/65a58a670e9fc0f2a4c14901/6750d7146b1f2b5e80ae020d_Screenshot%202024-12-05%20at%206.24.05%E2%80%AFAM.png",
      textLogo: false
    },
    {
      name: "Zuma",
      logo: "https://cdn.prod.website-files.com/65a58a670e9fc0f2a4c14901/6750d71465c0a4e9a042ba0f_Screenshot%202024-12-05%20at%206.24.17%E2%80%AFAM.png",
      textLogo: false
    },
    {
      name: "Agora",
      logo: "https://cdn.prod.website-files.com/65a58a670e9fc0f2a4c14901/6750d71492b4ccc50e29f50a_Screenshot%202024-12-05%20at%206.24.52%E2%80%AFAM.png",
      textLogo: false
    },
    {
      name: "Skyfall",
      logo: "https://cdn.prod.website-files.com/65a58a670e9fc0f2a4c14901/67c603e252521945c728823e_Screenshot%202025-03-04%20at%203.32.35%E2%80%AFAM.png",
      textLogo: false
    },
    {
      name: "Callie",
      logo: "https://cdn.prod.website-files.com/65a58a670e9fc0f2a4c14901/685c97b2e0f727095e684e1d_Screenshot%202025-06-26%20at%208.43.10%E2%80%AFAM.png",
      textLogo: false
    },
    {
      name: "Stadium Live",
      logo: "https://cdn.prod.website-files.com/65a58a670e9fc0f2a4c14901/6750d7149ee9f5d01a1f4810_Screenshot%202024-12-05%20at%206.25.25%E2%80%AFAM.png",
      textLogo: false
    },
    {
      name: "Lavender",
      logo: "https://cdn.prod.website-files.com/65a58a670e9fc0f2a4c14901/6750e55aaaaa8ac13c06e4f8_Screenshot%202024-12-05%20at%207.27.04%E2%80%AFAM.png",
      textLogo: false
    },
    {
      name: "Oyster",
      logo: "https://cdn.prod.website-files.com/65a58a670e9fc0f2a4c14901/674647cf81ab41cb0a3936b7_Screenshot%202024-11-27%20at%206.12.09%E2%80%AFAM.png",
      textLogo: false
    },
    {
      name: "Savvy",
      logo: "https://cdn.prod.website-files.com/65a58a670e9fc0f2a4c14901/6750d71447f8ccd3a1bb8ab3_Screenshot%202024-12-05%20at%206.25.35%E2%80%AFAM.png",
      textLogo: false
    },
    {
      name: "Olaclick",
      logo: "https://cdn.prod.website-files.com/65a58a670e9fc0f2a4c14901/6750d7148b44dc72d2b304f4_Screenshot%202024-12-05%20at%206.25.46%E2%80%AFAM.png",
      textLogo: false
    },
    {
      name: "District",
      logo: "https://cdn.prod.website-files.com/65a58a670e9fc0f2a4c14901/6750d714e6df952f62af1742_Screenshot%202024-12-05%20at%206.25.56%E2%80%AFAM.png",
      textLogo: false
    },
    {
      name: "Ubiquity6",
      logo: "https://ubiquity6.com/images/logo_final_black.png",
      textLogo: false
    },
    {
      name: "Persona AI",
      logo: "https://www.persona-ai.ai/static/media/logo.e688029ff3c740a7d19309fd7bbc5265.svg",
      textLogo: false,
      invertOnHover: true
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="text-lg font-normal text-gray-900">
              Position Ventures
            </Link>
            <div className="hidden md:flex items-center space-x-12">
              <Link href="/#about" className="text-gray-500 hover:text-gray-900 text-sm font-normal transition-colors">
                About
              </Link>
              <Link href="/#team" className="text-gray-500 hover:text-gray-900 text-sm font-normal transition-colors">
                People
              </Link>
              <Link href="/companies" className="text-gray-900 text-sm font-normal">
                Companies
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Companies Logo Grid */}
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0.5 bg-gray-200">
            {portfolioCompanies.map((company, index) => (
              <Link 
                key={index} 
                href="#"
                className="group relative aspect-square flex items-center justify-center p-8 cursor-pointer transition-all duration-300 bg-white hover:bg-gray-50"
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
                    className={`w-24 h-16 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 ${
                      company.invertOnHover ? 'invert group-hover:invert-0' : ''
                    }`}
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}