"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

function useImageLoading(src: string) {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const img = new window.Image();
		img.src = src;
		img.onload = () => {
			setLoading(false);
		};
	}, [src]);

	return loading;
}

export default function ProfileIcon() {
	const imageSrc = "/icon.jpeg";
	//const imageSrc = "/taikocry.png";
	const loading = useImageLoading(imageSrc);
	const [show, setShow] = useState(false);

	useEffect(() => {
		if (!loading) {
			const timer = setTimeout(() => setShow(true), 500);
			return () => clearTimeout(timer);
		}
	}, [loading]);

	return (
		<div className="relative w-32 h-32">
			<div
				className={`skeleton w-32 h-32 rounded-full absolute transition-opacity duration-500 ease-in-out ${
					show ? "opacity-0" : "opacity-100"
				}`}></div>
			<div
				className={`w-32 h-32 rounded-full overflow-hidden absolute transition-opacity duration-500 ease-in-out ${
					show ? "opacity-100" : "opacity-0"
				}`}>
				<Image src={imageSrc} alt="Profile Icon" layout="fill" objectFit="cover" />
			</div>
		</div>
	);
}
