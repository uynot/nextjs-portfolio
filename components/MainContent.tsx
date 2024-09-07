"use client";

import { useState, useEffect } from "react";
import { useActiveSection } from "../contexts/ActiveSectionContext";
import { Code, Globe, Smartphone, Camera, Briefcase, GraduationCap, Award } from "lucide-react";

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
			title: "Release Analyst",
			company: "CKMax Technology Inc.",
			period: "09/2024 - Present",
			description: "...",
			type: "work",
		},
		{
			title: "Junior Programmer",
			company: "CIIC Hong Kong Limited",
			period: "08/2022 - 09/2023",
			description:
				"Led the digitization of manual paperwork processes by developing a web app using Java EE, Spring Framework, and MariaDB, enhancing data transfer and system performance. Coordinated multi-team collaborations and optimized SQL queries to boost software efficiency by 80%.",
			type: "work",
		},
		{
			title: "Technician & Customer Support Representative",
			company: "Softlink Medical Solution Ltd.",
			period: "08/2020 - 08/2022",
			description:
				"Managed multiple database systems to ensure optimal operation and data security. Provided B2B phone-based customer support, resolving technical issues and reducing system downtime through robust diagnostic processes.",
			type: "work",
		},
		{
			title: "Software Engineer Trainee",
			company: "Top Vista Digital Media Solution Ltd.",
			period: "04/2020 - 08/2020",
			description:
				"Collaborated with a cross-functional team to develop a digital signage system using C#, ReactJS, and ASP.NET MVC Framework, enhancing software delivery and increasing project deployment efficiency by 25%.",
			type: "work",
		},
		{
			title: "Technical Sales Representative",
			company: "Winbo International Low Voltage Distribution",
			period: "01/2024 - 05/2024",
			description:
				"Improved customer satisfaction and sales process efficiency by managing sales operations from cold calling to invoicing. Enhanced inventory and customer service, boosting in-store experience and operational efficiency.",
			type: "work",
		},
		{
			title: "Creative Director (Internship)",
			company: "SyZyGy Ltd.",
			period: "05/2018 - 07/2018",
			description:
				"Engineered a game registration website, boosting user engagement through intuitive site architecture and functional navigation. Utilized Adobe Photoshop and Illustrator for graphic design, enhancing visual appeal and user interaction.",
			type: "internship",
		},
	];

	/*const education = [
		{
			title: "Diploma of Information Technology",
			degree: "Diploma",
			period: "09/2016 - 07/2017",
			description:
				"Proficient in SQL, Java, JavaScript, and C#, with hands-on experience in Visual Studio. Skilled in database management and application development.",
		},
		{
			title: "Higher Diploma In Multimedia (Withdrew)",
			degree: "Higher Diploma",
			period: "09/2017 - 01/2019",
			description: "Focused on IT and multimedia, including coursework in visual communication, media production, and web and app design.",
		},
	];*/

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

	const renderAbout = () => (
		<section className="space-y-8">
			<div>
				<h2 className="text-3xl font-bold mb-4 text-white">About Me</h2>
				<p className="text-gray-300 text-lg">
					I'm Seymour Chan, a Full-Stack Developer from Toronto, Canada. With a passion for creating functional and user-friendly digital
					experiences, I specialize in web development and innovative software solutions. My goal is to build applications that are not only
					technically sound but also intuitive and enjoyable to use.
				</p>
			</div>

			<div>
				<h2 className="text-2xl font-bold mb-6 text-white">What I'm Doing</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{[
						{ icon: Globe, title: "Web Design", description: "Creating responsive and attractive websites that engage users." },
						{ icon: Code, title: "Web Development", description: "Building robust web applications with modern technologies." },
						{
							icon: Smartphone,
							title: "App Development",
							description: "Developing cross-platform mobile applications for iOS and Android.",
						},
						{ icon: Camera, title: "UI/UX Design", description: "Designing intuitive interfaces for optimal user experience." },
					].map((item, index) => (
						<div key={index} className="bg-zinc-700 p-6 rounded-lg flex items-start space-x-4">
							<item.icon className="text-yellow-500 w-5 h-5 mt-1" />
							<div>
								<h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
								<p className="text-gray-300">{item.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>

			<div>
				<h2 className="text-2xl font-bold mb-6 text-white">Achievements</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{[
						{ icon: Briefcase, title: "5+ Years Experience", description: "In web development and software engineering" },
						{ icon: GraduationCap, title: "B.Sc. in Computer Science", description: "From University of Toronto" },
						{ icon: Award, title: "3 Industry Certifications", description: "Including AWS and Google Cloud" },
					].map((item, index) => (
						<div key={index} className="bg-zinc-700 p-6 rounded-lg flex flex-col items-center text-center">
							<item.icon className="text-yellow-500 w-12 h-12 mb-4" />
							<h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
							<p className="text-gray-300">{item.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);

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
			<div className="grid grid-cols-3 gap-6">
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
								<p className="mt-1 text-gray-300 text-sm">{exp.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
			{/*
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
								<p className="mt-1 text-gray-300 text-sm">{edu.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
			*/}
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

	/* const renderBlog = () => (
		<section>
			<h2 className="text-3xl font-bold mb-6 text-white">Blog</h2>
			<div className="space-y-4">Blog Posts</div>
		</section>
	); */

	const [formData, setFormData] = useState({
		fullName: "",
		emailAddress: "",
		message: "",
	});

	useEffect(() => {
		const timer = setTimeout(() => setLoaded(true), 500);
		return () => clearTimeout(timer);
	}, []);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log("Form submitted:", formData);
		setFormData({ fullName: "", emailAddress: "", message: "" });
		alert("Message sent successfully!");
	};

	const renderContact = () => (
		<section className="space-y-8">
			<h2 className="text-3xl font-bold mb-6 text-white">Contact</h2>

			{/* Google Map with dark theme */}
			<div className="w-full h-96 rounded-lg overflow-hidden">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184551.80858184468!2d-79.51814294735414!3d43.71840371230804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1684554835455!5m2!1sen!2sca&darkmode=1"
					width="100%"
					height="100%"
					style={{ border: 0 }}
					allowFullScreen={true}
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"></iframe>
			</div>

			{/* Contact Form */}
			<div>
				<h3 className="text-2xl font-bold mb-4 text-white">Contact Form</h3>
				<form onSubmit={handleSubmit} className="space-y-4">
					<div className="flex space-x-4">
						<input
							type="text"
							name="fullName"
							value={formData.fullName}
							onChange={handleInputChange}
							placeholder="Full name"
							className="w-full p-2 bg-zinc-700 rounded-md text-white"
							required
						/>
						<input
							type="email"
							name="emailAddress"
							value={formData.emailAddress}
							onChange={handleInputChange}
							placeholder="Email address"
							className="w-full p-2 bg-zinc-700 rounded-md text-white"
							required
						/>
					</div>
					<div>
						<textarea
							name="message"
							value={formData.message}
							onChange={handleInputChange}
							placeholder="Your Message"
							className="w-full p-2 bg-zinc-700 rounded-md text-white h-32"
							required></textarea>
					</div>
					<div>
						<button type="submit" className="px-4 py-2 bg-yellow-500 text-black rounded-md hover:bg-yellow-600 transition-colors">
							Send Message
						</button>
					</div>
				</form>
			</div>
		</section>
	);

	return (
		<div className="space-y-8 select-none">
			{activeSection === "About" && renderAbout()}
			{activeSection === "Portfolio" && renderPortfolio()}
			{activeSection === "Experience" && renderExperienceAndEducation()}
			{activeSection === "Skills" && renderSkills()}
			{activeSection === "Contact" && renderContact()}
		</div>
	);
}
