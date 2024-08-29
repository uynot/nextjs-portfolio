"use client";

import { useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";
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
			title: "Nerd",
			category: "OhniPixel",
			imageUrl: "/project thumbnails/1.gif",
			link: "https://example.com/nerd",
		},
		{
			title: "Sunglass Negus",
			category: "Bro doesn't need shampoo",
			imageUrl: "/project thumbnails/5.jpg",
			link: "https://example.com/sunglass-negus",
		},
		{
			title: "Fundo",
			category: "Web Design",
			imageUrl: "/project thumbnails/3.png",
			link: "https://example.com/fundo",
		},
		// Add more items as needed
	];

	const categories = ["All", ...Array.from(new Set(portfolioItems.map((item) => item.category)))];

	const filteredItems = selectedCategory === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === selectedCategory);

	const renderPortfolio = () => (
		<section>
			<h2 className="text-3xl font-bold mb-6 text-white">Portfolio</h2>

			{/* Filter Section */}
			<div className="relative mb-6">
				<div className="flex space-x-4 text-lg relative">
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
		<section>
			<h2 className="text-3xl font-bold mb-6 text-white">Experience</h2>
			{/* Add your experience content here */}
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
			{activeSection === "Blog" && renderBlog()}
			{activeSection === "Contact" && renderContact()}
		</div>
	);
}
