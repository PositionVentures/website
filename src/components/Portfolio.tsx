import Link from 'next/link'

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-12 text-center">
          Companies
        </h2>
        
        <div className="text-center">
          <Link 
            href="/companies" 
            className="text-gray-400 hover:text-position-red transition-colors text-sm font-light"
          >
            View Portfolio →
          </Link>
        </div>
      </div>
    </section>
  )
}