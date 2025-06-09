import { cn } from "../../lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
	items,
	direction = "left",
	speed = "fast",
	pauseOnHover = true,
	className,
}: {
	items: {
		certificate: string;
		title: string;
	}[];
	direction?: "left" | "right";
	speed?: "fast" | "normal" | "slow";
	pauseOnHover?: boolean;
	className?: string;
}) => {
	const containerRef = React.useRef<HTMLDivElement>(null);
	const scrollerRef = React.useRef<HTMLUListElement>(null);

	useEffect(() => {
		addAnimation();
	}, []);
	const [start, setStart] = useState(false);
	function addAnimation() {
		if (containerRef.current && scrollerRef.current) {
			const scrollerContent = Array.from(scrollerRef.current.children);

			scrollerContent.forEach((item) => {
				const duplicatedItem = item.cloneNode(true);
				if (scrollerRef.current) {
					scrollerRef.current.appendChild(duplicatedItem);
				}
			});

			getDirection();
			getSpeed();
			setStart(true);
		}
	}
	const getDirection = () => {
		if (containerRef.current) {
			if (direction === "left") {
				containerRef.current.style.setProperty(
					"--animation-direction",
					"forwards"
				);
			} else {
				containerRef.current.style.setProperty(
					"--animation-direction",
					"reverse"
				);
			}
		}
	};
	const getSpeed = () => {
		if (containerRef.current) {
			if (speed === "fast") {
				containerRef.current.style.setProperty("--animation-duration", "20s");
			} else if (speed === "normal") {
				containerRef.current.style.setProperty("--animation-duration", "40s");
			} else {
				containerRef.current.style.setProperty("--animation-duration", "80s");
			}
		}
	};
	return (
		<div
			ref={containerRef}
			className={cn(
				"scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
				className
			)}
		>
			{/* Header Section */}
			<div className="w-full px-4 sm:px-6 md:px-60 py-4 sm:py-6 md:py-8">
				<h1 className="special-gothic text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#f7e6c8] dark:text-[#f7e6c8] text-center mb-4">
					My Certifications
				</h1>
				<p className="text-lg text-center md:text-2xl text-[#655b4b] max-w-2xl mx-auto special-gothic">
					Continuously enhancing my skills by attentively learning
				</p>
			</div>

			{/* Cards Section */}
			<ul
				ref={scrollerRef}
				className={cn(
					"flex w-max min-w-full shrink-0 flex-nowrap gap-3 sm:gap-4 py-2 sm:py-4 px-4 sm:px-6",
					start && "animate-scroll",
					pauseOnHover && "hover:[animation-play-state:paused]"
				)}
			>
				{items.map((item) => (
					<li
						key={item.title}
						className="relative w-[280px] xs:w-[320px] sm:w-[350px] md:w-[400px] lg:w-[450px] shrink-0 rounded-xl sm:rounded-2xl border border-zinc-700 bg-[linear-gradient(180deg,#27272a,#18181b)] p-4 sm:p-6 md:p-8"
					>
						<blockquote className="h-full flex flex-col">
							<div className="flex-1">
								<img
									src={item.certificate}
									alt={item.title}
									className="w-full h-auto object-contain rounded-lg"
								/>
							</div>
							<div className="mt-4 sm:mt-6">
								<span className="block text-xs sm:text-sm md:text-base special-gothic text-[#947e57] dark:text-[#947e57] text-center sm:text-left line-clamp-2">
									{item.title}
								</span>
							</div>
						</blockquote>
					</li>
				))}
			</ul>
		</div>
	);
};
