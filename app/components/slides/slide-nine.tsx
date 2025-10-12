import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../slides.module.css";

const IMAGES = [
  {
    src: "/Me01WithBuildings.jpg",
    alt: "Retrato frente a edificios",
  },
  {
    src: "/Me01WithPlates.jpg",
    alt: "Retrato con obra artística",
  },
  {
    src: "/Me01WithSilks.jpeg",
    alt: "Retrato creativo con telas",
  },
];

const FOCUS_AREAS = [
  "IA y automatización",
  "Geopolítica y desigualdad tecnológica",
  "Desarrollo ético de software",
  "Comunidades y ecosistemas innovadores",
];

const SlideNine = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % IMAGES.length);
    }, 9000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className={`${styles.slide} ${styles.themeSlate}`}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>Quién soy</span>
        <h1 className={styles.title}>
          Liderando desde <span>tecnología, comunidad e impacto</span>
        </h1>
        <p className={styles.subtitle}>
          CTO, fundadora de Codetitlan e investigadora que conecta innovación
          tecnológica con justicia social en Iberoamérica.
        </p>
      </div>

      <div className={`${styles.contentColumns} ${styles.wideGap}`}>
        <div className={styles.surfaceCard}>
          <div className={styles.avatarRow}>
            <div className={styles.avatar}>
              <Image
                src={IMAGES[0].src}
                alt="Retrato de la presentadora"
                fill
                sizes="(max-width: 768px) 96px, 96px"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.avatarDetails}>
              <h3>Maricela Fonseca</h3>
              <span>Ciudad de México · Alianzas globales</span>
            </div>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Roles</span>
              <span className={styles.metaValue}>
                CTO · Fundadora · Investigadora
              </span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Enfoque</span>
              <span className={styles.metaValue}>
                Tecnología con propósito humano
              </span>
            </div>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.badgeRow}>
            {FOCUS_AREAS.map((area) => (
              <span key={area} className={styles.badge}>
                <span>🔭</span>
                {area}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.surfaceCard}>
          <h3>Detrás del escenario</h3>
          <div className={styles.imageCarousel}>
            <Image
              key={IMAGES[currentImage].src}
              src={IMAGES[currentImage].src}
              alt={IMAGES[currentImage].alt}
              fill
              sizes="(max-width: 1000px) 50vw, 420px"
              style={{ objectFit: "cover" }}
            />
            <div className={styles.imageOverlay}></div>
          </div>
          <p className={styles.imageCaption}>
            Investigación, colaboración internacional y una pasión creativa que
            equilibra la tecnología con el arte del movimiento.
          </p>
        </div>
      </div>

      <div className={styles.callout}>
        <p>
          Me interesa cómo la IA transforma sociedades y cómo garantizamos que
          ese cambio sea ético, inclusivo y sostenible. Codetitlan es mi forma
          de sumar a esa visión.
        </p>
      </div>
    </section>
  );
};

export default SlideNine;

