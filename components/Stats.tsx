'use client'

import { useEffect, useRef, useState } from 'react'
import { locations } from '../lib/data'

function useCountUp(target: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])

  return count
}

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const count = useCountUp(value, 2000, started)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="text-center lg:text-left">
      <div className="text-6xl sm:text-7xl font-black text-white mb-4 leading-none tracking-tight">
        {count}{suffix}
      </div>
      <div className="text-[#e8622a] text-sm font-black uppercase tracking-[0.3em]">{label}</div>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#e8622a]/5 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-gradient-to-br from-[#121110] via-[#0f0e0d] to-[#0a0a0a] border border-white/5 rounded-[4rem] p-12 sm:p-20 lg:p-24 shadow-3xl relative overflow-hidden group">
          {/* Subtle Inner Glow */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent shadow-[0_1px_5px_rgba(255,255,255,0.05)]" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
               <div className="flex items-center gap-3 mb-10">
                  <span className="w-10 h-[2px] bg-[#e8622a]"></span>
                  <span className="text-[#e8622a] text-xs font-black tracking-[0.4em] uppercase">Impact & Numbers</span>
               </div>
               <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.05] mb-10 tracking-tight">
                Fuelling Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8622a] to-[#ffb088]">Digital Success</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-xl opacity-70">
                At WEQ Technologies, we specialize in driving innovative digital solutions across a
                variety of industries. With over 500+ projects delivered globally, we bring 
                unparalleled expertise to every transformation journey.
              </p>
            </div>

            {/* Right Stats */}
            <div className="lg:col-span-5 flex flex-col gap-12 lg:pl-12 py-10 relative">
               {/* Vertical Separator for wide screens */}
               <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent" />
               
               <div className="flex flex-col gap-14">
                  <StatItem value={500} suffix="+" label="Projects Completed" />
                  <StatItem value={200} suffix="+" label="Clients Across Globe" />
               </div>
            </div>
          </div>

          {/* Locations */}
          <div className="mt-24 pt-20 border-t border-white/5">
            <h3 className="text-sm font-black text-white/30 uppercase tracking-[0.5em] mb-12 text-center lg:text-left">
              Global Presence
            </h3>
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-10 lg:gap-16">
              {locations.map((loc, index) => (
                <div key={loc.city} className="flex flex-col items-center lg:items-start group/loc">
                  <span className="text-lg font-black text-white mb-2 group-hover/loc:text-[#e8622a] transition-colors">{loc.city}</span>
                  <div className="flex items-center gap-2">
                     <span className="w-1.5 h-1.5 rounded-full bg-[#e8622a] shadow-[0_0_8px_rgba(232,98,42,0.6)]"></span>
                     <span className="text-gray-500 text-xs font-black uppercase tracking-widest">{loc.country}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
