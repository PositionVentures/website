export default function About() {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-24 text-center tracking-tight">
          Approach
        </h2>
        
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-gray-600 leading-relaxed font-light mb-20 tracking-wide">
            We help founders master the art of strategic storytelling through positioning, communications, and PR.
          </p>
          
          <div className="grid md:grid-cols-3 gap-20 text-center">
            <div>
              <h3 className="text-xs font-medium text-position-red mb-4 tracking-widest uppercase">Positioning</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Define your unique place in the market with clarity and conviction
              </p>
            </div>
            
            <div>
              <h3 className="text-xs font-medium text-gray-900 mb-4 tracking-widest uppercase">Communications</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Craft compelling narratives that resonate with key stakeholders
              </p>
            </div>
            
            <div>
              <h3 className="text-xs font-medium text-gray-900 mb-4 tracking-widest uppercase">PR Strategy</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Build media relationships and amplify your company&apos;s story
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}