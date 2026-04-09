import Link from 'next/link'
import { footerLinks, locations } from '../lib/data'

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/weq-technologies/', icon: 'in' },
  { label: 'Twitter', href: 'https://twitter.com/weqtechnologies', icon: '𝕏' },
  { label: 'Instagram', href: 'https://www.instagram.com/weqtechnologies/', icon: '◉' },
  { label: 'Facebook', href: 'https://www.facebook.com/weqtechnologies', icon: 'f' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#e8622a]/5 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 mb-20">
          
          {/* Brand Column - spans 4 */}
          <div className="lg:col-span-4 lg:pr-12">
            <Link href="/" className="inline-block group mb-8">
              <img
                src="https://weqtechnologies.com/wp-content/uploads/2024/09/cropped-weg-logo-1.png"
                alt="WEQ Technologies"
                className="h-10 lg:h-12 w-auto group-hover:drop-shadow-[0_0_15px_rgba(232,98,42,0.3)] transition-all"
              />
            </Link>

            <p className="text-gray-400 text-base leading-relaxed mb-10 font-medium opacity-70 max-w-sm">
              End-to-End Product Engineering &amp; Digital Transformation Solutions. <br/>
              Empowering global leaders with breakthrough technical excellence.
            </p>

            <div className="flex items-center gap-4 mb-10 p-4 bg-white/5 rounded-2xl border border-white/5 w-fit">
              <img
                src="https://weqtechnologies.com/wp-content/uploads/2024/09/aws-logo.png"
                alt="AWS Partner"
                className="h-7 w-auto opacity-60"
              />
              <span className="text-[10px] font-black uppercase tracking-widest text-white/30 border-l border-white/10 pl-4">Select Partner</span>
            </div>

            <div>
              <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.3em] mb-4">Discovery Socials</p>
              <div className="flex gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-sm text-gray-400 hover:text-white hover:bg-[#e8622a] hover:border-[#e8622a] transition-all duration-300 shadow-lg"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Group - spans 8 */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-12 lg:gap-8">
            {/* Services */}
            <div>
              <h4 className="text-white font-black !text-[18px] uppercase tracking-[0.1em] mb-8">
                Services
              </h4>
              <ul className="space-y-4">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-gray-400 text-sm hover:text-[#e8622a] transition-all duration-300 font-medium block">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Portfolio */}
            <div>
              <h4 className="text-white font-black !text-[18px] uppercase tracking-[0.1em] mb-8">
                Portfolio
              </h4>
              <ul className="space-y-4">
                {footerLinks.caseStudies.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-gray-400 text-sm hover:text-[#e8622a] transition-all duration-300 font-medium block">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Platform */}
            <div>
              <h4 className="text-white font-black !text-[18px] uppercase tracking-[0.1em] mb-8">
                Platform
              </h4>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-gray-400 text-sm hover:text-[#e8622a] transition-all duration-300 font-medium block">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Global Presence Section - Horizontal Bar */}
        <div className="pt-16 border-t border-white/5">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            <div className="flex-shrink-0">
               <h4 className="text-white font-black !text-[18px] uppercase tracking-[0.1em] lg:mb-0 mb-8">
                Global Presence
              </h4>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:flex lg:items-center lg:gap-16">
              {locations.map((loc) => (
                <div key={loc.city} className="flex flex-col gap-1 group">
                   <div className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#e8622a]" />
                      <span className="text-white font-black text-sm transition-colors group-hover:text-[#e8622a] whitespace-nowrap">{loc.city}</span>
                   </div>
                   <span className="text-gray-500 text-[10px] font-bold pl-[1.1rem] tracking-widest uppercase">{loc.country}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-8 lg:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-600 text-sm font-medium">
            © {new Date().getFullYear()} WEQ Technologies. <span className="hidden sm:inline">Crafted with precision.</span>
          </p>
          <div className="flex gap-8">
            <Link href="/privacy-policy" className="text-gray-600 text-[10px] font-black uppercase tracking-widest hover:text-[#e8622a] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-600 text-[10px] font-black uppercase tracking-widest hover:text-[#e8622a] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
