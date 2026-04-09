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

const itemDescriptions: Record<string, string> = {
  'Web App Development': 'Scalable web architectures built for high-traffic performance.',
  'Mobile App Development': 'Native experiences that feel premium and respond instantly.',
  'Flutter App Development': 'Cross-platform excellence with a single high-performance codebase.',
  'Python Applications': 'Complex backend logic and data processing made simple.',
  'LMS Development': 'Customized learning management systems for education at scale.',
  'Java Application Development': 'Robust, secure, and enterprise-grade Java solutions.',
  'WordPress Development': 'Flexible content management systems for dynamic businesses.',
  'Shopify Development': 'Scalable e-commerce solutions for global retail growth.',
  'WooCommerce Development': 'Seamless shop integration for existing WordPress ecosystems.',
  'Drupal Development': 'High-security, enterprise-level digital experience platforms.',
  'Webflow Development': 'Visual development with clean code for modern brand experiences.',
  'Technology Assessment': 'Comprehensive audit of your current tech stack for optimization.',
  'Fractional CTO': 'Expert technical leadership and strategy on a flexible basis.',
  'Business Consultancy': 'Strategic advice to align technology with your business goals.',
  'ERP Software Development': 'Custom enterprise resource planning systems for your needs.',
  'CRM Development': 'Relationship management solutions to boost customer retention.',
  'Custom Software Development': 'Bespoke software tailored to solve your unique challenges.',
  'Integration': 'Seamlessly connecting your systems for better data flow.',
  'Website Design': 'Breathtaking visual design combined with functional excellence.',
  'UI/UX Design': 'User-centric interfaces designed for conversion and retention.',
  'Illustration Design': 'Custom visual storytelling through high-end vector art.',
  'UX Audit': 'Data-driven analysis of your user experience to find friction.',
  'Mobile App Design': 'Stunning mobile interfaces crafted for intuitive interaction.',
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

  const serviceThemes: Record<string, { color: string; glow: string }> = {
    'digital-transformation': { color: '#e8622a', glow: 'from-[#e8622a]/10' },
    'product-engineering': { color: '#8b5cf6', glow: 'from-[#8b5cf6]/10' },
    'website-development': { color: '#06b6d4', glow: 'from-[#06b6d4]/10' },
    'ux-design': { color: '#f43f5e', glow: 'from-[#f43f5e]/10' },
  }

  return (
    <section className="py-24 lg:py-40 bg-[#0a0a0a] overflow-hidden relative">
      {/* Decorative Blur */}
      <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-[#e8622a]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-32">
          <div className="max-w-3xl">
            <AnimatedSection x={-30}>
              <div className="flex items-center gap-3 mb-8">
                 <span className="w-10 h-[2px] bg-[#e8622a]"></span>
                 <span className="text-[#e8622a] text-xs font-black tracking-[0.4em] uppercase">Service Ecosystem</span>
              </div>
              <h2 className="text-white leading-[1.05] tracking-tight">
                Driving Growth Through <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8622a] to-[#ffb088]">Digital Innovation</span>
              </h2>
            </AnimatedSection>
          </div>
          <div className="flex-shrink-0">
            <AnimatedSection x={30}>
              <Link
                href="/services"
                className="group relative inline-flex items-center gap-3 bg-white hover:bg-[#e8622a] text-black hover:text-white px-10 py-5 rounded-full text-base font-black transition-all duration-500 hover:scale-105 active:scale-95 shadow-2xl"
              >
                View All Expertise
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </AnimatedSection>
          </div>
        </div>

        {/* Services Blocks */}
        <div className="flex flex-col gap-32 lg:gap-48">
          {servicesToRender.map((service, index) => {
            const Icon = service.icon || Globe;
            const isEven = index % 2 === 1;
            const theme = serviceThemes[service.id] || (isEven ? serviceThemes['product-engineering'] : serviceThemes['digital-transformation']);

            return (
              <div key={service.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-32`}>
                
                {/* Sub-items Side */}
                <div className="w-full lg:w-3/5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
                    {service.items.slice(0, 6).map((item: string, idx: number) => (
                      <AnimatedSection key={idx} delay={idx * 0.05} y={20}>
                        <div className="group relative">
                          <h4 className={`text-xl font-black text-white mb-3 transition-colors leading-tight !text-xl`} style={{ color: 'white' }}>
                            <span className="group-hover:opacity-100 opacity-100 transition-colors" style={{ color: idx % 2 === 0 ? 'white' : 'white' }}>{item}</span>
                          </h4>
                          <p className="text-gray-500 text-sm leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">
                            {itemDescriptions[item] || 'High-performance engineering tailored to your unique scaling requirements.'}
                          </p>
                        </div>
                      </AnimatedSection>
                    ))}
                  </div>
                </div>

                {/* Main Info Side */}
                <div className="w-full lg:w-2/5">
                  <AnimatedSection x={isEven ? -30 : 30}>
                    <div className={`flex flex-col p-12 bg-gradient-to-br from-[#121110] to-[#0a0a0a] border border-white/5 rounded-[3rem] transition-all duration-700 relative overflow-hidden group shadow-2xl`}
                         style={{ borderColor: theme.color + '4d' }}>
                      {/* Glow Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${theme.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                      
                      <div className="relative z-10">
                        <div className="flex items-center gap-6 mb-10">
                          <div className={`w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-2xl group-hover:bg-white`}
                               style={{ backgroundColor: theme.color }}>
                            <Icon className={`w-8 h-8 text-white transition-colors`} />
                          </div>
                          <h3 className={`font-black text-white transition-colors leading-tight !text-[26px]`}
                              style={{ color: theme.color }}>
                            {service.title}
                          </h3>
                        </div>
                        <p className="text-gray-400 text-base leading-relaxed mb-12 opacity-80 group-hover:opacity-100 transition-opacity">
                          {service.description}
                        </p>
                        
                        <div className="flex items-center justify-between pt-10 border-t border-white/5">
                           <Link
                            href={`/services/${service.id}`}
                            className={`group inline-flex items-center gap-3 text-white font-black text-sm uppercase tracking-widest transition-colors`}
                            style={{ color: theme.color }}
                          >
                            Explore Solution 
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
                          </Link>
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/5 to-white/10 text-4xl font-black">{String(index + 1).padStart(2, '0')}</span>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>

              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
