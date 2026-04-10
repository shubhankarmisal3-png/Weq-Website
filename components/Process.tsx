'use client'
import React, { useEffect, useRef } from 'react'
import { process } from '../lib/data'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stepThemes = [
  { color: '#e8622a', glow: 'rgba(232, 98, 42, 0.4)' },
  { color: '#8b5cf6', glow: 'rgba(139, 92, 246, 0.4)' },
  { color: '#06b6d4', glow: 'rgba(6, 182, 212, 0.4)' },
]

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Create independent ScrollTrigger for Pinning
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=400%', // Slightly shorter for tighter feel
        pin: true,
        scrub: 1,
      })

      // Timeline for animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=350%',
          scrub: 1,
        }
      })

      // 1. First Step Active by Default (Instant)
      tl.set('.step-0 .step-num-box', { 
        borderColor: stepThemes[0].color, 
        boxShadow: `0 0 40px ${stepThemes[0].glow}`, 
        color: 'white',
        scale: 1.05
      })
      tl.set('.step-0 .step-content', { 
        opacity: 1, 
        y: 0, 
        filter: 'blur(0px)'
      })

      // Start with a small delay so user sees initial state before line moves
      tl.to({}, { duration: 0.5 })

      // 2. Line 1 to 2 Animation (Moves forward)
      tl.to('.line-1-progress', { scaleX: 1, duration: 2, ease: 'none' })

      // 3. Second Step Glow (Fast transition)
      tl.to('.step-1 .step-num-box', { 
        borderColor: stepThemes[1].color, 
        boxShadow: `0 0 40px ${stepThemes[1].glow}`, 
        color: 'white',
        scale: 1.05,
        duration: 0.3 
      })
      tl.to('.step-1 .step-content', { 
        opacity: 1, 
        y: 0, 
        filter: 'blur(0px)',
        duration: 0.3 
      }, '<')

      // 4. Line 2 to 3 Animation
      tl.to('.line-2-progress', { scaleX: 1, duration: 2, ease: 'none' })

      // 5. Third Step Glow (Fast transition)
      tl.to('.step-2 .step-num-box', { 
        borderColor: stepThemes[2].color, 
        boxShadow: `0 0 40px ${stepThemes[2].glow}`, 
        color: 'white',
        scale: 1.05,
        duration: 0.3 
      })
      tl.to('.step-2 .step-content', { 
        opacity: 1, 
        y: 0, 
        filter: 'blur(0px)',
        duration: 0.3 
      }, '<')

      // Minimal final delay to ensure line is seen touching 3 before unpinning 
      tl.to({}, { duration: 0.2 })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={sectionRef} 
      className="relative h-screen bg-[#0a0a0a] flex flex-col justify-center overflow-hidden"
      id="process-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        <div className="text-center mb-16 lg:mb-24 scale-up-header">
          <div className="flex items-center justify-center gap-3 mb-6">
             <span className="w-10 h-[2px] bg-[#e8622a]"></span>
             <span className="text-[#e8622a] text-[10px] sm:text-xs font-black tracking-[0.4em] uppercase">The Roadmap</span>
             <span className="w-10 h-[2px] bg-[#e8622a]"></span>
          </div>
          <h2 className="text-white leading-[1.1] tracking-tighter text-4xl md:text-6xl lg:text-7xl font-bold">
            Pioneering Your Path to <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8622a] to-[#ffb088]">Digital Excellence</span>
          </h2>
        </div>

        <div className="relative mt-8 md:mt-20 px-4">
          {/* Decorative Background Progress Bar (Desktop only) */}
          <div className="hidden md:flex absolute top-[3rem] left-[15%] right-[15%] h-[2px] items-center z-0">
             {/* Progress segment 1 */}
             <div className="flex-1 h-full bg-white/5 relative">
                <div className="line-1-progress absolute inset-0 bg-gradient-to-r from-[#e8622a] to-[#8b5cf6] origin-left scale-x-0 transition-shadow duration-500" 
                     style={{ boxShadow: '0 0 15px rgba(232, 98, 42, 0.3)' }} />
             </div>
             {/* Middle marker spacer */}
             <div className="w-24 shrink-0" />
             {/* Progress segment 2 */}
             <div className="flex-1 h-full bg-white/5 relative">
                <div className="line-2-progress absolute inset-0 bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] origin-left scale-x-0 transition-shadow duration-500" 
                     style={{ boxShadow: '0 0 15px rgba(139, 92, 246, 0.3)' }} />
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-4 relative z-10">
            {process.map((step, index) => (
              <div key={step.step} className={`step-${index} flex flex-col items-center text-center group`}>
                {/* Numbered Indicator */}
                <div className="relative mb-8 lg:mb-12">
                  <div className="step-num-box w-20 h-20 lg:w-24 lg:h-24 rounded-[2rem] bg-[#121110] border border-white/5 flex items-center justify-center text-2xl lg:text-3xl font-black text-white/5 transition-all duration-700 relative z-10 overflow-hidden">
                    <span className="relative z-10">{step.step}</span>
                    {/* Inner subtle glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>
                </div>
                
                {/* Text Content */}
                <div className="step-content opacity-10 translate-y-8 filter blur-sm px-2 md:px-4 transition-all duration-1000">
                  <h3 className="text-white text-xl lg:text-3xl font-bold mb-4 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm lg:text-lg leading-relaxed max-w-sm mx-auto font-medium">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Atmospheric Background Effects */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
         <div className="absolute top-1/4 -left-[10%] w-[500px] h-[500px] bg-[#e8622a]/5 blur-[120px] rounded-full animate-pulse" />
         <div className="absolute bottom-1/4 -right-[10%] w-[600px] h-[600px] bg-[#06b6d4]/5 blur-[150px] rounded-full" />
         
         {/* Subtle Grid Pattern */}
         <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-[0.03]" />
      </div>
      
      {/* Scroll indicator (optional but helpful for UX in sticky sections) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
        <span className="text-white text-[10px] uppercase tracking-[0.3em] font-bold">Scroll to build</span>
      </div>
    </section>
  )
}

