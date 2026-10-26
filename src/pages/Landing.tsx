import Hero from '@/sections/Hero'
import About from '@/sections/About'
import Modules from '@/sections/Modules'
import Trainer from '@/sections/Trainer'
import WhyChoose from '@/sections/WhyChoose'
import Testimonials from '@/sections/Testimonials'
import FinalCta from '@/sections/FinalCta'
import Layout from '@/components/Layout'

export default function Landing() {
  return (
    <Layout>
      <Hero />
      <About />
      <Modules />
      <Trainer />
      <WhyChoose />
      <Testimonials />
      <FinalCta />
    </Layout>
  )
}
