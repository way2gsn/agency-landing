'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-md"
    >
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-emerald-400">
          <motion.div whileHover={{ scale: 1.1 }} className='overflow-hidden'>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Johaar.PNG-cg80ndbexYEoS8DzK62FVkZEkVTDvi.png"
              alt="Johaar Logo"
              width={140}
              height={45}
              className="h-[7rem] w-[7rem] "
            />
          </motion.div>
        </Link>
        <div className="flex items-center space-x-8">
          <NavLink href="/agents">Agents</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/contact">Contact Us</NavLink>
        </div>
      </div>
    </motion.nav>
  )
}

function NavLink({ href, children }: { 
  href: string; 
  children: React.ReactNode; 
}) {
  return (
    <motion.div whileHover={{ y: -2 }}>
      <Link 
        href={href}
        className="text-sm text-gray-400 hover:text-white transition-colors"
      >
        {children}
      </Link>
    </motion.div>
  )
}

