"use client";

import { useEffect } from "react";

export function SpaceBackground() {
	useEffect(() => {
		function createStars() {
			const starsContainer = document.getElementById("stars");
			if (!starsContainer) return;

			const numberOfStars = 400; // Increased for better coverage
			for (let i = 0; i < numberOfStars; i++) {
				const star = document.createElement("div");
				star.className = "star";

				// Randomize star sizes (mostly small, few larger ones)
				const size =
					Math.random() < 0.9
						? Math.random() * 1 + 0.1 // 90% small stars (0.1-1.1px)
						: Math.random() * 1.5 + 1; // 10% larger stars (1-2.5px)

				star.style.width = `${size}px`;
				star.style.height = star.style.width;
				star.style.left = `${Math.random() * 100}%`;
				star.style.top = `${Math.random() * 100}%`;
				star.style.opacity = `${Math.random() * 0.7 + 0.3}`; // Random opacity between 0.3 and 1

				starsContainer.appendChild(star);
			}
		}

		createStars();
	}, []);

	return (
		<div className="space-background">
			<div
				id="stars"
				className="stars"
			></div>
		</div>
	);
}
