
import React from "react";
import { Toggle } from "@/components/ui/toggle";
import { ToggleLeft, ToggleRight } from "lucide-react";

const getSystemTheme = (): "dark" | "light" =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = React.useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      const t = localStorage.getItem("theme");
      return t === "dark" || t === "light" ? t : getSystemTheme();
    }
    return "light";
  });

  React.useEffect(() => {
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  React.useEffect(() => {
    // Listen for system theme changes when user hasn't explicitly set it
    const listener = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        setTheme(e.matches ? "dark" : "light");
      }
    };
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, []);

  const handleToggle = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const isDark = theme === "dark";

  return (
    <Toggle
      variant="outline"
      size="sm"
      pressed={isDark}
      aria-label="Toggle dark mode"
      onClick={handleToggle}
      className="fixed top-4 right-4 z-50 border-muted-foreground/20 bg-background hover:bg-muted"
    >
      {isDark ? (
        <ToggleRight className="text-yellow-400" />
      ) : (
        <ToggleLeft className="text-gray-600" />
      )}
    </Toggle>
  );
};

export default ThemeToggle;
