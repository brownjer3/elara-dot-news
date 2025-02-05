"use client";

import { Button } from "@/components/ui/button";
import { DataMarketplaceModal } from "@/components/ui/data-marketplace-modal";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function NavBar() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<header className="w-full bg-black/50 backdrop-blur-md z-50 border-b border-blue-500/20">
			<div className="container mx-auto px-4 h-14 flex items-center justify-between">
				<Link
					href="/"
					className="font-bold text-xl text-accent"
				>
					Elara News
				</Link>

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
			</div>

			<DataMarketplaceModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
			/>
		</header>
	);
}
