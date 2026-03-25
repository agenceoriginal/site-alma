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
  'isolation-combles-guide': {
    title: 'Isolation des combles : le guide complet 2024',
    category: 'Isolation',
    date: '1 mars 2024',
    author: 'Équipe Alma Énergie',
    readTime: '8 min',
    content: [
      'L\'isolation des combles est l\'un des travaux les plus rentables en matière de rénovation énergétique. En effet, jusqu\'à 30 % des déperditions thermiques d\'un logement mal isolé passent par le toit. Bien isoler ses combles, c\'est donc réduire significativement sa facture de chauffage tout en améliorant son confort.',
      'Il existe deux grandes catégories de combles : les combles perdus (non aménageables, accessibles uniquement pour entretien) et les combles aménagés (habitables). Ces deux typologies n\'utilisent pas les mêmes techniques d\'isolation et n\'ont pas les mêmes coûts.',
      'Pour les combles perdus, la technique la plus répandue est le soufflage de laine minérale ou de ouate de cellulose. Rapide à poser, économique et très efficace, cette méthode permet d\'atteindre les recommandations réglementaires (R ≥ 7) en quelques heures d\'intervention. Le coût moyen se situe entre 20 et 50 €/m² fourniture et pose.',
      'Pour les combles aménagés, on isole entre les chevrons (isolation en rampants) avec des panneaux rigides, de la laine minérale semi-rigide ou un isolant biosourcé. Cette technique est plus technique et plus coûteuse (50 à 120 €/m²), mais elle permet de conserver l\'espace habitable tout en atteignant d\'excellentes performances thermiques.',
      'En termes d\'aides, l\'isolation des combles est éligible à MaPrimeRénov\', aux Certificats d\'Économies d\'Énergie (CEE) et à l\'éco-PTZ. Selon votre niveau de revenus, vous pouvez bénéficier d\'une prise en charge allant jusqu\'à 75 % du montant des travaux. Chez Alma Énergie, nous réalisons l\'ensemble des démarches administratives à votre place.',
      'Le délai de retour sur investissement d\'une isolation de combles est généralement inférieur à 5 ans, ce qui en fait l\'un des travaux les plus attractifs financièrement. Pensez à faire réaliser une étude thermique de votre logement avant de vous lancer : nos experts se déplacent gratuitement pour évaluer votre situation et vous proposer la solution la mieux adaptée.',
    ],
  },
  'pompe-a-chaleur-vs-chaudiere': {
    title: 'Pompe à chaleur vs chaudière : quel système choisir ?',
    category: 'Chauffage',
    date: '22 février 2024',
    author: 'Équipe Alma Énergie',
    readTime: '6 min',
    content: [
      'Face à la hausse du prix de l\'énergie et aux exigences environnementales croissantes, de nombreux propriétaires s\'interrogent sur le meilleur système de chauffage à adopter. Le choix entre la pompe à chaleur (PAC) et la chaudière à condensation est l\'un des plus fréquents. Voici les critères essentiels pour vous guider.',
      'La pompe à chaleur air/eau ou géothermique puise les calories présentes dans l\'air extérieur ou dans le sol pour chauffer votre logement. Son principal avantage : un coefficient de performance (COP) de 3 à 5, signifiant qu\'elle produit 3 à 5 kWh de chaleur pour chaque kWh électrique consommé. Elle peut également assurer la production d\'eau chaude sanitaire et, selon le modèle, la climatisation en été.',
      'La chaudière à condensation, qu\'elle soit au gaz ou au fioul, reste plus accessible à l\'achat (entre 2 500 et 5 000 € installée contre 8 000 à 15 000 € pour une PAC). Son fonctionnement est éprouvé et son installation ne nécessite pas de travaux importants si vous disposez déjà d\'un réseau de radiateurs. Son rendement peut dépasser 109 % grâce à la récupération de la chaleur des fumées.',
      'Le principal frein à la pompe à chaleur reste son coût d\'installation. Cependant, grâce aux aides de l\'État — MaPrimeRénov\' peut couvrir jusqu\'à 70 % du montant pour les ménages modestes — le reste à charge devient très compétitif. Sur 10 ans, une PAC revient souvent moins cher qu\'une chaudière gaz si l\'on tient compte des économies d\'énergie réalisées.',
      'Pour choisir entre les deux systèmes, il faut également tenir compte de votre logement. Une PAC air/eau est idéale pour les maisons individuelles avec radiateurs basse température ou plancher chauffant. Dans un appartement ou une maison ancienne avec de fortes déperditions, une chaudière à condensation peut être plus appropriée dans l\'immédiat, en attendant d\'améliorer l\'isolation.',
      'Notre conseil : faites réaliser un bilan énergétique complet avant tout investissement. Nos techniciens certifiés RGE analysent votre logement, vos habitudes de consommation et vos contraintes budgétaires pour vous recommander la solution la plus adaptée — sans chercher à vous vendre un produit plutôt qu\'un autre.',
    ],
  },
  'dpe-comprendre-ameliorer': {
    title: 'Comprendre et améliorer son DPE',
    category: 'DPE',
    date: '15 février 2024',
    author: 'Équipe Alma Énergie',
    readTime: '5 min',
    content: [
      'Le Diagnostic de Performance Énergétique (DPE) est un document qui évalue la consommation d\'énergie de votre logement et son impact en termes d\'émissions de gaz à effet de serre. Il attribue une note allant de A (très performant) à G (très énergivore). Réformé en 2021, le DPE est aujourd\'hui opposable : il a une valeur juridique et peut engager la responsabilité du propriétaire.',
      'Depuis 2023, les logements classés G sont interdits à la location, et les logements F seront soumis aux mêmes restrictions à partir de 2028. Cette réglementation, combinée à la hausse des prix de l\'énergie, fait du DPE un indicateur décisif pour la valeur de votre bien immobilier. Un logement classé A ou B se vend en moyenne 15 à 20 % plus cher qu\'un logement classé E ou F.',
      'La note DPE dépend de plusieurs critères : la qualité de l\'isolation (toiture, murs, planchers, fenêtres), le système de chauffage et de production d\'eau chaude, la ventilation et les éventuelles énergies renouvelables installées. Les ponts thermiques et les infiltrations d\'air jouent également un rôle important dans le calcul.',
      'Pour améliorer son DPE, les travaux les plus efficaces sont, par ordre de priorité : l\'isolation des combles (gain moyen d\'une lettre), le remplacement du système de chauffage (pompe à chaleur ou chaudière à condensation), l\'isolation des murs par l\'extérieur (ITE), et le remplacement des fenêtres single vitrage. Dans de nombreux cas, la combinaison de deux ou trois travaux permet de passer de la classe F à la classe C.',
      'Chez Alma Énergie, nous réalisons un audit énergétique complet de votre logement pour identifier les points faibles et vous proposer un plan de rénovation priorisé. Nous vous accompagnons de A à Z : de la constitution de votre dossier d\'aides jusqu\'à la réception des travaux, en passant par l\'obtention d\'un nouveau DPE à l\'issue du chantier.',
    ],
  },
  'autoconsommation-solaire': {
    title: 'L\'autoconsommation solaire : maximiser son autonomie',
    category: 'Solaire',
    date: '8 février 2024',
    author: 'Équipe Alma Énergie',
    readTime: '6 min',
    content: [
      'L\'autoconsommation solaire consiste à utiliser directement l\'électricité produite par vos panneaux photovoltaïques pour couvrir vos besoins domestiques. C\'est le modèle le plus rentable pour un particulier : chaque kilowattheure autoconsommé est un kilowattheure que vous n\'achetez pas au réseau.',
      'En France, une installation de 3 kWc bien orientée (sud, inclinaison de 30°) produit entre 3 000 et 4 500 kWh par an. Le taux d\'autoconsommation — c\'est-à-dire la part de cette production effectivement consommée sur place — varie entre 30 et 50 % sans batterie, et peut atteindre 70 à 80 % avec un système de stockage.',
      'Le surplus d\'électricité non consommé peut être injecté sur le réseau et revendu à EDF OA (Électricité De France Obligation d\'Achat). Le tarif de rachat est fixé par arrêté ministériel ; en 2024, il se situe autour de 0,13 €/kWh pour une installation de moins de 3 kWc, en hausse par rapport aux années précédentes. Cela représente un complément de revenu non négligeable.',
      'Pour optimiser votre taux d\'autoconsommation sans batterie, la stratégie la plus simple consiste à décaler les usages énergivores (lave-linge, lave-vaisselle, chauffe-eau) vers les heures de forte production solaire (11h-16h). Certains appareils sont équipés d\'une fonction de démarrage programmable, voire d\'un contacteur piloté par votre onduleur.',
      'L\'ajout d\'une batterie de stockage permet d\'aller encore plus loin dans l\'autonomie en conservant l\'énergie produite en journée pour la consommer le soir. Le coût d\'une batterie de 5 à 10 kWh se situe entre 4 000 et 8 000 €. Si l\'investissement reste élevé, la baisse continue des prix des batteries (−15 % par an en moyenne) et les aides disponibles dans certaines régions rendent cette option de plus en plus accessible.',
      'Chez Alma Énergie, nous dimensionnons votre installation solaire en fonction de votre profil de consommation réel, pour maximiser l\'autoconsommation dès la conception du projet. Nous pouvons également intégrer un système de monitoring en temps réel pour suivre votre production et votre consommation depuis votre smartphone.',
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
