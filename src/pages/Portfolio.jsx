import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Portfolio.css";

const projects = [
  {
    id: 1,
    title: "Sistema de Parqueadero",
    stack: "Java · Oracle · Spring Boot",
    description:
      "Sistema para gestión de parqueaderos con control de ingresos, salidas y reportes.",
    image: "",
  },
  {
    id: 2,
    title: "Batalla Naval",
    stack: "React · Java · WebSockets",
    description:
      "Juego de batalla naval con modo local y lógica completa de turnos.",
    image: "",
  },
  {
    id: 3,
    title: "Portafolio Profesional",
    stack: "React · Framer Motion",
    description:
      "Portafolio personal con animaciones, temas y arquitectura escalable.",
    image: "",
  },
];

export default function Portfolio() {
  const [selected, setSelected] = useState(null);

  return (
    <motion.section
      className="page portfolio"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <header className="portfolio-header">
        <h1>Portafolio</h1>
        <p>Algunos proyectos en los que he trabajado.</p>
      </header>

      <div className="portfolio-grid">
        {projects.map((project) => (
          <article
            key={project.id}
            className="project-card"
            onClick={() => setSelected(project)}
          >
            <div className="project-image">
              <img
                src={project.image || "/project-placeholder.svg"}
                alt={project.title}
                loading="lazy"
              />
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>
              <span>{project.stack}</span>
            </div>
          </article>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="modal"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selected.image || "/project-placeholder.svg"}
                alt={selected.title}
              />

              <div className="modal-content">
                <h2>{selected.title}</h2>
                <span>{selected.stack}</span>
                <p>{selected.description}</p>

                <button onClick={() => setSelected(null)}>Cerrar</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
