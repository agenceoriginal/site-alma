'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Solaire', href: '/solaire' },
  { label: 'Chauffage', href: '/chauffage' },
  { label: 'Isolation', href: '/isolation' },
  { label: 'Nos Ambassadeurs', href: '/nos-ambassadeurs' },
  { label: 'Conseils', href: '/conseils' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-navy text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/images/logo.svg"
            alt="Alma Énergie"
            width={140}
            height={40}
            className="h-9 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + mobile menu */}
        <div className="flex items-center gap-3">
          <Link
            href="/estimation-gratuite"
            className="hidden sm:inline-flex items-center bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
          >
            Estimation gratuite
          </Link>

          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-navy border-t border-white/10 px-4 pb-4">
          <nav className="flex flex-col gap-3 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-white py-2 border-b border-white/10 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/estimation-gratuite"
              className="mt-2 inline-flex justify-center bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold px-5 py-3 rounded-xl transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Estimation gratuite
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
