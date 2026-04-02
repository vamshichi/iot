import { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { AnimatedSection, AnimatedCard } from "@/components/animated-section"
import { 
  Building2, 
  Zap, 
  Ship, 
  Heart, 
  Factory, 
  Home, 
  Plane, 
  ShoppingCart, 
  Radio,
  Shield,
  Users,
  Briefcase
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Industries",
  description: "One Platform. All Critical Sectors. IoT Security World Summit 2026 brings together leaders from Smart Cities, Energy, Healthcare, Manufacturing, and more.",
}

const industries = [
  {
    icon: Building2,
    title: "Smart Cities & Government",
    description: "Securing connected urban infrastructure, public services, and government digital assets.",
    challenges: ["Public safety systems", "Traffic management", "Citizen data protection"],
  },
  {
    icon: Zap,
    title: "Energy, Utilities & Oil & Gas",
    description: "Protecting critical energy infrastructure from cyber threats and ensuring operational continuity.",
    challenges: ["Grid security", "SCADA systems", "Pipeline monitoring"],
  },
  {
    icon: Ship,
    title: "Logistics, Ports & Supply Chain",
    description: "Securing global supply chains and maritime operations from emerging cyber risks.",
    challenges: ["Port operations", "Fleet management", "Inventory systems"],
  },
  {
    icon: Heart,
    title: "Healthcare & Life Sciences",
    description: "Protecting patient data, medical devices, and healthcare delivery systems.",
    challenges: ["Medical IoT devices", "Patient records", "Lab systems"],
  },
  {
    icon: Factory,
    title: "Manufacturing & Industry 4.0 (IIoT)",
    description: "Securing smart factories, industrial IoT, and production systems.",
    challenges: ["Production lines", "Quality control", "Predictive maintenance"],
  },
  {
    icon: Home,
    title: "Real Estate & Smart Buildings",
    description: "Protecting building automation systems and tenant data.",
    challenges: ["Building management", "Access control", "Energy systems"],
  },
  {
    icon: Plane,
    title: "Transportation, Mobility & Aviation",
    description: "Securing connected vehicles, aviation systems, and mobility platforms.",
    challenges: ["Fleet security", "Passenger data", "Navigation systems"],
  },
  {
    icon: ShoppingCart,
    title: "Retail, E-Commerce & Consumer Tech",
    description: "Protecting consumer IoT devices and retail technology infrastructure.",
    challenges: ["Payment systems", "Inventory IoT", "Customer data"],
  },
  {
    icon: Radio,
    title: "Telecom, Cloud & Digital Infrastructure",
    description: "Securing 5G networks, cloud platforms, and digital communication systems.",
    challenges: ["5G security", "Edge computing", "Network resilience"],
  },
]

const attendeeTypes = [
  {
    icon: Building2,
    title: "Government & Public Sector",
    roles: ["Policy makers & regulators", "Smart city authorities", "National infrastructure leaders"],
  },
  {
    icon: Briefcase,
    title: "Enterprise Leaders",
    roles: ["Energy, telecom, healthcare, logistics leaders", "Digital transformation heads", "Security decision-makers"],
  },
  {
    icon: Users,
    title: "Job Titles",
    roles: ["CISO / CIO / CTO / CDO / CRO", "Head of Cybersecurity / IoT Security", "OT / ICS Security Leaders", "SOC / Cloud / IAM Heads"],
  },
]

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        subtitle="Industries"
        title="One Platform. All Critical Sectors."
        description="Cross-industry security. Unified national resilience."
        backgroundImage="/images/industries-hero.jpg"
      />

      {/* Industries Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <AnimatedCard
                key={index}
                index={index}
                className="glass rounded-xl p-8 hover:border-primary/40 transition-all group"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <industry.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{industry.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{industry.description}</p>
                <div className="space-y-2">
                  <p className="text-xs text-primary font-semibold uppercase tracking-wider">Key Challenges:</p>
                  <ul className="space-y-1">
                    {industry.challenges.map((challenge, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary" />
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Attend */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Who Should Attend</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
              Built for Decision Makers
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {attendeeTypes.map((type, index) => (
              <div key={index} className="glass rounded-xl p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <type.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{type.title}</h3>
                <ul className="space-y-2">
                  {type.roles.map((role, i) => (
                    <li key={i} className="text-sm text-muted-foreground">{role}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Industry Focus */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass rounded-xl p-12 text-center">
              <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Cross-Industry Security
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                The IoT Security World Summit brings together leaders from all critical sectors to build unified national resilience against emerging cyber threats.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">Register Now</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/sponsors">Become a Sponsor</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
