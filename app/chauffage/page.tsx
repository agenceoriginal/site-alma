import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Thermometer, ArrowRight, Star, CheckCircle, Flame, Snowflake, Euro } from 'lucide-react'
import CtaBanner from '@/components/sections/CtaBanner'

export const metadata: Metadata = {
  title: 'Pompe à Chaleur & Solutions de Chauffage',
  description: 'Pompes à chaleur, chaudières à condensation et planchers chauffants. Réduisez votre facture de chauffage jusqu\'à 60%. Certifié RGE, éligible MaPrimeRénov\'.',
  keywords: ['pompe à chaleur', 'PAC air eau', 'chauffage économique', 'MaPrimeRénov chauffage', 'plancherchauffant', 'QualiPAC'],
  openGraph: {
    title: 'Pompe à Chaleur & Solutions de Chauffage — Alma Énergie',
    description: 'Réduisez votre facture de chauffage jusqu\'à 60% avec nos solutions certifiées RGE.',
    images: [{ url: '/images/chauffage-hero.webp', alt: 'Intérieur confortable avec chauffage performant' }],
  },
}

const benefits = [
  { icon: Euro, title: '-60% sur le chauffage', desc: 'Les pompes à chaleur consomment 3 à 4 fois moins d\'énergie que les systèmes traditionnels.' },
  { icon: Snowflake, title: 'Chaud et froid', desc: 'La PAC air/air assure également la climatisation en été pour un confort toute l\'année.' },
  { icon: Flame, title: 'Certifié RGE', desc: 'Nos techniciens sont qualifiés QualiPAC pour toutes les installations.' },
  { icon: CheckCircle, title: 'Éligible MaPrimeRénov\'', desc: 'Jusqu\'à 10 000€ d\'aides de l\'État pour votre installation de chauffage.' },
]

const steps = [
  { number: '01', title: 'Bilan thermique', desc: 'Analyse de vos besoins en chauffage et de la configuration de votre logement.' },
  { number: '02', title: 'Choix de la solution', desc: 'PAC air/eau, air/air ou géothermique selon votre situation.' },
  { number: '03', title: 'Installation', desc: 'Pose par nos techniciens certifiés en 1 à 3 jours selon le système.' },
  { number: '04', title: 'Mise en service', desc: 'Configuration, test de performance et formation à l\'utilisation.' },
]

export default function ChauffagePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy text-white py-20 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/chauffage-hero.webp"
            alt="Intérieur confortable — chauffage performant"
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
            <span className="text-white/70">Chauffage</span>
          </nav>

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                <Thermometer className="text-red-400" size={24} />
              </div>
              <span className="text-red-400 text-sm font-semibold uppercase tracking-wider">Chauffage</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Solutions de Chauffage
            </h1>
            <p className="text-lg text-white/70 mb-8">
              Pompes à chaleur, chaudières à condensation, planchers chauffants. Découvrez nos solutions de chauffage modernes pour un confort optimal et des économies durables.
            </p>

            <div className="flex items-center gap-3 mb-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-sm text-white/70"><strong className="text-white">4.8/5</strong> — 800+ installations</span>
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
              Pourquoi choisir une pompe à chaleur ?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b) => {
              const Icon = b.icon
              return (
                <div key={b.title} className="rounded-2xl border border-neutral-100 p-6">
                  <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-red-500" />
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
              Notre processus d'installation
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
          <h2 className="text-2xl font-bold mb-3">Prêt à changer votre chauffage ?</h2>
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
