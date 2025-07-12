'use client'

import { useState, useEffect } from 'react'

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const testimonials = [
    {
      quote: "When I started my new company, Jenny was the first investor I called. As a repeat founder, I've worked with a lot of great talent but Jenny stands out as someone who really knows how to work with founders to get things done.",
      founder: "Justin Kan",
      role: "Co-Founder",
      company: "Twitch"
    },
    {
      quote: "Jenny has been a gem of an investor. She is always willing to step in when it comes to her area of expertise and is super thoughtful and responsive.",
      founder: "Hussein Fazal",
      role: "Co-Founder & CEO",
      company: "Super.com"
    },
    {
      quote: "Jenny is a high-conviction, early investor in TwelveLabs, and she has been a valued partner ever since. From introductions to top funds, customers, and media opportunities, she consistently shows up with strategic, high-leverage support at exactly the right moments.",
      founder: "Jae Lee",
      role: "Co-Founder & CEO",
      company: "TwelveLabs"
    },
    {
      quote: "As a founder, I couldn't have asked for a better strategic partner for our company. Jenny was always available to help and her expertise in communications has been extremely helpful in positioning us for success.",
      founder: "Nan Wang",
      role: "Co-Founder & CEO",
      company: "Sleeper"
    },
    {
      quote: "I would recommend Jenny to any founder that is lucky enough to work with her. She went out of her way to help us secure news coverage that moved the needle for recruiting, investor interest, and partnerships for our business.",
      founder: "Jarah Euston",
      role: "Co-Founder & CEO",
      company: "WorkWhile"
    },
    {
      quote: "Jenny was an early believer in us and we're thrilled to have brought her on board as an investor. Jenny has been one of the most uniquely value add investors for us.",
      founder: "Sam Yang",
      role: "Co-Founder",
      company: "Nova AI"
    },
    {
      quote: "Jenny is one of the highest value investors on our cap table. She is thoughtful, decisive, and a true partner to our business.",
      founder: "David Au-Yeung",
      role: "Co-Founder",
      company: "Flipp"
    },
    {
      quote: "When considering strategic partners for our cap table, Jenny stood out as a valuable and differentiated partner.",
      founder: "Michelle Valentine",
      role: "CO-FOUNDER & CEO",
      company: "Anrok"
    }
  ]

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        goToNext()
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [isHovered, currentIndex])

  const transitionToSlide = (newIndex: number) => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex(newIndex)
      setTimeout(() => {
        setIsTransitioning(false)
      }, 50)
    }, 200)
  }

  const goToSlide = (index: number) => {
    if (index !== currentIndex) {
      transitionToSlide(index)
    }
  }

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    transitionToSlide(newIndex)
  }

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % testimonials.length
    transitionToSlide(newIndex)
  }

  return (
    <div className="w-full">
        <div 
          className="relative h-56 flex flex-col mb-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation arrows */}
          <button
            onClick={goToPrevious}
            className="absolute -left-8 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-position-red transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Testimonial content */}
          <div className="w-full px-12 flex-1 flex flex-col justify-center">
            <p className={`text-lg font-light text-gray-900 leading-relaxed mb-4 transition-opacity duration-300 ease-in-out ${
              isTransitioning ? 'opacity-0' : 'opacity-100'
            }`}>
              {testimonials[currentIndex].quote}
            </p>
            
            <p className={`text-gray-500 text-xs font-light tracking-widest uppercase transition-opacity duration-300 ease-in-out ${
              isTransitioning ? 'opacity-0' : 'opacity-100'
            }`}>
              {testimonials[currentIndex].founder} — {testimonials[currentIndex].role} — {testimonials[currentIndex].company}
            </p>
          </div>

          <button
            onClick={goToNext}
            className="absolute -right-8 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-position-red transition-colors z-10"
            aria-label="Next testimonial"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Indicator dots - fixed position */}
        <div className="flex justify-start space-x-1 px-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1 rounded-full transition-all duration-500 ease-in-out ${
                index === currentIndex 
                  ? 'bg-position-red w-12' 
                  : 'bg-gray-300 w-3 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
    </div>
  )
}