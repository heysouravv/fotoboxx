'use client'

import Image from 'next/image'

const clients = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  name: `Client ${i + 1}`,
  logo: "/placeholder.svg"
}))

export default function ClientsSection() {
  return (
    <section className="py-20 px-4 bg-muted">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold">Our Clients</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {clients.map((client) => (
            <Image
              key={client.id}
              src={client.logo}
              alt={`${client.name} logo`}
              width={120}
              height={60}
              className="h-12 w-24 object-contain opacity-60 hover:opacity-100 transition"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

