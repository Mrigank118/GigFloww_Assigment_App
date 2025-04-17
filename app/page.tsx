import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Briefcase, Globe, Lightbulb, Users } from "lucide-react"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { TestimonialSlider } from "@/components/testimonial-slider"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="w-full py-12 md:py-20 lg:py-24 bg-[#fafafa]">
        <div className="container px-6 md:px-8">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                  Your Creative Gig Journey Starts Here
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  Join a growing community of gig talents — find work, grow skills, and shine.
                </p>
              </div>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <a href="#register">
                  <Button size="lg" className="px-8 py-4 bg-rose-600 hover:bg-rose-700 text-lg">
                    Join Now
                  </Button>
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/GoodTeam.gif"
                width={500}
                height={500}
                alt="Hero Illustration"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-12 md:py-20 lg:py-24">
        <div className="container px-6 md:px-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              About GigFloww
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl lg:text-base xl:text-xl">
              <span className="text-[#e11d48]">GigFloww</span> is a platform designed to connect talented <span className="text-[#e11d48]">freelancers</span> with quality <span className="text-[#e11d48]">clients</span>. We believe in empowering creative professionals to build <span className="text-[#e11d48]">sustainable careers</span> while helping businesses find the perfect talent for their <span className="text-[#e11d48]">projects</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-20 lg:py-24 bg-[#fafafa]">
        <div className="container px-6 md:px-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              Features
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl lg:text-base xl:text-xl">
              Everything you need to succeed in the gig economy
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            {[
              { icon: Globe, title: 'Discover Gigs', desc: 'Find the right opportunity that matches your skills and interests from our curated marketplace.' },
              { icon: Users, title: 'Connect with Clients', desc: 'Build your brand and establish long-term relationships with clients who value your work.' },
              { icon: Lightbulb, title: 'Boost Your Skills', desc: 'Access resources, workshops, and mentorship to continuously improve your craft.' },
              { icon: Briefcase, title: 'Showcase Your Portfolio', desc: 'Create a stunning profile that highlights your best work and attracts potential clients.' },
            ].map(({ icon: Icon, title, desc }, idx) => (
              <Card key={idx}>
                <CardContent className="flex flex-col items-center space-y-6 p-8">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-rose-100">
                    <Icon className="h-10 w-10 text-rose-600" />
                  </div>
                  <h3 className="text-2xl font-bold">{title}</h3>
                  <p className="text-center text-gray-500 md:text-lg">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Slider Section */}
      <section className="w-full py-12 md:py-20 lg:py-24">
        <div className="container px-6 md:px-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              What Our Users Say
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl lg:text-base xl:text-xl">
              Hear from freelancers who have found success with <span className="text-[#e11d48]">GigFloww</span>
            </p>
          </div>
          <div className="mx-auto max-w-5xl py-12">
            <TestimonialSlider />
          </div>
        </div>
      </section>

      {/* Sign-Up Form Section */}
      <section id="register" className="w-full py-12 md:py-20 lg:py-24 bg-[#fafafa]">
        <div className="container px-6 md:px-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              Join GigFloww Today
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl lg:text-base xl:text-xl">
              Start your journey to freelance success
            </p>
          </div>
          <div className="mx-auto max-w-lg py-12">
            <Card>
              <CardContent className="p-8">
                <form action="/thank-you" method="POST" className="space-y-6">
                  {[
                    { id: 'name', label: 'Name', type: 'text', placeholder: 'Enter your name' },
                    { id: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email' },
                    { id: 'portfolio', label: 'Portfolio Link', type: 'url', placeholder: 'https://your-portfolio.com' },
                  ].map(({ id, label, type, placeholder }) => (
                    <div className="space-y-2" key={id}>
                      <Label htmlFor={id} className="text-lg">{label}</Label>
                      <Input id={id} type={type} placeholder={placeholder} className="py-3 text-lg" />
                    </div>
                  ))}
                  <div className="space-y-2">
                    <Label htmlFor="skill" className="text-lg">Skill Category</Label>
                    <Select>
                      <SelectTrigger className="py-3">
                        <SelectValue placeholder="Select a skill category" />
                      </SelectTrigger>
                      <SelectContent>
                        {['Design', 'Development', 'Marketing', 'Writing', 'Other'].map((opt) => (
                          <SelectItem value={opt.toLowerCase()} key={opt}>{opt}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <Button type="submit" className="w-full px-8 py-4 bg-rose-600 hover:bg-rose-700 text-lg">
                    Submit
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  )
}
