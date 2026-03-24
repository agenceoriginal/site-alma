const brands = [
  'Daikin', 'Mitsubishi', 'Samsung', 'Atlantic', 'Panasonic',
  'LG', 'Bosch', 'Viessmann', 'Velux', 'Knauf',
  'Daikin', 'Mitsubishi', 'Samsung', 'Atlantic', 'Panasonic',
  'LG', 'Bosch', 'Viessmann', 'Velux', 'Knauf',
]

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
          {brands.map((brand, index) => (
            <span
              key={`${brand}-${index}`}
              className="text-lg font-bold text-navy/30 hover:text-navy/60 transition-colors shrink-0 tracking-wide"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
