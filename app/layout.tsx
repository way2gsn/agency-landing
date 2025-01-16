import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import './globals.css'

export const metadata: Metadata = {
  title: 'Agency - AI Development Platform',
  description: 'From the team behind AgentOps, Agency helps teams create reliable AI agents at scale.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${GeistSans.className} bg-[#0A0B0F] text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}

