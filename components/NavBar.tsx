"use client";

import { useState, useEffect } from "react";
import { Home, User, Briefcase, Mail } from "lucide-react";

export default function NavBar() {
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setLoaded(true), 500);
		return () => clearTimeout(timer);
	}, []);

	const navItems = [
		{ icon: Home, text: "Home" },
		{ icon: User, text: "About" },
		{ icon: Briefcase, text: "Projects" },
		{ icon: Mail, text: "Contact" },
	];

	return (
		<nav className="bg-gray-800 p-4 rounded-lg flex flex-col h-full">
			<div className="space-y-6">
				{navItems.map((item, index) => (
					<div key={index} className="flex items-center">
						<div className="flex items-center justify-center w-6 h-6 mr-2 transition-all duration-500">
							{!loaded && <div className="w-6 h-6 skeleton rounded-full"></div>}
							{loaded && <item.icon size={18} />}
						</div>
						<div className="flex-grow">
							<div className={`h-6 ${!loaded ? "skeleton w-20" : ""} transition-all duration-500 flex items-center`}>
								{loaded && <span>{item.text}</span>}
							</div>
						</div>
					</div>
				))}
			</div>
		</nav>
	);
}
