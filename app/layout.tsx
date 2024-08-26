import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ProfileIcon from "../components/ProfileIcon";
import PersonalInfo from "../components/PersonalInfo";
import NavBar from "../components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Your Portfolio",
	description: "Personal Portfolio with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${inter.className} bg-zinc-900 text-white`}>
				<div className="min-h-screen p-6 grid grid-cols-12 gap-6 custom-scrollbar overflow-y-scroll h-64">
					{/* Left column */}
					<div className="col-span-12 md:col-span-3 space-y-6">
						<div className="bg-zinc-800 p-6 rounded-2xl">
							<div className="flex flex-col items-center space-y-4 select-none">
								<ProfileIcon />
								<h1 className="text-2xl font-bold mt-4 text-white text-center">Seymour Chan</h1>
								<p className="text-white text-sm bg-zinc-700 rounded-lg p-1 w-full text-center">Full-Stack Developer</p>
							</div>
							<hr className="w-full mx-auto border-t-2 border-zinc-700 my-5" />
							<div className="mt-6">
								<PersonalInfo />
							</div>
						</div>
					</div>

					{/* Middle column */}
					<div className="col-span-12 md:col-span-7 rounded-2xl bg-zinc-800 p-6">{children}</div>

					{/* Right column */}
					<div className="col-span-12 md:col-span-2">
						<NavBar />
					</div>
				</div>
			</body>
		</html>
	);
}
