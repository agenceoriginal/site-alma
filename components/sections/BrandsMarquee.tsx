import Image from 'next/image'

const brands = [
  { name: 'Daikin', src: '/images/logo-daikin.webp' },
  { name: 'Mitsubishi Electric', src: '/images/logo-mitsubishi.svg' },
  { name: 'Toshiba', src: '/images/logo-toshiba.svg' },
  { name: 'LG', src: '/images/logo-lg.svg' },
  { name: 'Bosch', src: '/images/logo-bosch.svg' },
]

const allBrands = [...brands, ...brands]

export default function BrandsMarquee() {
  return (
    <section className="py-12 bg-white border-y border-neutral-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-navy/40">
          Nos marques partenaires
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div className="flex w-max animate-marquee gap-16 items-center">
          {allBrands.map((brand, index) => (
            <div key={`${brand.name}-${index}`} className="shrink-0 opacity-40 hover:opacity-70 transition-opacity w-32 h-10 flex items-center justify-center text-navy">
              <Image
                src={brand.src}
                alt={brand.name}
                width={128}
                height={40}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
