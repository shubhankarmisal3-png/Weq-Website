'use client'

import React from 'react'
import Link from 'next/link'
import ParticlesBackground from './ParticlesBackground'
import { motion } from 'framer-motion'

type HeroProps = {
  title?: string;
  highlight?: string;
  description?: string;
}

export default function Hero({ title, highlight, description }: HeroProps) {
  const heroTitle = title || "End-to-End Product Engineering & ";
  const heroHighlight = highlight || "Digital Transformation Solutions";
  const heroDescription = description || "We turn innovative ideas into custom digital solutions. Our expertise in product engineering, mobile app development, and web solutions helps your business thrive in the digital era, transforming operations and enhancing customer experiences.";

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen bg-[#0a0a0a] flex items-center pt-24 overflow-hidden">
      {/* Dynamic Particle Layer */}
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
      </div>

      {/* Radial Gradient Glows */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-[#e8622a]/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[20%] left-[5%] w-[400px] h-[400px] bg-[#e8622a]/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left - Text Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="w-12 h-[2px] bg-[#e8622a]"></span>
                <span className="text-[#e8622a] text-xs sm:text-sm font-bold tracking-[0.4em] uppercase">
                  Leading Technical Partners
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-white mb-8">
                {heroTitle}
                <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8622a] to-[#ffb088]">
                  {heroHighlight}
                </span>
              </h1>
              <p className="text-gray-400 text-lg sm:text-xl leading-relaxed mb-12 max-w-2xl font-medium opacity-80">
                {heroDescription}
              </p>
              
              <div className="flex flex-wrap items-center gap-6">
                <Link
                  href="/contact-us"
                  className="group relative inline-flex items-center gap-3 bg-[#e8622a] hover:bg-[#f07040] text-white px-10 py-5 rounded-full text-base font-black transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl shadow-[#e8622a]/30"
                >
                  Let&apos;s Innovate Together.
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <span className="text-white text-xs">→</span>
                  </div>
                </Link>
                
                <Link
                  href="/case-studies"
                  className="group flex items-center gap-3 text-white/60 hover:text-white transition-colors py-4 px-6 font-bold"
                >
                  View Case Studies <span className="text-white/20 group-hover:text-[#e8622a]">/</span>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right - Awards & Badges Grid */}
          <div className="lg:col-span-12 xl:col-span-5 flex flex-col items-center xl:items-end">
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1, delay: 0.2 }}
               className="grid grid-cols-2 gap-4 sm:gap-6 items-center"
            >
              {[
                { label: "Most Reviewed", subLabel: "UX Design Co.", icon: "★", location: "Global" },
                { label: "Top Agency", subLabel: "Web Development", icon: "✦", location: "Clutch" },
                { label: "Trusted Partners", subLabel: "App Development", icon: "✓", location: "Mumbai" },
                { label: "Verified Elite", subLabel: "Shopify Partners", icon: "◈", location: "2024" }
              ].map((badge, idx) => (
                <div key={idx} className={`w-36 h-40 group relative bg-[#121110]/80 backdrop-blur-md border border-white/5 rounded-3xl flex flex-col items-center justify-center p-4 text-center hover:border-[#e8622a]/40 transition-all duration-500 ${idx % 2 === 1 ? 'translate-y-8' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-to-b from-[#e8622a]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
                  <div className="text-[9px] text-gray-500 uppercase tracking-widest mb-1">{badge.label}</div>
                  <div className="text-[10px] text-white/80 font-bold mb-3 leading-tight">{badge.subLabel}</div>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-3 transition-colors duration-500 ${idx % 2 === 0 ? 'bg-[#e8622a]/10 text-[#e8622a]' : 'bg-white/5 text-white/30 group-hover:bg-[#e8622a] group-hover:text-white'}`}>
                    <span className="text-xl leading-none">{badge.icon}</span>
                  </div>
                  <div className="font-black text-white/20 group-hover:text-white/40 text-xs transition-colors">Clutch</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Footer Accent */}
        <div className="mt-24 pt-16 border-t border-white/5 flex flex-col items-center">
           <p className="text-gray-500 text-xs font-black tracking-[0.5em] uppercase mb-12 opacity-50">
             Strategic Partnerships with Fortune 500 Leaders
           </p>
           {/* You could add a client logo slider here later */}
        </div>
      </div>
      
      {/* Elegant Bottom Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  )
}
