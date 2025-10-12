import React from "react";
import styles from "../slides.module.css";

const HUMAN_ADVANTAGES = [
  {
    title: "Empatía profunda",
    description:
      "Conectar con emociones, contextos y matices humanos para responder más allá de lo funcional.",
    icon: "💞",
  },
  {
    title: "Alineación cultural",
    description:
      "Comprender tradiciones, códigos sociales y sensibilidades locales que no caben en un dataset.",
    icon: "🧭",
  },
  {
    title: "Conciencia histórica",
    description:
      "Relacionar eventos pasados, procesos sociales y aprendizajes colectivos para orientar decisiones.",
    icon: "📚",
  },
  {
    title: "Juicio ético",
    description:
      "Sopesar consecuencias morales y diseñar escenarios que pongan a las personas al centro.",
    icon: "⚖️",
  },
  {
    title: "Creatividad emocional",
    description:
      "Diseñar soluciones con sensibilidad artística y narrativa que resuenen con las personas.",
    icon: "🎨",
  },
];

const SlideThree = () => {
  return (
    <section className={`${styles.slide} ${styles.themeAmber}`}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>Ventaja humana</span>
        <h1 className={styles.title}>
          Más allá de la inteligencia: <span>nuestro diferencial</span>
        </h1>
        <p className={styles.subtitle}>
          La IA puede procesar datos, pero la comprensión profunda implica
          contexto, humanidad y responsabilidad compartida. Ahí es donde
          seguimos siendo imprescindibles.
        </p>
      </div>

      <div className={`${styles.contentColumns} ${styles.singleColumn}`}>
        <div className={styles.cardGrid}>
          {HUMAN_ADVANTAGES.map((trait) => (
            <div key={trait.title} className={styles.card}>
              <div className={styles.cardHeader}>
                <span>{trait.icon}</span>
                {trait.title}
              </div>
              <p>{trait.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.callout}>
        <p>
          No se trata de pensar más rápido que las máquinas, sino de ofrecer la
          comprensión integral que sólo emerge cuando cruzamos empatía, historia
          y visión ética.
        </p>
      </div>
    </section>
  );
};

export default SlideThree;

