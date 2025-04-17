"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white pt-4">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold">GigFloww</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
            Home
          </Link>
          <div className="relative group">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4 flex items-center gap-1">
              Services
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </Link>
            <div className="absolute left-0 top-full hidden group-hover:block bg-white border rounded-md shadow-md p-2 min-w-[150px]">
              <Link href="#" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded-md">
                For Freelancers
              </Link>
              <Link href="#" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded-md">
                For Businesses
              </Link>
              <Link href="#" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded-md">
                Skill Development
              </Link>
            </div>
          </div>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
            Testimonials
          </Link>
          <Button className="bg-rose-600 hover:bg-rose-700">Join Now</Button>
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>
      {isMenuOpen && (
        <div className="container md:hidden">
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
              Home
            </Link>
            {/* ... other links ... */}
            <Link href="#register">
              <Button className="bg-rose-600 hover:bg-rose-700">Join Now</Button>
            </Link>
          </nav>

        </div>
      )}
    </header>
  )
}
