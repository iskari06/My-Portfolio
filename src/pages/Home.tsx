"use client";
import { HeroParallax } from "../components/ui/hero-parallax";

export function HeroParallaxDemo() {
	return <HeroParallax products={products} />;
}
export const products = [
	{
		title: "Moonbeam",
		thumbnail: "/src/assets/images/aboutme/me 2.svg",
	},
	{
		title: "Cursor",
		thumbnail: "/src/assets/images/aboutme/me.svg",
	},
	{
		title: "Rogue",
		thumbnail: "/src/assets/images/aboutme/me 3.svg",
	},

	{
		title: "Editorially",
		thumbnail: "/src/assets/images/aboutme/car.svg",
	},
	{
		title: "Editrix AI",
		thumbnail: "/src/assets/images/aboutme/subway.svg",
	},
	{
		title: "Pixel Perfect",
		thumbnail: "/src/assets/images/aboutme/gbtb.svg",
	},

	{
		title: "Algochurn",
		thumbnail: "/src/assets/images/aboutme/kl.svg",
	},
	{
		title: "Order Management System",
		thumbnail: "/src/assets/images/home/oms.svg",
	},
	{
		title: "Tailwind Master Kit",
		thumbnail: "/src/assets/images/home/dashboard.svg",
	},
	{
		title: "SmartBridge",
		thumbnail:
			"https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
	},
	{
		title: "Renderwork Studio",
		thumbnail:
			"https://aceternity.com/images/products/thumbnails/new/renderwork.png",
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
