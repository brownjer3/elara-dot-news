"use client";

import { useQuery } from "@tanstack/react-query";
import { useAnimationControls } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface TokenData {
	tokenBase: {
		name: string;
		symbol: string;
	};
	marketCapUsd: string;
	stats: {
		percent: {
			"24h": number;
		};
	};
}

const formatMarketCap = (marketCap: string) => {
	const num = parseFloat(marketCap);
	if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`;
	if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`;
	if (num >= 1e3) return `$${(num / 1e3).toFixed(2)}K`;
	return `$${num.toFixed(2)}`;
};

export function CurrencyTicker() {
	const containerRef = useRef<HTMLDivElement>(null);
	const tickerRef = useRef<HTMLDivElement>(null);
	const controls = useAnimationControls();
	const [contentWidth, setContentWidth] = useState(0);

	const {
		data: tokens,
		isLoading,
		error,
	} = useQuery<TokenData[]>({
		queryKey: ["trending-memes"],
		queryFn: async () => {
			const res = await fetch(
				"https://api.raidenx.io/api/v1/sui/trending/memes"
			);
			if (!res.ok) throw new Error("Failed to fetch data");
			return res.json();
		},
		refetchInterval: 30000, // Refetch every 30 seconds
	});

	useEffect(() => {
		if (tickerRef.current && containerRef.current) {
			const newContentWidth = tickerRef.current.offsetWidth;
			setContentWidth(newContentWidth);

			// Start the animation
			controls.start({
				x: -newContentWidth / 2,
				transition: {
					duration: 30,
					ease: "linear",
					repeat: Infinity,
					repeatType: "loop",
				},
			});
		}
	}, [controls, tokens]);

	if (error) {
		return (
			<div className="w-full bg-black/50 backdrop-blur-md py-2 text-red-500 text-center">
				Failed to load market data
			</div>
		);
	}

	if (isLoading) {
		return (
			<div className="w-full bg-black/50 backdrop-blur-md py-2 text-white text-center">
				Loading market data...
			</div>
		);
	}

	const CurrencyItem = ({ token }: { token: TokenData }) => (
		<div className="inline-flex items-center mx-4">
			<span className="text-white font-semibold">{token.tokenBase.symbol}</span>
			<span className="ml-2 text-accent">
				{formatMarketCap(token.marketCapUsd)}
			</span>
			<span
				className={`ml-2 ${
					token.stats.percent["24h"] >= 0 ? "text-green-500" : "text-red-500"
				}`}
			>
				{token.stats.percent["24h"] >= 0 ? "▲" : "▼"}
				{Math.abs(token.stats.percent["24h"]).toFixed(1)}%
			</span>
		</div>
	);

	return (
		<div className="w-full overflow-hidden bg-black/50 backdrop-blur-md border-b border-accent/20">
			<div className="animate-ticker flex whitespace-nowrap">
				{/* Render two sets of items to create seamless loop */}
				{tokens?.map((token, index) => (
					<CurrencyItem
						key={`set1-${index}`}
						token={token}
					/>
				))}
				{tokens?.map((token, index) => (
					<CurrencyItem
						key={`set2-${index}`}
						token={token}
					/>
				))}
			</div>
		</div>
	);
}
