'use client'

import { motion } from 'framer-motion'

export function AnimatedTextCursor() {
  return (
    <motion.span
      className="inline-block w-[2px] h-[1em] bg-emerald-400 ml-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 1, 0] }}
      transition={{
        duration: 1.2,
        repeat: Infinity,
        times: [0, 0.2, 0.8, 1]
      }}
    />
  )
}

