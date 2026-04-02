"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Shield, Zap, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const features = [
  {
    title: "Smart City Security",
    description: "Protecting urban infrastructure and connected systems across the UAE and beyond.",
    image: "/images/smart-city.jpg",
    icon: Globe,
    link: "/industries",
  },
  {
    title: "IoT Device Protection",
    description: "Comprehensive security solutions for billions of connected devices worldwide.",
    image: "/images/iot-devices.jpg",
    icon: Shield,
    link: "/about",
  },
  {
    title: "Next-Gen Threat Defense",
    description: "Stay ahead of emerging cybersecurity threats with cutting-edge protection.",
    image: "/images/security-shield.jpg",
    icon: Zap,
    link: "/agenda",
  },
]

export function FeaturedSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Summit Focus Areas
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Securing Tomorrow&apos;s <span className="gradient-text">Connected World</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore the critical domains shaping the future of IoT security
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150 + 200}ms` }}
            >
              {/* Background Image */}
              <div className="aspect-[4/5] relative">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{feature.description}</p>
                  <Button 
                    asChild 
                    variant="ghost" 
                    className="p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent group/btn"
                  >
                    <Link href={feature.link} className="flex items-center gap-2">
                      Learn More
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Hover border effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/30 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
