import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo + tagline */}
          <div className="md:col-span-1">
            <Link href="/">
              <Image
                src="/images/logo.svg"
                alt="Alma Énergie"
                width={140}
                height={40}
                className="h-9 w-auto mb-4"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Votre spécialiste en rénovation énergétique. Panneaux solaires, chauffage et isolation thermique.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/solaire" className="text-sm text-white/70 hover:text-white transition-colors">
                  Panneaux Solaires
                </Link>
              </li>
              <li>
                <Link href="/chauffage" className="text-sm text-white/70 hover:text-white transition-colors">
                  Chauffage
                </Link>
              </li>
              <li>
                <Link href="/isolation" className="text-sm text-white/70 hover:text-white transition-colors">
                  Isolation Thermique
                </Link>
              </li>
            </ul>
          </div>

          {/* Liens utiles */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">Liens utiles</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/nos-ambassadeurs" className="text-sm text-white/70 hover:text-white transition-colors">
                  Nos Ambassadeurs
                </Link>
              </li>
              <li>
                <Link href="/conseils" className="text-sm text-white/70 hover:text-white transition-colors">
                  Conseils
                </Link>
              </li>
              <li>
                <Link href="/estimation-gratuite" className="text-sm text-white/70 hover:text-white transition-colors">
                  Estimation Gratuite
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="text-sm text-white/70 hover:text-white transition-colors">
                  Mentions Légales
                </Link>
              </li>
              <li>
                <Link href="/politique-confidentialite" className="text-sm text-white/70 hover:text-white transition-colors">
                  Politique de Confidentialité
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-white/70">
                <Phone size={14} className="text-brand-500 shrink-0" />
                <span>01 23 45 67 89</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/70">
                <Mail size={14} className="text-brand-500 shrink-0" />
                <span>contact@alma-energie.fr</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/70">
                <MapPin size={14} className="text-brand-500 shrink-0 mt-0.5" />
                <span>123 Avenue de l'Énergie<br />75001 Paris</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/40">© 2024 Alma Énergie. Tous droits réservés.</p>
          <div className="flex gap-4">
            <Link href="/mentions-legales" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
