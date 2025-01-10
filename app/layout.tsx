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
        <div className="space-background">
          <div id="stars" className="stars"></div>
          <div id="particles" className="particles"></div>
          <div id="shooting-stars" className="shooting-stars"></div>
        </div>
        {children}
        <script dangerouslySetInnerHTML={{__html: `
  function createStars() {
    const starsContainer = document.getElementById('stars');
    const numberOfStars = 200;
    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.width = Math.random() * 2 + 'px';
      star.style.height = star.style.width;
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      star.style.animationDelay = Math.random() * 3 + 's';
      starsContainer.appendChild(star);
    }
  }

  function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const numberOfParticles = 50;
    for (let i = 0; i < numberOfParticles; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.width = (Math.random() * 5 + 1) + 'px';
      particle.style.height = particle.style.width;
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
      particle.style.animationDelay = Math.random() * 5 + 's';
      particlesContainer.appendChild(particle);
    }
  }

  function createShootingStars() {
    const shootingStarsContainer = document.getElementById('shooting-stars');
    const numberOfShootingStars = 3;
    for (let i = 0; i < numberOfShootingStars; i++) {
      const shootingStar = document.createElement('div');
      shootingStar.className = 'shooting-star';
      shootingStar.style.top = Math.random() * 50 + '%';
      shootingStar.style.left = Math.random() * 50 + '%';
      shootingStar.style.animationDelay = Math.random() * 5 + 's';
      shootingStarsContainer.appendChild(shootingStar);
    }
  }

  window.addEventListener('load', () => {
    createStars();
    createParticles();
    createShootingStars();
  });
`}} />
      </body>
    </html>
  )
}

