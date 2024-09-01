"use client";

import { useState, useEffect } from "react";
import { ExternalLink, Briefcase, GraduationCap } from "lucide-react";
import { useActiveSection } from "../contexts/ActiveSectionContext";

export default function MainContent() {
	const [loaded, setLoaded] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState("All");
	const { activeSection } = useActiveSection();

	useEffect(() => {
		const timer = setTimeout(() => setLoaded(true), 500);
		return () => clearTimeout(timer);
	}, []);

	const portfolioItems = [
		{
			title: "Clinic Management System",
			category: "Full-Stack Application",
			imageUrl: "/project thumbnails/3.png",
			link: "https://google.com/",
		},
		{
			title: "Inventory CRUD API with MySQL",
			category: "Backend Application",
			imageUrl: "/project thumbnails/5.jpg",
			link: "https://google.com/",
		},
		{
			title: "Mahjong Calculator",
			category: "Static Website",
			imageUrl: "/project thumbnails/taikocry.png",
			link: "https://google.com/",
		},
		{
			title: "Personal Portfolio",
			category: "Static Website",
			imageUrl: "/project thumbnails/1.gif",
			link: "https://google.com/",
		},
	];

	const experiences = [
		{
			title: "Creative Director",
			company: "Design Studio Inc.",
			period: "2015 - Present",
			description: "Led creative teams in developing innovative design solutions for various clients.",
			type: "work",
		},
		{
			title: "Art Director",
			company: "Creative Agency Ltd.",
			period: "2010 - 2015",
			description: "Managed visual aspects of marketing campaigns and brand identities.",
			type: "work",
		},
	];

	const education = [
		{
			title: "University School Of The Arts",
			degree: "Master of Fine Arts",
			period: "2007 - 2009",
			description: "Specialized in graphic design and digital media.",
		},
		{
			title: "New York Academy of Art",
			degree: "Bachelor of Fine Arts",
			period: "2004 - 2007",
			description: "Focused on traditional art techniques and contemporary design practices.",
		},
		{
			title: "High School Of Art And Design",
			degree: "High School Diploma",
			period: "2000 - 2004",
			description: "Foundations in art and design principles.",
		},
	];

	const skills = [
		{ name: "JavaScript", level: 90 },
		{ name: "React", level: 85 },
		{ name: "Node.js", level: 80 },
		{ name: "TypeScript", level: 75 },
		{ name: "HTML/CSS", level: 95 },
		{ name: "Python", level: 70 },
	];

	const categories = ["All", ...Array.from(new Set(portfolioItems.map((item) => item.category)))];

	const filteredItems = selectedCategory === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === selectedCategory);

	const renderPortfolio = () => (
		<section>
			<h2 className="text-3xl font-bold mb-6 text-white">Portfolio</h2>

			{/* Filter Section */}
			<div className="relative mb-6">
				<div className="flex space-x-4 text-md relative">
					{categories.map((category) => (
						<button
							key={category}
							className={`relative transition-colors duration-300 pb-2 ${
								selectedCategory === category ? "text-yellow-500" : "text-gray-400 hover:text-gray-200"
							}`}
							onClick={() => setSelectedCategory(category)}>
							{category}
							<span
								className={`absolute left-0 right-0 bottom-0 h-[2px] bg-yellow-500 rounded transition-all duration-300 ${
									selectedCategory === category ? "w-full" : "w-0"
								}`}></span>
						</button>
					))}
				</div>
			</div>

			{/* Portfolio Items */}
			<div className="grid grid-cols-2 gap-6">
				{filteredItems.map((item, index) => (
					<div key={index} className="bg-zinc-800 rounded-lg p-4 transition-all duration-300">
						<div className="relative w-full h-40 rounded-md mb-4 overflow-hidden">
							{!loaded && <div className="w-full h-full skeleton"></div>}
							{loaded && (
								<img
									src={item.imageUrl}
									alt={item.title}
									className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
								/>
							)}
						</div>
						<h3 className="text-xl font-semibold text-white">{item.title}</h3>
						<p className="text-sm text-gray-400">{item.category}</p>
					</div>
				))}
			</div>
		</section>
	);

	const renderExperienceAndEducation = () => (
		<section>
			<h2 className="text-2xl font-bold mb-3 text-white">Experience</h2>
			<div className="space-y-6">
				<div className="relative">
					<div className="mt-1 absolute left-1.5 top-2 bottom-0 w-px bg-gradient-to-b from-zinc-700 via-zinc-700/100 to-zinc-700/25"></div>
					{experiences.map((exp, index) => (
						<div key={index} className="mb-8 flex items-start">
							<div className="relative mr-6">
								<div className="absolute top-1.5 left-0 w-3 h-3 rounded-full z-20 bg-dot-fade"></div>
								<div className="absolute top-1.5 left-0 w-3 h-3 rounded-full animate-ping opacity-75 bg-dot-fade"></div>
							</div>
							<div className="flex-grow pt-[0px]">
								<h3 className="mb-1 text-base font-bold text-white">{exp.title}</h3>
								<p className="text-yellow-500 text-xs">{exp.company}</p>
								<p className="mb-1 text-gray-400 text-xs">{exp.period}</p>
								<p className="mt-1 text-gray-400 text-sm">{exp.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
			<h2 className="text-2xl font-bold mt-14 mb-3 text-white">Education</h2>
			<div className="space-y-6">
				<div className="relative">
					<div className="mt-1 absolute left-1.5 top-2 bottom-0 w-px bg-gradient-to-b from-zinc-700 via-zinc-700/100 to-zinc-700/25"></div>
					{education.map((edu, index) => (
						<div key={index} className="mb-8 flex items-start">
							<div className="relative mr-6">
								<div className="absolute top-1.5 left-0 w-3 h-3 rounded-full z-20 bg-dot-fade"></div>
								<div className="absolute top-1.5 left-0 w-3 h-3 rounded-full animate-ping opacity-75 bg-dot-fade"></div>
							</div>
							<div className="flex-grow pt-[0px]">
								<h3 className="text-base font-bold text-white">{edu.title}</h3>
								<p className="mb-1 text-yellow-500 text-xs">{edu.period}</p>
								<p className="mt-1 text-gray-400 text-sm">{edu.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);

	const renderSkills = () => (
		<section className="h-auto">
			<h2 className="text-3xl font-bold mb-6 text-white">Skills</h2>
			<div className="space-y-4">
				{skills.map((skill, index) => (
					<div key={index}>
						<div className="flex justify-between mb-1">
							<span className="text-base font-medium text-white">{skill.name}</span>
							<span className="text-sm font-medium text-white">{skill.level}%</span>
						</div>
						<div className="w-full bg-gray-700 rounded-full h-2.5">
							<div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
						</div>
					</div>
				))}
			</div>
		</section>
	);

	const renderBlog = () => (
		<section>
			<h2 className="text-3xl font-bold mb-6 text-white">Blog</h2>
			{/* Add your blog content here */}
		</section>
	);

	const renderContact = () => (
		<section>
			<h2 className="text-3xl font-bold mb-6 text-white">Contact</h2>
			{/* Add your contact form or information here */}
		</section>
	);

	return (
		<div className="space-y-8 select-none">
			{activeSection === "Portfolio" && renderPortfolio()}
			{activeSection === "Experience" && renderExperienceAndEducation()}
			{activeSection === "Skills" && renderSkills()}
			{activeSection === "Blog" && renderBlog()}
			{activeSection === "Contact" && renderContact()}
		</div>
	);
}
