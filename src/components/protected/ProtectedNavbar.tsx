import { Col, Row } from "antd";
import Logo from "../../assets/images/Logo.svg";
import { PageRoutes } from "../../routes/allRoutes";
import type { SectionRefs } from "../../routes/allRoutes";

interface ProtectedNavbarProps {
  sectionRefs?: SectionRefs;
}

const ProtectedNavbar = ({ sectionRefs }: ProtectedNavbarProps) => {
	// Function to scroll to a section when clicked
	const scrollToSection = (key: string) => {
		if (!sectionRefs?.[key]?.current) {
			console.warn(`No section ref found for key: ${key}`);
			return;
		}
		sectionRefs[key]?.current?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<Row className="h-full w-full items-center justify-between">
			{/* Left: Logo */}
			<Col>
				<img src={Logo} alt="Logo" className="w-24 h-auto" />
			</Col>

			{/* Right: Navigation Links */}
			<Col>
				<div className="flex items-center space-x-8">
					{PageRoutes.map((route) => (
						<button
							key={route.key}
							onClick={() => scrollToSection(route.key)}
							className="special-gothic text-xl text-[#f7e6c8]! hover:text-[#947e57]! transition-colors cursor-pointer bg-transparent border-none"
						>
							{route.name}
						</button>
					))}
				</div>
			</Col>
		</Row>
	);
};

export default ProtectedNavbar;
