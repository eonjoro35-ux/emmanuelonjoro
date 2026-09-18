import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";

export type Theme = "light" | "dark";

type ThemeContextValue = {
    theme: Theme;
    isDark: boolean;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
};

const STORAGE_KEY = "theme";

const ThemeContext = createContext<ThemeContextValue | null>(null);

function getInitialTheme(): Theme {
    if (typeof window === "undefined") {
        return "light";
    }

    const saved = window.localStorage.getItem(STORAGE_KEY);

    if (saved === "light" || saved === "dark") {
        return saved;
    }

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    return prefersDark ? "dark" : "light";
}

/**
 * Single source of truth for the site theme.
 *
 * The chosen theme is written to <html> as both a `dark` class (so Tailwind's
 * `dark:` variants keep working) and a `data-theme` attribute (so the CSS
 * custom properties in styles/global.css can repaint every section, heading,
 * paragraph and border across the whole site - not just the header).
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setThemeState] = useState<Theme>(getInitialTheme);

    useEffect(() => {
        const root = document.documentElement;

        root.classList.toggle("dark", theme === "dark");
        root.dataset.theme = theme;
        root.style.setProperty("color-scheme", theme);
        window.localStorage.setItem(STORAGE_KEY, theme);
    }, [theme]);

    // Follow the operating system if the visitor has never picked a theme.
    useEffect(() => {
        const media = window.matchMedia("(prefers-color-scheme: dark)");

        const handleChange = (event: MediaQueryListEvent) => {
            if (!window.localStorage.getItem(STORAGE_KEY)) {
                setThemeState(event.matches ? "dark" : "light");
            }
        };

        media.addEventListener("change", handleChange);

        return () => media.removeEventListener("change", handleChange);
    }, []);

    const setTheme = useCallback((next: Theme) => setThemeState(next), []);

    const toggleTheme = useCallback(
        () => setThemeState((current) => (current === "dark" ? "light" : "dark")),
        [],
    );

    const value = useMemo<ThemeContextValue>(
        () => ({ theme, isDark: theme === "dark", toggleTheme, setTheme }),
        [theme, toggleTheme, setTheme],
    );

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("useTheme must be used inside a ThemeProvider");
    }

    return context;
}
