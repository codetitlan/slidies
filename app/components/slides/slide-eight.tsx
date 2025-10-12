import React from "react";
import styles from "../slides.module.css";

const ACTIONS = [
  {
    title: "Únete a comunidades locales",
    description: "Codetitlan, meetups de desarrolladores, laboratorios ciudadanos.",
    icon: "👥",
  },
  {
    title: "Aprende haciendo",
    description: "Programas de mentoría, hackatones y proyectos con datos abiertos.",
    icon: "🧠",
  },
  {
    title: "Impulsa proyectos en tu sector",
    description: "Agricultura, salud, movilidad o ciudades inteligentes del Bajío.",
    icon: "🚀",
  },
  {
    title: "Defiende políticas responsables",
    description: "Participa en mesas ciudadanas sobre medio ambiente y trabajo digno.",
    icon: "🌱",
  },
];

const RESOURCES = [
  "Programas de capacitación en IA responsable",
  "Fondos y becas para proyectos regionales",
  "Alianzas público-privadas con enfoque social",
];

const SlideEight = () => {
  return (
    <section className={`${styles.slide} ${styles.themeTeal}`}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>Participación</span>
        <h1 className={styles.title}>
          Pasos concretos para <span>sumarte hoy mismo</span>
        </h1>
        <p className={styles.subtitle}>
          La revolución tecnológica es colectiva. Cada persona, desde su
          disciplina, puede aportar para que la IA tenga impacto positivo en el
          Bajío.
        </p>
      </div>

      <div className={styles.contentColumns}>
        <div className={styles.surfaceCard}>
          <h3>Acciones inmediatas</h3>
          <ul className={styles.list}>
            {ACTIONS.map((action) => (
              <li key={action.title} className={styles.listItem}>
                <span className={styles.icon}>{action.icon}</span>
                <div>
                  <strong>{action.title}</strong>
                  <div className={styles.muted}>{action.description}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.surfaceCard}>
          <h3>Recursos a tu alcance</h3>
          <div className={styles.actionsColumn}>
            <div className={styles.pillList}>
              {RESOURCES.map((resource) => (
                <span key={resource} className={styles.pill}>
                  {resource}
                </span>
              ))}
            </div>
            <div className={styles.divider}></div>
            <p className={styles.note}>
              <strong>Consejo:</strong> empieza con un proyecto pequeño,
              documenta tu aprendizaje y compártelo con la comunidad. La
              colaboración multiplica el impacto.
            </p>
            <div className={styles.ctaRow}>
              <span className={styles.cta}>
                <span>📬</span> Escríbenos en Codetitlan
              </span>
              <span className={styles.cta}>
                <span>🛰️</span> Súmate a iniciativas open source
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.callout}>
        <p>
          Nuestro futuro tecnológico depende de la participación informada y
          comprometida de la comunidad. Construyámoslo juntas y juntos.
        </p>
      </div>
    </section>
  );
};

export default SlideEight;

