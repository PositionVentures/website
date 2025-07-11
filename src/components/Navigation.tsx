'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="text-lg font-normal text-gray-900">
              Position Ventures
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-12">
              <Link href="/" className="text-gray-500 hover:text-position-red text-sm font-normal transition-colors">
                Home
              </Link>
              <Link href="#team" className="text-gray-500 hover:text-position-red text-sm font-normal transition-colors">
                Team
              </Link>
              <Link href="/companies" className="text-gray-500 hover:text-position-red text-sm font-normal transition-colors">
                Companies
              </Link>
            </div>
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
            <Link href="/" className="text-gray-500 hover:text-gray-900 block text-sm font-normal transition-colors">
              Home
            </Link>
            <Link href="#team" className="text-gray-500 hover:text-gray-900 block text-sm font-normal transition-colors">
              Team
            </Link>
            <Link href="/companies" className="text-gray-500 hover:text-gray-900 block text-sm font-normal transition-colors">
              Companies
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}