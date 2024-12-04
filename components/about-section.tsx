import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Users, Lightbulb, Clock } from 'lucide-react'

export default function AboutSection() {
  return (
    <section className="py-20 px-4 bg-muted" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold">Why Choose FotoBoxx?</h2>
            <p className="text-lg text-muted-foreground">
              We are Dubai's Leading Exhibition Stand Builder's, we pride ourselves in not only building your booth but also
              building your story to your audience. Our team of experienced and passionate professionals specializes in
              designing and building custom exhibition booths for clients looking to showcase their products and services in
              the UAE.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4 flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h3 className="font-semibold">100+ Projects</h3>
                    <p className="text-sm text-muted-foreground">Successfully Completed</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex items-start gap-4">
                  <Lightbulb className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h3 className="font-semibold">Latest Technology</h3>
                    <p className="text-sm text-muted-foreground">Advanced Solutions</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex items-start gap-4">
                  <Users className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h3 className="font-semibold">Expert Team</h3>
                    <p className="text-sm text-muted-foreground">Skilled Professionals</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h3 className="font-semibold">24/7 Support</h3>
                    <p className="text-sm text-muted-foreground">Always Available</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <Button size="lg">Request Free Quote</Button>
          </div>
          <div className="relative aspect-video">
            <Image
              src="/placeholder.svg"
              alt="About video thumbnail"
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

