'use client'

import Link from "next/link"
import { Phone } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="border-b">
        <div className="flex h-10 items-center px-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span className="text-sm">+971 50 345 1276</span>
          </div>
          <Button variant="link" className="ml-auto text-sm">
            Request Free Quote
          </Button>
        </div>
      </div>
      <div className="flex h-16 items-center px-4 max-w-7xl mx-auto">
        <Link href="/" className="mr-6">
          <span className="sr-only">FotoBoxx</span>
          <img src="/placeholder.svg" alt="Logo" width={120} height={40} className="h-8 w-auto" />
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link href="#about">About Us</Link>
          <Link href="#portfolio">Portfolio</Link>
          <Link href="#services">Services</Link>
          <Link href="#contact">Get Free Quote</Link>
        </nav>
      </div>
    </header>
  )
}

