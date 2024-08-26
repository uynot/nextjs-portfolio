"use client";

import { useState } from "react";
import { Home, User, Briefcase, BookOpen, Mail } from "lucide-react";

export default function NavBar() {
	const [activeSection, setActiveSection] = useState("Portfolio");

	const navItems = [
		{ icon: Briefcase, text: "Portfolio" },
		{ icon: User, text: "Experience" },
		{ icon: BookOpen, text: "Blog" },
		{ icon: Mail, text: "Contact" },
	];

	return (
		<nav className="bg-zinc-800 p-4 rounded-lg flex flex-col h-auto select-none">
			<div className="space-y-4">
				{navItems.map((item, index) => (
					<div
						key={index}
						className={`flex items-center p-2 rounded-lg transition-all duration-500 cursor-pointer ${
							activeSection === item.text ? "bg-yellow-500" : "bg-zinc-800"
						}`}
						onClick={() => setActiveSection(item.text)}>
						<div className="w-8 h-8 flex items-center mr-1 p-1 rounded-lg transition-all duration-500">
							<item.icon
								size={16}
								className={`transition-all duration-500 ${activeSection === item.text ? "text-black" : "text-yellow-500"}`}
							/>
						</div>
						<div className="flex-grow">
							<span className={`text-bold transition-all duration-500 ${activeSection === item.text ? "text-zinc-800" : "text-gray-300"}`}>
								{item.text}
							</span>
						</div>
					</div>
				))}
			</div>
		</nav>
	);
}
