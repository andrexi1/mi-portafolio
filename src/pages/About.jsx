import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <h1>Sobre mí</h1>
      <p>Contenido sobre mí...</p>
    </motion.section>
  );
}
