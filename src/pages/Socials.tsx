("use client");

import { Facebook, Github, Linkedin, Mail } from "lucide-react";
import { GlowingEffect } from "../components/ui/glowing-effect";

export function GlowingEffectDemo() {
	return (
		<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
			<GridItem
				icon={
					<Facebook className="h-6 w-6 text-blue-500 dark:text-blue-400" />
				}
				title="Facebook"
				description="Follow me on Facebook for updates and more."
				url="https://www.facebook.com/thechristopher02"
			/>

			<GridItem
				icon={
					<Mail className="h-6 w-6 text-red-500 dark:text-red-400" />
				}
				title="Gmail"
				description="Reach out to me via email for any inquiries or collaborations."
				url="mailto:christopherlazaga02@gmail.com"
			/>

			<GridItem
				icon={
					<Linkedin className="h-6 w-6 text-blue-600 dark:text-blue-500" />
				}
				title="LinkedIn"
				description="Connect with me on LinkedIn for professional updates and networking."
				url="https://www.linkedin.com/in/christopher-lazaga-8bb826369/"
			/>

			<GridItem
				icon={
					<Github className="h-6 w-6 text-gray-800 dark:text-gray-300" />
				}
				title="GitHub"
				description="Check out my code repositories and open source contributions."
				url="https://github.com/iskari06"
			/>
		</ul>
	);
}

interface GridItemProps {
	icon: React.ReactNode;
	title: string;
	description: React.ReactNode;
	url: string;
}

const GridItem = ({ icon, title, description, url }: GridItemProps) => {
	return (
		<li className="min-h-[16rem] list-none">
			<a 
				href={url}
				target="_blank"
				rel="noopener noreferrer"
				className="block h-full no-underline"
			>
				<div className="relative h-full border border-neutral-800 hover:border-neutral-600 rounded-2xl p-3 transition-all duration-300 hover:scale-[1.02] cursor-pointer">
					<GlowingEffect
						spread={40}
						glow={true}
						disabled={false}
						proximity={64}
						inactiveZone={0.01}
					/>
					<div className="relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-xl p-4 bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 backdrop-blur-sm">
						<div className="flex flex-col gap-4">
							{/* Icon Container */}
							<div className="w-12 h-12 rounded-lg border border-neutral-600 bg-neutral-800/50 p-2.5 flex items-center justify-center">
								{icon}
							</div>
							
							{/* Content */}
							<div className="space-y-2">
								<h3 className="special-gothic text-2xl font-semibold text-white leading-tight">
									{title}
								</h3>
								<p className="special-gothic text-lg text-neutral-400 leading-relaxed">
									{description}
								</p>
							</div>
						</div>
						
						{/* Hover indicator */}
						<div className="flex justify-end">
							<div className="w-2 h-2 rounded-full bg-neutral-600 opacity-60"></div>
						</div>
					</div>
				</div>
			</a>
		</li>
	);
};

const Socials = () => {
	return (
		<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
			<div className="text-center mb-8 lg:mb-12">
				<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 special-gothic">
					Connect With Me
				</h2>
				<p className="text-lg md:text-2xl text-neutral-400 max-w-2xl mx-auto special-gothic">
					Let's stay connected across different platforms. Feel free to reach out!
				</p>
			</div>
			
			<div className="w-full">
				<GlowingEffectDemo />
			</div>
		</div>
	);
};

export default Socials;