'use client'

import Link from "next/link"
import Image from 'next/image'
import { Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="space-y-4">
            <Image src="/placeholder.svg" alt="Logo" width={120} height={40} className="h-8 w-auto" />
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+971 50 345 1276</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1" />
                <span>Office 03, floor 12A Damac XL tower Business bay - Dubai UAE</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <nav className="grid gap-2">
              <Link href="/terms-conditions" className="hover:underline">
                Terms & Conditions
              </Link>
              <Link href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold">Connect With Us</h3>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-primary">
                WhatsApp
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} FotoBoxx. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

