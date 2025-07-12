import TestimonialCarousel from './TestimonialCarousel'

export default function Team() {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo and Bio */}
          <div className="text-center">
            <img
              src="https://cdn.prod.website-files.com/65a58a670e9fc0f2a4c14901/65a58a670e9fc0f2a4c1494e_DSC07993.jpg"
              alt="Jenny He"
              className="w-40 h-40 rounded-full object-cover shadow-sm mx-auto mb-6"
            />
            <h3 className="text-2xl font-light text-gray-900 mb-2 tracking-wide">Jenny He</h3>
            <p className="text-gray-500 text-sm mb-6 font-light tracking-widest uppercase">Founder & General Partner</p>
            <p className="text-gray-600 text-sm leading-relaxed font-light max-w-sm mx-auto mb-6">
              I spent my entire career working closely with hundreds of founders on their positioning and communications strategy and I've been lucky enough to work with everyone from trailblazing first time founders to some of the most iconic founders of our lifetime. I started Position Ventures to help industry defining founders tell their stories.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.linkedin.com/in/jennyhe/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://x.com/jennydhe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-black transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Testimonials */}
          <div>
            <TestimonialCarousel />
          </div>
        </div>
      </div>
    </section>
  )
}