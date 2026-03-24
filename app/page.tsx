import HeroSection from '@/components/sections/HeroSection'
import KeyPointsBar from '@/components/sections/KeyPointsBar'
import ServicesSection from '@/components/sections/ServicesSection'
import StepsSection from '@/components/sections/StepsSection'
import BrandsMarquee from '@/components/sections/BrandsMarquee'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import EnergyLabelSection from '@/components/sections/EnergyLabelSection'
import RealisationsGrid from '@/components/sections/RealisationsGrid'
import FaqSection from '@/components/sections/FaqSection'
import CtaBanner from '@/components/sections/CtaBanner'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <KeyPointsBar />
      <ServicesSection />
      <StepsSection />
      <BrandsMarquee />
      <TestimonialsSection />
      <EnergyLabelSection />
      <RealisationsGrid />
      <FaqSection />
      <CtaBanner />
    </>
  )
}
