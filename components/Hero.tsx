'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import OrbAnimation from './OrbAnimation'
import '../styles/stars.css'

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
      {/* Radial Gradient Glows - Multi-Color Atmosphere */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Primary Orange - Top Right */}
        <div className="absolute -top-[10%] -right-[10%] w-[600px] h-[600px] bg-[#e8622a]/15 rounded-full blur-[120px] animate-pulse" />
        
        {/* Secondary Indigo - Top Left */}
        <div className="absolute -top-[5%] -left-[10%] w-[500px] h-[500px] bg-[#4f46e5]/10 rounded-full blur-[120px] opacity-60" />
      </div>

      {/* <OrbAnimation /> */}
      
      {/* Stars Animation Background */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left - Text Content */}
          <div className="lg:col-span-7 scott">
            <div className="relative">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-12 h-[2px] bg-[#e8622a]"></span>
                <span className="text-[#e8622a] text-xs sm:text-sm font-bold tracking-[0.4em] uppercase">
                  Leading Technical Partners
                </span>
              </div>
              <h1 className="hero-banner-heading leading-[1.05] tracking-tight text-white mb-8">
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
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Link
                    href="/contact-us"
                    className="group relative inline-flex items-center gap-3 bg-[#e8622a] hover:bg-[#f07040] text-white px-10 py-5 rounded-full text-base font-black transition-all duration-300 shadow-2xl shadow-[#e8622a]/30"
                  >
                    Let&apos;s Innovate Together.
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                      <span className="text-white text-xs">→</span>
                    </div>
                  </Link>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Link
                    href="/case-studies"
                    className="group flex items-center gap-3 text-white/60 hover:text-white transition-colors py-4 px-6 font-bold"
                  >
                    View Case Studies <span className="text-white/20 group-hover:text-[#e8622a]">/</span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Right - Awards & Certificates Image */}
          <div className="lg:col-span-12 xl:col-span-5 flex flex-col items-center xl:items-end">
            <div className="relative w-full max-w-[480px] xl:max-w-full">
              <div className="relative flex flex-col items-end gap-6">
                <img 
                  src="/assets/certificated-new.webp" 
                  alt="WEQ Technologies Awards" 
                  className="relative w-[67%] h-auto grayscale drop-shadow-[0_20px_50px_rgba(232,98,42,0.15)]"
                />

                <img 
                  src="/assets/Verfifed_Agency_Hexagonal.webp" 
                  alt="DesignRush Verified Agency" 
                  className="relative w-[32%] h-auto grayscale drop-shadow-[0_20px_50px_rgba(232,98,42,0.15)] mr-[17.5%]"
                />
              </div>
            </div>
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
