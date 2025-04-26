import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import './globals.css'

export const metadata: Metadata = {
  title: 'Johaar.life: Your Trusted Partner for Professional Content and IT Excellence',
  description: 'Driving Digital Transformation Through Creative Content & Smart IT Solutions',
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

