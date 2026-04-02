'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials as fallbackTestimonials } from '../lib/data'

type TestimonialType = {
  id: number | string;
  quote: string;
  name: string;
  role: string;
}

export default function Testimonials({ testimonials = fallbackTestimonials }: { testimonials?: TestimonialType[] }) {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  const t = testimonials[current]

  if (!t) return null;

  return (
    <section className="py-20 lg:py-28 bg-[#1e1b18]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            What Our Clients Say
          </h2>
        </div>

        <div className="relative bg-gradient-to-br from-white via-white to-[#fff2ec] shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-[2rem] p-10 sm:p-16 lg:p-20 overflow-hidden">
          
          {/* Decorative Quote Icon Background */}
          <div className="absolute -top-6 -left-2 text-[200px] text-[#e8622a] font-serif leading-none opacity-[0.03] select-none pointer-events-none">
            &quot;
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            {/* Quote text */}
            <p className="text-[#1c1a19] text-xl sm:text-2xl lg:text-3xl leading-relaxed text-center font-medium mb-12 min-h-[160px] flex items-center justify-center">
              &quot;{t.quote}&quot;
            </p>

            {/* Author */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-8 pt-8 border-t border-orange-100">
              
              <div className="flex items-center gap-4 text-left">
                <div className="w-14 h-14 rounded-full bg-[#fff1ec] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#e8622a] font-bold text-xl">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-lg text-[#1c1a19]">{t.name}</p>
                  <p className="text-gray-600 font-medium text-sm">{t.role}</p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-6">
                <div className="flex gap-2">
                  <button
                    onClick={prev}
                    className="w-12 h-12 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center hover:border-orange-200 hover:text-[#e8622a] transition-all"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={next}
                    className="w-12 h-12 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center hover:border-orange-200 hover:text-[#e8622a] transition-all"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                {/* Dots */}
                <div className="hidden sm:flex gap-2 ml-4">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        i === current ? 'bg-[#e8622a] w-8' : 'bg-gray-300 w-2.5 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to testimonial ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
