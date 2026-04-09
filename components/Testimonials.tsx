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
    <section className="py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#e8622a]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
           <div className="flex items-center justify-center gap-3 mb-8">
              <span className="w-10 h-[2px] bg-[#e8622a]"></span>
              <span className="text-[#e8622a] text-xs font-black tracking-[0.4em] uppercase">Voices of Trust</span>
              <span className="w-10 h-[2px] bg-[#e8622a]"></span>
           </div>
          <h2 className="text-white leading-[1.05] tracking-tight">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8622a] to-[#ffb088]">Clients Say</span>
          </h2>
        </div>

        <div className="relative bg-gradient-to-br from-[#121110] to-[#0a0a0a] border border-white/5 shadow-2xl rounded-[4rem] p-10 sm:p-16 lg:p-24 overflow-hidden group">
          
          {/* Decorative Quote Icon Background */}
          <div className="absolute top-10 left-10 text-[260px] text-[#e8622a] font-serif leading-none opacity-[0.05] select-none pointer-events-none group-hover:opacity-[0.08] transition-opacity duration-700">
            &quot;
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            {/* Quote text */}
            <p className="text-white leading-relaxed text-center font-medium mb-16 min-h-[160px] flex items-center justify-center italic !text-[20px]">
              &quot;{t.quote}&quot;
            </p>

            {/* Author & Controls */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 pt-12 border-t border-white/5">
              
              <div className="flex items-center gap-6 text-left">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#e8622a] to-[#ffb088] flex items-center justify-center flex-shrink-0 shadow-xl shadow-[#e8622a]/20">
                  <span className="text-white font-black text-2xl">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-black text-xl text-white tracking-tight mb-1">{t.name}</p>
                  <p className="text-[#e8622a] font-black text-[10px] uppercase tracking-[0.3em] opacity-80">{t.role}</p>
                </div>
              </div>

              {/* Navigation & Pagination */}
              <div className="flex flex-col items-center md:items-end gap-8">
                 <div className="flex items-center gap-4">
                    <button
                      onClick={prev}
                      className="w-14 h-14 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-white hover:bg-[#e8622a] hover:border-[#e8622a] transition-all duration-300"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={next}
                      className="w-14 h-14 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-white hover:bg-[#e8622a] hover:border-[#e8622a] transition-all duration-300"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                 </div>

                 {/* Dots */}
                  <div className="flex gap-2.5">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`h-1.5 rounded-full transition-all duration-500 ${
                          i === current ? 'bg-[#e8622a] w-10' : 'bg-white/10 w-3 hover:bg-white/30'
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
