import {
	DraggableCardBody,
	DraggableCardContainer,
} from "../components/ui/draggable-card";

export function DraggableCardDemo() {
	const items = [
		{
			title: "KL '25",
			image: "/src/assets/images/aboutme/kl.svg",
			className: "absolute top-6 left-[5%] rotate-[-5deg] xs:top-8 xs:left-[6%] sm:top-12 sm:left-[8%] md:top-16 md:left-[8%] lg:top-20 lg:left-[10%] xl:top-30 xl:left-[10%]",
		},
		{
			title: "Supertree Grove",
			image: "/src/assets/images/aboutme/gbtb.svg",
			className: "absolute top-20 left-[8%] rotate-[-7deg] xs:top-24 xs:left-[10%] sm:top-32 sm:left-[10%] md:top-36 md:left-[12%] lg:top-44 lg:left-[10%] xl:top-60 xl:left-[10%]",
		},
		{
			title: "Subway",
			image: "/src/assets/images/aboutme/subway.svg",
			className: "absolute top-4 left-[30%] rotate-[8deg] xs:top-6 xs:left-[32%] sm:top-8 sm:left-[35%] md:top-12 md:left-[38%] lg:top-16 lg:left-[42%] xl:top-25 xl:left-[45%]",
		},
		{
			title: "Universal Exp",
			image: "/src/assets/images/aboutme/car.svg",
			className: "absolute top-16 left-[40%] rotate-[10deg] xs:top-20 xs:left-[42%] sm:top-28 sm:left-[45%] md:top-32 md:left-[48%] lg:top-36 lg:left-[52%] xl:top-60 xl:left-[55%]",
		},
		{
			title: "Glass House",
			image: "/src/assets/images/aboutme/me 3.svg",
			className: "absolute top-12 right-[30%] rotate-[2deg] xs:top-16 xs:right-[32%] sm:top-24 sm:right-[35%] md:top-28 md:right-[38%] lg:top-32 lg:right-[42%] xl:top-50 xl:right-[45%]",
		},
		{
			title: "Seattle :)",
			image: "/src/assets/images/aboutme/me 2.svg",
			className: "absolute top-8 left-[35%] rotate-[-7deg] xs:top-12 xs:left-[37%] sm:top-16 sm:left-[40%] md:top-20 md:left-[43%] lg:top-24 lg:left-[47%] xl:top-40 xl:left-[50%]",
		},
		{
			title: "Singapore '25",
			image: "/src/assets/images/aboutme/me.svg",
			className: "absolute top-10 left-[15%] rotate-[4deg] xs:top-14 xs:left-[17%] sm:top-20 sm:left-[20%] md:top-24 md:left-[23%] lg:top-28 lg:left-[28%] xl:top-45 xl:left-[30%]",
		},
	];
	
	return (
		<DraggableCardContainer className="relative flex bg-gray-950 backdrop-blur-sm rounded-lg sm:rounded-xl lg:rounded-2xl min-h-[250px] xs:min-h-[280px] sm:min-h-[320px] md:min-h-[380px] lg:min-h-[450px] xl:min-h-screen w-full items-center justify-center overflow-clip">
			<p className="absolute top-1/2 mx-auto max-w-[280px] xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-sm -translate-y-3/4 text-center text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-4xl font-black text-neutral-400 dark:text-[#f7e6c8] px-2 xs:px-3 sm:px-4">
				Hi! I am Christopher Lazaga, a web and mobile app developer.
			</p>
			{items.map((item, index) => (
				<DraggableCardBody key={index} className={item.className}>
					<img
						src={item.image}
						alt={item.title}
						className="pointer-events-none relative z-10 h-16 w-24 xs:h-18 xs:w-28 sm:h-20 sm:w-32 md:h-24 md:w-40 lg:h-32 lg:w-52 xl:h-50 xl:w-80 object-cover"
					/>
					<h3 className="mt-1 xs:mt-1.5 sm:mt-2 md:mt-2.5 lg:mt-3 xl:mt-4 text-center text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-2xl font-bold text-neutral-700 dark:text-neutral-900">
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
				<div className="w-1/2 p-8 xl:p-10 2xl:p-12 flex flex-col justify-center">
					<p className="special-gothic mb-4 xl:mb-6 2xl:mb-8 mt-32 xl:mt-40 2xl:mt-52 text-xl xl:text-2xl 2xl:text-3xl text-center text-[#f7e6c8]">
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
				<div className="w-1/2 p-8 xl:p-10 2xl:p-12 flex items-center justify-center">
					<DraggableCardDemo />
				</div>
			</div>
		</div>
	);
};

export default AboutMe;