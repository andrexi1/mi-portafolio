import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Portfolio.css";

const projects = [
  {
    id: 1,
    title: "Life Company",
    stack: "React · Firebase",
    description:
      "Aplicación con login, encuesta y dashboard que estima la esperanza de vida según respuestas del usuario.",
    github: "https://github.com/andrexi1/lifeCompany-react",
  },
  {
    id: 2,
    title: "Git Search",
    stack: "React · GitHub API",
    description:
      "Buscador de usuarios y repositorios de GitHub usando su API oficial.",
    github: "https://github.com/andrexi1/Gif-Search",
  },
  {
    id: 3,
    title: "Subscriptions App",
    stack: "React · JavaScript",
    description:
      "Aplicación para gestionar suscripciones y controlar gastos mensuales.",
    github: "https://github.com/andrexi1/subscriptions",
  },
  {
    id: 4,
    title: "Portafolio Profesional",
    stack: "React · Framer Motion",
    description:
      "Portafolio personal con animaciones, cambio de tema y arquitectura escalable.",
    github: "https://github.com/andrexi1/mi-portafolio",
  },
];

export default function Portfolio() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="page portfolio">
      <header className="portfolio-header">
        <h1>Portafolio</h1>
        <p>Proyectos reales desarrollados en React y Java</p>
      </header>

      <div className="portfolio-grid">
        {projects.map((project) => (
          <article
            key={project.id}
            className="project-card"
            onClick={() => setSelected(project)}
          >
            <h3>{project.title}</h3>
            <span>{project.stack}</span>
          </article>
        ))}
      </div>

      {/* MODAL */}
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
              onClick={(e) => e.stopPropagation()}
            >
              <h2>{selected.title}</h2>
              <span>{selected.stack}</span>
              <p>{selected.description}</p>

              <div className="modal-actions">
                <a
                  href={selected.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver código en GitHub
                </a>

                <button onClick={() => setSelected(null)}>Cerrar</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
