import Link from 'next/link'
import { ArrowRight, Mail } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-[#121110] via-[#0a0a0a] to-[#0a0a0a] border border-white/5 rounded-[4rem] overflow-hidden shadow-3xl">
          {/* Background glows */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#e8622a]/10 rounded-full blur-[120px]" />
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#e8622a]/5 rounded-full blur-[100px]" />
          </div>

          <div className="relative z-10 px-8 py-20 sm:px-16 sm:py-24 text-center">
             <div className="flex items-center justify-center gap-3 mb-10">
                <span className="w-10 h-[2px] bg-[#e8622a]"></span>
                <span className="text-[#e8622a] text-xs font-black tracking-[0.4em] uppercase">Let&apos;s Connect</span>
                <span className="w-10 h-[2px] bg-[#e8622a]"></span>
             </div>
            <h2 className="text-white mb-6 leading-[1.1] tracking-tight">
              Got an Idea? <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8622a] to-[#ffb088]">
                We Will Help You Scale
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto opacity-70">
              Book a call for business enquiries. Our experts are ready to turn your vision into a
              high-performance digital reality.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/contact-us"
                className="btn-orange inline-flex items-center gap-3 px-10 py-5 rounded-full text-white font-black text-base shadow-2xl shadow-[#e8622a]/30 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Book a Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="mailto:info@weqtechnologies.com"
                className="group inline-flex items-center gap-3 px-10 py-5 rounded-full text-white font-black text-base border border-white/5 hover:border-[#e8622a] hover:bg-white/5 transition-all duration-300"
              >
                <Mail className="w-5 h-5 text-[#e8622a]" />
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
