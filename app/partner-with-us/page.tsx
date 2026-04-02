import { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { AnimatedSection, AnimatedCard } from "@/components/animated-section"
import { 
  Newspaper, 
  Building2, 
  Globe,
  Users,
  Megaphone,
  Link2,
  CheckCircle2
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Partner With Us",
  description: "Partner with IoT Security World Summit Abu Dhabi 2026. Media partners, association partners, and government collaboration opportunities.",
}

const partnerTypes = [
  {
    icon: Newspaper,
    title: "Media Partners",
    description: "Amplify reach across global cybersecurity communities",
    benefits: [
      "Brand visibility across event channels",
      "Exclusive content opportunities",
      "Press access and interviews",
      "Social media collaboration",
      "Post-event coverage rights",
    ],
    audience: "Global cybersecurity media, tech publications, industry analysts",
  },
  {
    icon: Users,
    title: "Association Partners",
    description: "Collaborate with industry bodies & ecosystems",
    benefits: [
      "Member engagement opportunities",
      "Joint programming possibilities",
      "Networking facilitation",
      "Knowledge sharing platform",
      "Industry alignment",
    ],
    audience: "Industry associations, professional bodies, standards organizations",
  },
  {
    icon: Building2,
    title: "Government Collaboration",
    description: "Align with national cybersecurity initiatives",
    benefits: [
      "Policy dialogue participation",
      "Public-private partnership building",
      "Regulatory insight access",
      "National security alignment",
      "Strategic positioning",
    ],
    audience: "Government agencies, public sector entities, regulatory bodies",
  },
]

const partnerBenefits = [
  {
    icon: Megaphone,
    title: "Brand Amplification",
    description: "Reach decision-makers across government and enterprise sectors",
  },
  {
    icon: Link2,
    title: "Network Expansion",
    description: "Connect with the region's most influential cybersecurity community",
  },
  {
    icon: Globe,
    title: "Global Visibility",
    description: "Position your organization on the international cybersecurity stage",
  },
]

export default function PartnerWithUsPage() {
  return (
    <>
      <PageHeader
        subtitle="Partner With Us"
        title="Join the Movement"
        description="Partner with the region's most impactful cybersecurity event"
        backgroundImage="/images/partner-hero.jpg"
      />

      {/* Partner Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {partnerBenefits.map((benefit, index) => (
              <AnimatedCard key={index} index={index} className="glass rounded-xl p-8 text-center">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Partnership Opportunities</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
              Choose Your Partnership Path
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {partnerTypes.map((type, index) => (
              <AnimatedCard key={index} index={index} className="glass rounded-xl p-8 hover:border-primary/40 transition-all">
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <type.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{type.title}</h3>
                <p className="text-primary text-sm mb-4">{type.description}</p>
                
                <div className="mb-6">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Benefits Include:</p>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    <span className="text-foreground font-medium">Ideal for:</span> {type.audience}
                  </p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">How It Works</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
                Simple Partnership Process
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Enquire", description: "Submit your partnership interest" },
                { step: "02", title: "Discuss", description: "We'll explore mutual opportunities" },
                { step: "03", title: "Customize", description: "Tailor partnership to your goals" },
                { step: "04", title: "Activate", description: "Launch partnership activities" },
              ].map((item, index) => (
                <AnimatedSection key={index} animation="scale" delay={index * 150}>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary">{item.step}</span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Partner?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Join us in securing the UAE&apos;s connected future. Let&apos;s discuss how we can collaborate.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">Partner With Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/sponsors">View Sponsorship Options</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
