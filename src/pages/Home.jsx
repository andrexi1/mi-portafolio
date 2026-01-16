import { motion } from "framer-motion";
import "./Home.css";

export default function Home() {
  return (
    <section className="home">
      <motion.div
        className="hero"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>
          Hola, soy <span>Andrés</span>
        </h1>

        <h2>
          Estudiante de Ingeniería de Sistemas
        </h2>

        <p>
          Desarrollo aplicaciones web con enfoque en backend,
          arquitectura limpia y buenas prácticas.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cta"
        >
          Ver portafolio
        </motion.button>
      </motion.div>
    </section>
  );
}
