import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CtaBanner() {
  return (
    <section className="py-20 px-4 md:px-8 bg-brand-500">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
          Réalisez des économies d'énergie
        </h2>
        <p className="text-lg text-white/80 mb-10">
          Obtenez votre estimation gratuite en 2 minutes — sans engagement
        </p>
        <Link
          href="/estimation-gratuite"
          className="inline-flex items-center gap-2 bg-white hover:bg-brand-100 text-brand-500 font-semibold px-10 py-4 rounded-xl transition-colors text-base"
        >
          Je veux mon estimation
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  )
}
