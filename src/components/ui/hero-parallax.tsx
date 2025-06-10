import React from "react";
import { FileTextOutlined, GithubOutlined } from "@ant-design/icons";
import {
	motion,
	useScroll,
	useTransform,
	useSpring,
	MotionValue,
} from "framer-motion";

export const HeroParallax = ({
	products,
}: {
	products: {
		title: string;
		thumbnail: string;
	}[];
}) => {
	const firstRow = products.slice(0, 5);
	const secondRow = products.slice(5, 10);
	const ref = React.useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});

	const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

	const translateX = useSpring(
		useTransform(scrollYProgress, [0, 1], [0, 1000]),
		springConfig
	);
	const translateXReverse = useSpring(
		useTransform(scrollYProgress, [0, 1], [0, -1000]),
		springConfig
	);
	const rotateX = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [15, 0]),
		springConfig
	);
	const opacity = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
		springConfig
	);
	const rotateZ = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [20, 0]),
		springConfig
	);
	const translateY = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [-600, 500]),
		springConfig
	);
	return (
		<div
			ref={ref}
			className="h-[200vh] md:h-[300vh] py-30 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
		>
			<Header />
			<motion.div
				style={{
					rotateX,
					rotateZ,
					translateY,
					opacity,
				}}
				className=""
			>
				<motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
					{firstRow.map((product) => (
						<ProductCard
							product={product}
							translate={translateX}
							key={product.title}
						/>
					))}
				</motion.div>
				<motion.div className="flex flex-row  mb-20 space-x-20 ">
					{secondRow.map((product) => (
						<ProductCard
							product={product}
							translate={translateXReverse}
							key={product.title}
						/>
					))}
				</motion.div>
			</motion.div>
		</div>
	);
};

export const Header = () => {
	return (
		<div className="max-w-7xl relative mx-auto py-20 md:py-10 px-4 w-full z-20 left-0 top-0">
			<h1 className="special-gothic mx-7 md:mx-auto text-4xl md:text-7xl font-bold text-[#f7e6c8] dark:text-[#f7e6c8]">
				Hello world! I'm
				<br /> Christopher Lazaga
			</h1>
			<p className="special-gothic mx-7 md:mx-0 max-w-2xl text-lg md:text-xl mt-4 text-[#947e57] dark:text-[#947e57]">
				I am a recent Bachelor of Science in Information Technology graduate
				from Holy Cross of Davao College, and a passionate web developer
				dedicated to continuous learning and growth.
			</p>
			<div className="mt-5 mx-7 md:mx-auto flex flex-wrap gap-6">
				<a
					href="https://github.com/iskari06"
					target="_blank"
					rel="noopener noreferrer"
					className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
				>
					<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
					<span className="inline-flex h-full w-full z-10 cursor-pointer items-center justify-center rounded-full bg-slate-950/80 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
						<GithubOutlined className="mr-2" />
						GitHub Profile
					</span>
				</a>
        <a 
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
					<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
					<span className="inline-flex h-full w-full z-10 cursor-pointer items-center justify-center rounded-full bg-slate-950/80 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
						<FileTextOutlined className="mr-2" />
						Resume
					</span>
				</a>
			</div>
		</div>
	);
};

export const ProductCard = ({
	product,
	translate,
}: {
	product: {
		title: string;
		thumbnail: string;
	};
	translate: MotionValue<number>;
}) => {
	return (
		<motion.div
			style={{
				x: translate,
			}}
			whileHover={{
				y: -20,
			}}
			key={product.title}
			className="group/product h-48 sm:h-72 md:h-96 w-[15rem] sm:w-[20rem] md:w-[30rem] relative shrink-0"
		>
			<span className="block group-hover/product:shadow-2xl ">
				<img
					src={product.thumbnail}
					height="600"
					width="600"
					className="object-cover object-left-top absolute h-full w-full inset-0"
					alt={product.title}
				/>
			</span>
			<div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
			<h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
				{product.title}
			</h2>
		</motion.div>
	);
};
