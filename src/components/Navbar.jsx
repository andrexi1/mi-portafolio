import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <span className="navbar-logo">Andrés</span>

      <ul className="navbar-links">
        <li>
          <NavLink to="/" className="nav-link">
            Inicio
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" className="nav-link">
            Sobre mí
          </NavLink>
        </li>

        <li>
          <NavLink to="/portfolio" className="nav-link">
            Portafolio
          </NavLink>
        </li>

        <li>
          <NavLink to="/experience" className="nav-link">
            Experiencia
          </NavLink>
        </li>

        <li>
          <NavLink to="/academy" className="nav-link">
            Academia
          </NavLink>
        </li>

        <li className="theme-item">
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
}
