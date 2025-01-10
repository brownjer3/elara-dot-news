import type { Metadata } from "next"
import { Space_Grotesk } from 'next/font/google'
import "./globals.css"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Elara News - AI-Driven Data Marketplace on SUI Blockchain",
  description: "Discover $Elara token - powering advanced data analysis and exclusive insights in the cryptocurrency market on the SUI blockchain.",
  keywords: "Elara, SUI blockchain, AI, data marketplace, cryptocurrency",
  openGraph: {
    title: "Elara News - AI-Driven Data Marketplace on SUI Blockchain",
    description: "Discover $Elara token - powering advanced data analysis and exclusive insights in the cryptocurrency market on the SUI blockchain.",
    images: [{ url: "/og-image.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elara News - AI-Driven Data Marketplace on SUI Blockchain",
    description: "Discover $Elara token - powering advanced data analysis and exclusive insights in the cryptocurrency market on the SUI blockchain.",
    images: ["/twitter-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} flex flex-col min-h-screen text-gray-100`}>
        <div className="fixed inset-0 bg-gradient-to-b from-[#1B2735] to-[#090A0F] -z-10" />
        {children}
      </body>
    </html>
  )
}

