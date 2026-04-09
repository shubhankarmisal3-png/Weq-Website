'use client'
import React, { useState } from 'react'
import { industries } from '../lib/data'

const industryIcons: Record<string, string> = {
  'Healthcare & Fitness': '🏥',
  'Manufacturing & Automobile Industry': '🏭',
  'E-commerce & Retail': '🛒',
  'Education and E-Learning': '🎓',
  'Banking & Finance': '🏦',
  'News & Publication': '📰',
  'Supply Chain & Logistics': '📦',
  'Food & Beverages': '🍽️',
}

const industryThemes: Record<string, { color: string; glow: string }> = {
  'Healthcare & Fitness': { color: '#f43f5e', glow: 'from-[#f43f5e]/10' },
  'Manufacturing & Automobile Industry': { color: '#3b82f6', glow: 'from-[#3b82f6]/10' },
  'E-commerce & Retail': { color: '#10b981', glow: 'from-[#10b981]/10' },
  'Education and E-Learning': { color: '#8b5cf6', glow: 'from-[#8b5cf6]/10' },
  'Banking & Finance': { color: '#f59e0b', glow: 'from-[#f59e0b]/10' },
  'News & Publication': { color: '#06b6d4', glow: 'from-[#06b6d4]/10' },
  'Supply Chain & Logistics': { color: '#e8622a', glow: 'from-[#e8622a]/10' },
  'Food & Beverages': { color: '#84cc16', glow: 'from-[#84cc16]/10' },
}

export default function Industries() {
  return (
    <section className="py-24 lg:py-32 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-8">
               <span className="w-10 h-[2px] bg-[#e8622a]"></span>
               <span className="text-[#e8622a] text-xs font-black tracking-[0.4em] uppercase">Market Versatility</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight">
              Industries <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8622a] to-[#ffb088]">We Serve</span>
            </h2>
          </div>
          <p className="text-gray-400 text-lg max-w-md opacity-60">
            Delivering cross-industry tech excellence through deep domain specialized expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, i) => {
            const theme = industryThemes[industry] || { color: '#e8622a', glow: 'from-[#e8622a]/10' };
            return <IndustryCard key={industry} industry={industry} theme={theme} />;
          })}
        </div>
      </div>
    </section>
  )
}

function IndustryCard({ industry, theme }: { industry: string; theme: any }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-gradient-to-br from-[#121110] to-[#0a0a0a] border border-white/5 rounded-[2.5rem] p-10 transition-all duration-500 hover:-translate-y-2 shadow-2xl"
      style={{ borderColor: isHovered ? `${theme.color}4d` : 'rgba(255,255,255,0.05)' }}
    >
      <div 
        className="absolute inset-0 bg-gradient-to-br to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem]" 
        style={{ backgroundImage: `linear-gradient(to bottom right, ${theme.color}1a, transparent)` }}
      />
      
      <div className="relative z-10">
        <div 
            className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-3xl mb-8 transition-all duration-500 group-hover:rotate-6"
            style={{ backgroundColor: isHovered ? theme.color : 'rgba(255,255,255,0.05)', color: isHovered ? 'white' : 'inherit' }}
        >
          {industryIcons[industry] || '💼'}
        </div>
        <h3 
            className="font-black text-white transition-colors leading-tight !text-[20px]"
            style={{ color: isHovered ? theme.color : 'white' }}
        >
          {industry}
        </h3>
      </div>
    </div>
  );
}
