"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/agenda", label: "Agenda" },
  { href: "/speakers", label: "Speakers" },
  { href: "/industries", label: "Industries" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/partner-with-us", label: "Partner" },
  // { href: "/contact", label: "Contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "glass py-2 shadow-lg shadow-primary/5"
          : "bg-gradient-to-b from-background/80 to-transparent py-4",
        mounted ? "animate-slide-down" : "opacity-0"
      )}
    >
      <nav className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/images/iotlogo.png"
            alt="IoT Security World Summit"
            width={200}
            height={60}
            className="h-10 md:h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 group",
                pathname === link.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {link.label}
              {/* Active indicator */}
              <span 
                className={cn(
                  "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary rounded-full transition-all duration-300",
                  pathname === link.href ? "w-4" : "w-0 group-hover:w-4"
                )}
              />
            </Link>
          ))}
          <Button 
            asChild 
            className="ml-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold card-hover"
          >
            <Link href="/contact" className="flex items-center gap-2">
              Register
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-foreground rounded-lg hover:bg-secondary/50 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6">
            <span 
              className={cn(
                "absolute top-1/2 left-0 w-6 h-0.5 bg-current transition-all duration-300",
                isMobileMenuOpen ? "rotate-45 -translate-y-1/2" : "-translate-y-2"
              )}
            />
            <span 
              className={cn(
                "absolute top-1/2 left-0 w-6 h-0.5 bg-current transition-all duration-300 -translate-y-1/2",
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              )}
            />
            <span 
              className={cn(
                "absolute top-1/2 left-0 w-6 h-0.5 bg-current transition-all duration-300",
                isMobileMenuOpen ? "-rotate-45 -translate-y-1/2" : "translate-y-1.5"
              )}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-500 ease-in-out",
          isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="glass mt-2 mx-4 rounded-xl p-4 animate-slide-down">
          <div className="flex flex-col gap-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300",
                  pathname === link.href
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                )}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
              </Link>
            ))}
            <Button 
              asChild 
              className="mt-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              <Link href="/contact" className="flex items-center justify-center gap-2">
                Register Now
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
