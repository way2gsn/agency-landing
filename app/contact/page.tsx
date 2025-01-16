import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { FadeIn } from '@/components/ui/fade-in'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0A0B0F] text-white">
      <Navbar />
      <main className="pt-32 pb-16 px-6">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <h1 className="text-5xl font-bold mb-8">Contact Us</h1>
            <p className="text-xl text-gray-400 mb-8">
              Get in touch with our team for inquiries or support.
            </p>
          </FadeIn>
          {/* Add a contact form or contact information here */}
        </div>
      </main>
      <Footer />
    </div>
  )
}

