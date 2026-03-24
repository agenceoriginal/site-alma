import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions Légales — Alma Énergie',
  description: 'Mentions légales du site web Alma Énergie.',
}

export default function MentionsLegalesPage() {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-navy mb-10">Mentions Légales</h1>

        <div className="space-y-10 text-navy/70 text-sm leading-relaxed">
          <div>
            <h2 className="text-lg font-bold text-navy mb-4">1. Informations légales</h2>
            <p>Le présent site web est édité par la société <strong className="text-navy">Alma Énergie</strong>.</p>
            <ul className="mt-3 space-y-1.5">
              <li><strong className="text-navy">Raison sociale :</strong> Alma Énergie SAS</li>
              <li><strong className="text-navy">Siège social :</strong> 123 Avenue de l'Énergie, 75001 Paris</li>
              <li><strong className="text-navy">SIRET :</strong> 000 000 000 00000</li>
              <li><strong className="text-navy">Capital social :</strong> 10 000 €</li>
              <li><strong className="text-navy">RCS :</strong> Paris B 000 000 000</li>
              <li><strong className="text-navy">Téléphone :</strong> 01 23 45 67 89</li>
              <li><strong className="text-navy">Email :</strong> contact@alma-energie.fr</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-4">2. Directeur de la publication</h2>
            <p>Le directeur de la publication est Monsieur [Nom du dirigeant], en qualité de Président de la société Alma Énergie SAS.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-4">3. Hébergement</h2>
            <p>Ce site est hébergé par la société Netlify, Inc., 512 2nd Street, Suite 200, San Francisco, CA 94107, États-Unis.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-4">4. Propriété intellectuelle</h2>
            <p>L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, sons, logiciels…) est la propriété exclusive d'Alma Énergie, à l'exception des marques, logos ou contenus appartenant à d'autres sociétés partenaires ou auteurs.</p>
            <p className="mt-2">Toute reproduction, distribution, modification, adaptation, retransmission ou publication de ces différents éléments est strictement interdite sans l'accord exprès par écrit d'Alma Énergie.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-4">5. Données personnelles</h2>
            <p>Conformément aux dispositions de la loi n° 78-17 du 6 janvier 1978 modifiée, relative à l'informatique, aux fichiers et aux libertés, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.</p>
            <p className="mt-2">Pour exercer ce droit, contactez-nous à : <strong className="text-navy">dpo@alma-energie.fr</strong></p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-4">6. Cookies</h2>
            <p>Ce site peut utiliser des cookies pour améliorer l'expérience utilisateur. En continuant à naviguer sur ce site, vous acceptez l'utilisation de cookies conformément à notre politique de confidentialité.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-4">7. Limitation de responsabilité</h2>
            <p>Alma Énergie ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l'utilisateur lors de l'accès au site alma-energie.fr, et résultant soit de l'utilisation d'un matériel ne répondant pas aux spécifications techniques requises, soit de l'apparition d'un bug ou d'une incompatibilité.</p>
          </div>
        </div>

        <p className="mt-10 text-xs text-navy/30">Dernière mise à jour : mars 2024</p>
      </div>
    </section>
  )
}
