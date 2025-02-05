import { SpaceBackground } from "@/components/space-background";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Elara News - AI-Driven Data Marketplace on SUI Blockchain",
	description:
		"Discover $Elara token - powering advanced data analysis and exclusive insights in the cryptocurrency market on the SUI blockchain.",
	keywords:
		"Elara, SUI blockchain, AI, data marketplace, cryptocurrency, $ELARA token",
	authors: [{ name: "Elara Team" }],
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://elara.news",
		siteName: "Elara News",
		title: "Elara News - AI-Driven Data Marketplace on SUI Blockchain",
		description:
			"Discover $Elara token - powering advanced data analysis and exclusive insights in the cryptocurrency market on the SUI blockchain.",
		images: [
			{
				url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/og-image.jpg-oUXJag8sxDRUnRSBYlL5C1rAjAxpfa.jpeg", // We'll update this URL when new image is ready
				width: 1200,
				height: 630,
				alt: "Elara News - AI-Driven Data Marketplace on SUI Blockchain",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		site: "@elarasui",
		creator: "@elarasui",
		title: "Elara News - AI-Driven Data Marketplace on SUI Blockchain",
		description:
			"Discover $Elara token - powering advanced data analysis and exclusive insights in the cryptocurrency market on the SUI blockchain.",
		images: [
			"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/twitter-image.jpg-8I9ix4FKmVKtBtX7V68ybIcRWmAK1K.jpeg",
		], // We'll update this URL when new image is ready
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${spaceGrotesk.className} flex flex-col min-h-screen text-gray-100`}
			>
				<SpaceBackground />
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
