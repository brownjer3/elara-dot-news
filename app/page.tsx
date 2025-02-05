import { CurrencyTicker } from "@/components/currency-ticker";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { NavBar } from "@/components/navbar";
import { Roadmap } from "@/components/roadmap";

export default function Home() {
	return (
		<>
			<header className="fixed top-0 left-0 right-0 z-50 h-20">
				<NavBar />
				<CurrencyTicker />
			</header>
			<main className="flex-grow pt-24">
				<Hero />
				<Roadmap />
			</main>
			<Footer />
		</>
	);
}
