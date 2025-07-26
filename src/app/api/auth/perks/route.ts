import { NextResponse } from 'next/server'
import crypto from 'crypto'

// Store the hashed password server-side
// This is the SHA-256 hash of 'pvperks'
const HASHED_PASSWORD = '2c26ac15dd2db264790c7868571b35ba6d6ef770cd4df38136aa6f47ec330919'

// Rate limiting map (in production, use Redis or similar)
const attempts = new Map<string, { count: number; lastAttempt: number }>()

export async function POST(request: Request) {
  try {
    const { password } = await request.json()
    
    // Get client IP for rate limiting
    const forwarded = request.headers.get('x-forwarded-for')
    const ip = forwarded ? forwarded.split(',')[0] : 'unknown'
    
    // Rate limiting
    const userAttempts = attempts.get(ip) || { count: 0, lastAttempt: 0 }
    const now = Date.now()
    
    // Reset attempts if more than 5 minutes have passed
    if (now - userAttempts.lastAttempt > 300000) {
      userAttempts.count = 0
    }
    
    // Check if user is locked out
    if (userAttempts.count >= 5) {
      return NextResponse.json(
        { error: 'Too many failed attempts. Please try again later.' },
        { status: 429 }
      )
    }
    
    // Hash the provided password
    const hash = crypto.createHash('sha256').update(password).digest('hex')
    
    // Constant-time comparison to prevent timing attacks
    const passwordMatches = crypto.timingSafeEqual(
      Buffer.from(hash),
      Buffer.from(HASHED_PASSWORD)
    )
    
    if (!passwordMatches) {
      // Increment failed attempts
      userAttempts.count++
      userAttempts.lastAttempt = now
      attempts.set(ip, userAttempts)
      
      return NextResponse.json(
        { 
          error: 'Invalid password',
          attemptsRemaining: Math.max(0, 5 - userAttempts.count)
        },
        { status: 401 }
      )
    }
    
    // Clear failed attempts on success
    attempts.delete(ip)
    
    // Generate secure session token
    const sessionToken = crypto.randomBytes(32).toString('hex')
    
    // In production, store this token in a database with expiration
    // For now, we'll return it to be stored client-side
    return NextResponse.json({
      success: true,
      sessionToken,
      expiresIn: 3600 // 1 hour
    })
    
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    )
  }
}

// Clean up old attempts periodically (every hour)
if (typeof global !== 'undefined' && !(global as any).cleanupInterval) {
  (global as any).cleanupInterval = setInterval(() => {
    const now = Date.now()
    for (const [ip, data] of attempts.entries()) {
      if (now - data.lastAttempt > 3600000) { // 1 hour
        attempts.delete(ip)
      }
    }
  }, 3600000)
}