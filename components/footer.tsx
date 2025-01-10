'use client'

import { Button } from "@/components/ui/button"
import { Twitter, Send } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-black/50 backdrop-blur-md text-white py-12 relative z-10 border-t border-blue-500/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-400">$Elara</h3>
            <p className="text-blue-200 max-w-md">
              Powering the future of AI-driven data analytics on the SUI blockchain.
              Join us in revolutionizing the cryptocurrency market.
            </p>
            <div className="flex mt-4 space-x-4">
              <Button variant="outline" size="icon" asChild className="border-blue-500 text-blue-400 hover:bg-blue-900/50">
                <a href="https://x.com/elarasui" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild className="border-blue-500 text-blue-400 hover:bg-blue-900/50">
                <a href="https://t.me/ElaraSui" target="_blank" rel="noopener noreferrer">
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Telegram</span>
                </a>
              </Button>
            </div>
          </div>
          <div className="flex flex-col md:items-end">
            <div className="mb-4 flex items-center gap-2">
              <span className="text-blue-400 font-mono text-sm">
                0xe78efc7724ab261e398b60a1248668977d2e4e2d5e7fe74fcfbb70a7439b798e::elara::ELARA
              </span>
              <Button
                variant="ghost" 
                size="icon"
                className="text-blue-400 hover:bg-blue-900/50"
                onClick={() => {
                  navigator.clipboard.writeText("0xe78efc7724ab261e398b60a1248668977d2e4e2d5e7fe74fcfbb70a7439b798e::elara::ELARA")
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
                <span className="sr-only">Copy contract address</span>
              </Button>
            </div>
            <p className="text-blue-300 text-sm">
              © {new Date().getFullYear()} Elara. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

