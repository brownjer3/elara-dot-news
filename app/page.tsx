import { NavBar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Roadmap } from "@/components/roadmap"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="flex-grow">
        <Hero />
        <Roadmap />
      </main>
      <Footer />
    </>
  )
}

