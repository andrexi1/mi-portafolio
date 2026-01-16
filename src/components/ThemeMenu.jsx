import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "./ThemeMenu.css";

export default function ThemeMenu() {
  const { setTheme } = useContext(ThemeContext);

  return (
    <div className="theme-menu">
      <button onClick={() => setTheme("light")}>Claro</button>
      <button onClick={() => setTheme("dark")}>Oscuro</button>
      <button onClick={() => setTheme("system")}>Sistema</button>
    </div>
  );
}
