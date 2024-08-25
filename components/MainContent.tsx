"use client";

import { useState, useEffect } from "react";

export default function MainContent() {
	const [loaded, setLoaded] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState("All");

	useEffect(() => {
		const timer = setTimeout(() => setLoaded(true), 500);
		return () => clearTimeout(timer);
	}, []);

	const portfolioItems = [
		{
			title: "Nerd",
			category: "OhniPixel",
			imageUrl: "/project thumbnails/1.gif",
		},
		{
			title: "Sunglass Negus",
			category: "Bro doesn't need shampoo",
			imageUrl: "/project thumbnails/5.jpg",
		},
		{
			title: "Fundo",
			category: "Web Design",
			imageUrl: "/project thumbnails/3.png",
		},
		// Add more items as needed
	];

	const categories = ["All", ...portfolioItems.map((item) => item.category).filter((value, index, self) => self.indexOf(value) === index)];

	const filteredItems = selectedCategory === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === selectedCategory);

	return (
		<div className="space-y-8">
			<section>
				<h2 className="text-3xl font-bold mb-6 text-white">Portfolio</h2>

				{/* Filter Section */}
				<div className="flex space-x-4 text-lg mb-6 relative">
					{categories.map((category) => (
						<button
							key={category}
							className={`relative transition-colors duration-300 ${selectedCategory === category ? "text-yellow-500" : "text-gray-400"}`}
							onClick={() => setSelectedCategory(category)}>
							{category}
							{selectedCategory === category && <div className="absolute left-0 right-0 bottom-[-2px] h-1 bg-yellow-500 rounded"></div>}
						</button>
					))}
				</div>

				{/* Portfolio Items */}
				<div className="grid grid-cols-2 gap-6">
					{filteredItems.map((item, index) => (
						<div
							key={index}
							className="bg-zinc-800 rounded-lg p-4 transition-all duration-300"
							style={{ minHeight: "220px" }} // Add a consistent min-height for each item
						>
							<div
								className="w-full h-40 bg-gray-700 rounded-md mb-4"
								style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
								<img
									src={item.imageUrl}
									alt={item.title}
									className="object-cover rounded-md max-h-full"
									style={{ maxWidth: "100%" }} // Ensure image fits within the container
								/>
							</div>
							<h3 className="text-xl font-semibold text-white">{item.title}</h3>
							<p className="text-sm text-gray-400">{item.category}</p>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}
