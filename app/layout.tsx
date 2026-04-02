import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-mono"
})

export const metadata: Metadata = {
  title: {
    default: 'IoT Security World Summit Abu Dhabi 2026',
    template: '%s | IoT Security World Summit 2026'
  },
  description: 'Leading the Global Charge Against Next-Gen IoT Threats. A high-impact global platform where government authorities, critical infrastructure leaders, and cybersecurity innovators converge.',
  keywords: ['IoT Security', 'Cybersecurity', 'Abu Dhabi', 'Smart Cities', 'Critical Infrastructure', 'OT Security', 'Zero Trust'],
  authors: [{ name: 'IoT Security World Summit' }],
  openGraph: {
    title: 'IoT Security World Summit Abu Dhabi 2026',
    description: 'Leading the Global Charge Against Next-Gen IoT Threats',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
