import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import CTA from '../../components/CTA'
import WhatsAppButton from '../../components/WhatsAppButton'
import { getCustomPosts } from '../../lib/api'

export const metadata: Metadata = {
  title: 'Case Studies | WEQ Technologies',
  description:
    'Explore WEQ Technologies case studies — real digital transformation projects delivering measurable results for clients worldwide.',
}

export default async function CaseStudiesPage() {
  const apiCases = await getCustomPosts('case-studies');

  // fallback logic
  const cases = apiCases && apiCases.length > 0
    ? apiCases.map((cs: any) => ({
        id: cs.slug,
        title: cs.title?.rendered,
        subtitle: cs.acf?.subtitle || cs.slug.replace('-', ' '),
        description: cs.acf?.description || cs.content?.rendered?.replace(/(<([^>]+)>)/gi, "").substring(0, 150) || '',
        tags: cs.acf?.tags || ['UI/UX Design', 'Web Development'],
        stack: cs.acf?.stack || [],
        color: cs.acf?.color || '#e8622a',
        href: `/case-studies/${cs.slug}`,
      }))
    : [
        {
          id: 'dyd',
          title: 'DYD',
          subtitle: 'Car Service App',
          description: 'A modern on-demand car service platform connecting vehicle owners with verified, professional mechanics. Built with React Native and Node.js for seamless iOS and Android experience.',
          tags: ['UI/UX Design', 'Mobile App', 'Web Development'],
          stack: ['React Native', 'Node.js', 'MongoDB', 'AWS'],
          color: '#e8622a',
          href: '/case-studies/dyd',
        },
        {
          id: 'brego',
          title: 'Brego Land',
          subtitle: 'Business Intelligence Platform',
          description: 'End-to-end business analytics and sales management dashboard for SMEs. Empowers business owners with real-time KPIs, team tracking, and actionable insights.',
          tags: ['UI/UX Design', 'Web App', 'Data Analytics'],
          stack: ['React', 'Python', 'PostgreSQL', 'AWS'],
          color: '#d45a24',
          href: '/case-studies/bregoland',
        },
        {
          id: 'edstate',
          title: 'Edstate',
          subtitle: 'Real Estate Learning App',
          description: 'A comprehensive e-learning platform tailored for real estate professionals. Features structured courses, certification tracking, and community collaboration tools.',
          tags: ['UI/UX Design', 'Mobile App', 'LMS'],
          stack: ['Flutter', 'Node.js', 'MongoDB', 'Firebase'],
          color: '#c04e1e',
          href: '/case-studies/edstate',
        },
      ];

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 lg:py-28 bg-[#1e1b18]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Case <span className="text-[#e8622a]">Studies</span>
            </h1>
            <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
              Explore how we&apos;ve helped businesses across industries build transformative
              digital products that deliver real, measurable results.
            </p>
          </div>
        </section>

        {/* Cases */}
        <section className="py-16 lg:py-24 bg-[#231f1c]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            {cases.map((cs: any, index: number) => (
              <div
                key={cs.id}
                className={`group bg-[#262220] border border-[#3a3330] rounded-3xl overflow-hidden hover:border-[#e8622a] transition-all duration-300 grid grid-cols-1 lg:grid-cols-2 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Color panel */}
                <div
                  className="h-56 lg:h-auto relative flex items-center justify-center overflow-hidden"
                  style={{ backgroundColor: cs.color + '18' }}
                >
                  <div
                    className="w-28 h-28 rounded-3xl flex items-center justify-center text-white font-extrabold text-4xl shadow-2xl"
                    style={{ backgroundColor: cs.color }}
                  >
                    {cs.title.charAt(0)}
                  </div>
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `radial-gradient(circle at 60% 50%, ${cs.color} 0%, transparent 70%)`,
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cs.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="text-xs text-[#e8622a] bg-[#e8622a]/10 border border-[#e8622a]/20 rounded-full px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-1 group-hover:text-[#e8622a] transition-colors">
                    {cs.title}
                  </h2>
                  <p className="text-gray-500 text-sm mb-4">{cs.subtitle}</p>
                  <p className="text-gray-400 text-base leading-relaxed mb-6 line-clamp-3">{cs.description}</p>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {cs.stack.map((tech: string) => (
                      <span
                        key={tech}
                        className="text-xs text-gray-400 bg-[#1e1b18] border border-[#3a3330] rounded-lg px-3 py-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={cs.href}
                    className="inline-flex items-center gap-2 text-[#e8622a] font-semibold group-hover:gap-3 transition-all"
                  >
                    View Case Study <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
