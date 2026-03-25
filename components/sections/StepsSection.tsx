import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Configurez votre projet',
    description: 'Remplissez notre formulaire en ligne en 2 minutes. Décrivez votre logement et vos besoins énergétiques.',
  },
  {
    number: '02',
    title: 'Réponse sous 24h',
    description: 'Notre équipe d\'experts analyse votre demande et vous recontacte rapidement avec une estimation personnalisée.',
  },
  {
    number: '03',
    title: 'Visite technique',
    description: 'Un technicien certifié se déplace chez vous pour évaluer votre installation et valider le devis définitif.',
  },
  {
    number: '04',
    title: 'Installation professionnelle',
    description: 'Nos artisans RGE réalisent l\'installation dans les règles de l\'art, avec suivi et garantie inclus.',
  },
]

export default function StepsSection() {
  return (
    <section className="py-20 px-4 md:px-8 bg-clair">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Steps */}
          <div>
            <p className="text-brand-500 text-sm font-semibold uppercase tracking-widest mb-3">Simple et rapide</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight mb-10">
              Comment ça marche ?
            </h2>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={step.number} className="flex gap-5 items-start">
                  {/* Number + line */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-xl bg-brand-500 text-white flex items-center justify-center text-base font-bold shrink-0">
                      {step.number}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-0.5 h-8 bg-brand-200 mt-2" />
                    )}
                  </div>
                  {/* Text */}
                  <div className="pt-1">
                    <h3 className="text-base font-bold text-navy mb-1">{step.title}</h3>
                    <p className="text-sm text-navy/60 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/estimation-gratuite"
              className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold px-8 py-4 rounded-xl transition-colors mt-10"
            >
              Démarrer mon projet
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Right: Photo */}
          <div className="relative rounded-3xl overflow-hidden h-[500px] shadow-2xl">
            <Image
              src="/images/consultation.webp"
              alt="Couple consultant un expert en rénovation énergétique"
              fill
              className="object-cover"
            />
            {/* Floating card */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-500 flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-sm">24h</span>
                </div>
                <div>
                  <p className="font-bold text-navy text-sm">Réponse garantie sous 24h</p>
                  <p className="text-navy/50 text-xs mt-0.5">Nos experts analysent votre demande rapidement</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
