import React from "react";
import styles from "../slides.module.css";

const KEY_TERMS = [
  "Razonamiento",
  "Clasificación",
  "Emulación",
  "Inteligencia humana",
];

const SlideOne = () => {
  return (
    <section className={`${styles.slide} ${styles.themeIndigo}`}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>Introducción</span>
        <h1 className={styles.title}>
          IA: <span>¿Revolución</span> o <span>¿Evolución?</span>
        </h1>
        <p className={styles.subtitle}>
          El punto de partida: entender que la inteligencia artificial no es una
          herramienta aislada, sino una fuerza sistémica que reconfigura cómo
          pensamos el trabajo, el valor y lo que significa ser humanos.
        </p>
      </div>

      <blockquote className={styles.quote}>
        “La IA no es una sola tecnología; es una <strong>constelación de
        esfuerzos</strong> dirigidos a emular aquello que durante décadas creímos
        exclusivamente humano.”
      </blockquote>

      <div className={styles.chipRow}>
        {KEY_TERMS.map((term) => (
          <span key={term} className={styles.chip}>
            {term}
          </span>
        ))}
      </div>

      <div className={styles.callout}>
        <p>
          Cuando hablamos de inteligencia artificial hablamos de un impulso
          tecnológico masivo por replicar aspectos de nuestra cognición y toma
          de decisiones. Es, al mismo tiempo, la evolución de herramientas que
          ya utilizamos y una revolución en la manera en la que definimos el
          trabajo humano.
        </p>
      </div>
    </section>
  );
};

export default SlideOne;

