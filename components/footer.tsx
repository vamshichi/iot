import Link from "next/link"
import Image from "next/image"
import { MapPin, Calendar, Mail, Phone } from "lucide-react"

const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/agenda", label: "Agenda" },
  { href: "/speakers", label: "Speakers" },
  { href: "/industries", label: "Industries" },
]

const participateLinks = [
  { href: "/contact", label: "Register as Delegate" },
  { href: "/sponsors", label: "Become a Sponsor" },
  { href: "/partner-with-us", label: "Partner With Us" },
  { href: "/contact", label: "Apply to Speak" },
]

export function Footer() {
  return (
    <footer className="bg-cyber-dark border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Image
              src="/images/iotlogo.png"
              alt="IoT Security World Summit"
              width={180}
              height={54}
              className="h-14 w-auto"
            />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Securing the Future of Connected Intelligence. The UAE&apos;s most critical cybersecurity gathering for connected infrastructure.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4 text-primary" />
              <span>9th July 2026</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Abu Dhabi, UAE</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Participate */}
          <div>
            <h3 className="text-foreground font-semibold mb-6">Participate</h3>
            <ul className="space-y-3">
              {participateLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-foreground font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@iotsecuritysummit.ae"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  info@iotsecuritysummit.ae
                </a>
              </li>
              <li>
                <a
                  href="tel:+97126789000"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  +971 2 678 9000
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} IoT Security World Summit. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
