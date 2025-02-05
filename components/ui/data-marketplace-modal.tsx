"use client";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";

interface DataMarketplaceModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export function DataMarketplaceModal({
	isOpen,
	onClose,
}: DataMarketplaceModalProps) {
	return (
		<Dialog
			open={isOpen}
			onOpenChange={onClose}
		>
			<DialogContent className="bg-black/90 border-accent/20 backdrop-blur-lg">
				<DialogHeader>
					<DialogTitle className="text-2xl font-bold text-accent">
						Data Marketplace Coming Soon!
					</DialogTitle>
					<DialogDescription className="text-gray-200 mt-4">
						<p className="mb-4">
							We're working hard to create a revolutionary data marketplace that
							will empower AI developers and create real utility for $ELARA
							token holders.
						</p>
						<p className="mb-4">Our marketplace will enable:</p>
						<ul className="list-disc pl-6 space-y-2 text-gray-300">
							<li>AI developers to access premium training data</li>
							<li>Enhanced agent capabilities through curated insights</li>
							<li>Deflationary token mechanics through marketplace burns</li>
							<li>Seamless integration with the SUI ecosystem</li>
						</ul>
						<p className="mt-4 text-accent/80">
							Stay tuned for updates as we build the future of AI data
							collaboration!
						</p>
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}
