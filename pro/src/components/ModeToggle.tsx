"use client";
import { useTheme } from "../contexts/ThemeProvider";

export default function ModeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="p-2 border rounded bg-gray-200 dark:bg-gray-800">
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
}
