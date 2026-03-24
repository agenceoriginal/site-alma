'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    question: 'Quels sont les avantages des panneaux solaires ?',
    answer: 'Les panneaux solaires photovoltaïques vous permettent de produire votre propre électricité, de réduire vos factures jusqu\'à 70%, de valoriser votre bien immobilier et de contribuer à la transition énergétique. Avec une durée de vie de 25 à 30 ans, l\'investissement est rentabilisé en 8 à 12 ans en moyenne.',
  },
  {
    question: 'Quelles aides financières existent pour la rénovation énergétique ?',
    answer: 'De nombreuses aides sont disponibles : MaPrimeRénov\' (jusqu\'à 90% selon les revenus), l\'Eco-PTZ (prêt à taux zéro), la TVA réduite à 5,5%, les aides des collectivités locales, et les Certificats d\'Économies d\'Énergie (CEE). Nos conseillers vous aident à monter tous vos dossiers de subventions.',
  },
  {
    question: 'Combien de temps dure une installation ?',
    answer: 'La durée dépend du type d\'installation : une installation de panneaux solaires prend 1 à 2 jours, une pompe à chaleur 1 à 3 jours, et un chantier d\'isolation entre 1 et 5 jours selon la surface. Nous planifions les travaux pour minimiser la gêne dans votre quotidien.',
  },
  {
    question: 'Êtes-vous certifiés RGE ?',
    answer: 'Oui, tous nos artisans sont certifiés RGE (Reconnu Garant de l\'Environnement). Cette certification est indispensable pour que vous puissiez bénéficier des aides de l\'État comme MaPrimeRénov\' et l\'Eco-PTZ. Nous sommes également certifiés QualiPV et QualiPAC.',
  },
  {
    question: 'Quelle est la garantie sur vos installations ?',
    answer: 'Nous offrons une garantie décennale sur tous nos travaux, une garantie fabricant de 25 ans sur les panneaux solaires, et une garantie de 5 ans sur nos installations de chauffage et d\'isolation. Notre service après-vente est disponible 7j/7 en cas de problème.',
  },
  {
    question: 'Dans quelles régions intervenez-vous ?',
    answer: 'Alma Énergie intervient dans toute la France métropolitaine. Nous disposons de techniciens qualifiés dans chaque région pour garantir une intervention rapide. Les délais d\'intervention sont généralement de 2 à 4 semaines après la signature du devis.',
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 px-4 md:px-8 bg-clair">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-brand-500 text-sm font-semibold uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight">
            Questions fréquentes
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-brand-100 bg-white overflow-hidden shadow-sm"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-sm font-semibold text-navy pr-4">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={cn(
                    'text-brand-500 shrink-0 transition-transform',
                    openIndex === index && 'rotate-180'
                  )}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-sm text-navy/70 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
