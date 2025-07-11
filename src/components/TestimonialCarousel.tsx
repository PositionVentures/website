'use client'

import { useState, useEffect } from 'react'

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      quote: "Position Ventures helped us craft our narrative when we were just a team with an idea. Their strategic guidance on positioning was instrumental in our Series A success.",
      author: "Sarah Chen",
      company: "TechFlow",
      role: "Co-founder & CEO"
    },
    {
      quote: "The team at Position Ventures doesn't just invest—they become true partners in telling your story. Their communications expertise opened doors we couldn't have imagined.",
      author: "Michael Rodriguez",
      company: "DataBridge",
      role: "Founder & CTO"
    },
    {
      quote: "Working with Position Ventures transformed how we think about our market positioning. They helped us stand out in a crowded space and articulate our unique value.",
      author: "Jennifer Park",
      company: "CloudSync",
      role: "CEO"
    },
    {
      quote: "Position Ventures understood our vision from day one. Their strategic support in fundraising and hiring was exactly what we needed to scale effectively.",
      author: "David Kim",
      company: "FinanceOS",
      role: "Co-founder"
    }
  ]

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-2xl font-light text-gray-900 mb-16">
        What founders say
      </h2>
      
      <div 
        className="relative"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 px-8">
                <blockquote className="text-lg md:text-xl text-gray-700 font-light leading-relaxed mb-8 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="text-gray-500">
                  <p className="font-medium text-gray-900">{testimonial.author}</p>
                  <p className="text-sm font-light">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-position-red transition-colors"
          aria-label="Previous testimonial"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-position-red transition-colors"
          aria-label="Next testimonial"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center space-x-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-position-red' : 'bg-gray-300'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}