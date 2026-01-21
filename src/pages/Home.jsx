import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Home.css";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

export default function Home() {
  const navigate = useNavigate();

  return (
    <section className="home">
      <motion.div
        className="hero"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.span className="hero-tag" variants={item}>
          Desarrollador Frontend
        </motion.span>

        <motion.h1 variants={item}>
          Construyo <span>interfaces modernas</span> <br />
          con bases sólidas
        </motion.h1>

        <motion.p variants={item}>
          Estudiante de sexto semestre de Ingeniería de Sistemas y Computación.
          Enfocado en frontend y bases de datos, proactivo, constante y sin miedo
          a los retos técnicos.
        </motion.p>

        <motion.div className="hero-actions" variants={item}>
          <button className="cta" onClick={() => navigate("/portfolio")}>
            Ver portafolio
          </button>

          <button
            className="secondary"
            onClick={() => navigate("/about")}
          >
            Sobre mí
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
