import type { Metadata } from 'next'
import Link from 'next/link'
import Badge from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'Conseils & Actualités — Alma Énergie',
  description: 'Retrouvez nos conseils sur la rénovation énergétique : solaire, chauffage, isolation, aides de l\'État et plus encore.',
}

const articles = [
  {
    slug: 'aides-maprimerenov-2024',
    category: 'Aides & Financement',
    title: 'MaPrimeRénov\' 2024 : tout ce que vous devez savoir',
    excerpt: 'Découvrez les montants des aides disponibles cette année, les travaux éligibles et comment constituer votre dossier pour obtenir vos subventions.',
    date: '15 mars 2024',
    readTime: '5 min',
    color: 'bg-blue-100',
  },
  {
    slug: 'panneaux-solaires-rentabilite',
    category: 'Solaire',
    title: 'Panneaux solaires : calculer votre retour sur investissement',
    excerpt: 'Comment estimer la rentabilité de vos panneaux solaires ? Découvrez notre méthode de calcul et les facteurs clés à prendre en compte.',
    date: '8 mars 2024',
    readTime: '7 min',
    color: 'bg-amber-100',
  },
  {
    slug: 'isolation-combles-guide',
    category: 'Isolation',
    title: 'Isolation des combles : le guide complet 2024',
    excerpt: 'Combles perdus ou aménagés, laine de verre ou soufflage — tout ce que vous devez savoir pour isoler vos combles efficacement.',
    date: '1 mars 2024',
    readTime: '8 min',
    color: 'bg-green-100',
  },
  {
    slug: 'pompe-a-chaleur-vs-chaudiere',
    category: 'Chauffage',
    title: 'Pompe à chaleur vs chaudière : quel système choisir ?',
    excerpt: 'Comparatif détaillé entre la pompe à chaleur et la chaudière à condensation : coûts, efficacité, aides et impact environnemental.',
    date: '22 février 2024',
    readTime: '6 min',
    color: 'bg-red-100',
  },
  {
    slug: 'dpe-comprendre-ameliorer',
    category: 'DPE',
    title: 'Comprendre et améliorer son DPE',
    excerpt: 'Le Diagnostic de Performance Énergétique influence la valeur de votre bien. Découvrez comment passer de la classe F à la classe A.',
    date: '15 février 2024',
    readTime: '5 min',
    color: 'bg-purple-100',
  },
  {
    slug: 'autoconsommation-solaire',
    category: 'Solaire',
    title: 'L\'autoconsommation solaire : maximiser son autonomie',
    excerpt: 'Avec ou sans stockage batterie, comment optimiser l\'utilisation de votre production solaire et réduire votre dépendance au réseau.',
    date: '8 février 2024',
    readTime: '6 min',
    color: 'bg-amber-100',
  },
]

export default function ConseilsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-brand-500 text-sm font-semibold uppercase tracking-widest mb-3">Notre blog</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Conseils & Actualités</h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Experts en rénovation énergétique, nos conseillers partagent leurs connaissances pour vous aider à faire les bons choix.
          </p>
        </div>
      </section>

      {/* Articles grid */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/conseils/${article.slug}`}
                className="group rounded-2xl border border-neutral-100 bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                {/* Image placeholder */}
                <div className={`h-48 ${article.color} flex items-center justify-center`}>
                  <span className="text-4xl opacity-40">📄</span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="default">{article.category}</Badge>
                    <span className="text-xs text-navy/40">{article.readTime} de lecture</span>
                  </div>

                  <h2 className="font-bold text-navy mb-2 group-hover:text-brand-500 transition-colors leading-snug">
                    {article.title}
                  </h2>
                  <p className="text-sm text-navy/60 leading-relaxed mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>

                  <p className="text-xs text-navy/40">{article.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
