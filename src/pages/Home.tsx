"use client";
import { HeroParallax } from "../components/ui/hero-parallax";

export function HeroParallaxDemo() {
	return <HeroParallax products={products} />;
}
export const products = [
	{
		title: "Seattle",
		thumbnail: "/src/assets/images/aboutme/me 2.svg",
	},
	{
		title: "Marina East",
		thumbnail: "/src/assets/images/aboutme/me.svg",
	},
	{
		title: "Kuala Lumpur",
		thumbnail: "/src/assets/images/aboutme/kl.svg",
	},

	{
		title: "CET Day",
		thumbnail: "/src/assets/images/works/cet.svg",
	},
	{
		title: "Battle of the Bands Champion",
		thumbnail: "/src/assets/images/works/botb.svg",
	},
	{
		title: "Glass House",
		thumbnail: "/src/assets/images/aboutme/me 3.svg",
	},

	{
		title: "Gardens by the Bay",
		thumbnail: "/src/assets/images/aboutme/gbtb.svg",
	},
	{
		title: "Universal studio",
		thumbnail: "/src/assets/images/aboutme/car.svg",
	},
	{
		title: "Editrix AI",
		thumbnail: "/src/assets/images/aboutme/subway.svg",
	},
	{
		title: "SmartBridge",
		thumbnail: "/src/assets/images/works/champs.svg",
	},
];

const Home = () => {
	return (
		<>
			<div className="items-center">
				<HeroParallaxDemo />
			</div>
		</>
	);
};

export default Home;
