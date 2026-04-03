import type { Metadata } from 'next'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import CTA from '../../components/CTA'
import WhatsAppButton from '../../components/WhatsAppButton'
import ServicesList from '../../components/ServicesList'
import { services } from '../../lib/data'
import AnimatedSection from '../../components/AnimatedSection'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services | WEQ Technologies',
  description:
    'Explore WEQ Technologies\' comprehensive services: Digital Transformation, Product Engineering, Website Development, and UX Design.',
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#1e1b18] pt-20 overflow-hidden">
        {/* Animated Hero Section */}
        <section className="relative py-20 lg:py-32 border-b border-[#3a3330]">
           {/* Decorative dynamic glows */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#e8622a]/10 rounded-full blur-[120px] -mr-40 -mt-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#e8622a]/5 rounded-full blur-[100px] -ml-20 -mb-20 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedSection>
              <div className="max-w-4xl">
                <span className="inline-block text-[#e8622a] text-sm font-bold tracking-[0.2em] uppercase mb-8">
                  Architecting Excellence
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                  Our <span className="text-[#e8622a]">Services</span>
                </h1>
                <p className="text-gray-400 text-base sm:text-lg font-medium leading-relaxed max-w-2xl">
                  We don't just develop; we architect digital advantages. Elevate your presence 
                  through precise, editorial-grade strategic intervention and technical excellence.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Animated Services Grid Section */}
        <ServicesList services={services} />

        {/* Pillars of Authority Section */}
        <section className="py-20 lg:py-32 border-t border-[#3a3330]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-16 leading-tight">
                The <span className="text-[#e8622a]">Pillars</span> of Excellence
              </h2>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
              {[
                { 
                  title: 'Predictive Methodology', 
                  desc: 'We solve for the outcome of ten years from now, not the quarterly report of today. Our strategies are built to withstand time.' 
                },
                { 
                  title: 'Editorial Precision', 
                  desc: 'Every recommendation is distilled to its most potent form. We value clarity over volume, delivering actionable brilliance.' 
                },
                { 
                  title: 'Global Connectivity', 
                  desc: 'Our network spans the world\'s primary financial hubs, providing you with local insight and global leverage in tandem.' 
                }
              ].map((pillar, i) => (
                <AnimatedSection key={i} delay={i * 0.2}>
                  <div className="group">
                    <div className="w-16 h-1.5 bg-[#e8622a] mb-8 transition-all duration-500 group-hover:w-full" />
                    <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-[#e8622a] transition-colors">{pillar.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{pillar.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Peer Recognition Section with Motion */}
        <section className="py-20 lg:py-32 bg-[#231f1c]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
             <AnimatedSection>
               <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-12 leading-tight">
                Peer Recognition from <span className="text-[#e8622a]">Global Leaders</span>
              </h2>
            </AnimatedSection>
            
            <AnimatedSection scale={0.9} delay={0.2}>
              <div className="max-w-4xl mx-auto">
                <blockquote className="text-lg sm:text-2xl font-medium text-white italic leading-tight mb-8 tracking-tight">
                  "The Architectural Authority transformed our expansion strategy into a masterclass of operational efficiency. Their insight is quite literally unparalleled in the sector."
                </blockquote>
                <div className="text-[#e8622a] text-base font-bold uppercase tracking-widest flex items-center justify-center gap-4">
                   <div className="w-8 h-[2px] bg-gray-600" />
                   Julian Voss <span>—</span> CEO, Meridian Logistics
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact/Partners Promo */}
        <section className="py-20 lg:py-32 border-t border-[#3a3330]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="max-w-2xl text-center lg:text-left">
                 <AnimatedSection>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                    Connect with our <br/> <span className="text-[#e8622a]">Senior Partners</span>
                  </h2>
                  <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                    Engineering the world's most resilient corporate structures since 1994. Editorial precision, global reach.
                  </p>
                </AnimatedSection>
              </div>
              
              <AnimatedSection delay={0.3} x={30}>
                <Link
                  href="/contact-us"
                  className="group flex items-center justify-center bg-[#e8622a] hover:bg-[#f07040] text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-xl shadow-[#e8622a]/30 hover:scale-105 active:scale-95"
                >
                  Schedule Membership
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </AnimatedSection>
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
