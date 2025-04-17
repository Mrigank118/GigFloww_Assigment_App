'use client'

import { useState } from "react"
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
import { useRouter } from "next/navigation" // Import useRouter

export default function Home() {
  const [skillCategory, setSkillCategory] = useState("")
  const router = useRouter() // Initialize the router for navigation

  const handleSubmit = (e) => {
    e.preventDefault() // Prevent default form submission

    // Redirect to the /thank-you page
    router.push("/thank-you")
  }

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

      {/* Register Section */}
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
                <form onSubmit={handleSubmit} className="space-y-6">
                  {[
                    { id: 'name', label: 'Name', type: 'text', placeholder: 'Enter your name' },
                    { id: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email' },
                    { id: 'portfolio', label: 'Portfolio Link', type: 'url', placeholder: 'https://your-portfolio.com' },
                  ].map(({ id, label, type, placeholder }) => (
                    <div className="space-y-2" key={id}>
                      <Label htmlFor={id} className="text-lg">{label}</Label>
                      <Input id={id} name={id} type={type} placeholder={placeholder} className="py-3 text-lg" required />
                    </div>
                  ))}
                  <div className="space-y-2">
                    <Label htmlFor="skill" className="text-lg">Skill Category</Label>
                    <Select value={skillCategory} onValueChange={setSkillCategory}>
                      <SelectTrigger
                        className="py-3 text-black hover:text-white border border-gray-300 hover:bg-pink hover:border-pink focus:ring-2 focus:ring-rose-500"
                      >
                        <SelectValue placeholder="Select a skill category" />
                      </SelectTrigger>
                      <SelectContent>
                        {['Design', 'Development', 'Marketing', 'Writing', 'Other'].map((opt) => (
                          <SelectItem value={opt.toLowerCase()} key={opt}>{opt}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <input type="hidden" name="skill" value={skillCategory} />
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
