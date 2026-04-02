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
    <div ref={ref} className="text-center">
      <div className="text-5xl sm:text-6xl font-extrabold text-[#e8622a] mb-2">
        {count}{suffix}
      </div>
      <div className="text-gray-300 text-sm sm:text-base font-medium">{label}</div>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="py-20 lg:py-28 bg-[#231f1c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5">
            Fuelling Your Success Through Digital Innovation
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            At WEQ Technologies, we specialize in driving innovative digital solutions across a
            variety of industries, ensuring our clients achieve exceptional results. With over 500
            projects completed and experience in more than 9 industries, we bring unparalleled
            expertise to every collaboration.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-16">
          <StatItem value={500} suffix="+" label="Projects Completed" />
          <StatItem value={100} suffix="+" label="Clients Across Globe" />
          <StatItem value={9} suffix="+" label="Industries Served" />
        </div>

        {/* Locations */}
        <div className="border-t border-[#3a3330] pt-12">
          <p className="text-center text-sm text-gray-500 uppercase tracking-widest mb-8">
            We are located
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {locations.map((loc) => (
              <div
                key={loc.city}
                className="flex items-center gap-2 bg-[#262220] border border-[#3a3330] rounded-xl px-5 py-3 hover:border-[#e8622a] transition-colors cursor-default"
              >
                <span className="w-2 h-2 rounded-full bg-[#e8622a] flex-shrink-0" />
                <span className="text-white font-semibold text-sm">{loc.city}</span>
                <span className="text-gray-500 text-sm">{loc.country}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
