'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, MoveUpRight, Code2, Globe, Shield, Zap } from 'lucide-react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import CTA from '../../components/CTA'
import WhatsAppButton from '../../components/WhatsAppButton'
import AnimatedSection from '../../components/AnimatedSection'

// Define the case study type
type CaseStudy = {
  id: string
  title: string
  subtitle: string
  description: string
  tags: string[]
  stack: string[]
  color: string
  href: string
  icon?: any
}

const fallbackCases: CaseStudy[] = [
  {
    id: 'dyd',
    title: 'DYD',
    subtitle: 'Car Service App',
    description: 'A modern on-demand car service platform connecting vehicle owners with professional mechanics.',
    tags: ['UI/UX Design', 'Mobile App'],
    stack: ['React Native', 'Node.js'],
    color: '#e8622a',
    href: '/case-studies/dyd',
    icon: Zap
  },
  {
    id: 'brego',
    title: 'Brego Land',
    subtitle: 'Business Intelligence',
    description: 'End-to-end business analytics and sales management dashboard for SMEs with real-time KPIs.',
    tags: ['Web App', 'Analytics'],
    stack: ['React', 'Python'],
    color: '#d45a24',
    href: '/case-studies/bregoland',
    icon: Shield
  },
  {
    id: 'edstate',
    title: 'Edstate',
    subtitle: 'Real Estate Learning',
    description: 'A comprehensive e-learning platform tailored for real estate professionals with course tracking.',
    tags: ['Mobile App', 'LMS'],
    stack: ['Flutter', 'Node.js'],
    color: '#c04e1e',
    href: '/case-studies/edstate',
    icon: Globe
  },
  {
    id: 'allana',
    title: 'Allana',
    subtitle: 'Enterprise Supply Chain',
    description: 'A robust supply chain management system optimizing logistics and tracking for food exporters.',
    tags: ['Enterprise', 'Supply Chain'],
    stack: ['Next.js', 'Go'],
    color: '#b03e0e',
    href: '/case-studies/allana',
    icon: Code2
  },
]

function BackgroundGrid() {
  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{
        maskImage: 'linear-gradient(to bottom, black 0%, black 30%, transparent 80%)'
      }}
    >
      {/* 1. Sharp Grid Layer */}
      <div 
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff14 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff14 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: `radial-gradient(circle at 10% 20%, black 0%, transparent 60%), 
                     radial-gradient(circle at 90% 80%, black 0%, transparent 60%)`
        }}
      />
      {/* 2. Soft Blur Grid Layer (Subtle depth) */}
      <div 
        className="absolute inset-0 opacity-[0.2] blur-[3px]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff14 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff14 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: `radial-gradient(circle at 30% 70%, black 0%, transparent 50%),
                     radial-gradient(circle at 70% 30%, black 0%, transparent 50%)`
        }}
      />
      {/* 3. Heavy Blur / Glow Spots (Lines dissolve into light) */}
      <div 
        className="absolute inset-0 opacity-[0.1] blur-[15px]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff14 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff14 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: `radial-gradient(circle at 50% 50%, black 0%, transparent 40%),
                     radial-gradient(circle at 80% 10%, black 0%, transparent 30%)`
        }}
      />
    </div>
  )
}

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#1e1b18] overflow-hidden relative">
        <BackgroundGrid />
        {/* Simplified Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden border-b border-[#3a3330] bg-transparent">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#e8622a]/5 rounded-full blur-[120px] -mr-20 -mt-20" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <AnimatedSection>
              <span className="inline-block text-[#e8622a] text-sm font-bold tracking-[0.2em] uppercase mb-6">
                Our Impact
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                Case <span className="text-[#e8622a]">Studies</span>
              </h1>
              <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                Explore how we&apos;ve helped businesses across industries build transformative
                digital products that deliver real, measurable results.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Case Studies Grid - 3 cards per row */}
        <section className="py-20 lg:py-32 bg-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fallbackCases.map((cs, index) => (
                <CaseStudyCard key={cs.id} cs={cs} index={index} />
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

function CaseStudyCard({ cs, index }: { cs: CaseStudy, index: number }) {
  const Icon = cs.icon || Zap;
  
  return (
    <AnimatedSection y={30} delay={index * 0.1}>
      <Link href={cs.href} className="group block h-full">
        <div className="relative h-full flex flex-col bg-[#262220] border border-[#3a3330] p-8 lg:p-10 rounded-[2.5rem] hover:border-[#e8622a]/40 transition-all duration-500 shadow-xl overflow-hidden">
          
          {/* Subtle Accent Glow */}
          <div 
            className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500 pointer-events-none"
            style={{ backgroundColor: cs.color }}
          />

          <div className="flex items-center justify-between mb-8">
             <div className="w-14 h-14 bg-[#e8622a]/10 rounded-2xl flex items-center justify-center text-[#e8622a] group-hover:bg-[#e8622a] group-hover:text-white transition-all duration-500">
                <Icon className="w-7 h-7" />
             </div>
             <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:text-[#e8622a] group-hover:border-[#e8622a]/40 transition-all group-hover:rotate-45">
                <MoveUpRight className="w-5 h-5" />
             </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {cs.tags.map(tag => (
              <span key={tag} className="text-[10px] font-bold text-[#e8622a] uppercase tracking-widest bg-[#e8622a]/5 border border-[#e8622a]/10 px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 group-hover:text-[#e8622a] transition-colors leading-tight">
            {cs.title}
          </h2>
          
          <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-6">
            {cs.subtitle}
          </p>
          
          <p className="text-gray-400 text-base leading-relaxed mb-10 flex-grow">
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
