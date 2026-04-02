import { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { AnimatedSection, AnimatedCard } from "@/components/animated-section"
import { 
  Users, 
  TrendingUp, 
  Presentation, 
  Handshake,
  Bot,
  Settings,
  ShieldCheck,
  Cloud,
  Radio,
  Lock,
  Download,
  CheckCircle2,
  Star
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Sponsors",
  description: "Be Part of the UAE's National Security Transformation. Sponsorship opportunities at IoT Security World Summit Abu Dhabi 2026.",
}

const whySponsor = [
  {
    icon: Users,
    title: "Meet Government Decision-Makers",
    description: "Direct access to policy makers, regulators, and national infrastructure leaders.",
  },
  {
    icon: TrendingUp,
    title: "Access Multi-Billion Dollar Market",
    description: "Tap into the world's fastest-growing IoT security market with mandatory spending.",
  },
  {
    icon: Presentation,
    title: "Showcase Cutting-Edge Solutions",
    description: "Present your innovations to enterprises solving mission-critical vulnerabilities.",
  },
  {
    icon: Handshake,
    title: "Build High-Value Partnerships",
    description: "Connect with government entities, enterprises, and technology leaders.",
  },
]

const sponsorCategories = [
  { icon: Bot, label: "AI Cybersecurity" },
  { icon: Settings, label: "OT / ICS Security" },
  { icon: ShieldCheck, label: "Zero Trust Platforms" },
  { icon: Cloud, label: "Sovereign Cloud Providers" },
  { icon: Radio, label: "Telecom & 5G Security" },
  { icon: Lock, label: "Quantum Security" },
]

const packages = [
  {
    tier: "Platinum",
    tagline: "Maximum Visibility",
    benefits: [
      "Premium exhibition space (6x6m)",
      "Keynote speaking slot",
      "10 delegate passes",
      "Logo on all event materials",
      "Exclusive networking dinner invite",
      "Pre-event marketing campaign",
      "Post-event lead report",
      "VIP meeting room access",
    ],
    highlight: true,
  },
  {
    tier: "Gold",
    tagline: "Strategic Presence",
    benefits: [
      "Exhibition space (4x4m)",
      "Panel discussion slot",
      "6 delegate passes",
      "Logo on select materials",
      "Networking reception invite",
      "Digital marketing inclusion",
      "Lead generation support",
    ],
    highlight: false,
  },
  {
    tier: "Silver",
    tagline: "Essential Exposure",
    benefits: [
      "Exhibition space (3x3m)",
      "4 delegate passes",
      "Logo on website",
      "Session branding",
      "Networking opportunities",
      "Basic lead capture",
    ],
    highlight: false,
  },
  {
    tier: "Bronze",
    tagline: "Market Entry",
    benefits: [
      "Exhibition table",
      "2 delegate passes",
      "Logo on website",
      "Networking access",
      "Basic visibility",
    ],
    highlight: false,
  },
]

export default function SponsorsPage() {
  return (
    <>
      <PageHeader
        subtitle="Sponsorship Opportunities"
        title="Be Part of the UAE's National Security Transformation"
        description="Position your brand at the center of the region's most important IoT security event"
        backgroundImage="/images/sponsors-hero.jpg"
      />

      {/* Why Sponsor */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Why Sponsor</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
              The ROI That Matters
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whySponsor.map((item, index) => (
              <AnimatedCard key={index} index={index} className="glass rounded-xl p-6 text-center hover:border-primary/40 transition-all">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsor Categories */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Sponsor Categories</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
              Align With Your Solution Area
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {sponsorCategories.map((category, index) => (
              <div key={index} className="glass-light rounded-xl p-6 text-center hover:border-primary/30 transition-all">
                <category.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-sm font-medium text-foreground">{category.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Packages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Sponsorship Packages</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
              Custom Packages for Maximum Impact
            </h2>
            <p className="text-muted-foreground mt-4">
              Designed for visibility, engagement & deal-making
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, index) => (
              <AnimatedCard
                key={index}
                index={index}
                className={`glass rounded-xl p-6 relative ${
                  pkg.highlight ? "border-primary ring-1 ring-primary" : ""
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6 pt-2">
                  <h3 className="text-2xl font-bold text-foreground">{pkg.tier}</h3>
                  <p className="text-primary text-sm">{pkg.tagline}</p>
                </div>
                <ul className="space-y-3">
                  {pkg.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className={`w-full mt-6 ${
                    pkg.highlight
                      ? "bg-primary hover:bg-primary/90"
                      : "bg-secondary hover:bg-secondary/80"
                  }`}
                >
                  <Link href="/contact">Enquire Now</Link>
                </Button>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* The Outcome */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              The Outcome
            </h2>
            <div className="flex flex-wrap justify-center gap-8 mb-10">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">Meetings</p>
              </div>
              <div className="text-3xl font-bold text-muted-foreground">|</div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">Pipeline</p>
              </div>
              <div className="text-3xl font-bold text-muted-foreground">|</div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">Deals</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/contact">Become a Sponsor</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
                <Download className="mr-2 w-4 h-4" />
                Download Sponsorship Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
