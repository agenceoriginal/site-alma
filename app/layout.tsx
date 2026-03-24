import type { Metadata } from 'next'
import { Unbounded } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const unbounded = Unbounded({
  subsets: ['latin'],
  variable: '--font-unbounded',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Alma Énergie — Rénovation Énergétique',
  description: 'Spécialiste en rénovation énergétique : panneaux solaires, chauffage et isolation thermique. Devis gratuit sous 24h.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={unbounded.variable}>
      <body className="font-sans bg-white text-navy antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
