"use client";

import { createContext, useContext } from "react";

type Theme = {
    colors: {
        primary: string,
        secondary: string
    }
};

const defaultTheme: Theme = {
    colors: {
        primary: "red",
        secondary: "gray"
    }
};

const ThemeContext = createContext<Theme>(defaultTheme);

export const useTheme = () => useContext(ThemeContext);

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    return (
        <ThemeContext value={defaultTheme}>{children}</ThemeContext>
    );
};
