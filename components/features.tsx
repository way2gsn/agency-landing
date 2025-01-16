'use client'

import { FadeIn } from './ui/fade-in'

// : ""

// Educational AI Tools: "Personalizing learning experiences for students and educators."

// Infrastructure AI Management: "Optimizing urban planning and development projects."

const features = [
  {
    title: "Agricultural AI Solutions",
    description: "Enhancing crop yields and optimizing resource management for farmers.",
  },
  {
    title: "Healthcare AI Innovations",
    description: "Improving patient care and streamlining medical processes.",
  },
  {
    title: "Agent Expertise",
    description: "We help everyone from startups to enterprise build agents at scale.",
  },
]

export default function Features() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <FadeIn key={index} delay={0.2 * index}>
              <div className="group">
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

