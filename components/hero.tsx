'use client'

import { motion } from 'framer-motion'
import { FadeIn } from './ui/fade-in'
import { AnimatedTextCursor } from './ui/animated-text-cursor'

export default function Hero() {
  return (
    <section className="pt-32 pb-16 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-400 mb-8"
        >
          Agency runs $1.6M →
        </motion.div>
        
        <FadeIn delay={0.2}>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            AI agents suck.
            <br />
            We're fixing that
            <AnimatedTextCursor />
          </h1>
        </FadeIn>
        
        <FadeIn delay={0.4}>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl">
            From the team behind AgentOps, Agency helps teams create reliable AI agents at scale.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}

