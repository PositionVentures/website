'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'

interface Job {
  id: string
  title: string
  company: string
  companyUrl: string
  department: string
  location: string
  type: string
  salary?: string
  description: string
  applyUrl: string
}

interface JobsContentProps {
  jobs: Job[]
}

export default function JobsContent({ jobs }: JobsContentProps) {
  const [searchQuery, setSearchQuery] = useState('')

  // Group jobs by company for display
  const companies = useMemo(() => {
    const companyMap = new Map<string, { name: string; url: string; jobs: Job[] }>()
    
    jobs.forEach(job => {
      if (!companyMap.has(job.company)) {
        companyMap.set(job.company, {
          name: job.company,
          url: job.companyUrl,
          jobs: []
        })
      }
      companyMap.get(job.company)!.jobs.push(job)
    })
    
    return Array.from(companyMap.values()).map(company => ({
      ...company,
      jobCount: company.jobs.length
    }))
  }, [jobs])

  // Filter jobs based on search query
  const filteredJobs = useMemo(() => {
    if (!searchQuery.trim()) return jobs

    const query = searchQuery.toLowerCase()
    return jobs.filter(job => 
      job.title.toLowerCase().includes(query) ||
      job.company.toLowerCase().includes(query) ||
      job.department.toLowerCase().includes(query) ||
      job.location.toLowerCase().includes(query) ||
      job.type.toLowerCase().includes(query) ||
      job.description.toLowerCase().includes(query)
    )
  }, [jobs, searchQuery])

  // Filter companies based on filtered jobs
  const filteredCompanies = useMemo(() => {
    const companyMap = new Map<string, { name: string; url: string; jobs: Job[] }>()
    
    filteredJobs.forEach(job => {
      if (!companyMap.has(job.company)) {
        companyMap.set(job.company, {
          name: job.company,
          url: job.companyUrl,
          jobs: []
        })
      }
      companyMap.get(job.company)!.jobs.push(job)
    })
    
    return Array.from(companyMap.values()).map(company => ({
      ...company,
      jobCount: company.jobs.length
    }))
  }, [filteredJobs])

  const totalOpenPositions = filteredJobs.length
  const totalCompaniesWithListings = filteredCompanies.length

  return (
    <>
      {/* Header */}
      <header className="pt-40 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-light text-gray-900 mb-6">
              Portfolio Jobs<span className="text-position-red">.</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We back high-signal startups before the rest of the world sees them. Now you can, too. Explore roles at exceptional companies in our portfolio — led by founders we&apos;d back again and again.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by role, company, location, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pl-12 text-gray-900 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-400"
              />
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
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
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Company Navigation */}
      <section className="sticky top-24 bg-white z-40" aria-label="Company navigation">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="space-y-4">
            {/* Active hiring companies */}
            <div>
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Companies with open positions</h3>
              <div className="flex flex-wrap gap-2">
                {filteredCompanies.map((company) => (
                  <Link
                    key={company.name}
                    href={`#${company.name.toLowerCase().replace(/\s+/g, '-')}-jobs`}
                    className="inline-flex items-center px-3 py-1.5 bg-white hover:bg-gray-50 rounded-full text-sm font-medium text-gray-700 border border-gray-300 transition-colors"
                  >
                    {company.name}
                    <span className="ml-2 text-xs bg-gray-900 text-white px-2 py-0.5 rounded-full">
                      {company.jobCount}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <main className="pb-20" aria-labelledby="job-listings">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 id="job-listings" className="text-2xl font-medium text-gray-900 mb-8">
            {searchQuery ? `${totalOpenPositions} matching position${totalOpenPositions !== 1 ? 's' : ''}` : `Open Positions (${totalOpenPositions})`}
          </h2>
          
          {filteredCompanies.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No jobs found matching &quot;{searchQuery}&quot;</p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-4 text-gray-600 hover:underline"
              >
                Clear search
              </button>
            </div>
          ) : (
            <>
              {/* Group jobs by company */}
              {filteredCompanies.map((company) => (
                <section key={company.name} id={`${company.name.toLowerCase().replace(/\s+/g, '-')}-jobs`} className="mb-12" aria-labelledby={`${company.name.toLowerCase().replace(/\s+/g, '-')}-heading`}>
                  <h3 id={`${company.name.toLowerCase().replace(/\s+/g, '-')}-heading`} className="text-lg font-medium text-gray-900 mb-4 pb-2 border-b border-gray-200">
                    {company.name} ({company.jobCount} position{company.jobCount !== 1 ? 's' : ''})
                  </h3>
                  
                  <div className="space-y-4">
                    {company.jobs.map((job) => (
                      <article key={job.id} className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors bg-white">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                          <div className="flex-1">
                            <h4 className="text-lg font-medium text-gray-900 mb-2">
                              <Link href={job.applyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-position-red transition-colors">
                                {job.title}
                              </Link>
                            </h4>
                            <div className="flex flex-wrap gap-3 text-sm text-gray-600 mb-3">
                              <span className="flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                                {job.department}
                              </span>
                              <span className="flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                {job.location}
                              </span>
                              <span className="flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {job.type}
                              </span>
                              {job.salary && (
                                <span className="flex items-center font-medium text-gray-900">
                                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                  {job.salary}
                                </span>
                              )}
                            </div>
                            <p className="text-gray-600 text-sm">{job.description}</p>
                          </div>
                          <div className="flex-shrink-0">
                            <Link
                              href={job.applyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-4 py-2 bg-gray-600 text-white text-sm font-medium rounded-md hover:bg-gray-700 transition-colors"
                            >
                              Apply
                              <svg className="ml-2 -mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </>
          )}
        </div>
      </main>
    </>
  )
}