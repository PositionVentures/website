'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'

interface Perk {
  id: string
  partner: string
  logo?: string
  discount: string
  description: string
  category: string
  link?: string
}

interface PerksContentProps {
  perks: Perk[]
}

export default function PerksContent({ perks }: PerksContentProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [itemsPerPage, setItemsPerPage] = useState(50)
  const [expandedPerks, setExpandedPerks] = useState<Set<string>>(new Set())

  // Get unique categories
  const categories = useMemo(() => {
    return Array.from(new Set(perks.map(perk => perk.category))).sort()
  }, [perks])

  // Filter perks based on search and category
  const filteredPerks = useMemo(() => {
    let filtered = perks

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(perk =>
        perk.partner.toLowerCase().includes(query) ||
        perk.description.toLowerCase().includes(query) ||
        perk.category.toLowerCase().includes(query) ||
        perk.discount.toLowerCase().includes(query)
      )
    }

    // Apply category filter
    if (selectedCategory) {
      filtered = filtered.filter(perk => perk.category === selectedCategory)
    }

    return filtered
  }, [perks, searchQuery, selectedCategory])

  // Paginate results
  const displayedPerks = filteredPerks.slice(0, itemsPerPage)

  // Helper function to get first sentence
  const getFirstSentence = (text: string) => {
    const match = text.match(/^[^.!?]*[.!?]/)
    return match ? match[0].trim() : text.split(' ').slice(0, 10).join(' ') + '...'
  }

  // Toggle expanded state
  const toggleExpanded = (perkId: string) => {
    setExpandedPerks(prev => {
      const newSet = new Set(prev)
      if (newSet.has(perkId)) {
        newSet.delete(perkId)
      } else {
        newSet.add(perkId)
      }
      return newSet
    })
  }

  return (
    <>
      {/* Header */}
      <header className="pt-32 pb-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Portfolio Perks
          </h1>
          <p className="text-xl text-gray-600">
            Position Ventures gets you deals on the best tools for your startup.
          </p>
        </div>
      </header>

      {/* Filters and Search */}
      <section className="sticky top-24 z-40 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              {/* Category Filter */}
              <div className="relative">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium text-gray-700 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                  Add Filters
                </button>
                {selectedCategory && (
                  <span className="ml-2 text-sm text-gray-600">
                    {selectedCategory}
                    <button
                      onClick={() => setSelectedCategory(null)}
                      className="ml-2 text-gray-400 hover:text-gray-600"
                    >
                      ×
                    </button>
                  </span>
                )}
              </div>
              
              <span className="text-sm text-gray-500">
                {selectedCategory ? `Filtered by ${selectedCategory}` : 'No filters applied'}
              </span>
            </div>

            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-position-red focus:border-transparent"
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Results Info */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <select
                value={itemsPerPage}
                onChange={(e) => setItemsPerPage(Number(e.target.value))}
                className="px-3 py-1 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-position-red"
              >
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
                <option value={filteredPerks.length}>All</option>
              </select>
              <span className="text-sm text-gray-600">Items per page</span>
            </div>
            
            <span className="text-sm text-gray-600">
              {displayedPerks.length === filteredPerks.length 
                ? `${filteredPerks.length} of ${perks.length}`
                : `01-${displayedPerks.length} of ${filteredPerks.length}`
              }
            </span>
          </div>
        </div>
      </section>

      {/* Perks Table */}
      <main className="bg-gray-50 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Partner
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Categories
                  </th>
                  <th scope="col" className="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {displayedPerks.length === 0 ? (
                  <tr>
                    <td colSpan={3} className="px-6 py-12 text-center text-gray-500">
                      No perks found matching your search.
                    </td>
                  </tr>
                ) : (
                  displayedPerks.map((perk) => {
                    const isExpanded = expandedPerks.has(perk.id)
                    const firstSentence = getFirstSentence(perk.description)
                    const hasMoreContent = firstSentence !== perk.description
                    
                    return (
                      <tr key={perk.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-4">
                            <div className="flex-shrink-0 w-24 flex items-center justify-center">
                              {perk.logo ? (
                                <img 
                                  src={perk.logo} 
                                  alt={perk.partner} 
                                  className="max-h-8 max-w-full object-contain" 
                                />
                              ) : (
                                <span className="text-xs font-medium text-gray-600">
                                  {perk.partner.slice(0, 2).toUpperCase()}
                                </span>
                              )}
                            </div>
                            <div className="flex-1">
                              <div className="text-base font-medium text-gray-900 mb-1">
                                {perk.partner}
                              </div>
                              <div className="text-sm text-gray-600">
                                {perk.discount}. {perk.description}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <button
                            onClick={() => setSelectedCategory(perk.category)}
                            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                          >
                            {perk.category}
                          </button>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          {perk.link ? (
                            <Link
                              href={perk.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-gray-600"
                            >
                              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          ) : (
                            <button
                              className="text-gray-400 hover:text-gray-600"
                              onClick={() => alert('Contact Position Ventures for access to this perk')}
                            >
                              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                          )}
                        </td>
                      </tr>
                    )
                  })
                )}
              </tbody>
            </table>
          </div>

          {/* Load More */}
          {displayedPerks.length < filteredPerks.length && (
            <div className="mt-8 text-center">
              <button
                onClick={() => setItemsPerPage(prev => Math.min(prev + 50, filteredPerks.length))}
                className="inline-flex items-center px-6 py-3 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </main>

    </>
  )
}