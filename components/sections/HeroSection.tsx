import Link from 'next/link'
import Image from 'next/image'
import { Star, ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative bg-navy text-white overflow-hidden min-h-[90vh] flex items-center">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.webp"
          alt="Panneaux solaires sur toit"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32 w-full">
        <div className="max-w-2xl">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span>Certifié RGE — Artisan de confiance</span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
            L&apos;Énergie de Demain,{' '}
            <span className="text-brand-500">Aujourd&apos;hui</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-xl">
            Spécialiste en rénovation énergétique : panneaux solaires, chauffage et isolation thermique. Réduisez vos factures jusqu&apos;à 70%.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              href="/estimation-gratuite"
              className="inline-flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-base"
            >
              Estimation gratuite
              <ArrowRight size={18} />
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:border-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl transition-colors text-base"
            >
              Découvrir nos services
            </Link>
          </div>

          {/* TrustScore */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="text-sm text-white/80">
              <span className="font-bold text-white">4.8/5</span>
              {' '}— 3 500+ projets réalisés
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
