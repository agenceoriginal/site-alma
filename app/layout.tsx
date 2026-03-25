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
  metadataBase: new URL('https://almaenergie.netlify.app'),
  title: {
    default: 'Alma Énergie — Rénovation Énergétique',
    template: '%s | Alma Énergie',
  },
  description: 'Spécialiste en rénovation énergétique : panneaux solaires, chauffage et isolation thermique. Certifié RGE. Devis gratuit sous 24h.',
  keywords: ['rénovation énergétique', 'panneaux solaires', 'pompe à chaleur', 'isolation thermique', 'MaPrimeRénov', 'RGE', 'économies énergie'],
  authors: [{ name: 'Alma Énergie' }],
  creator: 'Alma Énergie',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://almaenergie.netlify.app',
    siteName: 'Alma Énergie',
    title: 'Alma Énergie — Rénovation Énergétique',
    description: 'Spécialiste en rénovation énergétique : panneaux solaires, chauffage et isolation thermique. Certifié RGE. Devis gratuit sous 24h.',
    images: [
      {
        url: '/images/hero.webp',
        width: 1800,
        height: 1200,
        alt: 'Alma Énergie — Rénovation Énergétique',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alma Énergie — Rénovation Énergétique',
    description: 'Spécialiste en rénovation énergétique : panneaux solaires, chauffage et isolation thermique. Certifié RGE.',
    images: ['/images/hero.webp'],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
