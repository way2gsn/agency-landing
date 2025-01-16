'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { ReactNode } from 'react'

interface FadeInProps extends HTMLMotionProps<"div"> {
  children: ReactNode
  delay?: number
}

export function FadeIn({ children, delay = 0, ...props }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

