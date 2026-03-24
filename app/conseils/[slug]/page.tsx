import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Clock, User } from 'lucide-react'
import CtaBanner from '@/components/sections/CtaBanner'

export const metadata: Metadata = {
  title: 'Article — Alma Énergie',
  description: 'Conseils et actualités sur la rénovation énergétique.',
}

const articles: Record<string, {
  title: string
  category: string
  date: string
  author: string
  readTime: string
  content: string[]
}> = {
  'aides-maprimerenov-2024': {
    title: 'MaPrimeRénov\' 2024 : tout ce que vous devez savoir',
    category: 'Aides & Financement',
    date: '15 mars 2024',
    author: 'Équipe Alma Énergie',
    readTime: '5 min',
    content: [
      'MaPrimeRénov\' est le dispositif principal d\'aide à la rénovation énergétique en France. En 2024, le gouvernement a maintenu et renforcé cette aide pour encourager les ménages à améliorer les performances énergétiques de leurs logements.',
      'Le montant de l\'aide varie selon vos revenus (de "très modestes" à "supérieurs") et le type de travaux réalisés. Pour les ménages aux revenus très modestes, la prise en charge peut atteindre 90% du coût des travaux.',
      'Les travaux éligibles incluent : l\'isolation thermique (combles, murs, planchers), l\'installation d\'une pompe à chaleur ou chaudière biomasse, la ventilation mécanique contrôlée (VMC), et les panneaux solaires thermiques.',
      'Pour bénéficier de MaPrimeRénov\', vous devez faire appel à un artisan certifié RGE (Reconnu Garant de l\'Environnement). Chez Alma Énergie, tous nos techniciens possèdent cette certification.',
      'La démarche est entièrement dématérialisée sur le site maprimerenov.gouv.fr. Notre équipe peut vous accompagner dans la constitution de votre dossier pour maximiser vos droits aux aides.',
    ],
  },
  'panneaux-solaires-rentabilite': {
    title: 'Panneaux solaires : calculer votre retour sur investissement',
    category: 'Solaire',
    date: '8 mars 2024',
    author: 'Équipe Alma Énergie',
    readTime: '7 min',
    content: [
      'Investir dans des panneaux solaires est une décision importante. Avant de vous lancer, il est essentiel de calculer le retour sur investissement (ROI) de votre installation.',
      'Pour estimer la rentabilité, il faut prendre en compte plusieurs facteurs : la puissance installée (en kWc), l\'ensoleillement de votre région, le prix de l\'électricité actuel et son évolution, et le montant de votre investissement initial après déduction des aides.',
      'En France, une installation de 3 kWc produit en moyenne entre 3 000 et 4 500 kWh par an selon la région. Avec un prix moyen de l\'électricité à 0,25€/kWh, cela représente une économie de 750 à 1 125€ par an.',
      'En autoconsommation avec revente du surplus, le retour sur investissement est généralement atteint en 8 à 12 ans pour une installation bien dimensionnée. La durée de vie des panneaux étant de 25 à 30 ans, vous bénéficierez de 15 à 20 ans de production quasiment gratuite.',
      'N\'oubliez pas de déduire les aides disponibles : prime à l\'autoconsommation, MaPrimeRénov\', TVA à 5,5% — ces dispositifs peuvent réduire significativement votre investissement de départ.',
    ],
  },
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = articles[slug] || {
    title: 'Article en cours de rédaction',
    category: 'Conseils',
    date: '2024',
    author: 'Équipe Alma Énergie',
    readTime: '5 min',
    content: ['Cet article est en cours de rédaction. Revenez bientôt pour découvrir notre contenu.'],
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <Link href="/conseils" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm mb-8">
            <ArrowLeft size={16} />
            Retour aux conseils
          </Link>

          <div className="mb-4">
            <span className="text-brand-500 text-xs font-semibold uppercase tracking-wider">{article.category}</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">{article.title}</h1>

          <div className="flex items-center gap-6 text-sm text-white/50">
            <div className="flex items-center gap-1.5">
              <User size={14} />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock size={14} />
              <span>{article.readTime} de lecture</span>
            </div>
            <span>{article.date}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <article className="prose prose-lg max-w-none">
                {article.content.map((paragraph, index) => (
                  <p key={index} className="text-navy/70 leading-relaxed mb-6 text-base">
                    {paragraph}
                  </p>
                ))}
              </article>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-navy rounded-2xl p-6 text-white sticky top-24">
                <h3 className="font-bold mb-3">Vous aussi, passez à l'action</h3>
                <p className="text-sm text-white/60 mb-6">
                  Obtenez votre estimation gratuite et personnalisée sous 24h.
                </p>
                <Link
                  href="/estimation-gratuite"
                  className="block text-center bg-brand-500 hover:bg-brand-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
                >
                  Estimation gratuite
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
