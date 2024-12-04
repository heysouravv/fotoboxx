'use client'

import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChromeIcon as Google } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    company: "Tech Solutions Inc.",
    content: "Exceptional service and stunning booth design. FotoBoxx exceeded our expectations in every way.",
    avatar: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Jane Smith",
    company: "Global Innovations",
    content: "Working with FotoBoxx was a game-changer for our exhibition presence. Their attention to detail is unmatched.",
    avatar: "/placeholder.svg"
  },
  {
    id: 3,
    name: "Alex Johnson",
    company: "Future Enterprises",
    content: "FotoBoxx delivered a booth that truly represented our brand. We couldn't be happier with the results.",
    avatar: "/placeholder.svg"
  }
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold">Here what clients say</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id}>
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <Google className="h-6 w-6 text-primary" />
                </div>
                <p className="text-muted-foreground">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

