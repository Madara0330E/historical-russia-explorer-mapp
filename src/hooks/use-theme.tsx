
import { useState, useEffect } from "react";

type Theme = "light" | "dark";

export const useTheme = () => {
  // Check if user has a stored preference
  const savedTheme = localStorage.getItem("theme") as Theme | null;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const defaultTheme: Theme = savedTheme || (prefersDark ? "dark" : "light");
  
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  
  return { theme, toggleTheme };
};
