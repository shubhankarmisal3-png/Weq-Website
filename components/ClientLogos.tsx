import { clientLogos } from '../lib/data'

export default function ClientLogos() {
  const doubled = [...clientLogos, ...clientLogos]

  return (
    <section className="py-12 bg-[#1e1b18] border-y border-[#3a3330] overflow-hidden">
      <div className="relative">
        <div className="animate-marquee flex gap-12 items-center">
          {doubled.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex-shrink-0 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-10 w-auto object-contain filter brightness-0 invert"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
