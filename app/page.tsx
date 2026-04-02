import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ClientLogos from '../components/ClientLogos'
import Stats from '../components/Stats'
import Services from '../components/Services'
import Industries from '../components/Industries'
import Process from '../components/Process'
import CaseStudies from '../components/CaseStudies'
import Testimonials from '../components/Testimonials'
import Clientele from '../components/Clientele'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import { getPageBySlug } from '../lib/api'

export default async function Home() {
  const homeData = await getPageBySlug('home');
  const acfData = homeData?.acf || {};

  return (
    <>
      <Navbar />
      <main>
        <Hero 
          title={acfData.hero_title} 
          highlight={acfData.hero_highlight} 
          description={acfData.hero_description} 
        />
        <ClientLogos />
        <Stats />
        <Services />
        <Industries />
        <Process />
        <CaseStudies />
        <Testimonials testimonials={acfData.testimonials} />
        <Clientele />
        <FAQ faqs={acfData.faqs} />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
