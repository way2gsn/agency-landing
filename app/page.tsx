import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import Features from '@/components/features'
import About from '@/components/about'
import TrustedBy from '@/components/trusted-by'
import CTA from '@/components/cta'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        {/* <TrustedBy /> */}
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

