import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { FadeIn } from '@/components/ui/fade-in';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0A0B0F] text-white">
      <Navbar />
      <main className="pt-32 pb-16 px-6">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <h1 className="text-5xl font-bold mb-8">Contact Us</h1>
            <p className="text-xl text-gray-400 mb-8">
              Get in touch with our team for inquiries or support. We’re here to help you leverage AI for your needs.
            </p>
          </FadeIn>
          <FadeIn>
            <form className="bg-[#1A1C22] p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-400 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-[#0F1115] text-white rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-400 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-[#0F1115] text-white rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
                  />
                </div>
              </div>
              <div className="mt-6">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="Subject"
                  className="w-full px-4 py-3 bg-[#0F1115] text-white rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
                />
              </div>
              <div className="mt-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  // rows="5"
                  required
                  placeholder="Your Message"
                  className="w-full px-4 py-3 bg-[#0F1115] text-white rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
                ></textarea>
              </div>
              <div className="mt-6 text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </FadeIn>
        </div>
      </main>
      <Footer />
    </div>
  );
}
