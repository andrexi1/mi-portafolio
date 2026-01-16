import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* LOGO / HOME */}
      <NavLink to="/" className="navbar-logo">
        Andrés
      </NavLink>

      {/* LINKS */}
      <ul className="navbar-links">
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
            Sobre mí
          </NavLink>
        </li>

        <li>
          <NavLink to="/portfolio" className={({ isActive }) => isActive ? "active" : ""}>
            Portafolio
          </NavLink>
        </li>

        <li>
          <NavLink to="/experience" className={({ isActive }) => isActive ? "active" : ""}>
            Experiencia
          </NavLink>
        </li>

        <li>
          <NavLink to="/academy" className={({ isActive }) => isActive ? "active" : ""}>
            Academia
          </NavLink>
        </li>

        {/* THEME TOGGLE DEBAJO DE ACADEMIA */}
        <li className="theme-item">
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
}
