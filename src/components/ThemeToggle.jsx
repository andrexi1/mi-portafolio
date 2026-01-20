import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "./ThemeToggle.css";

export default function ThemeToggle() {
  const { setTheme, theme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  const changeTheme = (value) => {
    setTheme(value);
    setOpen(false);
  };

  return (
    <div className={`theme-toggle ${open ? "open" : ""}`}>
      <button
        className="theme-btn"
        onClick={() => setOpen(!open)}
      >
        Tema
      </button>

      {open && (
        <div className="theme-menu">
          <button onClick={() => changeTheme("light")}>
            Claro {theme === "light" && "✓"}
          </button>

          <button onClick={() => changeTheme("dark")}>
            Oscuro {theme === "dark" && "✓"}
          </button>

          <button onClick={() => changeTheme("system")}>
            Sistema {theme === "system" && "✓"}
          </button>
        </div>
      )}
    </div>
  );
}
