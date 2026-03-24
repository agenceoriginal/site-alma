import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'Panneaux Solaires',
    description: 'Produisez votre propre électricité et réduisez votre facture énergétique jusqu\'à 70% grâce à nos installations photovoltaïques de qualité.',
    href: '/solaire',
    image: '/images/service-solaire.webp',
    imageAlt: 'Panneaux solaires photovoltaïques sur toit de maison',
  },
  {
    title: 'Chauffage',
    description: 'Pompes à chaleur, chaudières à condensation et planchers chauffants. Des solutions modernes pour un confort optimal et des économies durables.',
    href: '/chauffage',
    image: '/images/service-chauffage.webp',
    imageAlt: 'Intérieur confortable grâce au chauffage performant',
  },
  {
    title: 'Isolation Thermique',
    description: 'Isolation des combles, murs et planchers. Stoppez les déperditions de chaleur et améliorez votre DPE jusqu\'à la classe A.',
    href: '/isolation',
    image: '/images/service-isolation.webp',
    imageAlt: 'Isolation thermique des combles avec laine soufflée',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-brand-500 text-sm font-semibold uppercase tracking-widest mb-3">Ce que nous faisons</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight">
            Nos Services
          </h2>
          <p className="text-lg text-navy/50 mt-3 max-w-2xl mx-auto">
            Des solutions complètes pour votre rénovation énergétique, de l&apos;audit à l&apos;installation.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group rounded-2xl border border-neutral-100 bg-white shadow-sm hover:shadow-md hover:border-brand-200 transition-all overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-navy mb-3">{service.title}</h3>
                <p className="text-sm text-navy/60 leading-relaxed flex-1">{service.description}</p>
                <div className="flex items-center gap-2 text-brand-500 font-semibold text-sm mt-6 group-hover:gap-3 transition-all">
                  En savoir plus <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
