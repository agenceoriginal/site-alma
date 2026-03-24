import { Star } from 'lucide-react'

const stats = [
  { value: '3 500+', label: 'Projets réalisés' },
  { value: '100%', label: 'Clients satisfaits' },
  { value: '5 ans', label: 'De garantie' },
]

const testimonials = [
  {
    name: 'Marie Dupont',
    city: 'Lyon',
    service: 'Solaire',
    quote: 'Installation impeccable ! Nos panneaux solaires fonctionnent parfaitement depuis 2 ans. La facture d\'électricité a chuté de 60%. Je recommande vivement Alma Énergie.',
    initials: 'MD',
    color: 'bg-brand-500',
  },
  {
    name: 'Jean-Pierre Martin',
    city: 'Bordeaux',
    service: 'Chauffage',
    quote: 'Équipe professionnelle et réactive. La pompe à chaleur est parfaitement dimensionnée pour notre maison. Excellent rapport qualité-prix, bravo !',
    initials: 'JM',
    color: 'bg-red-500',
  },
  {
    name: 'Sophie Lambert',
    city: 'Toulouse',
    service: 'Isolation',
    quote: 'Notre maison est maintenant classée B au DPE. L\'isolation des combles a transformé notre confort thermique. Merci à toute l\'équipe Alma Énergie.',
    initials: 'SL',
    color: 'bg-green-500',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-brand-500 text-sm font-semibold uppercase tracking-widest mb-3">Avis clients</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight">
            Ils nous font confiance
          </h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mb-16 bg-navy rounded-2xl p-8 md:p-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-sm text-white/60">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-neutral-100 bg-white shadow-sm p-6">
              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-navy/70 leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center shrink-0`}>
                  <span className="text-white text-sm font-bold">{t.initials}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy">{t.name}</p>
                  <p className="text-xs text-navy/50">{t.city} · {t.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
