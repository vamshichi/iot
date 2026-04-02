import { HeroSection } from "@/components/home/hero-section"
import { StatsSection } from "@/components/home/stats-section"
import { WhyAttendSection } from "@/components/home/why-attend-section"
import { FeaturedSection } from "@/components/home/featured-section"
import { HighlightsSection } from "@/components/home/highlights-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <WhyAttendSection />
      <FeaturedSection />
      <HighlightsSection />
      <CTASection />
    </>
  )
}
