import Image from 'next/image'

const brands = [
  { name: 'Daikin', src: '/images/logo-daikin.svg', width: 120, height: 36 },
  { name: 'Mitsubishi Electric', src: '/images/logo-mitsubishi.svg', width: 180, height: 36 },
  { name: 'Toshiba', src: '/images/logo-toshiba.svg', width: 140, height: 36 },
  { name: 'LG', src: '/images/logo-lg.svg', width: 90, height: 36 },
  { name: 'Bosch', src: '/images/logo-bosch.svg', width: 110, height: 36 },
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
        <div className="flex animate-marquee gap-16 items-center whitespace-nowrap">
          {allBrands.map((brand, index) => (
            <div key={`${brand.name}-${index}`} className="shrink-0 opacity-30 hover:opacity-60 transition-opacity">
              <Image
                src={brand.src}
                alt={brand.name}
                width={brand.width}
                height={brand.height}
                className="h-9 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
