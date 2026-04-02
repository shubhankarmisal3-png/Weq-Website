import type { Metadata } from 'next'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import CTA from '../../components/CTA'
import WhatsAppButton from '../../components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'About Us | WEQ Technologies',
  description:
    'Learn about WEQ Technologies — a Mumbai-based custom software development company delivering digital transformation solutions worldwide.',
}

const team = [
  { name: 'Nikhil Mistry', role: 'Co-Founder & CTO', initials: 'NM' },
  { name: 'Leadership Team', role: 'Product Engineering', initials: 'LT' },
  { name: 'Design Team', role: 'UI/UX & Creative', initials: 'DT' },
  { name: 'Dev Team', role: 'Full Stack Development', initials: 'DV' },
]

const values = [
  {
    title: 'Innovation First',
    desc: 'We push boundaries with cutting-edge technologies to deliver forward-thinking solutions.',
    icon: '💡',
  },
  {
    title: 'Client-Centric',
    desc: 'Every decision we make is driven by our clients\' goals, timelines, and success metrics.',
    icon: '🤝',
  },
  {
    title: 'Quality Delivery',
    desc: 'Rigorous testing and agile iterations ensure we deliver reliable, scalable software.',
    icon: '✅',
  },
  {
    title: 'Transparent Communication',
    desc: 'We keep clients in the loop at every stage with honest, proactive communication.',
    icon: '📢',
  },
]

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 lg:py-28 bg-[#1e1b18]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              About <span className="text-[#e8622a]">WEQ Technologies</span>
            </h1>
            <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
              WEQ Technologies is a Mumbai-based end-to-end product engineering and digital
              transformation company. We specialize in turning innovative ideas into scalable,
              impactful digital products trusted by 100+ clients across the globe.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 bg-[#231f1c]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-5">
                  Our Mission
                </h2>
                <p className="text-gray-400 text-base leading-relaxed mb-5">
                  At WEQ Technologies, our mission is to empower businesses through technology.
                  We combine deep technical expertise with strategic thinking to deliver solutions
                  that drive measurable business outcomes.
                </p>
                <p className="text-gray-400 text-base leading-relaxed">
                  With over 500 projects completed across 9+ industries, we bring unparalleled
                  expertise to every collaboration. Our agile, client-first approach ensures rapid
                  delivery without compromising on quality.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: '500+', label: 'Projects Completed' },
                  { val: '100+', label: 'Global Clients' },
                  { val: '9+', label: 'Industries' },
                  { val: '5+', label: 'Office Locations' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-[#262220] border border-[#3a3330] rounded-2xl p-6 text-center"
                  >
                    <div className="text-3xl font-extrabold text-[#e8622a] mb-1">{stat.val}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-[#1e1b18]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-14">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="bg-[#262220] border border-[#3a3330] rounded-2xl p-6 hover:border-[#e8622a] transition-colors"
                >
                  <div className="text-4xl mb-4">{v.icon}</div>
                  <h3 className="text-white font-bold text-lg mb-3">{v.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-[#231f1c]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-14">
              Our Team
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="bg-[#262220] border border-[#3a3330] rounded-2xl p-6 text-center hover:border-[#e8622a] transition-colors"
                >
                  <div className="w-16 h-16 rounded-full bg-[#e8622a]/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-[#e8622a] font-bold text-lg">{member.initials}</span>
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-1">{member.name}</h3>
                  <p className="text-gray-500 text-xs">{member.role}</p>
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
