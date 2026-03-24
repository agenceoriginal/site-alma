import type { Metadata } from 'next'
import EstimationForm from '@/components/forms/EstimationForm'
import { Shield, Clock, Star, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Estimation Gratuite — Alma Énergie',
  description: 'Obtenez votre estimation gratuite pour votre projet de rénovation énergétique en 2 minutes. Réponse sous 24h.',
}

const trustSignals = [
  { icon: Clock, text: 'Réponse sous 24h garantie' },
  { icon: Shield, text: 'Sans engagement' },
  { icon: Star, text: '4.8/5 de satisfaction client' },
  { icon: Phone, text: 'Accompagnement personnalisé' },
]

export default function EstimationGratuitePage() {
  return (
    <section className="min-h-screen bg-clair py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Info */}
          <div className="lg:sticky lg:top-24">
            <p className="text-brand-500 text-sm font-semibold uppercase tracking-widest mb-3">Devis gratuit</p>
            <h1 className="text-3xl md:text-4xl font-bold text-navy tracking-tight mb-6">
              Votre estimation<br />gratuite et sans engagement
            </h1>
            <p className="text-navy/60 leading-relaxed mb-8">
              En 2 minutes, décrivez votre projet. Nos experts analysent votre demande et vous recontactent sous 24h avec une estimation personnalisée.
            </p>

            {/* Trust signals */}
            <div className="space-y-4 mb-8">
              {trustSignals.map((signal) => {
                const Icon = signal.icon
                return (
                  <div key={signal.text} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-500/10 flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-brand-500" />
                    </div>
                    <p className="text-sm font-medium text-navy">{signal.text}</p>
                  </div>
                )
              })}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 bg-navy rounded-2xl p-6 text-white">
              <div className="text-center">
                <p className="text-2xl font-bold">3 500+</p>
                <p className="text-xs text-white/50 mt-1">Projets réalisés</p>
              </div>
              <div className="text-center border-x border-white/10">
                <p className="text-2xl font-bold">100%</p>
                <p className="text-xs text-white/50 mt-1">Satisfaits</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">RGE</p>
                <p className="text-xs text-white/50 mt-1">Certifié</p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <EstimationForm />
          </div>
        </div>
      </div>
    </section>
  )
}
