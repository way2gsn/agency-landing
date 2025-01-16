import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { FadeIn } from '@/components/ui/fade-in'

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0A0B0F] text-white">
      <Navbar />
      <main className="pt-32 pb-16 px-6">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <h1 className="text-5xl font-bold mb-8">Blog</h1>
            <p className="text-xl text-gray-400 mb-8">
              Stay updated with the latest insights and news in AI development.
            </p>
          </FadeIn>
          {/* Add more content for the Blog page here */}
        </div>
      </main>
      <Footer />
    </div>
  )
}

