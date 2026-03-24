import { Clock, MapPin, Tag, Shield } from 'lucide-react'

const points = [
  { icon: Clock, label: 'Devis sous 24h', desc: 'Réponse rapide garantie' },
  { icon: MapPin, label: 'Présence nationale', desc: 'Intervention partout en France' },
  { icon: Tag, label: 'Meilleurs prix', desc: 'Tarifs compétitifs garantis' },
  { icon: Shield, label: 'Certifiés RGE', desc: 'Qualification reconnue' },
]

export default function KeyPointsBar() {
  return (
    <section className="bg-clair border-b border-brand-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {points.map((point) => {
            const Icon = point.icon
            return (
              <div key={point.label} className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-brand-500/10 shrink-0">
                  <Icon size={20} className="text-brand-500" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy">{point.label}</p>
                  <p className="text-xs text-navy/60">{point.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
