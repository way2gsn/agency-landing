'use client'

import { motion } from 'framer-motion'
import { FadeIn } from './ui/fade-in'

export default function About() {
  return (
    <section className="py-24 px-6 relative">
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
      >
        <div className="h-full w-full bg-[linear-gradient(to_right,#1d1e22_1px,transparent_1px),linear-gradient(to_bottom,#1d1e22_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </motion.div>
      
      <div className="mx-auto max-w-7xl relative">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-8">About Agency</h2>
          <div className="max-w-2xl space-y-6 text-gray-400">
            <p>
              AI agents are the next major paradigm shift in computing. We bring them to life.
            </p>
            <p>
              We've personally built and reviewed hundreds of AI agents. Agency helps clients prototype and productionize ambitious agent-based applications.
            </p>
            <motion.a
              href="#"
              className="inline-block text-emerald-400 hover:text-emerald-300"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Find out more →
            </motion.a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

