import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Sun, ArrowRight, Star, CheckCircle, Zap, Leaf, TrendingDown } from 'lucide-react'
import CtaBanner from '@/components/sections/CtaBanner'

export const metadata: Metadata = {
  title: 'Panneaux Solaires Photovoltaïques',
  description: 'Installez des panneaux solaires photovoltaïques avec Alma Énergie. Réduisez vos factures jusqu\'à 70%, bénéficiez de MaPrimeRénov\' et de la TVA à 5,5%. Devis gratuit.',
  keywords: ['panneaux solaires', 'photovoltaïque', 'installation solaire', 'autoconsommation', 'MaPrimeRénov solaire', 'TVA 5.5%'],
  openGraph: {
    title: 'Panneaux Solaires Photovoltaïques — Alma Énergie',
    description: 'Réduisez vos factures d\'électricité jusqu\'à 70% avec nos installations solaires certifiées RGE.',
    images: [{ url: '/images/solaire-hero.webp', alt: 'Panneaux solaires sur toit de maison' }],
  },
}

const benefits = [
  { icon: TrendingDown, title: '-70% sur vos factures', desc: 'Réduisez drastiquement votre consommation d\'électricité du réseau.' },
  { icon: Leaf, title: 'Zéro émission de CO₂', desc: 'Produisez une énergie propre et participez à la transition écologique.' },
  { icon: Zap, title: '25 ans de durée de vie', desc: 'Un investissement durable avec une garantie fabricant de 25 ans.' },
  { icon: CheckCircle, title: 'Aides de l\'État', desc: 'Bénéficiez de MaPrimeRénov\', TVA à 5,5% et prime à l\'autoconsommation.' },
]

const steps = [
  { number: '01', title: 'Audit énergétique', desc: 'Évaluation de votre consommation et du potentiel solaire de votre toit.' },
  { number: '02', title: 'Conception du projet', desc: 'Dimensionnement optimal de votre installation selon vos besoins.' },
  { number: '03', title: 'Installation', desc: 'Pose des panneaux par nos techniciens certifiés en 1 à 2 jours.' },
  { number: '04', title: 'Mise en service', desc: 'Raccordement réseau, paramétrage et formation à l\'utilisation.' },
]

export default function SolairePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy text-white py-20 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/solaire-hero.webp"
            alt="Panneaux solaires sur toit de maison"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-navy/85" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-white/40 mb-8">
            <Link href="/" className="hover:text-white/70 transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-white/70">Solaire</span>
          </nav>

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
                <Sun className="text-amber-400" size={24} />
              </div>
              <span className="text-amber-400 text-sm font-semibold uppercase tracking-wider">Énergie Solaire</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Panneaux Solaires Photovoltaïques
            </h1>
            <p className="text-lg text-white/70 mb-8">
              Produisez votre propre électricité grâce au solaire et gagnez en indépendance énergétique. Nos installations certifiées RGE vous permettent de réduire vos factures jusqu'à 70%.
            </p>

            <div className="flex items-center gap-3 mb-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-sm text-white/70"><strong className="text-white">4.9/5</strong> — 1 200+ installations solaires</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/estimation-gratuite"
                className="inline-flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
              >
                Devis gratuit <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight">
              Pourquoi choisir le solaire ?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b) => {
              const Icon = b.icon
              return (
                <div key={b.title} className="rounded-2xl border border-neutral-100 p-6">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-amber-500" />
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

      {/* Quote CTA */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto bg-navy rounded-2xl p-10 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Prêt à passer au solaire ?</h2>
          <p className="text-white/60 mb-8">Obtenez votre estimation gratuite et sans engagement en 2 minutes.</p>
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
