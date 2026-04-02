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
    <div ref={ref} className="text-center text-[#1c1a19]">
      <div className="text-6xl sm:text-[80px] font-light text-[#e8622a] mb-2 leading-none tracking-tight">
        {count}{suffix}
      </div>
      <div className="text-gray-500 text-sm sm:text-base font-bold">{label}</div>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="py-20 lg:py-28 bg-[#231f1c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-white via-white to-[#fff2ec] rounded-[2rem] p-10 sm:p-16 lg:p-20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <h2 className="text-4xl sm:text-5xl lg:text-[50px] font-bold text-[#1c1a19] leading-[1.2] mb-8 tracking-tight">
                <span className="text-[#e8622a] block mb-2">Fuelling Your Success</span>
                Through Digital Innovation
              </h2>
              <p className="text-gray-500 text-base sm:text-lg max-w-xl leading-relaxed">
                At WEQ Technologies, we specialize in driving innovative digital solutions across a
                variety of industries, ensuring our clients achieve exceptional results. With over 500
                projects completed and experience in more than 9 industries, we bring unparalleled
                expertise to every collaboration.
              </p>
            </div>

            {/* Right Stats */}
            <div className="lg:col-span-5 flex flex-col gap-10 lg:pl-10">
              <StatItem value={500} suffix="+" label="Projects Completed" />
              <div className="w-full h-px bg-orange-100 max-w-[280px] mx-auto"></div>
              <StatItem value={200} suffix="+" label="Client Across Globe" />
            </div>
          </div>

          {/* Locations */}
          <div className="mt-20 pt-8 lg:pt-14">
            <h3 className="text-2xl font-bold text-[#1c1a19] mb-10 text-center lg:text-left">
              We are located
            </h3>
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-y-8 lg:-ml-8">
              {locations.map((loc, index) => (
                <div key={loc.city} className="flex items-center">
                  <div className="flex flex-col items-center px-4 sm:px-8 text-center min-w-[120px]">
                    <span className="text-xl font-medium text-[#e8622a] mb-1">{loc.city}</span>
                    <span className="text-gray-700 text-sm font-medium">{loc.country}</span>
                  </div>
                  {index < locations.length - 1 && (
                    <div className="w-px h-12 bg-orange-100/60 hidden sm:block"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
