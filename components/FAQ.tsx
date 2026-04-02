'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { faqs as fallbackFaqs } from '../lib/data'

type FAQType = {
  id: number | string;
  question: string;
  answer: string;
}

export default function FAQ({ faqs = fallbackFaqs }: { faqs?: FAQType[] }) {
  const [openId, setOpenId] = useState<number | string | null>(faqs[0]?.id || 1)
  const [showAll, setShowAll] = useState(false)

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 5)

  return (
    <section className="py-20 lg:py-28 bg-[#231f1c]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            FAQs{' '}
            <span className="text-gray-500 font-normal text-2xl sm:text-3xl">
              (Frequently Asked Questions)
            </span>
          </h2>
        </div>

        <div className="space-y-3">
          {visibleFaqs.map((faq, index) => (
            <div
              key={faq.id}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                openId === faq.id
                  ? 'border-[#e8622a] bg-[#e8622a]/5'
                  : 'border-[#3a3330] bg-[#262220]'
              }`}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              >
                <div className="flex items-center gap-4">
                  <span className="text-[#e8622a] font-bold text-sm flex-shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-white font-semibold text-sm sm:text-base">
                    {faq.question}
                  </span>
                </div>
                <div className="flex-shrink-0 w-7 h-7 rounded-full border border-[#3a3330] flex items-center justify-center">
                  {openId === faq.id ? (
                    <Minus className="w-4 h-4 text-[#e8622a]" />
                  ) : (
                    <Plus className="w-4 h-4 text-gray-400" />
                  )}
                </div>
              </button>

              {openId === faq.id && (
                <div className="px-6 pb-5">
                  <div className="pl-8 border-l-2 border-[#e8622a]/40">
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {!showAll && faqs.length > 5 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="text-[#e8622a] border border-[#e8622a]/40 hover:bg-[#e8622a]/10 px-8 py-3 rounded-full text-sm font-semibold transition-all"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
