import Link from "next/link"
import { Button } from "@/components/ui/button"

export function NavBar() {
  return (
    <header className="fixed w-full bg-black/50 backdrop-blur-md z-50 border-b border-blue-500/20">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl text-blue-400">
          Elara News
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#roadmap" className="text-blue-200 hover:text-blue-400 transition">
            Roadmap
          </Link>
          <Link href="#" className="text-blue-200 hover:text-blue-400 transition">
            Data Marketplace
            <span className="ml-2 text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded-full">Coming Soon</span>
          </Link>
          <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
            <Link href="https://suiai.fun/pool/0xb786bebe6634445704af3e60c9593c3f9af82b791ba8fb497f875c65397dec48">suiai.fun</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}

