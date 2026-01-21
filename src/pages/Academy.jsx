import "./Academy.css";

export default function Academy() {
  return (
    <section className="page academy">
      <h1>Academia</h1>

      <p>
        <strong>Universidad:</strong> Universidad Pedagógica y Tecnológica de
        Colombia (UPTC)
      </p>

      <p>
        <strong>Carrera:</strong> Ingeniería de Sistemas y Computación
      </p>

      <p>
        <strong>Estado:</strong> Sexto semestre
      </p>

      <h2>Conocimientos técnicos</h2>
      <ul>
        <li>HTML, CSS y JavaScript</li>
        <li>React</li>
        <li>Angular</li>
        <li>Java</li>
        <li>Bases de datos (MySQL)</li>
      </ul>

      <h2>Formación complementaria</h2>
      <ul>
        <li>Cursos de desarrollo frontend en Platzi</li>
        <li>Cursos prácticos de desarrollo web en Udemy</li>
      </ul>
    </section>
  );
}
