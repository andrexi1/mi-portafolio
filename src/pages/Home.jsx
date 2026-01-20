import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <section className="home">
      <motion.div
        className="hero"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1>
          Hola, soy <span>Andrés</span>
        </h1>

        <h2>Estudiante de Ingeniería de Sistemas</h2>

        <p>
          Desarrollo aplicaciones web con enfoque en backend,
          arquitectura limpia y buenas prácticas.
        </p>

        <motion.button
          className="cta"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/portfolio")}
        >
          Ver portafolio
        </motion.button>
      </motion.div>
    </section>
  );
}
