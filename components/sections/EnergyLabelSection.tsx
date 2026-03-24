import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, TrendingUp, Zap } from 'lucide-react'

export default function EnergyLabelSection() {
  return (
    <section className="py-20 px-4 md:px-8 bg-navy text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <p className="text-brand-500 text-sm font-semibold uppercase tracking-widest mb-3">DPE & Performance</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Passez de F à A,{' '}
              <span className="text-brand-500">nous vous aidons</span>
            </h2>
            <p className="text-white/60 leading-relaxed mb-4">
              Un mauvais DPE (Diagnostic de Performance Énergétique) impacte votre confort, vos factures et la valeur de votre bien immobilier.
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              Grâce à nos solutions de rénovation énergétique complètes (isolation, chauffage, solaire), nous vous accompagnons pour atteindre les meilleures classes énergétiques.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-3">
                <TrendingUp className="text-green-400" size={20} />
                <span className="text-sm font-semibold">+30% valeur immobilière</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-3">
                <Zap className="text-yellow-400" size={20} />
                <span className="text-sm font-semibold">-70% sur les factures</span>
              </div>
            </div>

            <Link
              href="/estimation-gratuite"
              className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              Améliorer mon DPE
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Right: Photo with overlay */}
          <div className="relative rounded-3xl overflow-hidden h-[460px] shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=900&q=85&auto=format&fit=crop"
              alt="Famille heureuse dans un intérieur confortable après rénovation énergétique"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />

            {/* DPE badge overlay */}
            <div className="absolute top-6 right-6 bg-white rounded-2xl p-4 shadow-lg">
              <p className="text-xs font-bold text-navy/50 uppercase tracking-widest mb-2">Étiquette DPE</p>
              <div className="flex items-center gap-3">
                <div className="bg-red-500 text-white font-bold text-sm px-3 py-1.5 rounded-lg">F</div>
                <span className="text-navy/40 text-sm font-bold">→</span>
                <div className="bg-green-500 text-white font-bold text-sm px-3 py-1.5 rounded-lg">A</div>
              </div>
            </div>

            {/* Bottom text */}
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white font-bold text-lg leading-tight">Un foyer confortable,<br />des économies durables</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
