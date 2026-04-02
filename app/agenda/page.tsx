import { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { AnimatedSection, AnimatedCard } from "@/components/animated-section"
import { Shield, Settings, Cpu, Users, MessageSquare, Presentation, Coffee, Calendar, Download, Sparkles } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Conference Agenda",
  description: "Explore the IoT Security World Summit 2026 agenda - Securing UAE's Critical & National Infrastructure with themes on Cyber Resilience, Industrial Security, and Future-Ready Security.",
}

const themes = [
  {
    icon: Shield,
    title: "Theme 1: National Cyber Resilience",
    color: "text-primary",
    bgColor: "bg-primary/10",
    topics: [
      "Securing cross-industry infrastructure",
      "Zero Trust across ecosystems",
      "Government cybersecurity mandates",
    ],
  },
  {
    icon: Settings,
    title: "Theme 2: Industrial & Operational Security",
    color: "text-accent",
    bgColor: "bg-accent/10",
    topics: [
      "IT/OT convergence",
      "Securing logistics, mobility & supply chains",
      "Eliminating legacy vulnerabilities",
    ],
  },
  {
    icon: Cpu,
    title: "Theme 3: Future-Ready Security",
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
    topics: [
      "Sovereign cloud & data protection",
      "AI-driven cyber defense",
      "Quantum-ready infrastructure",
    ],
  },
]

const sessionHighlights = [
  { icon: Users, label: "25+ Elite Speakers" },
  { icon: Presentation, label: "10+ Strategic Sessions" },
  { icon: MessageSquare, label: "High-Level Panel Discussions" },
  { icon: Sparkles, label: "Exclusive Fireside Chats" },
  { icon: Coffee, label: "Dedicated Networking Sessions" },
  { icon: Calendar, label: "Pre-Scheduled 1:1 Meetings" },
]

const schedule = [
  {
    time: "08:00 - 09:00",
    title: "Registration & Networking Breakfast",
    type: "Networking",
    description: "Check-in and connect with fellow attendees over breakfast",
  },
  {
    time: "09:00 - 09:30",
    title: "Opening Ceremony & Keynote Address",
    type: "Keynote",
    description: "Welcome address and setting the vision for IoT security",
  },
  {
    time: "09:30 - 10:30",
    title: "National Cyber Resilience: Securing Critical Infrastructure",
    type: "Panel Discussion",
    description: "Government leaders discuss national cybersecurity frameworks",
  },
  {
    time: "10:30 - 11:00",
    title: "Networking Break & Solution Showcase",
    type: "Break",
    description: "Explore innovative cybersecurity solutions",
  },
  {
    time: "11:00 - 12:00",
    title: "Zero Trust Architecture for IoT Ecosystems",
    type: "Technical Session",
    description: "Implementing Zero Trust across connected devices",
  },
  {
    time: "12:00 - 13:00",
    title: "IT/OT Convergence: Bridging the Security Gap",
    type: "Panel Discussion",
    description: "Strategies for securing converged environments",
  },
  {
    time: "13:00 - 14:00",
    title: "Networking Lunch",
    type: "Networking",
    description: "Connect with industry peers and speakers",
  },
  {
    time: "14:00 - 15:00",
    title: "AI-Powered Cyber Defense",
    type: "Technical Session",
    description: "Leveraging AI and ML for threat detection",
  },
  {
    time: "15:00 - 16:00",
    title: "Fireside Chat: Future of IoT Security",
    type: "Fireside Chat",
    description: "Exclusive conversation with industry pioneers",
  },
  {
    time: "16:00 - 16:30",
    title: "Afternoon Break",
    type: "Break",
    description: "Refreshments and networking",
  },
  {
    time: "16:30 - 17:30",
    title: "Quantum-Ready Infrastructure",
    type: "Technical Session",
    description: "Preparing for post-quantum cryptography",
  },
  {
    time: "17:30 - 18:00",
    title: "Closing Remarks & Networking Reception",
    type: "Closing",
    description: "Summary and evening networking",
  },
]

function getTypeStyles(type: string) {
  switch (type) {
    case "Keynote":
      return "bg-primary/20 text-primary"
    case "Panel Discussion":
      return "bg-accent/20 text-accent"
    case "Technical Session":
      return "bg-chart-3/20 text-chart-3"
    case "Fireside Chat":
      return "bg-chart-4/20 text-chart-4"
    case "Networking":
    case "Break":
      return "bg-muted text-muted-foreground"
    default:
      return "bg-secondary text-secondary-foreground"
  }
}

export default function AgendaPage() {
  return (
    <>
      <PageHeader
        subtitle="Conference Agenda"
        title="Securing UAE's Critical & National Infrastructure"
        description="A day of high-impact sessions, strategic discussions, and valuable networking opportunities"
        backgroundImage="/images/agenda-hero.jpg"
      />

      {/* Themes Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Themes Overview</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
              Three Pillars of IoT Security
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {themes.map((theme, index) => (
              <AnimatedCard key={index} index={index} className="glass rounded-xl p-8">
                <div className={`w-14 h-14 rounded-lg ${theme.bgColor} flex items-center justify-center mb-6`}>
                  <theme.icon className={`w-7 h-7 ${theme.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{theme.title}</h3>
                <ul className="space-y-3">
                  {theme.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-start gap-2 text-muted-foreground">
                      <span className={`w-1.5 h-1.5 rounded-full ${theme.bgColor.replace('/10', '')} mt-2`} />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Session Highlights */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Session Highlights</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
              What to Expect
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {sessionHighlights.map((item, index) => (
              <div key={index} className="glass-light rounded-xl p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Full Conference Agenda</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
              9th July 2026
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {schedule.map((item, index) => (
              <AnimatedSection key={index} animation="slide-up" delay={index * 50}>
                <div className="glass rounded-xl p-6 hover:border-primary/30 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="md:w-32 flex-shrink-0">
                      <span className="text-primary font-mono text-sm">{item.time}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                        <span className={`text-xs px-2 py-1 rounded-full ${getTypeStyles(item.type)}`}>
                          {item.type}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Download Button */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
              <Download className="mr-2 w-4 h-4" />
              Download Full Agenda
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Don&apos;t Miss a Single Session
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Register now to secure your spot at the most impactful IoT security event of 2026.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">Register Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/speakers">View Speakers</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
