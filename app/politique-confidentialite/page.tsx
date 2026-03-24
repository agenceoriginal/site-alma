import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de Confidentialité — Alma Énergie',
  description: 'Politique de confidentialité et de protection des données personnelles d\'Alma Énergie.',
}

export default function PolitiqueConfidentialitePage() {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-navy mb-10">Politique de Confidentialité</h1>

        <div className="space-y-10 text-navy/70 text-sm leading-relaxed">
          <div>
            <h2 className="text-lg font-bold text-navy mb-4">1. Introduction</h2>
            <p>Alma Énergie s'engage à protéger la vie privée des utilisateurs de son site web. La présente politique de confidentialité explique comment nous collectons, utilisons et protégeons vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-4">2. Données collectées</h2>
            <p>Nous collectons les données suivantes :</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Données d'identification : nom, prénom, adresse email, numéro de téléphone</li>
              <li>Données de localisation : code postal, adresse postale</li>
              <li>Données techniques : adresse IP, données de navigation, cookies</li>
              <li>Données relatives à votre projet de rénovation énergétique</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-4">3. Finalités du traitement</h2>
            <p>Vos données sont collectées pour les finalités suivantes :</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Traitement de vos demandes de devis et estimations</li>
              <li>Gestion de la relation client</li>
              <li>Envoi d'informations commerciales (avec votre consentement)</li>
              <li>Amélioration de nos services</li>
              <li>Respect de nos obligations légales</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-4">4. Base légale du traitement</h2>
            <p>Le traitement de vos données est fondé sur :</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>L'exécution du contrat ou de mesures précontractuelles</li>
              <li>Votre consentement explicite pour les communications marketing</li>
              <li>Notre intérêt légitime pour l'amélioration de nos services</li>
              <li>Le respect de nos obligations légales</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-4">5. Conservation des données</h2>
            <p>Vos données sont conservées pour une durée maximale de :</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>3 ans après votre dernière interaction pour les données prospects</li>
              <li>10 ans pour les données liées aux contrats signés (obligation légale)</li>
              <li>13 mois pour les cookies de mesure d'audience</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-4">6. Partage des données</h2>
            <p>Vos données personnelles ne sont jamais vendues à des tiers. Elles peuvent être partagées avec :</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Nos prestataires techniques (hébergement, CRM) dans le cadre contractuel</li>
              <li>Les autorités compétentes en cas d'obligation légale</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-4">7. Vos droits</h2>
            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li><strong className="text-navy">Droit d'accès :</strong> obtenir une copie de vos données</li>
              <li><strong className="text-navy">Droit de rectification :</strong> corriger vos données inexactes</li>
              <li><strong className="text-navy">Droit à l'effacement :</strong> demander la suppression de vos données</li>
              <li><strong className="text-navy">Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
              <li><strong className="text-navy">Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
            </ul>
            <p className="mt-4">Pour exercer ces droits, contactez notre DPO à : <strong className="text-navy">dpo@alma-energie.fr</strong></p>
            <p className="mt-2">En cas de litige, vous pouvez déposer une réclamation auprès de la CNIL (www.cnil.fr).</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-4">8. Cookies</h2>
            <p>Notre site utilise des cookies pour améliorer votre navigation. Vous pouvez gérer vos préférences de cookies à tout moment depuis les paramètres de votre navigateur.</p>
            <p className="mt-2">Types de cookies utilisés :</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Cookies essentiels au fonctionnement du site</li>
              <li>Cookies d'analyse d'audience (avec votre consentement)</li>
              <li>Cookies de personnalisation (avec votre consentement)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-4">9. Sécurité</h2>
            <p>Alma Énergie met en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre la perte, l'accès non autorisé, la divulgation ou la modification. Notre site utilise le protocole HTTPS pour sécuriser les échanges.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy mb-4">10. Contact</h2>
            <p>Pour toute question relative à cette politique de confidentialité ou à l'exercice de vos droits :</p>
            <ul className="mt-3 space-y-1.5">
              <li><strong className="text-navy">Email :</strong> dpo@alma-energie.fr</li>
              <li><strong className="text-navy">Courrier :</strong> Alma Énergie — DPO, 123 Avenue de l'Énergie, 75001 Paris</li>
            </ul>
          </div>
        </div>

        <p className="mt-10 text-xs text-navy/30">Dernière mise à jour : mars 2024</p>
      </div>
    </section>
  )
}
