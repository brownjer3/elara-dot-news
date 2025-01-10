import { Button } from "@/components/ui/button"

export function CallToAction() {
  return (
    <section id="buy" className="py-16 bg-blue-900/30 backdrop-blur-sm text-white relative z-10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-300">
          Join the Elara Revolution
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
          Be part of the future of AI-driven data analytics on the SUI blockchain. Invest in $Elara today and unlock exclusive insights.
        </p>
        <Button size="lg" variant="secondary" asChild className="glowing-btn">
          <a href="https://suiai.fun/pool/0xb786bebe6634445704af3e60c9593c3f9af82b791ba8fb497f875c65397dec48" target="_blank" rel="noopener noreferrer">
            <span className="glowing-txt">$Elara</span>
          </a>
        </Button>
      </div>
    </section>
  )
}

