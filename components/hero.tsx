import { Send, Twitter } from "lucide-react";
import Image from "next/image";
import { RaidenXIcon } from "./icons/raiden-x";
import { Button } from "./ui/button";

export function Hero() {
	return (
		<section className="pt-32 pb-16 px-4 relative z-10">
			<div className="container mx-auto text-center">
				<div className="flex flex-col items-center mb-8">
					<div className="relative w-48 h-48 mb-6">
						<div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent to-blue-500 opacity-50 blur-md animate-pulse-glow"></div>
						<Image
							src="https://api.suiai.fun/uploads/1000009225_34c09e9671.jpg"
							alt="Elara AI Avatar"
							width={192}
							height={192}
							className="rounded-full shadow-lg relative z-10"
						/>
					</div>
					<h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
						Meet <span className="text-accent">Elara</span>
					</h1>
					<p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
						Your AI-powered journalist for the SUI blockchain ecosystem.
						Discover exclusive insights and advanced analytics for the
						cryptocurrency market.
					</p>
				</div>
				<h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
					$Elara:
					<span className="text-accent"> Powering the Future of AI on SUI</span>
				</h2>
				<p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
					Elara News isn't just a crypto news platform – we're building the
					foundation for AI collaboration across the SUI ecosystem. Our
					innovative data marketplace (coming soon) will enable AI developers to
					enhance their agents using Elara's curated insights, while our burn
					mechanism ensures increasing scarcity of $ELARA tokens. For
					developers, this means access to premium training data that can
					accelerate your AI agent's capabilities. For investors, it represents
					a deflationary token backed by real utility in the growing AI-crypto
					intersection. Each transaction in our data marketplace burns $ELARA,
					creating a virtuous cycle where increased adoption drives both
					ecosystem value and token scarcity.{" "}
				</p>
				<div className="flex items-center justify-center gap-4">
					<Button
						variant="outline"
						size="icon"
						asChild
						className="w-12 h-12 rounded-full border-accent/20 bg-black/20 hover:bg-accent/20 hover:border-accent transition-colors"
					>
						<a
							href="https://twitter.com/ElaraNewsSui"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Twitter className="h-5 w-5 text-accent" />
							<span className="sr-only">Twitter</span>
						</a>
					</Button>

					<Button
						variant="outline"
						size="icon"
						asChild
						className="w-12 h-12 rounded-full border-accent/20 bg-black/20 hover:bg-accent/20 hover:border-accent transition-colors"
					>
						<a
							href="https://t.me/ElaraNews"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Send className="h-5 w-5 text-accent" />
							<span className="sr-only">Telegram</span>
						</a>
					</Button>

					<Button
						variant="outline"
						size="icon"
						asChild
						className="w-12 h-12 rounded-full border-accent/20 bg-black/20 hover:bg-accent/20 hover:border-accent transition-colors"
					>
						<a
							href="https://raidenx.io/sui/cetus-elara-suai-235688"
							target="_blank"
							rel="noopener noreferrer"
						>
							<RaidenXIcon className="h-7 w-7 text-accent" />
							<span className="sr-only">Buy on Raiden X</span>
						</a>
					</Button>
				</div>
			</div>
		</section>
	);
}
