import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ProfileIcon from "../components/ProfileIcon";
import PersonalInfo from "../components/PersonalInfo";
import NavBar from "../components/NavBar";
import { ActiveSectionProvider } from "../contexts/ActiveSectionContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Your Portfolio",
	description: "Personal Portfolio with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${inter.className} bg-zinc-900 text-white`}>
				<ActiveSectionProvider>
					<div className="min-h-screen p-2 sm:p-4 md:p-6 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
						{/* Left column */}
						<div className="md:col-span-3 space-y-4 md:space-y-6">
							<div className="bg-zinc-800 p-4 md:p-6 rounded-2xl">
								<div className="flex flex-col items-center space-y-4 select-none">
									<ProfileIcon />
									<h1 className="text-xl md:text-2xl font-bold mt-4 text-white text-center">Seymour Chan</h1>
									<p className="text-white text-xs md:text-sm bg-zinc-700 rounded-lg p-1 w-full text-center">Full-Stack Developer</p>
								</div>
								<hr className="w-full mx-auto border-t-2 border-zinc-700 my-3 md:my-5" />
								<div className="mt-4 md:mt-6">
									<PersonalInfo />
								</div>
							</div>
						</div>

						{/* Middle column */}
						<div className="md:col-span-7 rounded-2xl bg-zinc-800 p-4 md:p-6">{children}</div>

						{/* Right column */}
						<div className="md:col-span-2">
							<NavBar />
						</div>
					</div>
				</ActiveSectionProvider>
			</body>
		</html>
	);
}
