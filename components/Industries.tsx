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
    <section className="py-20 lg:py-28 bg-[#231f1c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Industries We Serve
          </h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            Delivering technology solutions across diverse sectors with deep domain expertise
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((industry, i) => (
            <div
              key={industry}
              className="group bg-[#262220] border border-[#3a3330] rounded-2xl p-5 text-center hover:border-[#e8622a] hover:bg-[#e8622a]/5 transition-all duration-300 cursor-default"
            >
              <div className="text-3xl mb-3">{industryIcons[industry] || '💼'}</div>
              <h3 className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors leading-snug">
                {industry}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
