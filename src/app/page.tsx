import Link from "next/link"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

// Sample book covers
const bookCovers = [
  {
    title: "Systemic Risk",
    url: "/placeholder.svg?height=300&width=200",
  },
  {
    title: "Data Structure & Algorithms",
    url: "/placeholder.svg?height=300&width=200",
  },
  {
    title: "Codeless Data Structures and Algorithms",
    url: "/placeholder.svg?height=300&width=200",
  },
  {
    title: "The Master Algorithm",
    url: "/placeholder.svg?height=300&width=200",
  },
  {
    title: "The Bible of Algorithms & Data Structures",
    url: "/placeholder.svg?height=300&width=200",
  },
  {
    title: "Analysis of Algorithms",
    url: "/placeholder.svg?height=300&width=200",
  },
]

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 py-28">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                Unlock your institute&apos;s LRC digitally with Nexus
              </h1>
              <p className="text-muted-foreground text-lg">
                Explore institute&apos;s Books, journals, and research papers from the comfort of your hostel with 24/7
                access digitally
              </p>
              <div className="pt-4">
                <Link href="/signup">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg rounded-md inline-flex items-center">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="grid grid-cols-3 gap-4 relative">
                {bookCovers.map((book, index) => (
                  <div key={index} className={`relative ${index % 3 === 0 ? "mt-8" : index % 3 === 2 ? "mt-4" : ""}`}>
                    <Image
                      src={book.url || "/placeholder.svg"}
                      alt={book.title}
                      width={140}
                      height={200}
                      className="rounded-md shadow-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}