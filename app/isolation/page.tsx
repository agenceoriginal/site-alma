import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Home, ArrowRight, Star, CheckCircle, Wind, TrendingUp, ShieldCheck } from 'lucide-react'
import CtaBanner from '@/components/sections/CtaBanner'

export const metadata: Metadata = {
  title: 'Isolation Thermique — Alma Énergie',
  description: 'Isolation des combles, murs et planchers avec Alma Énergie. Améliorez votre DPE et réduisez vos factures de chauffage.',
}

const benefits = [
  { icon: Wind, title: 'Supprimez les courants d\'air', desc: 'Une isolation performante élimine les ponts thermiques et les infiltrations d\'air.' },
  { icon: TrendingUp, title: 'DPE amélioré', desc: 'Passez de la classe F à la classe A et valorisez votre bien immobilier.' },
  { icon: CheckCircle, title: 'Jusqu\'à 100% de financement', desc: 'MaPrimeRénov\', CEE et aides locales peuvent couvrir la totalité des travaux.' },
  { icon: ShieldCheck, title: 'Matériaux certifiés', desc: 'Laine de roche, ouate de cellulose, polyuréthane — les meilleurs isolants du marché.' },
]

const steps = [
  { number: '01', title: 'Diagnostic thermique', desc: 'Identification des zones de déperditions avec caméra thermique.' },
  { number: '02', title: 'Recommandations', desc: 'Choix des matériaux et techniques adaptés à votre logement.' },
  { number: '03', title: 'Travaux d\'isolation', desc: 'Intervention de nos équipes certifiées, durée selon surface.' },
  { number: '04', title: 'Certification', desc: 'Remise du certificat de travaux pour vos dossiers d\'aides.' },
]

export default function IsolationPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy text-white py-20 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=1800&q=85&auto=format&fit=crop"
            alt="Travaux d'isolation thermique"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-navy/85" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-white/40 mb-8">
            <Link href="/" className="hover:text-white/70 transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-white/70">Isolation</span>
          </nav>

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                <Home className="text-green-400" size={24} />
              </div>
              <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Isolation Thermique</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Isolation Thermique
            </h1>
            <p className="text-lg text-white/70 mb-8">
              Combles, murs, planchers bas — une isolation complète et performante pour améliorer votre DPE, votre confort et réduire vos factures de chauffage jusqu'à 30%.
            </p>

            <div className="flex items-center gap-3 mb-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-sm text-white/70"><strong className="text-white">4.8/5</strong> — 1 500+ chantiers isolation</span>
            </div>

            <Link
              href="/estimation-gratuite"
              className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              Devis gratuit <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight">
              Pourquoi isoler son logement ?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b) => {
              const Icon = b.icon
              return (
                <div key={b.title} className="rounded-2xl border border-neutral-100 p-6">
                  <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-green-500" />
                  </div>
                  <h3 className="font-bold text-navy mb-2">{b.title}</h3>
                  <p className="text-sm text-navy/60">{b.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 md:px-8 bg-clair">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight">
              Notre processus d'isolation
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="bg-white rounded-2xl p-6 shadow-sm border border-brand-100">
                <div className="w-12 h-12 rounded-xl bg-brand-500 text-white flex items-center justify-center text-lg font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="font-bold text-navy mb-2">{step.title}</h3>
                <p className="text-sm text-navy/60">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto bg-navy rounded-2xl p-10 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Prêt à isoler votre logement ?</h2>
          <p className="text-white/60 mb-8">Obtenez votre estimation gratuite et sans engagement.</p>
          <Link
            href="/estimation-gratuite"
            className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
          >
            Je veux mon devis gratuit <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
