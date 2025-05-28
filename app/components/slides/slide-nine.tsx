import React, { useState, useEffect } from "react";
import Image from "next/image";

const SlideNine = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/Me01WithBuildings.jpg",
    "/Me01WithPlates.jpg",
    "/Me01WithSilks.jpeg",
  ];

  useEffect(() => {
    // Switch images every 10 seconds
    const intervalId = setInterval(() => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 10000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div
      style={{
        width: "1000px",
        height: "700px",
        position: "relative",
        background: "linear-gradient(135deg, #2a3b4c, #1a2b3c)",
        overflow: "visible",
        fontFamily: "'Montserrat', sans-serif",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Background pattern overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "url('/images/pattern-overlay.svg')",
          opacity: 0.15,
          zIndex: 1,
        }}
      ></div>

      {/* Main content container */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "95%",
          maxWidth: "1300px",
          padding: "2rem",
          borderRadius: "8px",
          backgroundColor: "rgba(20, 30, 40, 0.7)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          boxShadow: "0 15px 35px rgba(0, 0, 0, 0.3)",
          animation: "fadeIn 0.8s ease-in-out",
        }}
      >
        {/* Title with animated entrance - Made smaller and less bottom margin */}
        <h2
          style={{
            fontSize: "2.5rem",
            marginBottom: "1.5rem",
            color: "#50c8ff",
            fontWeight: 700,
            textShadow: "0 2px 10px rgba(80, 200, 255, 0.3)",
            position: "relative",
            display: "inline-block",
            animation: "slideInLeft 0.6s ease-out 0.3s both",
          }}
        >
          Sobre Mí – Conectando Tecnología, Comunidad e Innovación
        </h2>

        {/* Three column layout - redistributed content horizontally */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.5fr 1.5fr",
            gap: "1.5rem",
            marginBottom: "1.5rem",
          }}
        >
          {/* Profile section with avatar and logos */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
              animation: "fadeInScale 0.7s ease-out 0.5s both",
            }}
          >
            <div
              style={{
                width: "180px",
                height: "180px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "4px solid rgba(80, 200, 255, 0.5)",
                boxShadow: "0 5px 15px rgba(0, 0, 0, 0.4)",
                position: "relative",
              }}
            >
              {/* Image container with transitioning images */}
              <div
                style={{ position: "relative", width: "100%", height: "100%" }}
              >
                {/* First image */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    opacity: currentImage === 0 ? 1 : 0,
                    transition: "opacity 1.5s ease-in-out",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={images[0]}
                      alt="Profile image 1"
                      fill
                      style={{
                        objectFit: "contain",
                        objectPosition: "center 20%",
                      }}
                    />
                  </div>
                </div>

                {/* Second image */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    opacity: currentImage === 1 ? 1 : 0,
                    transition: "opacity 1.5s ease-in-out",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={images[1]}
                      alt="Profile image 2"
                      fill
                      style={{
                        objectFit: "cover",
                        objectPosition: "center", // For the mid-body image
                      }}
                    />
                  </div>
                </div>

                {/* Third image */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    opacity: currentImage === 2 ? 1 : 0,
                    transition: "opacity 1.5s ease-in-out",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={images[2]}
                      alt="Profile image 3"
                      fill
                      style={{
                        objectFit: "cover",
                        objectPosition: "center", // For the aerial silks image
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                gap: "0.8rem",
                justifyContent: "center",
              }}
            >
              {/* Logo elements */}
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                  fontWeight: "bold",
                  fontSize: "1.3rem",
                  color: "#50c8ff",
                }}
              >
                C
              </div>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  color: "#ffaa50",
                }}
              >
                AI
              </div>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                  fontWeight: "bold",
                  fontSize: "1.3rem",
                  color: "#ff50aa",
                }}
              >
                ⌘
              </div>
            </div>
          </div>

          {/* Bio section and Creative Expression section combined */}
          <div
            style={{
              position: "relative",
              animation: "slideInUp 0.7s ease-out 0.6s both",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "1.6rem",
                  marginBottom: "0.7rem",
                  color: "#ffaa50",
                  fontWeight: 600,
                }}
              >
                CTO y Fundador de Codetitlan
              </h3>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.5,
                  marginBottom: "0.8rem",
                  color: "#e0e0e0",
                }}
              >
                Investigador y líder comunitario profundamente involucrado en el
                empoderamiento tecnológico en Iberoamérica. Basado en México con
                colaboraciones internacionales activas.
              </p>
            </div>
            <div style={{ marginTop: "1rem" }}>
              <h4
                style={{
                  fontSize: "1.3rem",
                  marginBottom: "0.7rem",
                  color: "#a050ff",
                  fontWeight: 500,
                }}
              >
                Más Allá de la Tecnología
              </h4>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.5,
                  color: "#e0e0e0",
                }}
              >
                Apasionado por la expresión creativa a través de la danza y
                acrobacias – aportando un enfoque multidimensional a la
                innovación y liderazgo comunitario.
              </p>
            </div>
          </div>

          {/* Expertise areas in separate column */}
          <div
            style={{
              animation: "slideInRight 0.7s ease-out 0.6s both",
            }}
          >
            <h4
              style={{
                fontSize: "1.3rem",
                marginBottom: "0.7rem",
                color: "#ff50aa",
                fontWeight: 500,
              }}
            >
              Personal y Profesional
            </h4>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
              }}
            >
              {[
                "Padre de una hija, pareja, y guardian de 22 plantas",
                "Acrobata de Danza Aerea",
                "Bailarin de ritmos urbanos latinos y africanos",
                "Aprendiz de tatuador",
                "IA y Automatización",
                "Geopolítica e Impactos Socioeconómicos de la Tecnología",
                "Desarrollo de Software Ético y Construcción de Comunidad",
                "Defensor de la Equidad y Justicia en Tecnología",
              ].map((item, index) => (
                <li
                  key={index}
                  style={{
                    marginBottom: "0.6rem",
                    paddingLeft: "1.2rem",
                    position: "relative",
                    fontSize: "0.95rem", // Made slightly smaller to fit all items
                    color: "#e0e0e0",
                    animation: `slideInRight 0.5s ease-out ${
                      0.7 + index * 0.1
                    }s both`,
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      color: index < 4 ? "#a050ff" : "#50c8ff", // Different color for personal vs professional items
                    }}
                  >
                    →
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Quote container - now wider and shorter */}
        <div
          style={{
            marginTop: "1rem",
            padding: "1.2rem",
            borderLeft: "4px solid #50c8ff",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            borderRadius: "0 8px 8px 0",
            animation: "fadeInScale 0.7s ease-out 1.2s both",
          }}
        >
          <blockquote
            style={{
              margin: 0,
              padding: 0,
              fontSize: "1rem",
              lineHeight: 1.6,
              fontStyle: "italic",
              color: "#f0f0f0",
            }}
          >
            "Me apasiona la intersección entre tecnología y sociedad—no solo
            cómo la innovación puede cambiar el mundo, sino cómo podemos guiarla
            responsablemente. Mi objetivo con Codetitlan y más allá es asegurar
            que aprovechemos la tecnología de manera ética, inclusiva y
            sostenible, especialmente aquí en Iberoamérica."
          </blockquote>
        </div>
      </div>

      {/* CSS animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideInLeft {
          from {
            transform: translateX(-30px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideInUp {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes fadeInScale {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        @keyframes slideInRight {
          from {
            transform: translateX(-20px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes fadeInUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default SlideNine;
