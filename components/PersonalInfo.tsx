"use client";

import { MapPin, Mail, Phone, Calendar } from "lucide-react"; // Assuming you're using lucide-react for icons
import { Linkedin, Github } from "lucide-react";

export default function PersonalInfo() {
	const items = [
		{ title: "Location", Icon: MapPin, text: "Toronto, ON, Canada" },
		{ title: "Email", Icon: Mail, text: "kaho399@gmail.com" },
		{ title: "Phone", Icon: Phone, text: "+1 (437) 669-6420" },
	];

	return (
		<div className="space-y-4">
			{items.map((item, index) => (
				<div key={index} className="flex items-center text-xs">
					<div
						className="flex items-center justify-center w-10 h-10 mr-3 p-2 transition-all duration-500"
						style={{
							borderRadius: "9px",
							background: "#27272a",
							boxShadow: "inset 0px 0px 10px #3f3f46",
						}}>
						<item.Icon size={18} className="text-yellow-500" />
					</div>

					<div className="flex flex-col">
						<span className="text-yellow-500 text-[10px]">{item.title}</span>
						<span className="text-white">{item.text}</span>
					</div>
				</div>
			))}
			<div className="flex space-x-4 mt-4 justify-center">
				<a
					href="https://www.linkedin.com/in/seymour-chan-971041194/"
					target="_blank"
					rel="noopener noreferrer"
					className="w-8 h-8 flex items-center justify-center bg-zinc-700 rounded-xl transition-all duration-300 hover:bg-yellow-500">
					<Linkedin size={16} className="text-white" />
				</a>
				<a
					href="https://github.com/uynot"
					target="_blank"
					rel="noopener noreferrer"
					className="w-8 h-8 flex items-center justify-center bg-zinc-700 rounded-xl transition-all duration-300 hover:bg-yellow-500">
					<Github size={16} className="text-white" />
				</a>
			</div>
		</div>
	);
}
