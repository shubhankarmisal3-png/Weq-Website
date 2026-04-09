'use client'
import React from 'react'
import { process } from '../lib/data'

export default function Process() {
  return (
    <section className="py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-24">
          <div className="flex items-center justify-center gap-3 mb-8">
             <span className="w-10 h-[2px] bg-[#e8622a]"></span>
             <span className="text-[#e8622a] text-xs font-black tracking-[0.4em] uppercase">The Roadmap</span>
             <span className="w-10 h-[2px] bg-[#e8622a]"></span>
          </div>
          <h2 className="text-white leading-[1.05] tracking-tight">
            Pioneering Your Path to <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8622a] to-[#ffb088]">Digital Excellence</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 relative">
          {/* Decorative Horizontal Connector (Desktop) */}
          <div className="hidden md:block absolute top-[4.5rem] left-[20%] right-[20%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {process.map((step, index) => {
            const stepColors = [
              { color: '#06b6d4', glow: 'bg-[#06b6d4]/20' }, // Cyan
              { color: '#8b5cf6', glow: 'bg-[#8b5cf6]/20' }, // Purple
              { color: '#f43f5e', glow: 'bg-[#f43f5e]/20' }, // Rose
            ];
            const theme = stepColors[index] || stepColors[0];

            return (
              <div
                key={step.step}
                className="relative group pt-10"
              >
                {/* Step indicator circle */}
                <div className="relative mb-12 flex justify-center">
                   <div 
                    className="w-20 h-20 rounded-3xl bg-[#121110] border border-white/5 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl group-hover:text-white"
                   >
                      <div 
                        className={`w-full h-full rounded-3xl flex items-center justify-center transition-all duration-500`}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = theme.color;
                          e.currentTarget.style.borderColor = theme.color;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
                          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                        }}
                      >
                         <span className="text-white font-black text-2xl transition-colors">{step.step}</span>
                      </div>
                   </div>
                   {/* Glowing shadow pulse */}
                   <div className={`absolute inset-0 ${theme.glow} blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10`} />
                </div>

                <div className="text-center">
                   <h3 
                    className="text-white mb-6 transition-colors"
                    style={{ color: 'white' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = theme.color}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
                   >
                    {step.title}
                   </h3>
                   <p className="text-gray-500 text-lg leading-relaxed max-w-sm mx-auto opacity-70 group-hover:opacity-100 transition-opacity">
                     {step.description}
                   </p>
                </div>

                {/* Arrow Connector */}
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute -right-8 top-[4.5rem] -translate-y-1/2 z-10">
                     <div className="text-white/10 text-3xl font-light">→</div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
