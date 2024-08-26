"use client";

import { MapPin, Mail, Phone, Linkedin, Github } from "lucide-react";

export default function PersonalInfo() {
	const items = [
		{ Icon: MapPin, text: "Toronto, ON, Canada" },
		{ Icon: Mail, text: "kaho399@gmail.com" },
		{ Icon: Phone, text: "+1 (437) 669-6420" },
		{
			Icon: Linkedin,
			text: "https://www.linkedin.com/in/seymour-chan-971041194/",
			label: "LinkedIn",
		},
		{
			Icon: Github,
			text: "https://github.com/uynot",
			label: "GitHub",
		},
	];

	return (
		<div className="space-y-3 text-bold">
			{items.map((item, index) => (
				<div key={index} className="flex items-center">
					<div className="flex items-center justify-center w-8 h-8 mr-3 bg-gray-700 p-2 rounded-lg transition-all duration-500">
						<item.Icon size={16} className="text-yellow-500" />
					</div>
					<div className="flex-grow">
						<div className="h-5 transition-all duration-500">
							{item.label ? (
								<a
									href={item.text}
									target="_blank"
									rel="noopener noreferrer"
									className="text-white hover:text-yellow-400 transition-colors duration-300">
									{item.label}
								</a>
							) : (
								<span className="text-white">{item.text}</span>
							)}
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
