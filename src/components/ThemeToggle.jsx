import { useState, useEffect } from "react";
import "./ThemeToggle.css";

export default function ThemeToggle() {
  const [open, setOpen] = useState(false);

  const applyTheme = (theme) => {
    const body = document.body;

    body.classList.remove("light", "dark");

    if (theme === "system") {
      localStorage.removeItem("theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      body.classList.add(prefersDark ? "dark" : "light");
    } else {
      body.classList.add(theme);
      localStorage.setItem("theme", theme);
    }

    setOpen(false);
  };

  // Cargar tema guardado al iniciar
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      applyTheme(savedTheme);
    } else {
      applyTheme("system");
    }
  }, []);

  return (
    <div className="theme-toggle">
      <button className="theme-btn" onClick={() => setOpen(!open)}>
        Tema ▾
      </button>

      {open && (
        <div className="theme-menu">
          <button onClick={() => applyTheme("light")}>Claro</button>
          <button onClick={() => applyTheme("dark")}>Oscuro</button>
          <button onClick={() => applyTheme("system")}>Sistema</button>
        </div>
      )}
    </div>
  );
}
