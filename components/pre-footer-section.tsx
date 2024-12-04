'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export default function PreFooterSection() {
  return (
    <section className="py-20 px-4 bg-muted" id="contact">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">Looking for an Exhibition Stand Builder in Dubai?</h2>
          <p className="text-xl text-muted-foreground">FotoBoxx Exhibition is the right choice</p>
          <Button size="lg" className="text-xl px-8">
            Request Free QUOTE
          </Button>
        </div>
        <Card className="w-full max-w-md mx-auto lg:ml-auto">
          <CardContent className="p-6 space-y-4">
            <div className="space-y-2">
              <Input placeholder="Full Name" />
              <div className="grid grid-cols-2 gap-2">
                <Input placeholder="Phone Number" type="tel" />
                <Input placeholder="Email ID" type="email" />
              </div>
              <Input placeholder="Company Name" />
              <Textarea placeholder="Message" className="min-h-[100px]" />
            </div>
            <Button className="w-full">Submit</Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

