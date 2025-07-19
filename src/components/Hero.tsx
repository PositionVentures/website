'use client'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white pt-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 mb-16 leading-[0.8] tracking-tight">
          Your story is<br />
          your strategy
          <span className="text-position-red text-6xl md:text-8xl">.</span>
        </h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed mb-8">
            In today&apos;s crowded market, it&apos;s never been harder to stand out. 
            Position Ventures invests in early stage startups and positions 
            them for success by helping founders nail their positioning and 
            communications strategy. We help you tell your story so you can 
            hire, fundraise, and partner with the best in the world.
          </p>
        </div>
      </div>
      
    </section>
  )
}