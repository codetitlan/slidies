import React from "react";
import Image from "next/image";
import styles from "../slides.module.css";

const SlideFive = () => {
  return (
    <section className={`${styles.slide} ${styles.themeRose}`}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>Infraestructura invisible</span>
        <h1 className={styles.title}>
          El costo hídrico de <span>la revolución de datos</span>
        </h1>
        <p className={styles.subtitle}>
          El crecimiento de data centers en Querétaro posiciona a la región como
          hub tecnológico, pero también presiona los recursos más básicos:
          energía y, sobre todo, agua.
        </p>
      </div>

      <div className={`${styles.contentColumns} ${styles.wideGap}`}>
        <div className={styles.surfaceCard}>
          <div className={styles.statBlock}>
            <span className={styles.statValue}>56.8 mil millones L</span>
            <span className={styles.statLabel}>
              Déficit estimado de agua para abastecer los data centers en la
              región.
            </span>
          </div>
          <div className={styles.divider}></div>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <span className={styles.icon}>🚱</span>
              <div>
                <strong>Competencia por recursos vitales.</strong> La demanda de
                las infraestructuras digitales desplaza el consumo humano y
                agrícola.
              </div>
            </li>
            <li className={styles.listItem}>
              <span className={styles.icon}>📢</span>
              <div>
                <strong>Comunidades organizadas.</strong> Vecinas y vecinos
                levantan la voz ante proyectos que carecen de garantías
                ambientales.
              </div>
            </li>
          </ul>
          <p className={styles.note}>
            Modernizar sin criterio sostenible profundiza desigualdades. La
            innovación debe incorporar salvaguardas ambientales y sociales desde
            el diseño.
          </p>
        </div>

        <div className={styles.surfaceCard}>
          <h3>Dos realidades superpuestas</h3>
          <div className={styles.cardGrid}>
            <div className={styles.imagePanel}>
              <Image
                src="/Slide5_datacenter.png"
                alt="Interior de un data center"
                fill
                sizes="(max-width: 1000px) 50vw, 400px"
                style={{ objectFit: "cover" }}
              />
              <div className={styles.imageOverlay}></div>
            </div>
            <div className={styles.imagePanel}>
              <Image
                src="/Slide5_dry_landscape.png"
                alt="Paisaje árido representando escasez de agua"
                fill
                sizes="(max-width: 1000px) 50vw, 400px"
                style={{ objectFit: "cover" }}
              />
              <div className={styles.imageOverlay}></div>
            </div>
          </div>
          <p className={styles.note}>
            La decisión no es tecnología sí o no, sino cómo aseguramos que el
            progreso digital no comprometa derechos humanos básicos.
          </p>
        </div>
      </div>

      <div className={styles.callout}>
        <p>
          Cada avance en IA requiere infraestructura física. Necesitamos modelos
          de gobernanza que hagan compatibles la innovación y el cuidado del
          territorio.
        </p>
      </div>
    </section>
  );
};

export default SlideFive;

