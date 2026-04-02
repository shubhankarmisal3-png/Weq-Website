import { clientLogos } from '../lib/data'

export default function Clientele() {
  const doubled = [...clientLogos, ...clientLogos]

  return (
    <section className="py-20 lg:py-28 bg-[#231f1c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Clientele
          </h2>
          <p className="text-gray-400 text-base">
            Trusted by industry leaders across sectors
          </p>
        </div>
      </div>

      {/* Marquee row */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#231f1c] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#231f1c] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex gap-14 items-center py-4">
          {doubled.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex-shrink-0 flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-10 w-auto object-contain filter brightness-0 invert opacity-50 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
