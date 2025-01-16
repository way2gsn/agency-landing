'use client'

import { FadeIn } from './ui/fade-in'

const features = [
  {
    title: "Agent Dev Tools",
    description: "AgentOps is the industry leading agent observability platform.",
  },
  {
    title: "Vetted AI Agents",
    description: "Browse 400+ AI agents working in production.",
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

