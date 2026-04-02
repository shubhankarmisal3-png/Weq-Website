import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import CTA from '../../components/CTA'
import WhatsAppButton from '../../components/WhatsAppButton'
import { services } from '../../lib/data'

export const metadata: Metadata = {
  title: 'Services | WEQ Technologies',
  description:
    'Explore WEQ Technologies\' comprehensive services: Digital Transformation, Product Engineering, Website Development, and UX Design.',
}

const allServices = [
  ...services,
  {
    id: 'ai-solutions',
    title: 'AI Solutions & Services',
    description:
      'Leverage the power of Artificial Intelligence and Machine Learning to automate processes, gain insights, and build intelligent applications.',
    items: [
      'Machine Learning Models',
      'Natural Language Processing',
      'Computer Vision',
      'AI Chatbots',
      'Predictive Analytics',
      'Data Science Consulting',
    ],
    icon: '🤖',
  },
  {
    id: 'erp-crm',
    title: 'ERP & CRM Systems',
    description:
      'Custom ERP and CRM development to streamline operations, improve customer relationships, and scale your business efficiently.',
    items: [
      'Custom ERP Development',
      'Salesforce Integration',
      'Custom CRM Development',
      'Process Automation',
      'Business Intelligence',
      'Data Migration',
    ],
    icon: '📊',
  },
  {
    id: 'shopify',
    title: 'Shopify Development',
    description:
      'Expert Shopify development to build, customize, and optimize your e-commerce store for maximum conversions and revenue.',
    items: [
      'Shopify Store Setup',
      'Custom Theme Development',
      'App Integration',
      'Shopify Plus',
      'Migration to Shopify',
      'Performance Optimization',
    ],
    icon: '🛍️',
  },
  {
    id: 'wordpress',
    title: 'WordPress Development',
    description:
      'Professional WordPress development for powerful, scalable websites with custom themes, plugins, and WooCommerce solutions.',
    items: [
      'Custom Theme Development',
      'Plugin Development',
      'WooCommerce Stores',
      'WordPress Maintenance',
      'Headless WordPress',
      'Migration & Optimization',
    ],
    icon: '📝',
  },
]

const serviceIconsMap: Record<string, string> = {
  'digital-transformation': '⚙️',
  'product-engineering': '🚀',
  'website-development': '🌐',
  'ux-design': '🎨',
  'ai-solutions': '🤖',
  'erp-crm': '📊',
  shopify: '🛍️',
  wordpress: '📝',
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 lg:py-28 bg-[#1e1b18]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Our <span className="text-[#e8622a]">Services</span>
            </h1>
            <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology services designed to transform your business and accelerate
              growth in the digital era.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 lg:py-24 bg-[#231f1c]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {allServices.map((service) => (
                <div
                  key={service.id}
                  className="group bg-[#262220] border border-[#3a3330] rounded-2xl p-7 hover:border-[#e8622a] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-[#e8622a]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#e8622a]/20 transition-colors">
                    <span className="text-2xl">{serviceIconsMap[service.id] || service.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#e8622a] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#e8622a] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${service.id}`}
                    className="inline-flex items-center gap-2 text-[#e8622a] text-sm font-semibold hover:gap-3 transition-all"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
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
