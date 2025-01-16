'use client'

import { motion } from 'framer-motion'
import { FadeIn } from './ui/fade-in'

export default function CTA() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="rounded-2xl bg-gradient-to-b from-gray-900 to-black p-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#065f46,transparent_70%)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
          
          <div className="relative z-10">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-4">
                Ready to bring high agency<br />systems to life?
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-gray-400 mb-8 max-w-2xl">
              Join us in transforming Chhattisgarh's future with AI. Contact us to learn how our solutions can benefit your sector.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <motion.a
                href="#"
                className="inline-block text-emerald-400 hover:text-emerald-300"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Let's chat →
              </motion.a>
            </FadeIn>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

