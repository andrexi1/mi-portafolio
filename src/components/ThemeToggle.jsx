import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "./ThemeToggle.css";

export default function ThemeToggle() {
  const { setTheme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  return (
    <div className="theme-toggle">
      <button
        className="theme-btn"
        onClick={() => setOpen(!open)}
      >
        Tema ▾
      </button>

      {open && (
        <div className="theme-menu">
          <button onClick={() => setTheme("light")}>Claro</button>
          <button onClick={() => setTheme("dark")}>Oscuro</button>
        </div>
      )}
    </div>
  );
}
