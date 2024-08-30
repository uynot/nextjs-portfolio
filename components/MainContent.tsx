"use client";

import { useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";
import { Briefcase, GraduationCap } from "lucide-react";
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
			title: "Senior Software Engineer",
			company: "Tech Giants Inc.",
			period: "2021 - Present",
			description: "Led development of scalable web applications using React and Node.js.",
			type: "work",
		},
		{
			title: "Master's in Computer Science",
			company: "University of Technology",
			period: "2019 - 2021",
			description: "Specialized in Artificial Intelligence and Machine Learning.",
			type: "education",
		},
		{
			title: "Software Developer",
			company: "Innovative Startups Ltd.",
			period: "2017 - 2021",
			description: "Developed and maintained full-stack applications for various clients.",
			type: "work",
		},
		{
			title: "Bachelor's in Software Engineering",
			company: "Tech State University",
			period: "2013 - 2017",
			description: "Graduated with honors. Focused on web technologies and algorithms.",
			type: "education",
		},
		// Add more experiences as needed
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

	const renderExperience = () => (
		<section className="py-5">
			<h2 className="text-3xl font-bold mb-10 text-white">Experience</h2>
			<div className="relative">
				{/* Vertical line */}
				<div className="absolute left-5 top-5 bottom-0 w-1 bg-gradient-to-b from-white to-transparent"></div>

				{experiences.map((exp, index) => (
					<div key={index} className="mb-6 flex">
						<div className="flex flex-col items-center mt-3 mr-4">
							<div
								className={`rounded-full h-11 w-11 flex items-center justify-center z-10 ${
									exp.type === "work" ? "bg-yellow-500" : "bg-zinc-600"
								}`}>
								{exp.type === "work" ? <Briefcase size={20} /> : <GraduationCap size={20} />}
							</div>
							{/* {index !== experiences.length && <div className="h-full w-0.5 bg-yellow-700"></div>} */}
						</div>
						<div className="bg-zinc-700 p-4 rounded-lg shadow-md shadow-zinc-600 flex-grow">
							<h3 className="text-xl font-bold text-white">{exp.title}</h3>
							<p className="text-yellow-500">{exp.company}</p>
							<p className="text-gray-400 text-sm">{exp.period}</p>
							<p className="mt-2 text-gray-300">{exp.description}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);

	const renderSkills = () => (
		<section>
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
			{activeSection === "Experience" && renderExperience()}
			{activeSection === "Skills" && renderSkills()}
			{activeSection === "Blog" && renderBlog()}
			{activeSection === "Contact" && renderContact()}
		</div>
	);
}
