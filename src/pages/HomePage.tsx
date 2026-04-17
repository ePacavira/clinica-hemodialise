import { HeroCarousel } from '../components/HeroCarousel'
import { HomeSearchBand } from '../components/HomeSearchBand'
import { UrgentCareCard } from '../components/UrgentCareCard'
import {
  FinalCtaSection,
  HealthWellbeingSection,
  TrustSection,
} from '../components/Sections'

export function HomePage() {
  return (
    <>
      <div className="relative">
        <HeroCarousel />
        <UrgentCareCard />
        <HomeSearchBand />
      </div>

      <div className="mt-16 md:mt-24">
        <TrustSection />
      </div>
      <HealthWellbeingSection />
      <FinalCtaSection />
    </>
  )
}
