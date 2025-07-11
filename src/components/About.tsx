export default function About() {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-24 text-center tracking-tight">
          Philosophy
        </h2>
        
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-gray-600 leading-relaxed font-light mb-20 tracking-wide">
            We believe exceptional companies are built on exceptional narratives. 
            <br className="hidden md:block" />
            Our focus is helping visionary founders articulate their story with precision and impact.
          </p>
          
          <div className="grid md:grid-cols-3 gap-20 text-center">
            <div>
              <h3 className="text-xs font-medium text-position-red mb-4 tracking-widest uppercase">Strategic Positioning</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Define your unique place in the market with clarity and conviction
              </p>
            </div>
            
            <div>
              <h3 className="text-xs font-medium text-gray-900 mb-4 tracking-widest uppercase">Narrative Design</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Craft compelling stories that resonate with stakeholders
              </p>
            </div>
            
            <div>
              <h3 className="text-xs font-medium text-gray-900 mb-4 tracking-widest uppercase">Growth Catalyst</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Accelerate expansion through strategic communications
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}