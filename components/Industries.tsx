import { industries } from '../lib/data'

const industryIcons: Record<string, string> = {
  'Healthcare & Fitness': '🏥',
  'Manufacturing & Automobile Industry': '🏭',
  'E-commerce & Retail': '🛒',
  'Education and E-Learning': '🎓',
  'Banking & Finance': '🏦',
  'News & Publication': '📰',
  'Supply Chain & Logistics': '📦',
  'Food & Beverages': '🍽️',
}

export default function Industries() {
  return (
    <section className="py-24 lg:py-32 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-8">
               <span className="w-10 h-[2px] bg-[#e8622a]"></span>
               <span className="text-[#e8622a] text-xs font-black tracking-[0.4em] uppercase">Market Versatility</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight">
              Industries <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8622a] to-[#ffb088]">We Serve</span>
            </h2>
          </div>
          <p className="text-gray-400 text-lg max-w-md opacity-60">
            Delivering cross-industry tech excellence through deep domain specialized expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, i) => (
            <div
              key={industry}
              className="group relative bg-[#121110] border border-white/5 rounded-3xl p-8 transition-all duration-500 hover:border-[#e8622a]/30 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#e8622a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-[#e8622a] group-hover:text-white transition-all duration-500">
                  {industryIcons[industry] || '💼'}
                </div>
                <h3 className="text-lg font-black text-white group-hover:text-[#e8622a] transition-colors leading-tight">
                  {industry}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
