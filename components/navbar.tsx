"use client";

import { Button } from "@/components/ui/button";
import { DataMarketplaceModal } from "@/components/ui/data-marketplace-modal";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function NavBar() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<header className="w-full bg-black/50 backdrop-blur-md z-50 border-b border-blue-500/20">
			<div className="container mx-auto px-4 h-14 flex items-center justify-between">
				<Link
					href="/"
					className="font-bold text-xl text-accent"
				>
					Elara News
				</Link>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex items-center gap-6">
					<Link
						href="#roadmap"
						className="text-gray-200 hover:text-accent transition"
					>
						Roadmap
					</Link>
					<button
						onClick={() => setIsModalOpen(true)}
						className="text-gray-200 hover:text-accent transition"
					>
						Data Marketplace
					</button>
					<Button
						asChild
						className="bg-transparent hover:bg-accent/20 text-gray-200 border-2 border-accent inline-flex items-center gap-2"
					>
						<a
							href="https://raidenx.io/sui/cetus-elara-suai-235688"
							target="_blank"
						>
							<span>Buy with</span>
							<Image
								src="/RaidenXLogo.png"
								alt="Raiden X"
								width={80}
								height={20}
								className="h-5 w-auto"
							/>
						</a>
					</Button>
				</nav>

				{/* Mobile Menu Button */}
				<Button
					variant="ghost"
					size="icon"
					className="md:hidden text-accent"
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
				>
					<Menu className="h-6 w-6" />
				</Button>
			</div>

			{/* Mobile Navigation */}
			{isMobileMenuOpen && (
				<div className="md:hidden border-t border-accent/20 bg-black/90 backdrop-blur-lg">
					<nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
						<Link
							href="#roadmap"
							className="text-gray-200 hover:text-accent transition py-2"
							onClick={() => setIsMobileMenuOpen(false)}
						>
							Roadmap
						</Link>
						<button
							onClick={() => {
								setIsModalOpen(true);
								setIsMobileMenuOpen(false);
							}}
							className="text-gray-200 hover:text-accent transition text-left py-2"
						>
							Data Marketplace
						</button>
						<a
							href="https://raidenx.io/sui/cetus-elara-suai-235688"
							target="_blank"
							className="inline-flex items-center gap-2 text-gray-200 hover:text-accent transition py-2"
							onClick={() => setIsMobileMenuOpen(false)}
						>
							<span>Buy with</span>
							<Image
								src="/RaidenXLogo.png"
								alt="Raiden X"
								width={80}
								height={20}
								className="h-5 w-auto"
							/>
						</a>
					</nav>
				</div>
			)}

			<DataMarketplaceModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
			/>
		</header>
	);
}
