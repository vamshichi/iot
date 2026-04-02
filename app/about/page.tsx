import { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { AnimatedSection, AnimatedCard } from "@/components/animated-section"
import { Building2, Target, Shield, TrendingUp, CheckCircle2, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "About the Summit",
  description: "The UAE's Most Critical Cybersecurity Gathering for Connected Infrastructure. Learn about IoT Security World Summit Abu Dhabi 2026.",
}

const whyThisSummit = [
  {
    icon: Building2,
    title: "Government Focus",
    points: [
      "Abu Dhabi Digital Authority",
      "UAE Cyber Security Council",
      "Navigate regulations",
      "Benchmark national strategies",
      "Secure critical infrastructure",
    ],
  },
  {
    icon: Target,
    title: "Sponsor ROI",
    points: [
      "Direct access to budget owners & regulators",
      "Tap into mandatory cybersecurity spending",
      "Position your brand at the center of transformation",
      "This is pipeline, influence & business",
    ],
  },
  {
    icon: Shield,
    title: "Enterprise Impact",
    points: [
      "Secure energy, healthcare, logistics, telecom & smart cities",
      "Solve real vulnerabilities",
      "Discover deployable solutions",
    ],
  },
]

const marketStats = [
  { value: "$35.5B", label: "IoT Market by 2028" },
  { value: "$24.6B", label: "IoT Security by 2031" },
  { value: "5G+", label: "Growth Drivers" },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        subtitle="About the Summit"
        title="The UAE's Most Critical Cybersecurity Gathering"
        description="For Connected Infrastructure"
        backgroundImage="/images/about-hero.jpg"
      />

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="slide-up">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                The United Arab Emirates is leading the global transformation of smart cities, digital government, and connected infrastructure—making IoT security a national priority, not an option.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="slide-up" delay={100}>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                With investments projected to reach <span className="text-primary font-semibold">USD 24.6 Billion by 2031</span>, this summit is where:
              </p>
            </AnimatedSection>
            <ul className="space-y-4 mb-12">
              {[
                "Governments define cybersecurity mandates",
                "Enterprises solve mission-critical vulnerabilities",
                "Technology leaders deliver real-world solutions",
              ].map((item, index) => (
                <AnimatedSection key={index} animation="slide-left" delay={200 + index * 100}>
                  <li className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                </AnimatedSection>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why This Summit */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Why This Summit</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
              Built for Government. Designed for Decision Makers.
            </h2>
            <p className="text-muted-foreground mt-4">Engineered for Impact.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyThisSummit.map((item, index) => (
              <AnimatedCard key={index} index={index} className="glass rounded-xl p-8">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{item.title}</h3>
                <ul className="space-y-3">
                  {item.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Market Opportunity</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
              The World&apos;s Fastest Growing IoT Security Market
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            {marketStats.map((stat, index) => (
              <AnimatedCard key={index} index={index} className="glass rounded-xl p-8 text-center">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="w-5 h-5 text-primary mr-2" />
                  <span className="text-3xl font-bold text-primary">{stat.value}</span>
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </AnimatedCard>
            ))}
          </div>

          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="glass-light rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <AlertTriangle className="w-5 h-5 text-destructive" />
                <h3 className="font-semibold text-foreground">Reality</h3>
              </div>
              <p className="text-muted-foreground">
                Every connected device = A potential attack point
              </p>
            </div>
            <div className="glass-light rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">Shift</h3>
              </div>
              <p className="text-muted-foreground">
                Security is legally enforced, budget-backed, mission-critical
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Ready to Be Part of This Transformation?
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">Register as Delegate</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/sponsors">Become a Sponsor</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
