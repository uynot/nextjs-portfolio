"use client";

import React, { createContext, useState, useContext } from "react";

type ActiveSectionContextType = {
	activeSection: string;
	setActiveSection: (section: string) => void;
};

const ActiveSectionContext = createContext<ActiveSectionContextType | undefined>(undefined);

export function ActiveSectionProvider({ children }: { children: React.ReactNode }) {
	const [activeSection, setActiveSection] = useState("About");

	return <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>{children}</ActiveSectionContext.Provider>;
}

export function useActiveSection() {
	const context = useContext(ActiveSectionContext);
	if (context === undefined) {
		throw new Error("useActiveSection must be used within an ActiveSectionProvider");
	}
	return context;
}
