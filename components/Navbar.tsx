'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronDown, Menu, X } from 'lucide-react'
import { navLinks } from '../lib/data'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-xl shadow-2xl py-1' : 'bg-[#0a0a0a]/50 py-2'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <img
              src="https://weqtechnologies.com/wp-content/uploads/2024/09/cropped-weg-logo-1.png"
              alt="WEQ Technologies"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group dropdown-parent">
                {link.children ? (
                  <>
                    <Link
                      href={link.href}
                      className="flex items-center gap-1 px-4 py-2 text-sm text-gray-200 hover:text-white transition-colors rounded-md hover:bg-white/5"
                    >
                      {link.label}
                      <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
                    </Link>
                    <div className="dropdown-menu absolute top-full left-0 mt-1 w-52 bg-[#262220] border border-[#3a3330] rounded-xl shadow-2xl py-2 z-50">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-[#e8622a]/10 hover:pl-6 transition-all duration-200"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="px-4 py-2 text-sm text-gray-200 hover:text-white transition-colors rounded-md hover:bg-white/5"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact-us"
              className="btn-orange hidden sm:inline-flex px-5 py-2.5 rounded-full text-sm font-semibold text-white"
            >
              Start Project
            </Link>
            <button
              className="lg:hidden p-2 text-gray-300 hover:text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden bg-[#0a0a0a] border-t border-white/5 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.children ? (
                  <div>
                    <button
                      className="flex items-center justify-between w-full px-4 py-3 text-sm text-gray-200"
                      onClick={() =>
                        setOpenDropdown(openDropdown === link.label ? null : link.label)
                      }
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          openDropdown === link.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openDropdown === link.label && (
                      <div className="pl-6 space-y-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-400 hover:text-[#e8622a]"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="block px-4 py-3 text-sm text-gray-200 hover:text-[#e8622a]"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="px-4 pt-2">
              <Link
                href="/contact-us"
                className="btn-orange block text-center px-6 py-3 rounded-full text-sm font-semibold text-white"
                onClick={() => setMobileOpen(false)}
              >
                Start Project
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
