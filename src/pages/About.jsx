import { useEffect } from "react";
import "./About.css";

export default function About() {
  useEffect(() => {
    document.title = "Sobre mí | Andrés Barrera";
  }, []);

  return (
    <section className="page about">
      <header className="about-header">
        <h1>Sobre mí</h1>
        <p>
          Estudiante de Ingeniería de Sistemas y Computación con enfoque en
          desarrollo frontend y bases de datos.
        </p>
      </header>

      <div className="about-content">
        <p>
          Soy estudiante de <strong>sexto semestre</strong> en la Universidad
          Pedagógica y Tecnológica de Colombia (UPTC). Me caracterizo por ser una
          persona <strong>constante, curiosa y perseverante</strong>, con una
          fuerte motivación por aprender y mejorar continuamente.
        </p>

        <p>
          He trabajado en proyectos reales de forma <strong>freelance</strong> y
          académica, desarrollando aplicaciones web modernas con énfasis en
          experiencia de usuario, estructura limpia y buenas prácticas.
        </p>

        <p>
          No me intimidan los retos técnicos: aprendo rápido, investigo por
          cuenta propia y disfruto enfrentar problemas que me obliguen a salir
          de mi zona de confort.
        </p>

        <div className="about-tags">
          <span>React</span>
          <span>JavaScript</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>Java</span>
          <span>MySQL</span>
        </div>
      </div>
    </section>
  );
}
