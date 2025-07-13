'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const pathname = usePathname()

  useEffect(() => {
    const handleHashChange = () => {
      setActiveSection(window.location.hash)
    }

    // Set initial hash
    setActiveSection(window.location.hash)

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange)
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  const isTeamActive = pathname === '/' && activeSection === '#team'
  const isHomeActive = pathname === '/' && (activeSection === '' || activeSection === '#')

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-12">
              <Link 
                href="/" 
                onClick={() => setActiveSection('')}
                className={`text-sm font-normal transition-colors ${
                  isHomeActive
                    ? 'text-position-red' 
                    : 'text-gray-500 hover:text-position-red'
                }`}
              >
                Home
              </Link>
              <Link 
                href="/#team" 
                onClick={() => setActiveSection('#team')}
                className={`text-sm font-normal transition-colors ${
                  isTeamActive
                    ? 'text-position-red' 
                    : 'text-gray-500 hover:text-position-red'
                }`}
              >
                Team
              </Link>
              <Link 
                href="/companies" 
                className={`text-sm font-normal transition-colors ${
                  pathname === '/companies' 
                    ? 'text-position-red' 
                    : 'text-gray-500 hover:text-position-red'
                }`}
              >
                Companies
              </Link>
              <Link 
                href="/jobs" 
                className={`text-sm font-normal transition-colors ${
                  pathname === '/jobs' 
                    ? 'text-position-red' 
                    : 'text-gray-500 hover:text-position-red'
                }`}
              >
                Jobs
              </Link>
            </div>
          </div>
          
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img 
                src="/logo-lockup.png"
                alt="Position Ventures"
                className="h-8"
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 text-gray-500 hover:text-gray-900"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-6 pt-2 pb-6 space-y-4 bg-white border-t border-gray-100">
            <Link 
              href="/" 
              onClick={() => setActiveSection('')}
              className={`block text-sm font-normal transition-colors ${
                isHomeActive
                  ? 'text-position-red' 
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/#team" 
              onClick={() => setActiveSection('#team')}
              className={`block text-sm font-normal transition-colors ${
                isTeamActive
                  ? 'text-position-red' 
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Team
            </Link>
            <Link 
              href="/companies" 
              className={`block text-sm font-normal transition-colors ${
                pathname === '/companies' 
                  ? 'text-position-red' 
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Companies
            </Link>
            <Link 
              href="/jobs" 
              className={`block text-sm font-normal transition-colors ${
                pathname === '/jobs' 
                  ? 'text-position-red' 
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Jobs
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}