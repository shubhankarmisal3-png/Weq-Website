import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getCustomPosts } from '../lib/api'

const fallbackCaseStudies = [
  {
    id: 'dyd',
    title: 'DYD',
    subtitle: 'Car Service App',
    tags: ['UI/UX Design', 'App & Web Development'],
    href: '/case-studies/dyd',
    color: '#e8622a',
    description: 'A modern car service platform connecting customers with verified mechanics.',
  },
  {
    id: 'brego',
    title: 'Brego Land',
    subtitle: 'Business Intelligence Platform',
    tags: ['UI/UX Design', 'App & Web Development'],
    href: '/case-studies/bregoland',
    color: '#d45a24',
    description: 'End-to-end business analytics and management dashboard for SMEs.',
  },
  {
    id: 'edstate',
    title: 'Edstate',
    subtitle: 'Real Estate Learning App',
    tags: ['UI/UX Design', 'App & Web Development'],
    href: '/case-studies/edstate',
    color: '#c04e1e',
    description: 'An e-learning platform tailored for real estate professionals and learners.',
  },
]

export default async function CaseStudies() {
  const apiCaseStudies = await getCustomPosts('case-studies');

  const caseStudiesToRender = apiCaseStudies && apiCaseStudies.length > 0
    ? apiCaseStudies.map((cs: any) => ({
        id: cs.slug,
        title: cs.title?.rendered,
        subtitle: cs.acf?.subtitle || cs.slug.replace('-', ' '),
        tags: cs.acf?.tags || ['UI/UX Design', 'App & Web Development'],
        href: `/case-studies/${cs.slug}`,
        color: cs.acf?.color || '#e8622a',
        description: cs.acf?.description || cs.content?.rendered?.replace(/(<([^>]+)>)/gi, "").substring(0, 150) || '',
      }))
    : fallbackCaseStudies;

  return (
    <section className="py-20 lg:py-28 bg-[#231f1c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Customer Stories
          </h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            Explore success stories from WEQ Technologies, where we&apos;ve delivered outstanding
            work for clients like Allana, Bhaav.in, Vet Education, and many others.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {caseStudiesToRender.map((cs: any) => (
            <Link
              key={cs.id}
              href={cs.href}
              className="group bg-[#262220] border border-[#3a3330] rounded-2xl overflow-hidden hover:border-[#e8622a] transition-all duration-300 hover:-translate-y-1"
            >
              {/* Color header */}
              <div
                className="h-48 flex items-center justify-center relative overflow-hidden"
                style={{ backgroundColor: cs.color + '20' }}
              >
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-white font-extrabold text-2xl"
                  style={{ backgroundColor: cs.color }}
                >
                  {cs.title.charAt(0)}
                </div>
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `radial-gradient(circle at 70% 50%, ${cs.color} 0%, transparent 60%)`,
                  }}
                />
              </div>

              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {cs.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="text-xs text-[#e8622a] bg-[#e8622a]/10 border border-[#e8622a]/20 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#e8622a] transition-colors">
                  {cs.title}
                </h3>
                <p className="text-gray-500 text-sm mb-3">{cs.subtitle}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{cs.description}</p>

                <div className="flex items-center gap-2 text-[#e8622a] text-sm font-semibold group-hover:gap-3 transition-all">
                  View Case Study <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/case-studies"
            className="btn-orange inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-base"
          >
            View All Case Studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
