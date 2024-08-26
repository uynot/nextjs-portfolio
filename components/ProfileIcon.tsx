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
	//const imageSrc = "/avatar/icon_square.jpg";
	const imageSrc = "/avatar/icon_square_cropped.jpg";
	const loading = useImageLoading(imageSrc);
	const [show, setShow] = useState(false);

	useEffect(() => {
		if (!loading) {
			const timer = setTimeout(() => setShow(true), 500);
			return () => clearTimeout(timer);
		}
	}, [loading]);

	return (
		<div className="relative w-48 h-32 rounded-2xl overflow-hidden bg-gray-700">
			<div
				className={`skeleton w-full h-full absolute transition-opacity duration-500 ease-in-out ${
					show ? "opacity-0" : "opacity-100"
				}`}></div>
			<div className={`w-full h-full absolute transition-opacity duration-500 ease-in-out ${show ? "opacity-100" : "opacity-0"}`}>
				<Image src={imageSrc} alt="Profile Icon" layout="fill" objectFit="cover" />
			</div>
		</div>
	);
}
