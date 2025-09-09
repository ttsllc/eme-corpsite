import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'EME - Heavy Equipment & Hauling Services',
  description: 'EME provides high quality aggregates and merchandising trucks and heavy equipment parts. Quality equipment at affordable prices.',
  keywords: 'heavy equipment, hauling services, dump truck, loader, backhoe, equipment rental, truck parts',
  authors: [{ name: 'EME Corporation' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
