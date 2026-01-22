import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { getGithubProjects } from "../services/github";
import "./Portfolio.css";

export default function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    getGithubProjects().then(setProjects);
  }, []);

  return (
    <section className="page portfolio">
      <header className="portfolio-header">
        <h1>Portafolio</h1>
        <p>Proyectos reales obtenidos desde GitHub</p>
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

                <button onClick={() => setSelected(null)}>
                  Cerrar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
