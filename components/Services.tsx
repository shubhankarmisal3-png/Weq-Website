'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Settings, Rocket, Globe, Palette } from 'lucide-react'
import { services as fallbackServices } from '../lib/data'
import AnimatedSection from './AnimatedSection'

const serviceIconsMap: Record<string, any> = {
  'digital-transformation': Settings,
  'product-engineering': Rocket,
  'website-development': Globe,
  'ux-design': Palette,
}

export default function Services({ apiServices }: { apiServices?: any[] }) {
  // Map API services to standard format or use fallback
  const servicesToRender = apiServices && apiServices.length > 0
    ? apiServices.map((service: any) => ({
        id: service.slug,
        title: service.title?.rendered,
        description: service.acf?.description || service.content?.rendered?.replace(/(<([^>]+)>)/gi, "").substring(0, 150) || '',
        items: service.acf?.items || [],
        icon: serviceIconsMap[service.slug] || Globe,
      }))
    : fallbackServices.map(s => ({...s, icon: serviceIconsMap[s.id] || Globe}));

  return (
    <section className="py-24 lg:py-40 bg-[#231f1c] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20 px-4">
          <div className="max-w-3xl">
            <AnimatedSection x={-30}>
              <span className="inline-block text-[#e8622a] text-sm font-bold tracking-[0.2em] uppercase mb-6">
                Our Expertise
              </span>
               <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                Driving Growth Through <br/>
                <span className="text-[#e8622a]">Innovation</span>
              </h2>
            </AnimatedSection>
          </div>
          <div className="flex-shrink-0">
             <AnimatedSection x={30}>
               <Link
                href="/services"
                className="group inline-flex items-center gap-3 bg-white/5 hover:bg-[#e8622a] text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 active:scale-95"
              >
                All Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </AnimatedSection>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {servicesToRender.map((service: any, index: number) => {
            const Icon = service.icon || Globe;
            return (
              <AnimatedSection key={service.id} delay={index * 0.15}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="group relative bg-[#1e1b18] border border-[#3a3330] rounded-[2.5rem] p-10 overflow-hidden hover:border-[#e8622a]/30 transition-all duration-500 h-full flex flex-col"
                >
                  {/* Glowing radial background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#e8622a]/0 to-[#e8622a]/0 group-hover:from-[#e8622a]/5 group-hover:to-transparent transition-all duration-500" />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-10">
                      <div className="w-16 h-16 bg-[#e8622a]/10 rounded-2xl flex items-center justify-center border border-[#e8622a]/20 group-hover:bg-[#e8622a] group-hover:border-transparent transition-all duration-500">
                        <Icon className="w-8 h-8 text-[#e8622a] group-hover:text-white transition-all duration-500" />
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-4 group-hover:text-[#e8622a] transition-colors leading-tight">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-400 text-base leading-relaxed mb-8 flex-grow">
                      {service.description}
                    </p>

                    <div className="mt-auto pt-8 border-t border-[#3a3330] group-hover:border-[#e8622a]/20">
                       <Link
                        href={`/services/${service.id}`}
                        className="inline-flex items-center gap-3 text-[#e8622a] text-sm font-bold uppercase tracking-widest group-hover:gap-5 transition-all"
                      >
                        Explore <ArrowRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
