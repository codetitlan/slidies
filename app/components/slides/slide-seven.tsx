import React from "react";
import styles from "../slides.module.css";

const VALUES = [
  { label: "Equidad", icon: "⚖️" },
  { label: "Inclusión", icon: "🤝" },
  { label: "Control democrático", icon: "🗳️" },
  { label: "Innovación justa", icon: "✨" },
];

const GOALS = [
  {
    title: "Impulsar talento local",
    description:
      "Programas de formación y mentoría para desarrolladoras y desarrolladores de Iberoamérica.",
  },
  {
    title: "Construir soluciones con impacto",
    description:
      "Proyectos de IA centrados en resolver problemas regionales con principios éticos claros.",
  },
  {
    title: "Compartir conocimiento abierto",
    description:
      "Comunidades y repositorios que democratizan el acceso a herramientas tecnológicas.",
  },
];

const SlideSeven = () => {
  return (
    <section className={`${styles.slide} ${styles.themeIndigo}`}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>Visión Codetitlan</span>
        <h1 className={styles.title}>
          Hacer de la IA una <span>oportunidad Iberoamericana</span>
        </h1>
        <p className={styles.subtitle}>
          Creemos en un futuro tecnológico donde la región no sólo adopte
          soluciones, sino que lidere con propuestas éticas, creativas y
          orientadas a justicia social.
        </p>
      </div>

      <div className={`${styles.contentColumns} ${styles.wideGap}`}>
        <div className={styles.surfaceCard}>
          <h3>Valores que nos guían</h3>
          <div className={styles.badgeRow}>
            {VALUES.map((value) => (
              <span key={value.label} className={styles.badge}>
                <span>{value.icon}</span>
                {value.label}
              </span>
            ))}
          </div>
          <p className={styles.note}>
            Cada decisión técnica se evalúa desde estos principios. Tecnología
            sin ética reproduce desigualdades; tecnología con ética abre
            horizontes.
          </p>
        </div>

        <div className={styles.surfaceCard}>
          <h3>Ejes estratégicos</h3>
          <div className={styles.timeline}>
            {GOALS.map((goal) => (
              <div key={goal.title} className={styles.timelineItem}>
                <div className={styles.timelineMarker}></div>
                <div className={styles.timelineContent}>
                  <h4>{goal.title}</h4>
                  <p>{goal.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.callout}>
        <p>
          En Codetitlan apostamos por una IA diseñada desde la región y para la
          región, con justicia social como brújula.
        </p>
      </div>
    </section>
  );
};

export default SlideSeven;

