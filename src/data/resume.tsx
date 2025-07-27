import { Icons } from "@/components/icons"
import { HomeIcon, NotebookIcon } from "lucide-react"

export const DATA = {
	name: "Andrew Sodeinde",
	initials: "AS  ",
	url: "https://andrewsodeinde.uk",
	location: "Manchester, UK",
	locationLink: "https://www.google.com/maps/place/manchester",
	description:
		"Developer, innovator, and entrepreneur. Helping people and problem solving is my bread and butter.",
	summary:
		" I’m Andrew (drew sometimes), a full-stack developer and entrepreneur based in Manchester, UK. I recently graduated with a First Class degree in Computer Science and now I have a passion for building innovative solutions that solve real-world problems. I thrive on challenges that require creative thinking and technical expertise.",
	avatarUrl: "/gradhead1.jpg",
	skills: [
		"React",
		"Next.js",
		"Typescript",
		"Node.js",
		"Python",
		"C#",
		"Java",
		"C++",
		"SQL",
		"Machine Learning",
	],
	navbar: [
		{ href: "/", icon: HomeIcon, label: "Home" },
		// { href: "/blog", icon: NotebookIcon, label: "Blog" },
	],
	contact: {
		email: "andrewsodeinde@gmail.com",
		social: {
			GitHub: {
				name: "GitHub",
				url: "https://github.com/andxrew",
				icon: Icons.github,

				navbar: true,
			},
			LinkedIn: {
				name: "LinkedIn",
				url: "https://www.linkedin.com/in/andrew-sod",
				icon: Icons.linkedin,

				navbar: true,
			},
			X: {
				name: "X",
				url: "",
				icon: Icons.x,

				navbar: false,
			},
			Youtube: {
				name: "Youtube",
				url: "https://www.youtube.com/watch?v=8WVXk0Gz66E&list=RD8WVXk0Gz66E&start_radio=1",
				icon: Icons.youtube,
				navbar: true,
			},
			email: {
				name: "Send Email",
				url: "mailto:andrewsodeinde@gmail.com",
				icon: Icons.email,

				navbar: true,
			},
		},
	},

	work: [
		{
			company: "Barclays Bank",
			href: "",
			badges: [],
			location: "Hybrid",
			title: "Graduate Software Engineer",
			logoUrl: "/BCS.svg",
			start: "August 2025",
			end: "Present",
			description: "Will update you soon :)",
		},
		{
			company: "Barclays Bank",
			href: "",
			badges: [],
			location: "Hybrid",
			title: "Technology Intern",
			logoUrl: "/BCS.svg",
			start: "June 2024",
			end: "August 2024",
			description:
				"Built machine learning models using Python and SQL to classify internal data changes, supporting informed decision-making with explainability features.",
		},
		{
			company: "GreatUniHack2023",
			href: "",
			badges: [],
			location: "Manchester, UK",
			title: "Participant – Sustainability AI App",
			logoUrl: "/guh.png",
			start: "November 2023",
			end: "November 2023",
			description:
				"Built a web/mobile app for code, image, and video generation with integrated tree-planting initiatives to offset user carbon footprints.",
		},
		{
			company: "Google",
			href: "",
			badges: [],
			location: "London, UK",
			title: "Google BGN Hackathon - 2nd Place",
			logoUrl: "/google.svg",
			start: "October 2023",
			end: "October 2023",
			description:
				"Created a financial literacy web app to manage transactions and budgets with a smooth UX; placed 2nd out of national student teams.",
		},
		{
			company: "Tesco PLC",
			href: "",
			badges: [],
			location: "Manchester, UK",
			title: "Petrol Station Ops",
			logoUrl: "/tesco.svg",
			start: "June 2023",
			end: "September 2023",
			description:
				"Monitored and maintained petrol station computer systems, identifying opportunities to improve network efficiency and customer service.",
		},
		{
			company: "University Projects",
			href: "",
			badges: [],
			location: "Manchester, UK",
			title: "Interactive Games, Web & AI Applications",
			logoUrl: "/mmu.svg",
			start: "Septermber 2022",
			end: "July 2025",
			description:
				"Developed projects including 2D games, Pneumonia detection ML Pipelines, and an AI-powered skin lesion classifier using React Native and TensorFlow.",
		},
	],
	education: [
		{
			school: "Manchester Metropolitan University",
			href: "https://www.mmu.ac.uk/",
			degree: "(BCS) Bachelor's Degree of Computer Science (First Class - 1:1)",
			logoUrl: "/mmu.svg",
			start: "2022",
			end: "2025",
		},
		{
			school: "Xaverian College",
			href: "https://www.xaverian.ac.uk/",
			degree: "Computer Science, Mathematics, Physics (A Levels)",
			logoUrl: "/xc.png",
			start: "2020",
			end: "2022",
		},
	],
	projects: [
		{
			title: "Skinsight",
			href: "",
			dates: "March 2024 - May 2024",
			active: true,
			description:
				"A mobile-first AI-powered skin lesion classification app that helps users detect malignant or benign skin conditions. Built using a lightweight CNN (MobileNetV2) trained on the ISIC dataset, with a React Native front end and local result storage using SQLite.",
			technologies: [
				"React Native",
				"Python",
				"Flask",
				"Typescript",
				"NativewindCSS",
				"TensorFlow",
			],
			links: [
				{
					type: "Source",
					href: "https://github.com/andxrew/skinsight",
					icon: <Icons.github className="size-3" />,
				},
			],
			image: "",
			video: "skdemo.mp4",
		},
		{
			title: "Educate",
			href: "https://educate-one.vercel.app",
			dates: "June 2023 - August 2023",
			active: false,
			description:
				"Educate is an AI-powered quiz platform that lets users generate, take, and share quizzes on any topic — making learning engaging, personalized, and efficient.",
			technologies: [
				"Next.js",
				"Typescript",
				"Prisma",
				"OpenAI API",
				"TailwindCSS",
				"Shadcn UI",
			],
			links: [
				{
					type: "Source",
					href: "https://github.com/andxrew/Educate",
					icon: <Icons.github className="size-3" />,
				},
				{
					type: "Website",
					href: "https://educate-one.vercel.app",
					icon: <Icons.globe className="size-3" />,
				},
			],
			image: "",
			video: "edudemo.mp4",
		},
		{
			title: "FlairAI",
			href: "https://flair-ai.vercel.app",
			dates: "May 2023 - June 2023",
			active: true,
			description:
				"FlairAI was my first attempt at building a full-stack AI product — a platform that brings together AI tools like image generation, text generation, and more, all in one place. Powered by OpenAI, it was my introduction to prompt engineering, API integration, and designing intuitive user experiences around creative AI features.",
			technologies: [
				"Next.js",
				"Typescript",
				"PostgreSQL",
				"Prisma",
				"TailwindCSS",
				"Shadcn UI",
				"Magic UI",
				"Stripe",
				"Cloudflare Workers",
			],
			links: [
				{
					type: "Website",
					href: "https://llm.report",
					icon: <Icons.globe className="size-3" />,
				},
				{
					type: "Source",
					href: "https://github.com/dillionverma/llm.report",
					icon: <Icons.github className="size-3" />,
				},
			],
			image: "",
			video: "fademo.mp4",
		},
	],
	hackathons: [
		{
			title: "Student Academic Support Volunteer",
			dates: "2022 - 2024",
			location: "",
			description:
				"Served as a Volunteer Student Mentor, offering 1-to-1 support sessions to help peers better understand academic content and improve their grades.",
			image: "gradcap.png",
			links: [],
		},
		{
			title: "Great Manchester Run 2024",
			dates: "May 2024",
			location: "Manchester, Obviously",
			description: "10K in 45 minutes, not too bad for a first timer.",
			image: "run.png",
			links: [],
		},
		{
			title: "Won my first hackathon",
			dates: "July 2024",
			location: "",
			description:
				"During my internship at Barclays, us interns were pitted against each other in a hackathon. My team won by scheming an EXTREMELY creative solution to tackle finance literacy in the UK.",
			image: "1st.png",
			links: [],
		},
		{
			title: "First PC Build",
			dates: "October, 2024",
			location: "",
			description:
				"Specs: Gigabyte Aorus x870e, Ryzen 5 5600X,Gigabyte Aorus RTX 3070, 32GB Corsair Dominator 7200MT/s RAM, 2TB Wd Black SN850X SSD, Corsair 3500X Case, Corsair 1000w PSU, Corsair H150 Icue Link 360mm AIO",
			image: "screwd.png",
			links: [],
		},
		{
			title: "Learning to play six strings",
			dates: "November, 2024? i think",
			location: "",
			description: "Why listen to music when you can make it?",
			image: "guitar.png",
			links: [],
		},
		{
			title: "2nd PC Build",
			dates: "May, 2025",
			location: "",
			description:
				"Went a lot worse than the first one. Specs: AMD Ryzen 5 9600X, Gigabyte B850 EAGLE WIFI6E, Zotac SOLID SFF OC RTX 5070 Ti, 32GB G.Skill Ripjaws DDR5-6400 RAM, 2TB Crucial P310 NVMe SSD, Montech XR ATX Case, Corsair RM1000e 1000W PSU, Montech HyperFlow ARGB 360mm AIO",
			image: "boom.png",
			links: [],
		},
		{
			title: "Mentor",
			dates: "July, 2025",
			location: "",
			description:
				"Shared what I knew, pretended to know what I didn’t - it's been a flying success so far. Knowledge really is power, eh?",
			icon: "public",
			image: "mentor.png",
			links: [],
		},
	],
} as const
