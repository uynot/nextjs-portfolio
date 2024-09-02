"use client";

import { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import { Linkedin, Github } from "lucide-react";
import SlCopyButton from "@shoelace-style/shoelace/dist/react/copy-button";

export default function PersonalInfo() {
	const items = [
		{ title: "Location", Icon: MapPin, text: "Toronto, ON, Canada" },
		{ title: "Email", Icon: Mail, text: "kaho399@gmail.com", type: "email" },
		{ title: "Phone", Icon: Phone, text: "+1 (437) 669-6420", type: "phone" },
	];

	const [copied, setCopied] = useState({ email: false, phone: false });

	const handleCopy = (type: string) => {
		setCopied((prev) => ({ ...prev, [type]: true }));
		setTimeout(() => setCopied((prev) => ({ ...prev, [type]: false })), 1100);
	};

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

					<div className="flex items-center space-x-2">
						<div className="flex flex-col">
							<span className="text-yellow-500 text-[10px] select-none flex items-center space-x-1">
								{item.title}
								{(item.type === "email" || item.type === "phone") && (
									<SlCopyButton
										value={item.text}
										className={`ml-1 w-4 h-4 flex justify-center transition-all duration-500 ${
											copied[item.type] ? "text-green-500" : "text-zinc-300 hover:text-white"
										}`}
										onClick={() => handleCopy(item.type)}>
										<svg
											className={`h-4 w-4 ml-2 ${copied[item.type] ? "text-green-500" : "text-zinc-300"}`}
											viewBox="0 0 24 24"
											strokeWidth="2"
											stroke="currentColor"
											fill="none"
											strokeLinecap="round"
											strokeLinejoin="round">
											<rect x="8" y="8" width="12" height="12" rx="2" />
											<path d="M16 8v-2a2 2 0 0 0 -2 -2H6a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" />
										</svg>
									</SlCopyButton>
								)}
							</span>
							<span className="text-white">{item.text}</span>
						</div>
					</div>
				</div>
			))}
			<div className="flex space-x-4 mt-4 justify-center">
				<a
					href="https://www.linkedin.com/in/seymour-chan-971041194/"
					target="_blank"
					rel="noopener noreferrer"
					className="w-8 h-8 flex items-center justify-center bg-zinc-700 rounded-xl transition-all duration-300 hover:bg-yellow-500 group">
					<Linkedin size={16} className="text-yellow-500 group-hover:text-white transition-all duration-300" />
				</a>
				<a
					href="https://github.com/uynot"
					target="_blank"
					rel="noopener noreferrer"
					className="w-8 h-8 flex items-center justify-center bg-zinc-700 rounded-xl transition-all duration-300 hover:bg-yellow-500 group">
					<Github size={16} className="text-yellow-500 group-hover:text-white transition-all duration-300" />
				</a>
			</div>
		</div>
	);
}
