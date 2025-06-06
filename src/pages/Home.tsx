import { HeroParallax } from "../components/ui/hero-parallax";

// Import all your images at the top
import me2 from "../assets/images/aboutme/me2.svg"; // Adjust path as needed
import me from "../assets/images/aboutme/me.svg"; // Adjust path as needed
import kl from "../assets/images/aboutme/kl.svg";
import cet from "../assets/images/works/cet.svg";
import botb from "../assets/images/works/botb.svg";
import me3 from "../assets/images/aboutme/me3.svg";
import gbtb from "../assets/images/aboutme/gbtb.svg";
import car from "../assets/images/aboutme/car.svg";
import subway from "../assets/images/aboutme/subway.svg";
import champs from "../assets/images/works/champs.svg";

export function HeroParallaxDemo() {
	return <HeroParallax products={products} />;
}
export const products = [
	{
		title: "Seattle",
		thumbnail: me2,
	},
	{
		title: "Marina East",
		thumbnail: me,
	},
	{
		title: "Kuala Lumpur",
		thumbnail: kl,
	},

	{
		title: "CET Day",
		thumbnail: cet,
	},
	{
		title: "Battle of the Bands Champion",
		thumbnail: botb,
	},
	{
		title: "Glass House",
		thumbnail: me3,
	},

	{
		title: "Gardens by the Bay",
		thumbnail: gbtb,
	},
	{
		title: "Universal studio",
		thumbnail: car,
	},
	{
		title: "Subway",
		thumbnail: subway,
	},
	{
		title: "2024 Champs",
		thumbnail: champs,
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
