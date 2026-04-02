import { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { AnimatedCard } from "@/components/animated-section"
import { Linkedin, Twitter, Globe } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Speaker Line-Up",
  description: "Meet the elite speakers at IoT Security World Summit 2026 - government leaders, national infrastructure experts, and global cybersecurity pioneers.",
}

const speakers = [
  {
    name: "Dr. Ahmed Al Mansoori",
    title: "Director of Cybersecurity",
    organization: "Abu Dhabi Digital Authority",
    bio: "Leading UAE's digital transformation and cybersecurity initiatives for over 15 years.",
    image: null,
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Sarah Chen",
    title: "Global CISO",
    organization: "TechSecure International",
    bio: "Former NSA advisor, now protecting Fortune 500 companies from emerging threats.",
    image: null,
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Khalid Al Rashid",
    title: "VP of OT Security",
    organization: "Gulf Energy Corp",
    bio: "Pioneer in securing critical energy infrastructure across the Middle East.",
    image: null,
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Dr. Elena Rodriguez",
    title: "Chief Research Officer",
    organization: "Quantum Defense Labs",
    bio: "Leading expert in post-quantum cryptography and future-ready security.",
    image: null,
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Mohammed Al Zaabi",
    title: "Head of Smart City Security",
    organization: "UAE Cyber Security Council",
    bio: "Architect of UAE's smart city security frameworks and standards.",
    image: null,
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Jennifer Park",
    title: "Senior Director",
    organization: "Zero Trust Alliance",
    bio: "Global authority on Zero Trust architecture implementation.",
    image: null,
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Omar Hassan",
    title: "CTO",
    organization: "CloudShield MENA",
    bio: "Expert in sovereign cloud security and data protection.",
    image: null,
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Dr. Michael Foster",
    title: "AI Security Lead",
    organization: "Global AI Defense Initiative",
    bio: "Pioneering AI-driven threat detection and response systems.",
    image: null,
    linkedin: "#",
    twitter: "#",
  },
]

function SpeakerCard({ speaker }: { speaker: typeof speakers[0] }) {
  const initials = speaker.name
    .split(" ")
    .map((n) => n[0])
    .join("")

  return (
    <div className="glass rounded-xl p-6 hover:border-primary/40 transition-all group">
      {/* Avatar */}
      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform">
        <span className="text-2xl font-bold text-primary-foreground">{initials}</span>
      </div>

      {/* Info */}
      <div className="text-center">
        <h3 className="text-lg font-semibold text-foreground mb-1">{speaker.name}</h3>
        <p className="text-primary text-sm font-medium mb-1">{speaker.title}</p>
        <p className="text-muted-foreground text-sm mb-4">{speaker.organization}</p>
        <p className="text-muted-foreground text-xs leading-relaxed mb-4">{speaker.bio}</p>

        {/* Social Links */}
        <div className="flex justify-center gap-3">
          <a
            href={speaker.linkedin}
            className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
            aria-label={`${speaker.name}'s LinkedIn`}
          >
            <Linkedin className="w-4 h-4 text-muted-foreground" />
          </a>
          <a
            href={speaker.twitter}
            className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
            aria-label={`${speaker.name}'s Twitter`}
          >
            <Twitter className="w-4 h-4 text-muted-foreground" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default function SpeakersPage() {
  return (
    <>
      <PageHeader
        subtitle="Speaker Line-Up"
        title="World-Class Cybersecurity Experts"
        description="Featuring government leaders, national infrastructure experts & global cybersecurity pioneers"
        backgroundImage="/images/speakers-hero.jpg"
      />

      {/* Speakers Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {speakers.map((speaker, index) => (
              <AnimatedCard key={index} index={index}>
                <SpeakerCard speaker={speaker} />
              </AnimatedCard>
            ))}
          </div>

          {/* More speakers coming */}
          <div className="text-center mt-16">
            <div className="glass-light rounded-xl p-8 inline-block">
              <p className="text-muted-foreground mb-2">More speakers to be announced</p>
              <p className="text-2xl font-bold text-primary">25+ Elite Speakers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Become a Speaker CTA */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Globe className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Become a Speaker
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Position yourself as a thought leader in national cybersecurity. Share your expertise with government officials, enterprise leaders, and global innovators.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">Apply to Speak</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Don&apos;t Miss These Industry Leaders
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Register now to hear from the best minds in IoT security.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">Register Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/agenda">View Agenda</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
