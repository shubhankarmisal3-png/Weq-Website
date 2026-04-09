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
    color: '#3b82f6',
    description: 'End-to-end business analytics and management dashboard for SMEs.',
    icon: Shield
  },
  {
    id: 'edstate',
    title: 'Edstate',
    subtitle: 'Real Estate Learning',
    tags: ['UI/UX Design', 'LMS App'],
    href: '/case-studies/edstate',
    color: '#8b5cf6',
    description: 'An e-learning platform tailored for real estate professionals and learners.',
    icon: Globe
  },
]

export default function CaseStudies() {
  return (
    <section className="py-24 lg:py-40 bg-[#0a0a0a] overflow-hidden relative">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#e8622a]/5 rounded-full blur-[150px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-24">
          <div className="max-w-3xl">
            <AnimatedSection x={-30}>
               <div className="flex items-center gap-3 mb-8">
                  <span className="w-10 h-[2px] bg-[#e8622a]"></span>
                  <span className="text-[#e8622a] text-xs font-black tracking-[0.4em] uppercase">Success Stories</span>
               </div>
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight">
                Crafting Impact <br/>
                Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8622a] to-[#ffb088]">Digital Mastery</span>
              </h2>
            </AnimatedSection>
          </div>
          
          <AnimatedSection x={30}>
            <Link
              href="/case-studies"
              className="group relative inline-flex items-center gap-3 bg-white hover:bg-[#e8622a] text-black hover:text-white px-10 py-5 rounded-full text-base font-black transition-all duration-500 hover:scale-105 active:scale-95 shadow-2xl"
            >
              Explore Portfolio
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
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
  const [isHovered, setIsHovered] = React.useState(false);
  
  return (
    <AnimatedSection delay={index * 0.15} y={30}>
      <Link
        href={cs.href}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex flex-col h-full bg-[#121110] border border-white/5 p-12 rounded-[3.5rem] overflow-hidden transition-all duration-700 hover:-translate-y-3"
        style={{ borderColor: isHovered ? `${cs.color}4d` : 'rgba(255,255,255,0.05)' }}
      >
        {/* Hover Glow Effect */}
        <div 
          className="absolute inset-0 bg-gradient-to-br to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" 
          style={{ backgroundImage: `linear-gradient(to bottom right, ${cs.color}1a, transparent)` }}
        />
        
        <div className="flex items-center justify-between mb-12 relative z-10">
           <div 
            className="w-20 h-20 bg-white/5 rounded-[1.5rem] flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:text-white"
            style={{ color: cs.color, backgroundColor: isHovered ? cs.color : 'rgba(255,255,255,0.05)' }}
           >
              <Icon className="w-9 h-9" />
           </div>
           <div 
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/30 transition-all duration-500 group-hover:text-white"
            style={{ borderColor: isHovered ? cs.color : 'rgba(255,255,255,0.1)' }}
           >
              <MoveUpRight className="w-5 h-5" />
           </div>
        </div>

        <div className="flex flex-col flex-1 relative z-10">
          <div className="flex flex-wrap gap-2 mb-8">
            {cs.tags.map((tag: string) => (
              <span
                key={tag}
                className="text-[9px] font-black uppercase tracking-[0.2em] bg-white/5 border border-white/10 rounded-full px-5 py-2 transition-colors"
                style={{ color: isHovered ? cs.color : 'rgba(255,255,255,0.4)', borderColor: isHovered ? `${cs.color}4d` : 'rgba(255,255,255,0.1)' }}
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 
            className="font-black text-white mb-4 transition-colors leading-tight !text-[26px]"
            style={{ color: isHovered ? cs.color : 'white' }}
          >
            {cs.title}
          </h3>
          <p 
            className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 opacity-80"
            style={{ color: cs.color }}
          >
            {cs.subtitle}
          </p>
          <p className="text-gray-500 text-lg leading-relaxed mb-12 flex-grow font-medium line-clamp-3 group-hover:text-gray-400 transition-colors">
            {cs.description}
          </p>

          <div className="mt-auto pt-10 border-t border-white/5 flex items-center justify-between">
             <span className="text-white/40 group-hover:text-white font-black text-sm uppercase tracking-widest transition-colors">Case Study</span>
             <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-3" style={{ color: cs.color }} />
          </div>
        </div>
      </Link>
    </AnimatedSection>
  )
}
