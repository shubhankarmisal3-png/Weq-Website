import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { services as fallbackServices } from '../lib/data'
import { getCustomPosts } from '../lib/api'

const serviceIcons: Record<string, string> = {
  'digital-transformation': '⚙️',
  'product-engineering': '🚀',
  'website-development': '🌐',
  'ux-design': '🎨',
}

export default async function Services() {
  const apiServices = await getCustomPosts('services');

  // Map API services to standard format or use fallback
  const servicesToRender = apiServices && apiServices.length > 0
    ? apiServices.map((service: any) => ({
        id: service.slug,
        title: service.title?.rendered,
        description: service.acf?.description || service.content?.rendered?.replace(/(<([^>]+)>)/gi, "").substring(0, 150) || '',
        items: service.acf?.items || [],
        icon: service.acf?.icon || serviceIcons[service.slug] || '⚙️',
      }))
    : fallbackServices;

  return (
    <section className="py-20 lg:py-28 bg-[#1e1b18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Unleash Your Potential with Our
            <span className="text-[#e8622a]"> Comprehensive Services</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesToRender.map((service: any) => (
            <div
              key={service.id}
              className="service-card group bg-[#262220] border border-[#3a3330] rounded-2xl p-6 cursor-pointer transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-[#e8622a]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#e8622a]/20 transition-colors">
                <span className="text-2xl">{typeof service.icon === 'string' && serviceIcons[service.id] ? serviceIcons[service.id] : service.icon}</span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#e8622a] transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Arrow */}
              <div className="flex items-center gap-2 mb-5">
                <ArrowRight className="w-5 h-5 text-[#e8622a]" />
              </div>

              {/* Items list */}
              {service.items && service.items.length > 0 && (
                <ul className="space-y-2">
                  {service.items.map((item: string) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#e8622a] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/case-studies"
            className="btn-orange inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-base"
          >
            Hire us now
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
