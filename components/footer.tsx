'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FadeIn } from './ui/fade-in'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="py-24 px-6 border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <FadeIn>
            <Link href="/">
              <motion.div whileHover={{ scale: 1.1 }}>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Johaar.PNG-cg80ndbexYEoS8DzK62FVkZEkVTDvi.png"
                  alt="Johaar Logo"
                  width={180}
                  height={60}
                  className="h-16 w-auto"
                />
              </motion.div>
            </Link>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="space-y-4">
              <h3 className="font-semibold">Stay updated</h3>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white/5 rounded px-3 py-2 text-sm"
                />
                <button className="bg-emerald-500/10 hover:bg-emerald-500/20 rounded px-4 py-2 text-sm text-emerald-400">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-500">
                By subscribing, you're accepting our terms and privacy statement.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="space-y-4">
              <h3 className="font-semibold">General</h3>
              <ul className="space-y-2">
                <li><Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
                <li><Link href="/enterprise" className="text-gray-400 hover:text-white">Enterprise</Link></li>
                <li><Link href="/agents" className="text-gray-400 hover:text-white">View AI Agents</Link></li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className="space-y-4">
              <h3 className="font-semibold">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
                <li><Link href="/dashboard" className="text-gray-400 hover:text-white">Dashboard</Link></li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </footer>
  )
}

