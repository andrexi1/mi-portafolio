import { useEffect } from "react";
import "./Experience.css";

export default function Experience() {
  useEffect(() => {
    document.title = "Experiencia | Andrés Barrera";
  }, []);

  return (
    <section className="page experience">
      <header className="experience-header">
        <h1>Experiencia</h1>
        <p>
          Experiencia práctica en desarrollo frontend y aplicaciones web,
          trabajando de forma freelance y en equipo.
        </p>
      </header>

      <article className="experience-item">
        <h2>Desarrollador Frontend Freelance</h2>
        <span className="experience-date">2023 – Presente</span>

        <p>
          Desarrollo de aplicaciones web utilizando tecnologías modernas,
          enfocado en crear soluciones funcionales, mantenibles y orientadas
          a la experiencia del usuario.
        </p>

        <ul>
          <li>
            Desarrollo de un <strong>libro interactivo</strong> para el
            Ministerio de Culturas, con navegación dinámica y enfoque educativo.
          </li>
          <li>
            Creación de una <strong>aplicación web con dashboard</strong>,
            autenticación y conexión a Firebase, basada en encuestas
            personalizadas.
          </li>
          <li>
            Trabajo colaborativo en equipo utilizando <strong>Git</strong>
            y buenas prácticas de desarrollo.
          </li>
        </ul>
      </article>
    </section>
  );
}
