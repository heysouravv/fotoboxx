'use client'

import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare, Paintbrush, Building2, Clock, Gift } from 'lucide-react'

const services = [
  {
    icon: MessageSquare,
    title: "Consultation",
    description: "Free, No Obligation Consultation, Design & Quotation",
  },
  {
    icon: Paintbrush,
    title: "Stand Design",
    description: "A Design Team Producing Cutting Edge Concepts To Your Requirements",
  },
  {
    icon: Building2,
    title: "Stand Build",
    description: "High-Quality Material used for fabrication & production",
  },
  {
    icon: Clock,
    title: "Project Management",
    description: "Hassle-Free On time Booth Completion with our 24/7 Available project managers",
  },
  {
    icon: Gift,
    title: "Add-Ons",
    description: "Event Catering, Photo & Videography, Event Rentals, Engagement Technologies, Robot Rental's, Hostess, etc",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-24 px-6 bg-muted" id="services">
      <div className="container mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold">Custom Exhibition Booth in Dubai</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <Card key={i} className="flex flex-col h-full">
              <CardContent className="flex-grow p-6 space-y-4 flex flex-col justify-between">
                <div>
                  <service.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

