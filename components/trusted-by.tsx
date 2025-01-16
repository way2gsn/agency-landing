'use client'

import { motion } from 'framer-motion'
import { FadeIn } from './ui/fade-in'

const companies = [
  { name: 'Eventbrite', logo: '/logos/eventbrite.svg' },
  { name: 'Coheze', logo: '/logos/coheze.svg' },
  { name: 'Camel AI', logo: '/logos/camel.svg' },
  { name: 'Amadeus', logo: '/logos/amadeus.svg' },
  { name: 'Osseco', logo: '/logos/osseco.svg' },
  { name: 'Microsoft', logo: '/logos/microsoft.svg' },
]

export default function TrustedBy() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <h2 className="text-2xl font-semibold text-center mb-12">
            Trusted by ambitious builders from
          </h2>
        </FadeIn>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center justify-items-center">
          {companies.map((company, i) => (
            <FadeIn key={i} delay={0.1 * i}>
              <motion.div
                className="h-8 w-32 bg-white/5 rounded"
                whileHover={{ opacity: 1 }}
                initial={{ opacity: 0.5 }}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

