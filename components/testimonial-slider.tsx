"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Priya S.",
    title: "Web Designer",
    content:
      "GigFloww helped me land my first freelance client in 2 weeks! The platform is intuitive and the community is incredibly supportive.",
    image: "images/Slider_01.png",  // Add your image path here
  },
  {
    id: 2,
    name: "Marcus T.",
    title: "Content Writer",
    content:
      "Since joining GigFloww, I've been able to double my client base and increase my rates. The skill development resources are top-notch.",
    image: "images/Slider_02.png",  // Add your image path here
  },
  {
    id: 3,
    name: "Elena R.",
    title: "UI/UX Designer",
    content:
      "The quality of clients on GigFloww is unmatched. I've found consistent work that aligns with my career goals and values.",
    image: "images/Slider_03.png",  // Add your image path here
  },
]

import Image from "next/image"; // Import Next.js Image component for optimized image handling

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
              <Card className="h-full">
                <CardContent className="flex flex-col items-center justify-center p-6 text-center h-full">
                  {/* Display Image */}
                  <div className="mb-4">
                    <Image
                      src={testimonial.image}
                      alt={`Photo of ${testimonial.name}`}
                      width={400}
                      height={400}
                      className="object-cover"
                    />
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="space-y-2">
                    <p className="text-xlg">"{testimonial.content}"</p>
                    <footer className="text-sm font-medium">
                      {testimonial.name}, {testimonial.title}
                    </footer>
                  </blockquote>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-center gap-2 mt-4">
        <Button variant="outline" size="icon" className="rounded-full" onClick={prevSlide}>
          <ArrowLeft className="h-4 w-4" />
          <span className="sr-only">Previous slide</span>
        </Button>
        {testimonials.map((_, index) => (
          <Button
            key={index}
            variant="ghost"
            size="icon"
            className={`h-2 w-2 rounded-full p-0 ${currentIndex === index ? "bg-rose-600" : "bg-gray-300"}`}
            onClick={() => setCurrentIndex(index)}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </Button>
        ))}
        <Button variant="outline" size="icon" className="rounded-full" onClick={nextSlide}>
          <ArrowRight className="h-4 w-4" />
          <span className="sr-only">Next slide</span>
        </Button>
      </div>
    </div>
  );
}
