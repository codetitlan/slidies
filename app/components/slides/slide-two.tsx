import React from "react";
import styles from "../slides.module.css";

const TRADITIONAL_SKILLS = [
  "Clasificación inteligente de patrones",
  "Predicción basada en grandes volúmenes de datos",
  "Análisis en tiempo real de escenarios complejos",
];

const SlideTwo = () => {
  return (
    <section className={`${styles.slide} ${styles.themeTeal}`}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>Valor en transformación</span>
        <h1 className={styles.title}>
          La IA redefine <span>qué consideramos valioso</span>
        </h1>
        <p className={styles.subtitle}>
          Habilidades que nos garantizaban relevancia laboral hace una década
          hoy se automatizan. El reto ya no es competir con algoritmos, sino
          encontrar el valor humano diferencial.
        </p>
      </div>

      <div className={`${styles.contentColumns} ${styles.wideGap}`}>
        <div className={styles.surfaceCard}>
          <h3>Habilidades humanas replicadas por la IA</h3>
          <ul className={styles.list}>
            {TRADITIONAL_SKILLS.map((skill) => (
              <li key={skill} className={styles.listItem}>
                <span className={styles.icon}>⚙️</span>
                <div>{skill}</div>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.surfaceCard}>
          <div className={styles.statBlock}>
            <span className={styles.statValue}>Paradigma en crisis</span>
            <span className={styles.statLabel}>
              La automatización cognitiva cuestiona cómo medimos el aporte de
              las personas en las organizaciones.
            </span>
          </div>
          <div className={styles.divider}></div>
          <p className={styles.note}>
            <strong>Pregunta detonadora:</strong> Si la IA asume tareas
            cognitivas rutinarias, ¿desde dónde vamos a construir nuestro valor
            profesional? ¿Qué parte del trabajo sigue siendo irremplazable?
          </p>
          <div className={styles.badgeRow}>
            <span className={styles.badge}>
              <span>💡</span> Nuevo diseño de roles
            </span>
            <span className={styles.badge}>
              <span>🧭</span> Ética aplicada
            </span>
            <span className={styles.badge}>
              <span>🤝</span> Experiencia humana
            </span>
          </div>
        </div>
      </div>

      <div className={styles.callout}>
        <p>
          La verdadera revolución está en cómo replanteamos el concepto de
          “valor” y el rol humano en sistemas donde la inteligencia ya no es un
          diferencial exclusivo.
        </p>
      </div>
    </section>
  );
};

export default SlideTwo;

