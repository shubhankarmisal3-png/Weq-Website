'use client'

import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeft, CheckCircle2, Zap, Shield, Target, Smartphone, Code, BarChart, ArrowRight } from 'lucide-react'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import CTA from '../../../components/CTA'
import WhatsAppButton from '../../../components/WhatsAppButton'
import AnimatedSection from '../../../components/AnimatedSection'
import { services } from '../../../lib/data'

type Props = {
  params: { id: string }
}

const featureIcons = [Zap, Shield, Target, Smartphone, Code, BarChart]

export default function ServiceDetailPage({ params }: Props) {
  const service = services.find((s) => s.id === params.id)

  if (!service) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#1e1b18] pt-20 overflow-hidden">
        {/* Service Hero */}
        <section className="relative py-20 lg:py-32 overflow-hidden border-b border-[#3a3330]">
           {/* Background Accents */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#e8622a]/10 rounded-full blur-[120px] -mr-40 -mt-40 pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedSection y={-20} duration={0.6}>
              <Link 
                href="/services"
                className="inline-flex items-center gap-2 text-[#e8622a] font-bold text-sm uppercase tracking-widest mb-12 hover:gap-4 transition-all"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Services
              </Link>
            </AnimatedSection>
            
            <div className="max-w-5xl">
              <AnimatedSection>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-8">
                  {service.title.split(' ')[0]} <br/>
                  <span className="text-[#e8622a]">
                    {service.title.split(' ').slice(1).join(' ')}
                  </span>
                </h1>
                <p className="text-gray-400 text-base sm:text-lg font-medium leading-relaxed max-w-3xl">
                  {service.description}
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Detailed Capabilities Grid */}
        <section className="py-20 lg:py-32 bg-[#231f1c]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-12 leading-tight">
                Our <span className="text-[#e8622a]">Capabilities</span>
              </h2>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.items.map((item, index) => {
                const Icon = featureIcons[index % featureIcons.length];
                return (
                  <AnimatedSection key={item} delay={index * 0.1}>
                    <motion.div 
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="group bg-[#262220] border border-[#3a3330] p-10 rounded-[2.5rem] hover:border-[#e8622a]/40 transition-all duration-500 h-full relative overflow-hidden"
                    >
                       {/* Subtle Glow */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[#e8622a]/5 blur-[60px] -mr-16 -mt-16 group-hover:bg-[#e8622a]/10 transition-all" />

                      <div className="w-12 h-12 bg-[#e8622a]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#e8622a] transition-all duration-500">
                        <Icon className="w-6 h-6 text-[#e8622a] group-hover:text-white transition-colors duration-500" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-[#e8622a] transition-colors">
                        {item}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Strategically designed solutions to help you scale and succeed in the digital landscape with precision and authority.
                      </p>
                    </motion.div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pillars - Built for Resilience */}
         <section className="py-20 lg:py-32 border-t border-[#3a3330]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
             <AnimatedSection>
               <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-16 leading-tight">
                Built for <span className="text-[#e8622a]">Resilience</span>
              </h2>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
              {[
                { title: 'Technical Mastery', desc: 'We utilize cutting-edge frameworks and robust architectures to ensure your product stands the test of time.' },
                { title: 'User-Centric Design', desc: 'Every line of code and every pixel is placed with the user in mind, balancing aesthetic with utility.' },
                { title: 'Scalable Solutions', desc: 'Build modular systems that allow your enterprise to scale across borders without losing its core identity.' }
              ].map((pillar, i) => (
                <AnimatedSection key={i} delay={i * 0.2}>
                  <div className="p-10 bg-[#262220] border border-[#3a3330] rounded-[2.5rem] group hover:border-[#e8622a]/20 transition-all duration-500">
                     <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-[#e8622a] transition-colors">{pillar.title}</h3>
                     <p className="text-gray-400 text-sm leading-relaxed">{pillar.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-40 bg-[#1e1b18]">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
                <AnimatedSection>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-10 leading-tight max-w-4xl">
                    Ready to architect your <br/> <span className="text-[#e8622a]">digital advantage?</span>
                  </h2>
                  <Link
                    href="/contact-us"
                    className="group flex items-center justify-center bg-[#e8622a] hover:bg-[#f07040] text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-xl shadow-[#e8622a]/30 hover:scale-110 active:scale-95"
                  >
                    Start Your Project
                    <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </AnimatedSection>
           </div>
        </section>

        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
