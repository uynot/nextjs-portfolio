"use client";

import { useState, useEffect } from "react";

export default function MainContent() {
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setLoaded(true), 500);
		return () => clearTimeout(timer);
	}, []);

	const sections = ["Work Experience", "Education", "Personal Projects"];

	const skeletonShapes = ["w-1/2", "w-3/4", "w-full"];

	return (
		<div className="space-y-8">
			{sections.map((section) => (
				<section key={section}>
					<h2 className={`text-2xl font-bold mb-4 transition-all duration-500`}>
						{!loaded && <div className="w-1/2 h-8 skeleton"></div>}{" "}
						{loaded && (
							<span>
								{section === "Work Experience" && "Work Experience"}
								{section === "Education" && "Education"}
								{section === "Personal Projects" && "Personal Projects"}
							</span>
						)}
					</h2>
					<div
						className={`h-6 transition-all duration-500 ${
							!loaded ? `${skeletonShapes[Math.floor(Math.random() * skeletonShapes.length)]} skeleton` : "w-full"
						}`}>
						{loaded && <p>Your {section.toLowerCase()} content goes here.</p>}
					</div>
				</section>
			))}
		</div>
	);
}
