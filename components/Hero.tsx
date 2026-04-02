import Link from 'next/link'

type HeroProps = {
  title?: string;
  highlight?: string;
  description?: string;
}

export default function Hero({ title, highlight, description }: HeroProps) {
  const heroTitle = title || "End-to-End Product Engineering & ";
  const heroHighlight = highlight || "Digital Transformation Solutions";
  const heroDescription = description || "We turn innovative ideas into custom digital solutions. Our expertise in product engineering, mobile app development, and web solutions helps your business thrive in the digital era, transforming operations and enhancing customer experiences.";

  return (
    <section className="relative min-h-screen bg-[#1e1b18] flex items-center pt-20">
      {/* Subtle background texture */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#e8622a]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-[#e8622a]/3 rounded-full blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text */}
          <div className="fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white mb-6">
              {heroTitle}
              <span className="text-[#e8622a]">{heroHighlight}</span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-10 max-w-xl">
              {heroDescription}
            </p>
            <Link
              href="/contact-us"
              className="btn-orange inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-base"
            >
              Let&apos;s Innovate Together.
            </Link>
          </div>

          {/* Right - Badges */}
          <div className="flex flex-col items-center lg:items-end">
            <div className="grid grid-cols-2 gap-6 items-center">
              {/* Clutch badges using placeholder design */}
              <div className="flex flex-col gap-6">
                <div className="w-32 h-36 bg-[#262220] border border-[#3a3330] rounded-2xl flex flex-col items-center justify-center p-3 text-center">
                  <div className="text-[9px] text-gray-400 uppercase tracking-widest mb-1">Most Reviewed</div>
                  <div className="text-[8px] text-gray-400 uppercase tracking-wide mb-2">User Experience Company</div>
                  <div className="w-10 h-10 bg-[#e8622a]/10 rounded-full flex items-center justify-center mb-2">
                    <span className="text-[#e8622a] text-lg">★</span>
                  </div>
                  <div className="font-bold text-white text-sm">Clutch</div>
                  <div className="text-[9px] text-gray-400 mt-1">Mumbai</div>
                </div>
                <div className="w-32 h-36 bg-[#262220] border border-[#3a3330] rounded-2xl flex flex-col items-center justify-center p-3 text-center">
                  <div className="text-[9px] text-gray-400 uppercase tracking-widest mb-1">Top</div>
                  <div className="text-[8px] text-gray-400 uppercase tracking-wide mb-2">E-Commerce Developers</div>
                  <div className="font-bold text-white text-sm mt-1">Clutch</div>
                  <div className="text-[9px] text-gray-400 mt-1">Mumbai 2024</div>
                </div>
              </div>
              <div className="flex flex-col gap-6 items-center">
                <div className="w-32 h-36 bg-[#262220] border border-[#3a3330] rounded-2xl flex flex-col items-center justify-center p-3 text-center">
                  <div className="text-[9px] text-gray-400 uppercase tracking-widest mb-1">Top</div>
                  <div className="text-[8px] text-gray-400 uppercase tracking-wide mb-2">Software Developers</div>
                  <div className="font-bold text-white text-sm mt-1">Clutch</div>
                  <div className="text-[9px] text-gray-400 mt-1">Retail Mumbai</div>
                </div>
                <div className="w-32 h-36 bg-[#262220] border border-[#3a3330] rounded-2xl flex flex-col items-center justify-center p-3 text-center">
                  <div className="text-[9px] text-gray-400 uppercase tracking-widest mb-1">Top</div>
                  <div className="text-[8px] text-gray-400 uppercase tracking-wide mb-2">Shopify Company</div>
                  <div className="font-bold text-white text-sm mt-1">Clutch</div>
                  <div className="text-[9px] text-gray-400 mt-1">Mumbai 2024</div>
                </div>
                {/* DesignRush Badge */}
                <a
                  href="https://www.designrush.com/agency/profile/weq-technologies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-32 h-36 bg-[#262220] border border-[#3a3330] rounded-2xl flex flex-col items-center justify-center p-3 text-center hover:border-[#e8622a] transition-colors"
                >
                  <div className="text-[#e8622a] text-2xl mb-1">✦</div>
                  <div className="font-bold text-white text-xs">DesignRush</div>
                  <div className="text-[9px] text-[#e8622a] mt-1">✓ Verified Agency</div>
                  <div className="text-[9px] text-gray-400 mt-1">2024</div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted By Label */}
        <div className="mt-16 lg:mt-20 text-center">
          <p className="text-gray-400 text-sm tracking-widest uppercase">
            Trusted by industry-leading companies around the globe
          </p>
        </div>
      </div>
    </section>
  )
}
