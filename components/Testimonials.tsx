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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            What Our Clients Say
          </h2>
        </div>

        <div className="relative bg-[#262220] border border-[#3a3330] rounded-3xl p-8 sm:p-12">
          {/* Quote icon */}
          <div className="text-6xl text-[#e8622a] font-serif leading-none mb-6 opacity-60">&quot;</div>

          {/* Quote text */}
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 min-h-[120px]">
            {t.quote}
          </p>

          {/* Author */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#e8622a]/20 flex items-center justify-center flex-shrink-0">
              <span className="text-[#e8622a] font-bold text-lg">
                {t.name.charAt(0)}
              </span>
            </div>
            <div>
              <p className="font-bold text-white">{t.name}</p>
              <p className="text-gray-500 text-sm">{t.role}</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-3 mt-8 justify-between">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === current ? 'bg-[#e8622a] w-8' : 'bg-[#3a3330]'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-[#3a3330] flex items-center justify-center hover:border-[#e8622a] hover:bg-[#e8622a]/10 transition-all"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-[#3a3330] flex items-center justify-center hover:border-[#e8622a] hover:bg-[#e8622a]/10 transition-all"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
