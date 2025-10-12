import React from "react";
import Image from "next/image";
import styles from "../slides.module.css";

const LOCAL_USE_CASES = [
  {
    title: "Modelos predictivos de aire",
    description:
      "Anticipan picos de contaminación en Querétaro para activar alertas tempranas.",
    icon: "🌫️",
  },
  {
    title: "Agricultura inteligente",
    description:
      "Sensores y visión computacional optimizan riego y rendimiento agrícola en el Bajío.",
    icon: "🌱",
  },
  {
    title: "Salud y educación",
    description:
      "Proyectos piloto que personalizan diagnósticos y rutas de aprendizaje para comunidades locales.",
    icon: "🏥",
  },
];

const SlideFour = () => {
  return (
    <section className={`${styles.slide} ${styles.themeSlate}`}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>Territorio</span>
        <h1 className={styles.title}>
          Querétaro y el Bajío ya <span>viven la IA</span>
        </h1>
        <p className={styles.subtitle}>
          La inteligencia artificial dejó de ser teoría. Está presente en
          proyectos tangibles que impactan calidad de vida y competitividad en
          la región.
        </p>
      </div>

      <div className={styles.contentColumns}>
        <div className={styles.surfaceCard}>
          <h3>Casos de uso en marcha</h3>
          <ul className={styles.list}>
            {LOCAL_USE_CASES.map((useCase) => (
              <li key={useCase.title} className={styles.listItem}>
                <span className={styles.icon}>{useCase.icon}</span>
                <div>
                  <strong>{useCase.title}</strong>
                  <div className={styles.muted}>{useCase.description}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.surfaceCard}>
          <h3>Mapa visual de oportunidades</h3>
          <div className={styles.imagePanel}>
            <Image
              src="/Slide4_infograph.png"
              alt="Infografía de iniciativas de IA en Querétaro"
              fill
              sizes="(max-width: 1000px) 100vw, 500px"
              style={{ objectFit: "cover" }}
              priority
            />
            <div className={styles.imageOverlay}></div>
          </div>
          <p className={styles.note}>
            Cada iniciativa abre espacio para nuevas alianzas entre gobierno,
            academia, empresas y ciudadanía. Estamos apenas en el comienzo de la
            curva de adopción.
          </p>
        </div>
      </div>

      <div className={styles.callout}>
        <p>
          La región ya cuenta con datos, talento y casos reales. El siguiente
          paso es escalar estas experiencias con estrategias sostenibles.
        </p>
      </div>
    </section>
  );
};

export default SlideFour;

