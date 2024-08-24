"use client";

import { useState, useEffect } from "react";
import { MapPin, Calendar, Briefcase } from "lucide-react";

export default function PersonalInfo() {
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setLoaded(true), 1500);
		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="bg-gray-800 p-4 rounded-lg space-y-4">
			{["location", "age", "occupation"].map((item) => (
				<div key={item} className="flex items-center">
					<div className="flex items-center w-6 h-6 mr-2 transition-opacity duration-500">
						{!loaded && <div className="w-6 h-6 skeleton rounded-full"></div>}
						{loaded && item === "location" && <MapPin size={18} />}
						{loaded && item === "age" && <Calendar size={18} />}
						{loaded && item === "occupation" && <Briefcase size={18} />}
					</div>
					<div className="flex-grow">
						<div className={`h-6 ${!loaded ? "skeleton w-full" : ""} transition-all duration-500`}>
							{loaded && (
								<span>
									{item === "location" && "Toronto, Canada"}
									{item === "age" && "90s"}
									{item === "occupation" && "Backend Developer"}
								</span>
							)}
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
//test
