'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, MoveUpRight, Zap, Globe, Shield } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const fallbackCaseStudies = [
  {
    id: 'dyd',
    title: 'DYD',
    subtitle: 'Car Service App',
    tags: ['UI/UX Design', 'App Development'],
    href: '/case-studies/dyd',
    color: '#e8622a',
    description: 'A modern car service platform connecting customers with verified mechanics.',
    icon: Zap
  },
  {
    id: 'brego',
    title: 'Brego Land',
    subtitle: 'Business Intelligence',
    tags: ['UI/UX Design', 'Web App'],
    href: '/case-studies/bregoland',
    color: '#d45a24',
    description: 'End-to-end business analytics and management dashboard for SMEs.',
    icon: Shield
  },
  {
    id: 'edstate',
    title: 'Edstate',
    subtitle: 'Real Estate Learning',
    tags: ['UI/UX Design', 'LMS App'],
    href: '/case-studies/edstate',
    color: '#c04e1e',
    description: 'An e-learning platform tailored for real estate professionals and learners.',
    icon: Globe
  },
]

export default function CaseStudies() {
  return (
    <section className="py-24 lg:py-40 bg-[#1e1b18] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-20 px-4">
          <div className="max-w-3xl text-left">
            <AnimatedSection x={-30}>
              <span className="inline-block text-[#e8622a] text-sm font-bold tracking-[0.2em] uppercase mb-8">
                Portfolio of Impact
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-white leading-tight">
                Crafting Success <br/>
                Through <span className="text-[#e8622a]">Digital Excellence</span>
              </h2>
            </AnimatedSection>
          </div>
          
          <AnimatedSection x={30}>
            <Link
              href="/case-studies"
              className="group inline-flex items-center gap-3 bg-[#e8622a] hover:bg-[#f07040] text-white px-8 py-4 rounded-full text-base font-bold transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-[#e8622a]/20"
            >
              View All Studies
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fallbackCaseStudies.map((cs, index) => (
            <CaseStudyCard key={cs.id} cs={cs} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CaseStudyCard({ cs, index }: { cs: any, index: number }) {
  const Icon = cs.icon || Zap;
  
  return (
    <AnimatedSection delay={index * 0.15} y={30}>
      <Link
        href={cs.href}
        className="group relative flex flex-col h-full bg-[#262220] border border-[#3a3330] p-10 rounded-[2.5rem] overflow-hidden hover:border-[#e8622a]/40 transition-all duration-500 shadow-2xl"
      >
        {/* Subtle Background Glow */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"
          style={{ background: `radial-gradient(circle at 50% 10%, ${cs.color} 0%, transparent 60%)` }}
        />

        <div className="flex items-center justify-between mb-10 relative z-10">
           <div className="w-14 h-14 bg-[#e8622a]/10 rounded-2xl flex items-center justify-center text-[#e8622a] group-hover:bg-[#e8622a] group-hover:text-white transition-all duration-500">
              <Icon className="w-7 h-7" />
           </div>
           <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:text-[#e8622a] group-hover:border-[#e8622a]/40 transition-all group-hover:rotate-45">
              <MoveUpRight className="w-5 h-5" />
           </div>
        </div>

        <div className="flex flex-col flex-1 relative z-10 text-left">
          <div className="flex flex-wrap gap-2 mb-6">
            {cs.tags.map((tag: string) => (
              <span
                key={tag}
                className="text-[10px] font-extrabold text-[#e8622a] uppercase tracking-wider bg-[#e8622a]/10 border border-[#e8622a]/20 rounded-full px-4 py-1.5"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-2xl font-extrabold text-white mb-3 group-hover:text-[#e8622a] transition-colors leading-tight">
            {cs.title}
          </h3>
          <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-6">
            {cs.subtitle}
          </p>
          <p className="text-gray-400 text-base leading-relaxed mb-10 flex-grow font-medium line-clamp-3">
            {cs.description}
          </p>

          <div className="mt-auto pt-8 border-t border-[#3a3330] flex items-center justify-between">
             <span className="text-white font-bold text-sm">View Case Study</span>
             <ArrowRight className="w-5 h-5 text-[#e8622a] group-hover:translate-x-2 transition-transform" />
          </div>
        </div>
      </Link>
    </AnimatedSection>
  )
}
