import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const realisations = [
  {
    src: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80&auto=format&fit=crop',
    alt: 'Installation panneaux solaires photovoltaïques',
    label: 'Solaire',
  },
  {
    src: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80&auto=format&fit=crop',
    alt: 'Parc solaire résidentiel',
    label: 'Solaire',
  },
  {
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format&fit=crop',
    alt: 'Pompe à chaleur installation extérieure',
    label: 'Chauffage',
  },
  {
    src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80&auto=format&fit=crop',
    alt: 'Travaux isolation intérieure',
    label: 'Isolation',
  },
  {
    src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&q=80&auto=format&fit=crop',
    alt: 'Maison rénovée moderne',
    label: 'Rénovation',
  },
  {
    src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80&auto=format&fit=crop',
    alt: 'Technicien installation professionnelle',
    label: 'Installation',
  },
]

export default function RealisationsGrid() {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <p className="text-brand-500 text-sm font-semibold uppercase tracking-widest mb-3">Portfolio</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight">
              Nos Réalisations
            </h2>
            <p className="text-lg text-navy/50 mt-3 max-w-lg">
              Découvrez quelques-uns de nos projets récents à travers la France.
            </p>
          </div>
          <div className="flex items-center gap-2 text-navy/40 text-sm font-medium">
            <span className="font-bold">@almaenergie</span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {realisations.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden aspect-square"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/50 transition-all duration-300 flex items-end p-4">
                <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity bg-brand-500 px-3 py-1 rounded-full">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            href="/nos-ambassadeurs"
            className="inline-flex items-center gap-2 border-2 border-brand-500 text-brand-500 hover:bg-brand-500 hover:text-white font-semibold px-8 py-3 rounded-xl transition-colors"
          >
            Voir tous nos projets
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
