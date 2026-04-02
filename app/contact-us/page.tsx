'use client'

import { useState } from 'react'
import { MapPin, Mail, Phone, Send, CheckCircle } from 'lucide-react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import WhatsAppButton from '../../components/WhatsAppButton'

const officeLocations = [
  {
    city: 'Mumbai',
    country: 'India',
    address: 'Mumbai, Maharashtra, India',
    phone: '+91 93212 78742',
    whatsapp: 'https://wa.me/9321278742',
  },
  {
    city: 'Pune',
    country: 'India',
    address: 'Pune, Maharashtra, India',
    phone: '+91 93212 78742',
    whatsapp: 'https://wa.me/9321278742',
  },
  {
    city: 'New York',
    country: 'USA',
    address: 'New York, NY, United States',
    phone: '+1 (555) 000-0000',
    whatsapp: 'https://wa.me/9321278742',
  },
  {
    city: 'California',
    country: 'USA',
    address: 'California, United States',
    phone: '+1 (555) 000-0000',
    whatsapp: 'https://wa.me/9321278742',
  },
  {
    city: 'Minnesota',
    country: 'USA',
    address: 'Minnesota, United States',
    phone: '+1 (555) 000-0000',
    whatsapp: 'https://wa.me/9321278742',
  },
]

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 lg:py-24 bg-[#1e1b18]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Contact <span className="text-[#e8622a]">Us</span>
            </h1>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Ready to start your project? Book a free consultation and let&apos;s build something
              extraordinary together.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 lg:py-20 bg-[#231f1c]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
              {/* Left info */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-extrabold text-white mb-4">Get in Touch</h2>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Whether you have a project in mind or want to explore how WEQ Technologies can
                    help your business grow, we&apos;d love to hear from you.
                  </p>
                </div>

                <div className="space-y-4">
                  <a
                    href="mailto:info@weqtechnologies.com"
                    className="flex items-center gap-4 bg-[#262220] border border-[#3a3330] rounded-xl p-4 hover:border-[#e8622a] transition-colors"
                  >
                    <div className="w-10 h-10 bg-[#e8622a]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[#e8622a]" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs mb-0.5">Email</p>
                      <p className="text-white text-sm font-medium">info@weqtechnologies.com</p>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/9321278742"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 bg-[#262220] border border-[#3a3330] rounded-xl p-4 hover:border-[#25D366] transition-colors"
                  >
                    <div className="w-10 h-10 bg-[#25D366]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-[#25D366]" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs mb-0.5">WhatsApp</p>
                      <p className="text-white text-sm font-medium">+91 93212 78742</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 bg-[#262220] border border-[#3a3330] rounded-xl p-4">
                    <div className="w-10 h-10 bg-[#e8622a]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[#e8622a]" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs mb-0.5">Headquarters</p>
                      <p className="text-white text-sm font-medium">Mumbai, Maharashtra, India</p>
                    </div>
                  </div>
                </div>

                {/* Office list */}
                <div>
                  <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
                    Our Offices
                  </h3>
                  <div className="space-y-3">
                    {officeLocations.map((office) => (
                      <div
                        key={office.city}
                        className="flex items-center justify-between bg-[#262220] border border-[#3a3330] rounded-xl px-4 py-3"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-2 h-2 rounded-full bg-[#e8622a] flex-shrink-0" />
                          <span className="text-white text-sm font-medium">{office.city}</span>
                          <span className="text-gray-500 text-xs">{office.country}</span>
                        </div>
                        <a
                          href={office.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#25D366] hover:opacity-80 transition-opacity"
                        >
                          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 17.176c-.233.654-.948 1.246-1.668 1.408-.45.1-.993.18-2.888-.62-2.553-1.08-4.21-3.659-4.338-3.831-.127-.17-.995-1.322-.995-2.525 0-1.203.63-1.797 1.03-2.043.326-.2.71-.261 1.064-.261.127 0 .241.007.344.013.302.013.455.031.655.507.248.597.853 2.083.927 2.236.074.153.148.36.044.578-.095.209-.177.301-.33.479-.152.179-.296.316-.449.508-.14.173-.297.358-.12.66.177.302.786 1.293 1.687 2.094 1.16 1.034 2.135 1.354 2.469 1.497.33.144.527.121.72-.073.195-.193.827-.968 1.047-1.3.218-.33.44-.273.74-.163.302.11 1.916.903 2.244 1.069.328.166.546.248.625.386.08.137.08.795-.152 1.461z" />
                          </svg>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right form */}
              <div className="lg:col-span-3">
                <div className="bg-[#262220] border border-[#3a3330] rounded-3xl p-8 sm:p-10">
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                      <CheckCircle className="w-16 h-16 text-[#e8622a] mb-4" />
                      <h3 className="text-2xl font-extrabold text-white mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-gray-400">
                        Thank you for reaching out. Our team will get back to you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <div>
                      <h2 className="text-2xl font-extrabold text-white mb-8">
                        Start Your Project
                      </h2>
                      <div className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-gray-400 text-sm mb-2">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={form.name}
                              onChange={handleChange}
                              placeholder="John Doe"
                              className="w-full bg-[#1e1b18] border border-[#3a3330] rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#e8622a] transition-colors"
                            />
                          </div>
                          <div>
                            <label className="block text-gray-400 text-sm mb-2">Email *</label>
                            <input
                              type="email"
                              name="email"
                              value={form.email}
                              onChange={handleChange}
                              placeholder="john@company.com"
                              className="w-full bg-[#1e1b18] border border-[#3a3330] rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#e8622a] transition-colors"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-gray-400 text-sm mb-2">Phone</label>
                            <input
                              type="tel"
                              name="phone"
                              value={form.phone}
                              onChange={handleChange}
                              placeholder="+91 98765 43210"
                              className="w-full bg-[#1e1b18] border border-[#3a3330] rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#e8622a] transition-colors"
                            />
                          </div>
                          <div>
                            <label className="block text-gray-400 text-sm mb-2">Company</label>
                            <input
                              type="text"
                              name="company"
                              value={form.company}
                              onChange={handleChange}
                              placeholder="Your Company"
                              className="w-full bg-[#1e1b18] border border-[#3a3330] rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#e8622a] transition-colors"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-gray-400 text-sm mb-2">
                            Service Interested In
                          </label>
                          <select
                            name="service"
                            value={form.service}
                            onChange={handleChange}
                            className="w-full bg-[#1e1b18] border border-[#3a3330] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#e8622a] transition-colors appearance-none"
                          >
                            <option value="" className="text-gray-600">
                              Select a service
                            </option>
                            <option value="digital-transformation">Digital Transformation</option>
                            <option value="product-engineering">Product Engineering</option>
                            <option value="mobile-app">Mobile App Development</option>
                            <option value="web-development">Website Development</option>
                            <option value="ai-solutions">AI Solutions</option>
                            <option value="erp-crm">ERP / CRM</option>
                            <option value="shopify">Shopify Development</option>
                            <option value="wordpress">WordPress Development</option>
                            <option value="ux-design">UX Design</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-gray-400 text-sm mb-2">
                            Project Details *
                          </label>
                          <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            rows={5}
                            placeholder="Tell us about your project, goals, and timeline..."
                            className="w-full bg-[#1e1b18] border border-[#3a3330] rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#e8622a] transition-colors resize-none"
                          />
                        </div>

                        <button
                          onClick={handleSubmit}
                          disabled={loading || !form.name || !form.email || !form.message}
                          className="w-full btn-orange py-4 rounded-xl text-white font-semibold text-base flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {loading ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4" />
                              Send Message
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
