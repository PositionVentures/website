# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js website for Position Ventures, an early-stage venture capital firm. The site uses TypeScript, Tailwind CSS, and follows modern React patterns with the Next.js App Router.

## Development Commands

- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Architecture

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Fonts**: Inter (Google Fonts)

### Directory Structure
```
src/
├── app/
│   ├── globals.css       # Global styles and Tailwind imports
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Homepage with all sections
├── components/
│   ├── Navigation.tsx    # Fixed navigation with mobile menu
│   ├── Hero.tsx          # Hero section with main messaging
│   ├── About.tsx         # About section with value props
│   ├── Team.tsx          # Team member profiles
│   ├── Portfolio.tsx     # Portfolio company showcase
│   ├── Contact.tsx       # Contact form and info
│   └── Footer.tsx        # Footer with links
├── lib/                  # Utility functions (future)
└── types/               # TypeScript type definitions (future)
```

### Component Architecture
- All components are functional components using React hooks
- Client components use `'use client'` directive when needed (Navigation, Contact form)
- Components follow a consistent pattern: props interface, main component, export default
- Responsive design using Tailwind's responsive utilities

### Styling Approach
- Tailwind CSS for all styling
- Custom color palette defined in `tailwind.config.js`
- Consistent spacing and typography scales
- Hover states and transitions for interactive elements

### Key Features
- Responsive design (mobile-first approach)
- Fixed navigation with smooth scrolling
- Contact form with state management
- Portfolio showcase with placeholder data
- Team profiles with placeholder images
- SEO metadata configured in layout

## Design Inspiration Sources
The design draws inspiration from:
- Abstract VC: Clean, minimalist aesthetic
- Audacious Ventures: Bold typography and strategic white space
- Sequoia Capital: Professional, content-driven layout
- First Round: Storytelling approach and engaging visuals

## Content Strategy
- Tagline: "Your story is your strategy"
- Focus on positioning and communications strategy
- Target audience: Early-stage startup founders
- Investment range: $500K - $2M initial investments
- Sectors: B2B SaaS, fintech, enterprise technology

## Deployment Notes
- Built for v0 (Vercel's AI-powered development platform)
- Static generation ready for optimal performance
- Image optimization configured for external sources
- Environment variables should be prefixed with `NEXT_PUBLIC_` for client-side access

## Future Enhancements
- Add CMS integration for portfolio companies
- Implement contact form backend
- Add blog/insights section
- Integrate with analytics
- Add more interactive elements and animations