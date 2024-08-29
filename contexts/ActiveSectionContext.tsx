"use client";

import React, { createContext, useState, useContext } from "react";

// Define the type for the context value
type ActiveSectionContextType = {
	activeSection: string;
	setActiveSection: (section: string) => void;
};

// Create the context with an undefined initial value
const ActiveSectionContext = createContext<ActiveSectionContextType | undefined>(undefined);

// Define the props for the provider component
type ActiveSectionProviderProps = {
	children: React.ReactNode;
};

// Define the provider component
export function ActiveSectionProvider({ children }: ActiveSectionProviderProps) {
	const [activeSection, setActiveSection] = useState("Portfolio");

	return <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>{children}</ActiveSectionContext.Provider>;
}

// Create a custom hook to use the context
export function useActiveSection() {
	const context = useContext(ActiveSectionContext);
	if (context === undefined) {
		throw new Error("useActiveSection must be used within an ActiveSectionProvider");
	}
	return context;
}
