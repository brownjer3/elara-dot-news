"use client";

import { useQuery } from "@tanstack/react-query";
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
	const [localTokens, setLocalTokens] = useState<TokenData[]>([]);
	const containerRef = useRef<HTMLDivElement>(null);
	const [isPaused, setIsPaused] = useState(false);

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
		refetchInterval: 120000,
		refetchIntervalInBackground: true,
		staleTime: 119000,
		cacheTime: 120000,
	});

	useEffect(() => {
		if (tokens && tokens.length > 0) {
			if (JSON.stringify(tokens) !== JSON.stringify(localTokens)) {
				setTimeout(() => {
					setLocalTokens(tokens);
				}, 1000);
			}
		}
	}, [tokens]);

	useEffect(() => {
		if (tokens && tokens.length > 0 && localTokens.length === 0) {
			setLocalTokens(tokens);
		}
	}, [tokens]);

	if (error) {
		return (
			<div className="w-full bg-black/50 backdrop-blur-md py-2 text-red-500 text-center">
				Failed to load market data
			</div>
		);
	}

	if (isLoading || localTokens.length === 0) {
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
		<div
			className="w-full overflow-hidden bg-black/50 backdrop-blur-md border-b border-accent/20"
			onMouseEnter={() => setIsPaused(true)}
			onMouseLeave={() => setIsPaused(false)}
		>
			<div
				ref={containerRef}
				className={`ticker-container ${isPaused ? "paused" : ""}`}
			>
				<div className="ticker-content">
					{localTokens.map((token, index) => (
						<CurrencyItem
							key={`set1-${token.tokenBase.symbol}-${index}`}
							token={token}
						/>
					))}
				</div>
				<div className="ticker-content">
					{localTokens.map((token, index) => (
						<CurrencyItem
							key={`set2-${token.tokenBase.symbol}-${index}`}
							token={token}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
