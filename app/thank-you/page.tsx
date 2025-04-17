import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ThankYouPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#fafafa] px-4">
      <div className="mx-auto max-w-md text-center">
        <div className="mb-6 flex justify-center">
          <CheckCircle className="h-24 w-24 text-rose-600" />
        </div>
        <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Thank You for Signing In!</h1>
        <p className="mb-8 text-gray-500">
          We're excited to have you join the GigFloww community. Your journey to freelance success starts now!
        </p>
        <div className="flex justify-center">
          <Link href="/">
            <Button className="bg-rose-600 hover:bg-rose-700">Return to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
