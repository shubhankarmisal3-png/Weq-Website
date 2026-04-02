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
    <footer className="bg-[#1a1714] border-t border-[#3a3330]">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Brand col */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <Link href="/">
              <img
                src="https://weqtechnologies.com/wp-content/uploads/2024/09/weg-logo.png"
                alt="WEQ Technologies"
                className="h-12 w-auto mb-6"
              />
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              End-to-End Product Engineering &amp; Digital Transformation Solutions. Trusted by
              industry-leading companies around the globe.
            </p>

            {/* AWS partner */}
            <div className="flex items-center gap-3 mb-8">
              <img
                src="https://weqtechnologies.com/wp-content/uploads/2024/09/aws-logo.png"
                alt="AWS Partner"
                className="h-8 w-auto opacity-70"
              />
            </div>

            {/* Social */}
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-3">Follow Us</p>
              <div className="flex gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-full border border-[#3a3330] flex items-center justify-center text-sm text-gray-400 hover:text-white hover:border-[#e8622a] hover:bg-[#e8622a]/10 transition-all"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-[#e8622a] transition-colors hover:pl-1 duration-200 block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Case Studies */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Case Studies
            </h4>
            <ul className="space-y-3">
              {footerLinks.caseStudies.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-[#e8622a] transition-colors hover:pl-1 duration-200 block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + Locations */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Company
            </h4>
            <ul className="space-y-3 mb-8">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-[#e8622a] transition-colors hover:pl-1 duration-200 block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Locations
            </h4>
            <div className="space-y-2">
              {locations.map((loc) => (
                <div key={loc.city} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e8622a] flex-shrink-0" />
                  <span className="text-gray-400 text-sm">
                    {loc.city},{' '}
                    <span className="text-gray-600">{loc.country}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#3a3330]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} WEQ Technologies, All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-gray-600 text-sm hover:text-gray-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-600 text-sm hover:text-gray-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
