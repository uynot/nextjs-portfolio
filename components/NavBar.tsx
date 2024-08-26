"use client";

import { Home, User, Briefcase, BookOpen, Mail } from "lucide-react";

export default function NavBar() {
	const navItems = [
		{ icon: Briefcase, text: "Portfolio" },
		{ icon: User, text: "Experience" },
		{ icon: BookOpen, text: "Blog" },
		{ icon: Mail, text: "Contact" },
	];

	return (
		<nav className="bg-zinc-800 p-4 rounded-lg flex flex-col h-auto">
			<div className="space-y-4">
				{navItems.map((item, index) => (
					<div key={index} className="flex items-center">
						<div className="flex items-center justify-center w-8 h-8 mr-3 p-2 rounded-lg bg-gray-700 transition-all duration-500">
							<item.icon size={16} className="text-yellow-500" />
						</div>
						<div className="flex-grow">
							<div className="h-6 flex items-center">
								<span className="text-gray-300 text-bold">{item.text}</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</nav>
	);
}
