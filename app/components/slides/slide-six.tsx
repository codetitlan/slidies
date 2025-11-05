import React from "react";
import Image from "next/image";
import styles from "../slides.module.css";

const RISK_AREAS = [
  { label: "Operaciones y manufactura", value: 75 },
  { label: "Servicios administrativos", value: 68 },
  { label: "Logística y transporte", value: 62 },
  { label: "Servicios financieros", value: 54 },
];

const ADAPT_STRATEGIES = [
  {
    title: "Reskilling constante",
    description: "Programas de actualización en habilidades digitales y de datos.",
    icon: "🛠️",
  },
  {
    title: "Alianzas educativas",
    description: "Vincular empresas con universidades y bootcamps regionales.",
    icon: "🏫",
  },
  {
    title: "Protección social flexible",
    description: "Políticas que acompañen transiciones laborales con dignidad.",
    icon: "🛡️",
  },
];

const SlideSix = () => {
  return (
    <section className={`${styles.slide} ${styles.themeTeal}`}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>Mercado laboral</span>
        <h1 className={styles.title}>
          El 65% de los empleos en México <span>podrían automatizarse</span>
        </h1>
        <p className={styles.subtitle}>
          Más que un titular alarmista, es una invitación a prepararnos. La
          disrupción ya está aquí y el Bajío necesita planes proactivos para
          transiciones laborales justas.
        </p>
      </div>

      <div className={`${styles.contentColumns} ${styles.wideGap}`}>
        <div className={styles.surfaceCard}>
          <h3>Áreas con mayor exposición</h3>
          <div className={styles.progressList}>
            {RISK_AREAS.map((area) => (
              <div key={area.label} className={styles.progressItem}>
                <div className={styles.progressLabel}>
                  <span>{area.label}</span>
                  <span>{area.value}%</span>
                </div>
                <div className={styles.progressBar}>
                  <div
                    className={styles.progressValue}
                    style={{ width: `${area.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <p className={styles.note}>
            Fuente: estimaciones de organismos laborales internacionales
            aplicadas al contexto mexicano.
          </p>
        </div>

        <div className={styles.surfaceCard}>
          <h3>Plan de acción en el Bajío</h3>
          <ul className={styles.list}>
            {ADAPT_STRATEGIES.map((strategy) => (
              <li key={strategy.title} className={styles.listItem}>
                <span className={styles.icon}>{strategy.icon}</span>
                <div>
                  <strong>{strategy.title}</strong>
                  <div className={styles.muted}>{strategy.description}</div>
                </div>
              </li>
            ))}
          </ul>
          <div className={styles.divider}></div>
          <div className={styles.imagePanel}>
            <Image
              src="/Slide6_chart.png"
              alt="Gráfica sobre riesgo de automatización"
              fill
              sizes="(max-width: 1000px) 50vw, 400px"
              style={{ objectFit: "cover" }}
            />
            <div className={styles.imageOverlay}></div>
          </div>
        </div>
      </div>

      <div className={styles.callout}>
        <p>
          Automatización no es destino fatalista. Con políticas públicas
          inteligentes y formación continua, podemos guiar la transición hacia
          empleos más creativos, éticos y humanos.
        </p>
      </div>
    </section>
  );
};

export default SlideSix;

