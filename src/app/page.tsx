import Hero from '@/components/Hero'
import About from '@/components/About'
import Team from '@/components/Team'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Team />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}