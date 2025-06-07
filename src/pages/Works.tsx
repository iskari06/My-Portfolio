import { Timeline } from "../components/ui/timeline";

import intro from "../assets/images/works/intro.svg";
import dash from "../assets/images/works/dash.svg";
import em from "../assets/images/works/em.svg";
import tech from "../assets/images/works/tech.svg";
import botbb from "../assets/images/works/botbb.svg"
import cet2 from "../assets/images/works/cet2.svg"
import cet from "../assets/images/works/cet.svg"
import botb from "../assets/images/works/botb.svg"
import oms from "../assets/images/home/oms.svg"
import dashboard from "../assets/images/home/dashboard.svg"
import compe from "../assets/images/works/compe.svg"
import compe2 from "../assets/images/works/compe2.svg"

export function TimelineDemo() {
	const data = [
		{
			title: "On-The-Job Training 2025",
			content: (
				<div>
					<p className="mb-8 font-normal text-[#f7e6c8] md:text-sm xl:text-lg dark:text-[#f7e6c8]">
						As a frontend developer at Davao City Water District, I built
						responsive and user-friendly interfaces using ReactJS, TypeScript,
						MobX, Tailwind CSS, and Ant Design, while collaborating through
						GitHub, Figma, and ClickUp for efficient project delivery.
					</p>
					<div className="grid grid-cols-2 gap-4">
						<img
							src={intro}
							alt="OJT intro"
							width={500}
							height={500}
							className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
						/>
						<img
							src={dash}
							alt="Dashboard"
							width={500}
							height={500}
							className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
						/>
						<img
							src={em}
							alt="Employee Master"
							width={500}
							height={500}
							className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
						/>
						<img
							src={tech}
							alt="Tech Stack"
							width={500}
							height={500}
							className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
						/>
					</div>
				</div>
			),
		},
		{
			title: "CET Day and Intramurals 2024",
			content: (
				<div>
					<p className="mb-8 font-normal text-[#f7e6c8] md:text-sm xl:text-lg dark:text-[#f7e6c8]">
						I am not only dedicated to my growth as a developer, but I also
						actively engage in extracurricular activities. I’ve participated in
						musical events, including winning Battle of the Bands and Vocal Solo
						competitions during CET Day, and once again securing a win in Battle
						of the Bands during the Intramurals. These experiences reflect my
						versatility, teamwork, and passion both in and beyond tech.
					</p>

					<div className="grid grid-cols-5 grid-rows-2 gap-4 max-w-6xl mx-auto">
						{/* Top Left - Large Landscape (3 columns) */}
						<img
							src={botbb}
							alt="BOTBB"
							className="col-span-2 w-31 h-32 md:col-span-2 md:row-span-1 md:w-full md:h-70 object-cover rounded-xl shadow-lg"
						/>

						{/* Top Right - Portrait (2 columns) */}
						<img
							src={cet2}
							alt="CET 2"
							className="col-span-3 w-70 h-32 md:col-span-3 md:row-span-1 md:w-full md:h-70 object-cover rounded-xl shadow-lg"
						/>

						{/* Bottom Left - Square Cottage */}
						<img
							src={cet}
							alt="CET"
							className="col-span-3 w-70 h-32 md:col-span-3 md:row-span-1 md:w-full md:h-60 object-cover rounded-xl shadow-lg"
						/>

						{/* Bottom Right - Wide Landscape */}
						<img
							src={botb}
							alt="Battle of the Bands"
							className="col-span-2 w-31 h-32 md:col-span-2 md:row-span-1 md:w-full md:h-60 object-cover rounded-xl shadow-lg"
						/>
					</div>
				</div>
			),
		},
		{
			title: "Early 2024",
			content: (
				<div>
					<p className="mb-8 font-normal text-[#f7e6c8] md:text-sm xl:text-lg dark:text-[#f7e6c8]">
						I developed a full-stack ordering management system using Vite and
						Vue for the frontend, with Pinia for state management to ensure a
						responsive and organized user experience. The backend was powered by
						Laravel, handling API endpoints, authentication, and database
						operations for efficient order processing and management.
					</p>
					<div className="grid grid-cols-2 gap-4">
						<img
							src={oms}
							alt="Order Management System"
							width={500}
							height={500}
							className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
						/>
						<img
							src={dashboard}
							alt="Dashboard"
							width={500}
							height={500}
							className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
						/>
					</div>
				</div>
			),
		},
		{
			title: "Intramurals 2023",
			content: (
				<div>
					<p className="mb-8 font-normal text-[#f7e6c8] md:text-sm xl:text-lg dark:text-[#f7e6c8]">
						I participated in the Arise and Sing competition, where I proudly
						secured 1st place. This achievement not only highlighted my vocal
						talent but also reflected my dedication, stage presence, and passion
						for music. It was a rewarding experience that allowed me to grow
						both personally and artistically, while representing my department
						with pride.
					</p>
					<div className="flex flex-row gap-4 max-w-6xl mx-auto">
						<img
							src={compe}
							alt="Arise & Sing 2023"
							className="w-1/2 h-auto max-h-[300px] xs:max-h-[400px] sm:max-h-[500px] object-contain rounded-lg shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
						/>
						<img
							src={compe2}
							alt="Arise & Sing 2023"
							className="w-1/2 h-auto max-h-[300px] xs:max-h-[400px] sm:max-h-[500px] object-contain rounded-lg shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
						/>
					</div>
				</div>
			),
		},
	];
	return (
		<div className="relative w-full overflow-clip">
			<Timeline data={data} />
		</div>
	);
}

const Works = () => {
	return (
		<div className=" items-center">
			<TimelineDemo />
		</div>
	);
};

export default Works;
