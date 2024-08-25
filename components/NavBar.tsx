"use client";

import { useState, useEffect } from "react";
import { Home, User, Briefcase, BookOpen, Mail } from "lucide-react";

export default function NavBar() {
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setLoaded(true), 500);
		return () => clearTimeout(timer);
	}, []);

	const navItems = [
		{ icon: Home, text: "About" },
		{ icon: User, text: "Resume" },
		{ icon: Briefcase, text: "Portfolio" },
		{ icon: BookOpen, text: "Blog" },
		{ icon: Mail, text: "Contact" },
	];

	return (
		<nav className="bg-zinc-800 p-4 rounded-lg flex flex-col h-auto">
			<div className="space-y-4">
				{navItems.map((item, index) => (
					<div key={index} className="flex items-center">
						<div className="flex items-center justify-center w-8 h-8 mr-3 bg-gray-700 p-2 rounded-lg transition-all duration-500">
							{!loaded && <div className="w-6 h-6 skeleton rounded-full"></div>}
							{loaded && <item.icon size={16} className="text-yellow-500" />}
						</div>
						<div className="flex-grow">
							<div className={`h-6 ${!loaded ? "skeleton w-16" : ""} transition-all duration-500 flex items-center`}>
								{loaded && <span className="text-gray-300 text-sm">{item.text}</span>}
							</div>
						</div>
					</div>
				))}
			</div>
		</nav>
	);
}
