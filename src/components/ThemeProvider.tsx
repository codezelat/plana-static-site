"use client";

import React, { createContext, useContext, useCallback, useRef, useSyncExternalStore } from "react";

type Theme = "dark" | "light";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "dark",
  toggleTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

function getSnapshot(): Theme {
  if (typeof document === "undefined") return "dark";
  const attr = document.documentElement.getAttribute("data-theme");
  return attr === "light" ? "light" : "dark";
}

function getServerSnapshot(): Theme {
  return "dark";
}

function subscribe(callback: () => void) {
  window.addEventListener("plana-theme-change", callback);
  return () => window.removeEventListener("plana-theme-change", callback);
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const initialized = useRef(false);

  const toggleTheme = useCallback(() => {
    if (!initialized.current) {
      initialized.current = true;
    }
    const next = getSnapshot() === "dark" ? "light" : "dark";
    localStorage.setItem("plana-theme", next);
    document.documentElement.setAttribute("data-theme", next);
    window.dispatchEvent(new Event("plana-theme-change"));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
