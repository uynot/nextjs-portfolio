import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ProfileIcon from "../components/ProfileIcon";
import PersonalInfo from "../components/PersonalInfo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Your Portfolio",
	description: "A showcase of my work and skills",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${inter.className} bg-gray-900 text-white`}>
				<div className="min-h-screen p-4 grid grid-cols-12 gap-4">
					{/* Left column */}
					<div className="col-span-3 space-y-4">
						<ProfileIcon />
						<div className="rounded-lg bg-gray-800 p-4">
							<PersonalInfo />
						</div>
					</div>

					{/* Middle column */}
					<div className="col-span-7 rounded-lg bg-gray-800 p-4">{children}</div>

					{/* Right column */}
					<div className="col-span-2 rounded-lg bg-gray-800 p-4">Nav bar with icon (to be added later)</div>
				</div>
			</body>
		</html>
	);
}
