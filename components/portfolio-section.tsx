import Image from 'next/image'
import { Button } from "@/components/ui/button"

const portfolioItems = [
  { id: 1, imageUrl: "/placeholder.svg", title: "Project 1" },
  { id: 2, imageUrl: "/placeholder.svg", title: "Project 2" },
  { id: 3, imageUrl: "/placeholder.svg", title: "Project 3" },
  { id: 4, imageUrl: "/placeholder.svg", title: "Project 4" },
  { id: 5, imageUrl: "/placeholder.svg", title: "Project 5" },
  { id: 6, imageUrl: "/placeholder.svg", title: "Project 6" },
]

export default function PortfolioSection() {
  return (
    <section className="py-20 px-4" id="portfolio">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold">Our Recent Work</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <div key={item.id} className="relative aspect-[4/3] group overflow-hidden rounded-lg">
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover transition group-hover:scale-105"
              />
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button size="lg">Contact Us</Button>
        </div>
      </div>
    </section>
  )
}

