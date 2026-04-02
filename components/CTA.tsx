import Link from 'next/link'
import { ArrowRight, Mail } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-20 lg:py-28 bg-[#1e1b18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[#262220] border border-[#3a3330] rounded-3xl overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-64 bg-[#e8622a]/10 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 px-8 py-16 sm:px-16 sm:py-20 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Got an Idea,{' '}
              <span className="text-[#e8622a]">we will help</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg mb-10 max-w-xl mx-auto">
              Book a free consultation for business enquiries. Let&apos;s turn your vision into a
              digital reality together.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact-us"
                className="btn-orange inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-base"
              >
                Book a Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="mailto:info@weqtechnologies.com"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-base border border-[#3a3330] hover:border-[#e8622a] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#e8622a]" />
                info@weqtechnologies.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
