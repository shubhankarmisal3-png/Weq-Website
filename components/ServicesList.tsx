'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Globe, Settings, Rocket, Palette } from 'lucide-react'

const serviceIconsMap: Record<string, any> = {
  'digital-transformation': Settings,
  'product-engineering': Rocket,
  'website-development': Globe,
  'ux-design': Palette,
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function ServicesList({ services }: { services: any[] }) {
  return (
    <motion.section 
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.1 }}
      variants={stagger}
      className="py-20 lg:py-32 bg-[#231f1c]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = serviceIconsMap[service.id] || Globe;
            return (
              <motion.div 
                key={service.id} 
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                className="group flex flex-col items-start bg-[#262220] border border-[#3a3330] p-8 rounded-[2rem] hover:border-[#e8622a]/30 transition-all duration-500 relative overflow-hidden"
              >
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#e8622a]/5 blur-[60px] -mr-16 -mt-16 group-hover:bg-[#e8622a]/15 transition-all duration-500" />
                
                <motion.div 
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  className="w-12 h-12 bg-[#e8622a]/10 rounded-xl flex items-center justify-center mb-6 border border-[#e8622a]/20 group-hover:bg-[#e8622a] group-hover:border-transparent transition-all duration-500"
                >
                  <Icon className="w-6 h-6 text-[#e8622a] group-hover:text-white transition-colors duration-500" />
                </motion.div>
                
                <h2 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-[#e8622a] transition-colors">
                  {service.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>
                
                <Link
                  href={`/services/${service.id}`}
                  className="mt-auto inline-flex items-center gap-2 text-[#e8622a] font-bold text-xs uppercase tracking-widest group-hover:gap-3 transition-all relative overflow-hidden"
                >
                  Explore <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  )
}
