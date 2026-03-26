"use client";

import * as React from "react";

type Theme = string;

interface ThemeProviderProps {
	children: React.ReactNode;
	attribute?: string | string[];
	defaultTheme?: string;
	enableSystem?: boolean;
	disableTransitionOnChange?: boolean;
	storageKey?: string;
	themes?: string[];
	forcedTheme?: string;
	enableColorScheme?: boolean;
	value?: Record<string, string>;
}

interface ThemeContextValue {
	theme: string;
	setTheme: (theme: Theme) => void;
	resolvedTheme: string;
	themes: string[];
	systemTheme: string | undefined;
	forcedTheme?: string;
}

const MEDIA = "(prefers-color-scheme: dark)";
const COLOR_SCHEMES = ["light", "dark"];

const ThemeContext = React.createContext<ThemeContextValue | undefined>(
	undefined
);

function getSystemTheme(e?: MediaQueryList | MediaQueryListEvent): string {
	if (!e) e = window.matchMedia(MEDIA);
	return e.matches ? "dark" : "light";
}

function disableAnimation() {
	const style = document.createElement("style");
	style.appendChild(
		document.createTextNode(
			"*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}"
		)
	);
	document.head.appendChild(style);
	return () => {
		window.getComputedStyle(document.body);
		setTimeout(() => document.head.removeChild(style), 1);
	};
}

export function ThemeProvider({
	children,
	attribute = "class",
	defaultTheme = "system",
	enableSystem = true,
	disableTransitionOnChange = false,
	storageKey = "theme",
	themes: themesProp = ["light", "dark"],
	forcedTheme,
	enableColorScheme = true,
	value,
}: ThemeProviderProps) {
	const [theme, setThemeState] = React.useState<string>(() => {
		if (typeof window === "undefined") return defaultTheme;
		try {
			return localStorage.getItem(storageKey) || defaultTheme;
		} catch {
			return defaultTheme;
		}
	});

	const [resolvedTheme, setResolvedTheme] = React.useState<string>(() => {
		if (typeof window === "undefined") return defaultTheme;
		if (theme === "system") return getSystemTheme();
		return theme;
	});

	const allThemes = React.useMemo(
		() => (enableSystem ? [...themesProp, "system"] : themesProp),
		[enableSystem, themesProp]
	);

	const applyTheme = React.useCallback(
		(resolved: string) => {
			const attrs = Array.isArray(attribute) ? attribute : [attribute];
			const el = document.documentElement;
			const mapped = value?.[resolved] ?? resolved;
			const restore = disableTransitionOnChange ? disableAnimation() : null;

			for (const attr of attrs) {
				if (attr === "class") {
					const classNames = value ? Object.values(value) : themesProp;
					el.classList.remove(...classNames);
					if (mapped) el.classList.add(mapped);
				} else if (mapped) {
					el.setAttribute(attr, mapped);
				} else {
					el.removeAttribute(attr);
				}
			}

			if (enableColorScheme) {
				const fallback = COLOR_SCHEMES.includes(defaultTheme)
					? defaultTheme
					: null;
				const scheme = COLOR_SCHEMES.includes(resolved) ? resolved : fallback;
				if (scheme) el.style.colorScheme = scheme;
			}

			restore?.();
		},
		[
			attribute,
			disableTransitionOnChange,
			enableColorScheme,
			defaultTheme,
			value,
			themesProp,
		]
	);

	const setTheme = React.useCallback(
		(newTheme: Theme) => {
			setThemeState(newTheme);
			try {
				localStorage.setItem(storageKey, newTheme);
			} catch {}
		},
		[storageKey]
	);

	React.useEffect(() => {
		const media = window.matchMedia(MEDIA);
		const handler = (e: MediaQueryListEvent | MediaQueryList) => {
			const sys = getSystemTheme(e);
			setResolvedTheme(sys);
			if (theme === "system" && enableSystem && !forcedTheme) {
				applyTheme(sys);
			}
		};
		media.addEventListener("change", handler as EventListener);
		handler(media);
		return () =>
			media.removeEventListener("change", handler as EventListener);
	}, [theme, enableSystem, forcedTheme, applyTheme]);

	React.useEffect(() => {
		const handler = (e: StorageEvent) => {
			if (e.key === storageKey) {
				setThemeState(e.newValue || defaultTheme);
			}
		};
		window.addEventListener("storage", handler);
		return () => window.removeEventListener("storage", handler);
	}, [storageKey, defaultTheme]);

	React.useEffect(() => {
		const active = forcedTheme ?? theme;
		const resolved =
			active === "system" && enableSystem ? getSystemTheme() : active;
		setResolvedTheme(resolved);
		applyTheme(resolved);
	}, [theme, forcedTheme, enableSystem, applyTheme]);

	const contextValue = React.useMemo<ThemeContextValue>(
		() => ({
			theme,
			setTheme,
			forcedTheme,
			resolvedTheme: theme === "system" ? resolvedTheme : theme,
			themes: allThemes,
			systemTheme: enableSystem ? resolvedTheme : undefined,
		}),
		[theme, setTheme, forcedTheme, resolvedTheme, allThemes, enableSystem]
	);

	return (
		<ThemeContext.Provider value={contextValue}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme(): ThemeContextValue {
	const context = React.useContext(ThemeContext);
	if (!context) {
		return {
			setTheme: () => {},
			themes: [],
			theme: "",
			resolvedTheme: "",
			systemTheme: undefined,
		};
	}
	return context;
}
