'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Star } from 'lucide-react'
import CtaBanner from '@/components/sections/CtaBanner'

const ambassadors = [
  { id: 1, prenom: 'Marie', nom: 'Dupont', city: 'Lyon', service: 'Solaire', stars: 5, quote: 'Installation impeccable ! Nos panneaux solaires fonctionnent parfaitement. La facture d\'électricité a chuté de 60%.', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80&auto=format&fit=crop&crop=face' },
  { id: 2, prenom: 'Jean-Pierre', nom: 'Martin', city: 'Bordeaux', service: 'Chauffage', stars: 5, quote: 'Équipe professionnelle et réactive. La pompe à chaleur est parfaitement dimensionnée. Excellent rapport qualité-prix.', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80&auto=format&fit=crop&crop=face' },
  { id: 3, prenom: 'Sophie', nom: 'Lambert', city: 'Toulouse', service: 'Isolation', stars: 5, quote: 'Notre maison est maintenant classée B au DPE. L\'isolation des combles a transformé notre confort thermique.', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&q=80&auto=format&fit=crop&crop=face' },
  { id: 4, prenom: 'Pierre', nom: 'Moreau', city: 'Nantes', service: 'Solaire', stars: 5, quote: 'Très satisfait de l\'installation solaire. Le retour sur investissement est au rendez-vous. Je recommande vivement !', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80&auto=format&fit=crop&crop=face' },
  { id: 5, prenom: 'Claire', nom: 'Bernard', city: 'Marseille', service: 'Chauffage', stars: 5, quote: 'Notre vieille chaudière est remplacée par une PAC ultra efficace. Le confort est incomparable et nos factures ont chuté.', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&q=80&auto=format&fit=crop&crop=face' },
  { id: 6, prenom: 'Luc', nom: 'Petit', city: 'Strasbourg', service: 'Isolation', stars: 4, quote: 'Les travaux d\'isolation ont été réalisés rapidement et proprement. Excellent service client du début à la fin.', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=120&q=80&auto=format&fit=crop&crop=face' },
  { id: 7, prenom: 'Isabelle', nom: 'Leroy', city: 'Lille', service: 'Solaire', stars: 5, quote: 'L\'équipe Alma Énergie est au top ! Nos panneaux produisent plus que prévu. Merci pour votre professionnalisme.', avatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=120&q=80&auto=format&fit=crop&crop=face' },
  { id: 8, prenom: 'François', nom: 'Roux', city: 'Grenoble', service: 'Isolation', stars: 5, quote: 'Passé de classe E à classe B grâce à l\'isolation complète. Les aides ont bien été gérées par l\'équipe. Parfait.', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80&auto=format&fit=crop&crop=face' },
  { id: 9, prenom: 'Nathalie', nom: 'Simon', city: 'Nice', service: 'Chauffage', stars: 5, quote: 'Installation d\'une pompe à chaleur réversible. Chaud en hiver, frais en été ! Un vrai plus pour notre maison provençale.', avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=120&q=80&auto=format&fit=crop&crop=face' },
]

const filters = ['Tous', 'Solaire', 'Chauffage', 'Isolation']

export default function AmbassadeursPage() {
  const [activeFilter, setActiveFilter] = useState('Tous')

  const filtered = activeFilter === 'Tous'
    ? ambassadors
    : ambassadors.filter((a) => a.service === activeFilter)

  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-brand-500 text-sm font-semibold uppercase tracking-widest mb-3">Avis clients</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Nos Ambassadeurs</h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Plus de 3 500 clients nous font confiance. Découvrez leurs témoignages et rejoignez la communauté Alma Énergie.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  activeFilter === filter
                    ? 'bg-brand-500 text-white'
                    : 'bg-clair text-navy hover:bg-brand-100'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((a) => (
              <div key={a.id} className="rounded-2xl border border-neutral-100 bg-white shadow-sm p-6">
                {/* Stars */}
                <div className="flex items-center gap-0.5 mb-4">
                  {Array.from({ length: a.stars }).map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm text-navy/70 leading-relaxed italic mb-6">
                  &ldquo;{a.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
                    <Image src={a.avatar} alt={`${a.prenom} ${a.nom}`} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy">{a.prenom} {a.nom}</p>
                    <p className="text-xs text-navy/50">{a.city} · {a.service}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
