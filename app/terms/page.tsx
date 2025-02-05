import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
	return (
		<main className="flex-grow container mx-auto px-4 py-24">
			<div className="max-w-4xl mx-auto">
				{/* Back button */}
				<Link
					href="/"
					className="inline-flex items-center text-gray-400 hover:text-accent mb-8 group transition-colors"
				>
					<ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
					Back to Home
				</Link>

				<h1 className="text-4xl font-bold text-accent mb-2">
					Terms and Conditions
				</h1>
				<p className="text-gray-400 mb-8">Last Updated: 2/3/2025</p>

				<div className="prose prose-invert prose-accent max-w-none">
					<div className="bg-accent/10 p-6 rounded-lg mb-8 border border-accent/20">
						<h2 className="text-2xl font-semibold mb-4 text-accent">
							IMPORTANT NOTICE REGARDING INVESTMENT ADVICE AND TRADING
							INFORMATION
						</h2>
						<p className="text-gray-200">
							ANY INFORMATION ABOUT PRICES, TRADING, MARKET MOVEMENTS, OR
							CRYPTOCURRENCY VALUES ON ELARA.NEWS IS STRICTLY FOR INFORMATIONAL
							PURPOSES ONLY. We do not provide investment advice, trading
							recommendations, or suggestions about whether to buy, sell, or
							hold any asset. Any decisions you make based on information found
							on this platform are at your sole risk and discretion.
						</p>
					</div>

					<p className="mb-8">
						Welcome to Elara.news. By accessing or using this website or any
						associated services, you agree to these Terms and Conditions.
					</p>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">
							1. AI-Generated Content and No Investment Advice
						</h2>
						<p>
							The platform may utilize autonomous artificial intelligence
							systems that generate content independently. Such AI systems may
							occasionally produce inaccurate, incomplete, or inconsistent
							information. Users are responsible for independently verifying any
							information before relying on it for any purpose.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">
							2. No Investment Advice or Trading Recommendations
						</h2>
						<p className="font-semibold mb-4">WE ARE NOT:</p>
						<ul className="list-disc pl-6 mb-6">
							<li>Financial advisors</li>
							<li>Investment advisors</li>
							<li>Trading advisors</li>
							<li>Tax advisors</li>
							<li>Legal advisors</li>
						</ul>

						<p className="font-semibold mb-4">
							Any content discussing prices, trading, market movements, or asset
							values:
						</p>
						<ul className="list-disc pl-6 mb-6">
							<li>Is purely for informational purposes</li>
							<li>Is not a recommendation to take any action</li>
							<li>May be incomplete or inaccurate</li>
							<li>Should not be the basis for any investment decisions</li>
							<li>May be provided by third parties without verification</li>
						</ul>

						<p className="font-semibold mb-4">
							You acknowledge and agree that:
						</p>
						<ul className="list-disc pl-6">
							<li>
								You will not rely on platform content for investment decisions
							</li>
							<li>You will conduct your own research and due diligence</li>
							<li>
								You will consult qualified professionals for investment advice
							</li>
							<li>
								You are solely responsible for your trading and investment
								decisions
							</li>
							<li>Past performance does not indicate future results</li>
						</ul>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">
							3. Platform Development
						</h2>
						<p>
							The Elara platform and associated services are currently in
							development. Users should be aware that:
						</p>
						<ul className="list-disc pl-6 mt-4 space-y-2">
							<li>
								Features and functionalities may change during development
							</li>
							<li>Services may be added, modified, or removed</li>
							<li>Platform availability may vary during development phases</li>
						</ul>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">
							4. Service Description
						</h2>
						<p>
							Elara.news provides blockchain and cryptocurrency news,
							information, and related content. The platform includes features
							and functionality that may require the $ELARA token to access.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">5. Token Utility</h2>
						<p className="mb-4">
							The $ELARA token is designed and intended to function solely as a
							utility token within the Elara news platform ecosystem. The token
							enables users to access premium content, participate in community
							features, and utilize platform functionality.
						</p>
						<p className="bg-accent/10 p-4 rounded border border-accent/20 font-semibold">
							THE $ELARA TOKEN IS NOT AN INVESTMENT PRODUCT AND IS NOT INTENDED
							TO BE, OR TO BE THE SUBJECT OF, AN INVESTMENT OPPORTUNITY,
							INVESTMENT CONTRACT, OR SECURITY OF ANY TYPE. No promises or
							guarantees are made regarding its value or future utility.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">
							6. Price and Market Information Disclaimer
						</h2>
						<p className="font-semibold mb-4">ANY DISPLAY OR DISCUSSION OF:</p>
						<ul className="list-disc pl-6 mb-6">
							<li>Token prices</li>
							<li>Market movements</li>
							<li>Trading volumes</li>
							<li>Price predictions</li>
							<li>Market analysis</li>
							<li>Trading strategies</li>
							<li>Technical analysis</li>
							<li>Price charts</li>
							<li>Market trends</li>
						</ul>
						<p className="bg-accent/10 p-4 rounded border border-accent/20">
							IS PROVIDED "AS IS" WITHOUT ANY WARRANTIES AND SHOULD NOT BE
							CONSTRUED AS INVESTMENT ADVICE OR TRADING RECOMMENDATIONS. We make
							no representations about the accuracy, timeliness, or completeness
							of such information.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">
							7. User Responsibilities
						</h2>
						<p className="mb-4">You are responsible for:</p>
						<ul className="list-disc pl-6">
							<li>
								Understanding that cryptocurrency trading is extremely risky
							</li>
							<li>Conducting your own research and due diligence</li>
							<li>
								Never trading or investing more than you can afford to lose
							</li>
							<li>Complying with applicable laws and regulations</li>
							<li>Maintaining security of any wallets or accounts</li>
							<li>Understanding the risks of blockchain technology</li>
							<li>Using the platform and token appropriately</li>
						</ul>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">8. Risk Disclosures</h2>
						<p className="mb-4">
							Using blockchain technology and cryptocurrency involves
							significant risks, including but not limited to:
						</p>
						<ul className="list-disc pl-6">
							<li>Extreme price volatility</li>
							<li>Potential for complete loss of funds</li>
							<li>Technical complications</li>
							<li>Regulatory uncertainty</li>
							<li>Platform modifications</li>
							<li>Security vulnerabilities</li>
							<li>Market manipulation</li>
							<li>Limited liquidity</li>
							<li>Network failures</li>
						</ul>
						<p className="mt-4">
							You assume all risks associated with using the platform and token.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">9. Disclaimers</h2>
						<p className="bg-accent/10 p-4 rounded border border-accent/20">
							THE SERVICES AND ALL CONTENT ARE PROVIDED "AS IS" WITHOUT WARRANTY
							OF ANY KIND. WE MAKE NO REPRESENTATIONS ABOUT THE ACCURACY,
							COMPLETENESS, OR APPROPRIATENESS OF ANY CONTENT OR FUNCTIONALITY.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">
							10. Limitation of Liability
						</h2>
						<p className="bg-accent/10 p-4 rounded border border-accent/20">
							TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR
							ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY
							DAMAGES ARISING FROM YOUR USE OF THE PLATFORM OR TOKEN OR ANY
							TRADING OR INVESTMENT DECISIONS YOU MAKE.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">
							11. Changes and Modifications
						</h2>
						<p>
							We reserve the right to modify these Terms at any time without
							notice. Your continued use of the platform after any changes
							constitutes acceptance of such changes.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">12. Governing Law</h2>
						<p>
							These Terms shall be governed by applicable law. Any disputes
							shall be resolved through binding arbitration.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">13. Contact</h2>
						<p>
							For questions about these Terms, contact:{" "}
							<a
								href="mailto:elaraecosystem@gmail.com"
								className="text-accent hover:underline"
							>
								elaraecosystem@gmail.com
							</a>
						</p>
					</section>

					<p className="mt-8 text-gray-400">
						By using the platform or token, you acknowledge that you have read,
						understood, and agree to be bound by these Terms.
					</p>
				</div>
			</div>
		</main>
	);
}
