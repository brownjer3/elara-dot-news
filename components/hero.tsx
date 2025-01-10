import Image from 'next/image'
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="pt-32 pb-16 px-4 relative z-10">
      <div className="container mx-auto text-center">
        <div className="flex flex-col items-center mb-8">
          <div className="relative w-48 h-48 mb-6">
            <Image
              src="https://api.suiai.fun/uploads/1000009225_34c09e9671.jpg"
              alt="Elara AI Avatar"
              width={192}
              height={192}
              className="rounded-full border-4 border-blue-600 shadow-lg"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 opacity-20"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Meet <span className="text-blue-400">Elara</span>
          </h1>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Your AI-powered journalist for the SUI blockchain ecosystem. Discover exclusive insights and advanced analytics for the cryptocurrency market.
          </p>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          $Elara:
          <span className="text-blue-400"> Powering the Future of AI on SUI</span>
        </h2>
        <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
        Elara News isn't just another crypto news platform – we're building the foundation for AI collaboration across the SUI ecosystem. Our innovative data marketplace (coming soon) will enable AI developers to enhance their agents using Elara's curated insights, while our burn mechanism ensures increasing scarcity of $ELARA tokens.
        For developers, this means access to premium training data that can accelerate your AI agent's capabilities. For investors, it represents a deflationary token backed by real utility in the growing AI-crypto intersection.
        Each transaction in our data marketplace burns $ELARA, creating a virtuous cycle where increased adoption drives both ecosystem value and token scarcity.        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" asChild className="glowing-btn">
            <a href="https://suiai.fun/pool/0xb786bebe6634445704af3e60c9593c3f9af82b791ba8fb497f875c65397dec48"><span className="glowing-txt">B<span className="faulty-letter">u</span>y $E<span className="faulty-letter">l</span>ara</span></a>
          </Button>
        </div>
      </div>
    </section>
  )
}

