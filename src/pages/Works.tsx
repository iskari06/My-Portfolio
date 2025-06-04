import { Timeline } from "../components/ui/timeline";

export function TimelineDemo() {
	const data = [
		{
			title: "On-The-Job Training 2025",
			content: (
				<div>
					<p className="mb-8 font-normal text-[#655b4b] md:text-sm xl:text-lg dark:text-[#f7e6c8]">
						As a frontend developer at Davao City Water District, I built
						responsive and user-friendly interfaces using ReactJS, TypeScript,
						MobX, Tailwind CSS, and Ant Design, while collaborating through
						GitHub, Figma, and ClickUp for efficient project delivery.
					</p>
					<div className="grid grid-cols-2 gap-4">
						<img
							src="/src/assets/images/works/intro.svg"
							alt="startup template"
							width={500}
							height={500}
							className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
						/>
						<img
							src="/src/assets/images/works/dash.svg"
							alt="startup template"
							width={500}
							height={500}
							className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
						/>
						<img
							src="/src/assets/images/works/em.svg"
							alt="startup template"
							width={500}
							height={500}
							className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
						/>
						<img
							src="/src/assets/images/works/tech.svg"
							alt="startup template"
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
							src="/src/assets/images/works/botbb.svg"
							alt="Main"
							className="col-span-2 w-31 h-32 md:col-span-2 md:row-span-1 md:w-full md:h-70 object-cover rounded-xl shadow-lg"
						/>

						{/* Top Right - Portrait (2 columns) */}
						<img
							src="/src/assets/images/works/cet2.svg"
							alt="Side Portrait"
							className="col-span-3 w-70 h-32 md:col-span-3 md:row-span-1 md:w-full md:h-70 object-cover rounded-xl shadow-lg"
						/>

						{/* Bottom Left - Square Cottage */}
						<img
							src="/src/assets/images/works/cet.svg"
							alt="Bottom Left"
							className="col-span-3 w-70 h-32 md:col-span-3 md:row-span-1 md:w-full md:h-60 object-cover rounded-xl shadow-lg"
						/>

						{/* Bottom Right - Wide Landscape */}
						<img
							src="/src/assets/images/works/botb.svg"
							alt="Bottom Right"
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
							src="/src/assets/images/home/oms.svg"
							alt="hero template"
							width={500}
							height={500}
							className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
						/>
						<img
							src="/src/assets/images/home/dashboard.svg"
							alt="feature template"
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
					<div className="flex md:grid-cols-3 gap-4 place-content-center">
						<img
							src="/src/assets/images/works/compe.svg"
							alt="Arise & Sing 2023"
							className="w-full max-w-[180px] h-[220px] md:max-w-fit md:h-[312px] rounded-lg shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
						/>
						<img
							src="/src/assets/images/works/compe2.svg"
							alt="Arise & Sing 2023"
							className="w-full max-w-[180px] h-[220px] md:max-w-fit md:h-[310px] rounded-lg shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
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
