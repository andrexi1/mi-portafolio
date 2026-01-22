import { NavLink } from "react-router-dom";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <NavLink to="/" className="navbar-logo">
        Andrés
      </NavLink>

      <button
        className="menu-btn"
        onClick={() => setOpen(!open)}
        aria-label="Abrir menú"
      >
        ☰
      </button>

      <nav className={`navbar-menu ${open ? "open" : ""}`}>
        <NavLink to="/" onClick={() => setOpen(false)}>
          Inicio
        </NavLink>
        <NavLink to="/about" onClick={() => setOpen(false)}>
          Sobre mí
        </NavLink>
        <NavLink to="/portfolio" onClick={() => setOpen(false)}>
          Portafolio
        </NavLink>
        <NavLink to="/academy" onClick={() => setOpen(false)}>
          Academia
        </NavLink>

        <ThemeToggle />
      </nav>
    </header>
  );
}
