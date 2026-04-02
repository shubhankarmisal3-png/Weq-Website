import { process } from '../lib/data'

export default function Process() {
  return (
    <section className="py-20 lg:py-28 bg-[#1e1b18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Pioneering Your Path to{' '}
            <span className="text-[#e8622a]">Digital Excellence</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-transparent via-[#e8622a]/40 to-transparent" />

          {process.map((step, index) => (
            <div
              key={step.step}
              className="relative bg-[#262220] border border-[#3a3330] rounded-2xl p-8 text-center hover:border-[#e8622a] transition-all duration-300 group"
            >
              {/* Step number */}
              <div className="w-16 h-16 rounded-full border-2 border-[#e8622a] flex items-center justify-center mx-auto mb-6 group-hover:bg-[#e8622a]/10 transition-colors">
                <span className="text-[#e8622a] font-extrabold text-lg">{step.step}</span>
              </div>

              <h3 className="text-2xl font-extrabold text-white mb-4">{step.title}</h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                {step.description}
              </p>

              {/* Arrow between steps */}
              {index < process.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                  <div className="w-8 h-8 rounded-full bg-[#1e1b18] border border-[#e8622a] flex items-center justify-center">
                    <span className="text-[#e8622a] text-sm">→</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
