'use client'

import { useState, useEffect } from 'react'
import { createHash } from 'crypto'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PerksContent from './PerksContent'

interface Perk {
  id: string
  partner: string
  logo?: string
  discount: string
  description: string
  category: string
  link?: string
}

interface PerksPageWrapperProps {
  perks: Perk[]
}

export default function PerksPageWrapper({ perks }: PerksPageWrapperProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if already authenticated with session validation
    try {
      const sessionData = sessionStorage.getItem('perks-session')
      if (sessionData) {
        const session = JSON.parse(atob(sessionData))
        const now = Date.now()
        
        // Check if session is valid and not expired
        if (session.authenticated && session.expires && session.expires > now) {
          setIsAuthenticated(true)
        } else {
          // Clear expired session
          sessionStorage.removeItem('perks-session')
        }
      }
    } catch (error) {
      // Clear invalid session data
      sessionStorage.removeItem('perks-session')
    }
    setIsLoading(false)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    try {
      const response = await fetch('/api/auth/perks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password })
      })
      
      const data = await response.json()
      
      if (response.ok && data.success) {
        // Set secure session with server-provided token
        const sessionData = {
          authenticated: true,
          token: data.sessionToken,
          timestamp: Date.now(),
          expires: Date.now() + (data.expiresIn * 1000)
        }
        sessionStorage.setItem('perks-session', btoa(JSON.stringify(sessionData)))
        setIsAuthenticated(true)
        setError('')
      } else {
        // Handle server-side rate limiting and error responses
        if (response.status === 429) {
          setError('Too many failed attempts. Please try again in 5 minutes.')
        } else if (data.attemptsRemaining) {
          setError(`Incorrect password. ${data.attemptsRemaining} attempts remaining.`)
        } else {
          setError('Incorrect password. Please try again.')
        }
      }
    } catch (error) {
      setError('Connection error. Please try again.')
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-500">Loading...</div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <>
        <div className="min-h-screen bg-gray-50">
          <Navigation />
          <div className="pt-32 pb-20">
            <div className="max-w-md mx-auto px-6">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h1 className="text-2xl font-light text-gray-900 mb-2">Portfolio Perks</h1>
                <p className="text-gray-600 mb-6">This page is exclusive to Position Ventures portfolio companies.</p>
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-400"
                      placeholder="Enter password"
                      required
                      autoComplete="off"
                      maxLength={128}
                    />
                  </div>
                  
                  {error && (
                    <p className="text-red-600 text-sm mb-4">{error}</p>
                  )}
                  
                  <button
                    type="submit"
                    className="w-full bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Access Perks
                  </button>
                </form>
                
                <p className="text-sm text-gray-500 mt-6 text-center">
                  Portfolio company? <a href="mailto:contact@positionventures.com" className="text-gray-700 underline">Contact us</a> for access.
                </p>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </>
    )
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <PerksContent perks={perks} />
        <Footer />
      </div>
    </>
  )
}