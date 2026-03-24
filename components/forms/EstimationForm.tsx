'use client'

import { useState } from 'react'
import { Sun, Thermometer, Home, ChevronRight, CheckCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

type Service = 'Solaire' | 'Chauffage' | 'Isolation' | null
type LogementType = 'Maison' | 'Appartement' | null
type Surface = '<50m²' | '50-100m²' | '100-150m²' | '>150m²' | null

interface FormData {
  service: Service
  logement: LogementType
  surface: Surface
  prenom: string
  nom: string
  email: string
  telephone: string
  codePostal: string
}

const services = [
  { id: 'Solaire' as Service, label: 'Panneaux Solaires', icon: Sun, desc: 'Production d\'électricité' },
  { id: 'Chauffage' as Service, label: 'Chauffage', icon: Thermometer, desc: 'Pompe à chaleur, etc.' },
  { id: 'Isolation' as Service, label: 'Isolation', icon: Home, desc: 'Combles, murs, planchers' },
]

const surfaces = ['<50m²', '50-100m²', '100-150m²', '>150m²'] as const

export default function EstimationForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    service: null,
    logement: null,
    surface: null,
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    codePostal: '',
  })

  const totalSteps = 4

  const handleNext = () => setStep((s) => Math.min(s + 1, totalSteps))
  const handlePrev = () => setStep((s) => Math.max(s - 1, 1))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(4)
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 overflow-hidden">
      {/* Progress bar */}
      {step < 4 && (
        <div className="bg-clair px-8 pt-6 pb-4">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-semibold text-navy/50 uppercase tracking-wider">Étape {step}/{totalSteps - 1}</p>
            <p className="text-xs text-navy/50">{Math.round((step / (totalSteps - 1)) * 100)}%</p>
          </div>
          <div className="h-2 bg-brand-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-brand-500 rounded-full transition-all duration-500"
              style={{ width: `${(step / (totalSteps - 1)) * 100}%` }}
            />
          </div>
        </div>
      )}

      <div className="p-8">
        {/* Step 1: Service */}
        {step === 1 && (
          <div>
            <h2 className="text-xl font-bold text-navy mb-2">Quel service vous intéresse ?</h2>
            <p className="text-sm text-navy/50 mb-6">Sélectionnez le type de rénovation souhaité</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <button
                    key={service.id}
                    onClick={() => setFormData({ ...formData, service: service.id })}
                    className={cn(
                      'flex flex-col items-center gap-3 p-6 rounded-xl border-2 transition-all text-center',
                      formData.service === service.id
                        ? 'border-brand-500 bg-brand-50'
                        : 'border-neutral-100 hover:border-brand-200'
                    )}
                  >
                    <div className={cn(
                      'w-12 h-12 rounded-xl flex items-center justify-center',
                      formData.service === service.id ? 'bg-brand-500 text-white' : 'bg-brand-50 text-brand-500'
                    )}>
                      <Icon size={22} />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-navy">{service.label}</p>
                      <p className="text-xs text-navy/50">{service.desc}</p>
                    </div>
                  </button>
                )
              })}
            </div>

            <button
              onClick={handleNext}
              disabled={!formData.service}
              className="w-full inline-flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Continuer <ChevronRight size={18} />
            </button>
          </div>
        )}

        {/* Step 2: Logement */}
        {step === 2 && (
          <div>
            <h2 className="text-xl font-bold text-navy mb-2">Votre logement</h2>
            <p className="text-sm text-navy/50 mb-6">Décrivez votre type de logement</p>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-navy mb-3">Type de logement</label>
              <div className="grid grid-cols-2 gap-4">
                {(['Maison', 'Appartement'] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setFormData({ ...formData, logement: type })}
                    className={cn(
                      'p-4 rounded-xl border-2 font-semibold text-sm transition-all',
                      formData.logement === type
                        ? 'border-brand-500 bg-brand-50 text-brand-600'
                        : 'border-neutral-100 text-navy/60 hover:border-brand-200'
                    )}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-semibold text-navy mb-3">Surface habitable</label>
              <div className="grid grid-cols-2 gap-3">
                {surfaces.map((surface) => (
                  <button
                    key={surface}
                    onClick={() => setFormData({ ...formData, surface })}
                    className={cn(
                      'p-3 rounded-xl border-2 font-semibold text-sm transition-all',
                      formData.surface === surface
                        ? 'border-brand-500 bg-brand-50 text-brand-600'
                        : 'border-neutral-100 text-navy/60 hover:border-brand-200'
                    )}
                  >
                    {surface}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handlePrev}
                className="flex-1 border-2 border-neutral-100 text-navy font-semibold px-6 py-3 rounded-xl hover:border-brand-200 transition-colors text-sm"
              >
                Retour
              </button>
              <button
                onClick={handleNext}
                disabled={!formData.logement || !formData.surface}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
              >
                Continuer <ChevronRight size={18} />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Contact */}
        {step === 3 && (
          <form onSubmit={handleSubmit}>
            <h2 className="text-xl font-bold text-navy mb-2">Vos coordonnées</h2>
            <p className="text-sm text-navy/50 mb-6">Pour recevoir votre estimation personnalisée</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs font-semibold text-navy mb-1.5">Prénom *</label>
                <input
                  type="text"
                  required
                  value={formData.prenom}
                  onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                  className="w-full border border-neutral-200 rounded-xl px-4 py-3 text-sm text-navy focus:outline-none focus:border-brand-500 transition-colors"
                  placeholder="Jean"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-navy mb-1.5">Nom *</label>
                <input
                  type="text"
                  required
                  value={formData.nom}
                  onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                  className="w-full border border-neutral-200 rounded-xl px-4 py-3 text-sm text-navy focus:outline-none focus:border-brand-500 transition-colors"
                  placeholder="Dupont"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-xs font-semibold text-navy mb-1.5">Email *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full border border-neutral-200 rounded-xl px-4 py-3 text-sm text-navy focus:outline-none focus:border-brand-500 transition-colors"
                placeholder="jean.dupont@email.com"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div>
                <label className="block text-xs font-semibold text-navy mb-1.5">Téléphone *</label>
                <input
                  type="tel"
                  required
                  value={formData.telephone}
                  onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                  className="w-full border border-neutral-200 rounded-xl px-4 py-3 text-sm text-navy focus:outline-none focus:border-brand-500 transition-colors"
                  placeholder="06 12 34 56 78"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-navy mb-1.5">Code postal *</label>
                <input
                  type="text"
                  required
                  value={formData.codePostal}
                  onChange={(e) => setFormData({ ...formData, codePostal: e.target.value })}
                  className="w-full border border-neutral-200 rounded-xl px-4 py-3 text-sm text-navy focus:outline-none focus:border-brand-500 transition-colors"
                  placeholder="75001"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={handlePrev}
                className="flex-1 border-2 border-neutral-100 text-navy font-semibold px-6 py-3 rounded-xl hover:border-brand-200 transition-colors text-sm"
              >
                Retour
              </button>
              <button
                type="submit"
                className="flex-1 bg-brand-500 hover:bg-brand-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
              >
                Envoyer ma demande
              </button>
            </div>
          </form>
        )}

        {/* Step 4: Confirmation */}
        {step === 4 && (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={32} className="text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-navy mb-3">Demande envoyée !</h2>
            <p className="text-navy/60 leading-relaxed max-w-sm mx-auto">
              Votre demande a bien été envoyée. Nous vous recontacterons sous <strong className="text-navy">24h</strong> avec votre estimation personnalisée gratuite.
            </p>
            <div className="mt-8 bg-clair rounded-xl p-4 text-sm text-navy/60">
              <p>Récapitulatif :</p>
              <p className="font-semibold text-navy mt-1">
                {formData.service} · {formData.logement} · {formData.surface}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
