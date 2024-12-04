import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export default function HeroSection() {
  return (
    <section 
      className="relative min-h-[70vh] pt-28 pb-20 px-4 flex items-center justify-center"
    >
      <Image
        src="https://images.unsplash.com/photo-1632383380175-812d44ec112b?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3"
        alt="Exhibition hall background"
        fill
        priority
        sizes="100vw"
        quality={85}
        className="object-cover brightness-50"
      />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center text-center lg:text-left relative z-10">
        <div className="text-white space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            #1 Exhibition Stand Builder in Dubai
          </h1>
          <p className="text-xl opacity-90">
            FotoBoxx Exhibitions is your go-to solution for Innovative Booth Design & Construction in Dubai
          </p>
          <Button size="lg" className="text-lg bg-destructive hover:bg-destructive/90 text-white">
            Contact Us
          </Button>
        </div>
        <Card className="w-full max-w-md mx-auto bg-white">
          <CardContent className="p-6 space-y-4">
            <div className="space-y-2">
              <Input placeholder="Full Name" className="bg-gray-50" />
              <div className="grid grid-cols-2 gap-2">
                <Input placeholder="Phone Number" type="tel" className="bg-gray-50" />
                <Input placeholder="Email ID" type="email" className="bg-gray-50" />
              </div>
              <Input placeholder="Company Name" className="bg-gray-50" />
              <Textarea placeholder="Reason of Inquiry" className="min-h-[100px] bg-gray-50" />
            </div>
            <Button className="w-full bg-destructive hover:bg-destructive/90 text-white">Submit</Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

