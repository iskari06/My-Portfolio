import {
	DraggableCardBody,
	DraggableCardContainer,
} from "../components/ui/draggable-card";

export function DraggableCardDemo() {
	const items = [
		{
			title: "KL '25",
			image: "/src/assets/images/aboutme/kl.svg",
			className: "absolute top-[25%] left-[6%] rotate-[-5deg]",
		},
		{
			title: "Supertree Grove",
			image: "/src/assets/images/aboutme/gbtb.svg",
			className: "absolute bottom-[20%] left-[20%] rotate-[-7deg]",
		},
		{
			title: "Subway",
			image: "/src/assets/images/aboutme/subway.svg",
			className: "absolute top-[15%] left-[25%] rotate-[8deg]",
		},
		{
			title: "Universal Exp",
			image: "/src/assets/images/aboutme/car.svg",
			className: "absolute top-[40%] right-[10%] rotate-[10deg]",
		},
		{
			title: "Glass House",
			image: "/src/assets/images/aboutme/me3.svg",
			className: "absolute top-[10%] right-[13%] rotate-[2deg]",
		},
		{
			title: "Seattle :)",
			image: "/src/assets/images/aboutme/me2.svg",
			className: "absolute top-[25%] right-[15%] rotate-[-7deg]",
		},
		{
			title: "Singapore '25",
			image: "/src/assets/images/aboutme/me.svg",
			className: "absolute top-[30%] left-[35%] rotate-[4deg]",
		},
	];

	return (
		<DraggableCardContainer className="relative flex bg-gray-950 backdrop-blur-sm rounded-lg sm:rounded-xl lg:rounded-2xl min-h-[350px] xs:min-h-[150] sm:min-h-[250] md:min-h-[400px] lg:min-h-[550px] w-full items-center justify-center overflow-hidden">
			<p className="absolute top-[39%] left-1/2 -translate-x-1/2 w-[50%] md:w-[65%] xl:w-[80%] text-center text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-4xl font-black text-neutral-400 dark:text-[#f7e6c8]">
				Hi! I am Christopher Lazaga, a web and mobile app developer.
			</p>
			{items.map((item, index) => (
				<DraggableCardBody key={index} className={item.className}>
					<img
						src={item.image}
						alt={item.title}
						className="pointer-events-none relative z-10 w-full h-[75%] object-contain"
					/>
					<h3 className="mt-2 text-center text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-medium text-neutral-700 dark:text-neutral-900">
						{item.title}
					</h3>
				</DraggableCardBody>
			))}
		</DraggableCardContainer>
	);
}

const AboutMe = () => {
	return (
		<div className="text-white w-full">
			{/* Mobile and Tablet Layout - Stack vertically */}
			<div className="block xl:hidden min-h-screen">
				{/* Text content - top on mobile/tablet */}
				<div className="p-3 xs:p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-center min-h-[40vh] sm:min-h-[45vh] lg:min-h-[50vh]">
					<p className="special-gothic mb-3 xs:mb-4 sm:mb-4 md:mb-5 lg:mb-6 mt-4 xs:mt-6 sm:mt-8 md:mt-12 lg:mt-16 text-2xl xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-center text-[#f7e6c8]">
						About Me
					</p>
					<p className="special-gothic mx-10 mb-4 xs:mb-5 sm:mb-6 md:mb-8 lg:mb-10 text-base xs:text-sm sm:text-base md:text-lg lg:text-xl text-center text-[#655b4b] px-1 xs:px-2 sm:px-3 md:px-4 leading-relaxed">
						I am a dedicated web and mobile app developer with a strong passion
						for mastering programming languages such as React, Vite, Vue,
						NextJS, Expo, Flutter and React Native. I use my expertise in
						website and mobile application design to contribute practical ideas,
						thorough analysis, and careful planning to projects. As a team
						player, I am eager to learn and adept at adopting new technological
						tools.
					</p>
				</div>

				{/* Draggable cards - bottom on mobile/tablet */}
				<div className="p-3 xs:p-4 sm:p-6 md:p-8 lg:p-10 flex items-center justify-center min-h-[60vh] sm:min-h-[55vh] lg:min-h-[50vh]">
					<DraggableCardDemo />
				</div>
			</div>

			{/* Desktop Layout - Side by side */}
			<div className="hidden xl:flex min-h-screen">
				{/* Left column for text content */}
				<div className="w-1/2 p-8 xl:p-10 2xl:p-12 flex-col justify-center">
					<p className="special-gothic my-44 mb-4 xl:mb-6 2xl:mb-8 text-xl xl:text-2xl z text-center text-[#f7e6c8]">
						About Me
					</p>
					<p className="special-gothic mb-8 xl:mb-10 2xl:mb-12 text-lg xl:text-xl 2xl:text-2xl text-center text-[#655b4b] leading-relaxed xl:leading-relaxed 2xl:leading-loose">
						I am a dedicated web and mobile app developer with a strong passion
						for mastering programming languages such as React, Vite, Vue,
						NextJS, Expo, Flutter and React Native. I use my expertise in
						website and mobile application design to contribute practical ideas,
						thorough analysis, and careful planning to projects. As a team
						player, I am eager to learn and adept at adopting new technological
						tools.
					</p>
				</div>

				{/* Right column for draggable cards */}
				<div className="w-1/2 p-8 xl:p-10 2xl:p-12 items-center justify-center">
					<DraggableCardDemo />
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
