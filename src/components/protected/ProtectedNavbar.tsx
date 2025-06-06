import { Col, Row, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Logo from "../../assets/images/Logo.svg";
import { PageRoutes } from "../../routes/allRoutes";
import type { SectionRefs } from "../../routes/allRoutes";
import { useState, useEffect } from "react";

interface ProtectedNavbarProps {
	sectionRefs?: SectionRefs;
}

const ProtectedNavbar = ({ sectionRefs }: ProtectedNavbarProps) => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	// Add resize listener to handle screen size changes
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) {
				// md breakpoint
				setIsDrawerOpen(false);
			}
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const scrollToSection = (key: string) => {
		if (!sectionRefs?.[key]?.current) {
			console.warn(`No section ref found for key: ${key}`);
			return;
		}
		sectionRefs[key]?.current?.scrollIntoView({ behavior: "smooth" });
		setIsDrawerOpen(false);
	};

	return (
		<Row className="h-full w-full items-center justify-between">
			{/* Left: Logo */}
			<Col>
				<img src={Logo} alt="Logo" className="w-24 h-auto" />
			</Col>

			{/* Hamburger Menu for Mobile */}
			<Col className="md:hidden">
				<button
					onClick={() => setIsDrawerOpen(true)}
					className="p-2 text-[#f7e6c8] hover:text-[#947e57] transition-colors"
				>
					<MenuOutlined className="text-2xl" />
				</button>
			</Col>

			{/* Desktop Navigation */}
			<Col className="hidden md:block">
				<div className="flex items-center space-x-8">
					{PageRoutes.map((route) => (
						<button
							key={route.key}
							onClick={() => scrollToSection(route.key)}
							className="special-gothic text-xl text-[#f7e6c8] hover:text-[#947e57] transition-colors cursor-pointer bg-transparent border-none"
						>
							{route.name}
						</button>
					))}
				</div>
			</Col>

			{/* Mobile Drawer */}
			<Drawer
				placement="right"
				onClose={() => setIsDrawerOpen(false)}
				open={isDrawerOpen}
				width="100%"
				height="100vh"
				className="md:hidden"
				closeIcon={null} // Remove default close icon
				styles={{
					body: {
						padding: 0,
						backgroundColor: "#0a0a0a",
					},
					content: {
						backgroundColor: "#0a0a0a",
					},
					wrapper: {
						height: "100vh",
					},
					mask: {
						backgroundColor: "rgba(0, 0, 0, 0.9)",
					},
				}}
			>
				{/* Close Button */}
				<button
					onClick={() => setIsDrawerOpen(false)}
					className="absolute top-6 right-6 p-2 text-[#f7e6c8] hover:text-[#947e57] transition-colors text-3xl z-50"
					aria-label="Close menu"
				>
					×
				</button>

				<div className="flex flex-col space-y-6 py-4 h-full items-center justify-center">
					{PageRoutes.map((route) => (
						<button
							key={route.key}
							onClick={() => scrollToSection(route.key)}
							className="special-gothic text-2xl text-[#f7e6c8] hover:text-[#947e57] transition-colors cursor-pointer bg-transparent border-none text-center px-6 py-2"
						>
							{route.name}
						</button>
					))}
				</div>
			</Drawer>
		</Row>
	);
};

export default ProtectedNavbar;
