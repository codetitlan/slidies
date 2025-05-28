import React from "react";

const SlideEight = () => {
  return (
    <div
      style={{
        width: "900px",
        height: "700px",
        position: "relative",
        background: "rgba(2, 6, 23, 0.85)",
        overflow: "visible",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      {/* Background gradient elements - enhanced with more opacity */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0.05) 50%, rgba(0,0,0,0) 70%)",
          zIndex: 1,
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          bottom: "-80px",
          left: "-100px",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.05) 50%, rgba(0,0,0,0) 70%)",
          zIndex: 1,
        }}
      ></div>

      {/* Title section - enhanced with better contrast */}
      <div
        style={{
          position: "absolute",
          top: "50px",
          left: "50px",
          zIndex: 10,
        }}
      >
        <h1
          style={{
            fontSize: "56px",
            fontWeight: "800",
            margin: 0,
            padding: 0,
            color: "#f8fafc",
            lineHeight: 1.1,
            textShadow: "0 2px 10px rgba(0,0,0,0.5)",
          }}
        >
          Pasos
          <span
            style={{
              display: "inline-block",
              position: "relative",
              marginLeft: "15px",
            }}
          >
            <span
              style={{
                background: "linear-gradient(to right, #10b981, #6ee7b7)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                fontWeight: "900",
                textShadow: "none",
              }}
            >
              Prácticos
            </span>
            <div
              style={{
                position: "absolute",
                bottom: "5px",
                left: "0",
                width: "100%",
                height: "6px",
                background: "linear-gradient(to right, #10b981, #6ee7b7)",
                borderRadius: "3px",
                opacity: 0.8,
              }}
            ></div>
          </span>
        </h1>
        <h2
          style={{
            fontSize: "22px",
            fontWeight: "600",
            color: "#f1f5f9",
            margin: "10px 0 0 0",
            textShadow: "0 2px 4px rgba(0,0,0,0.5)",
          }}
        >
          Cómo Involucrarse en IA en la Región del Bajío
        </h2>
      </div>

      {/* Modern roadmap visualization - complete redesign with clearer elements */}
      <div
        style={{
          position: "absolute",
          top: "170px",
          right: "50px",
          width: "340px",
          height: "340px",
          zIndex: 2,
          perspective: "1000px",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            transformStyle: "preserve-3d",
            transform: "rotateX(20deg) rotateZ(-10deg)",
          }}
        >
          {/* Roadmap base */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "300px",
              height: "280px",
              background: "rgba(15, 23, 42, 0.7)",
              borderRadius: "16px",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          ></div>

          {/* Clear milestone steps */}
          {[
            {
              top: "15%",
              left: "20%",
              color: "#10b981",
              delay: 0,
              text: "Inicio",
              description: "Aprendizaje",
            },
            {
              top: "38%",
              left: "70%",
              color: "#0ea5e9",
              delay: 0.1,
              text: "Paso 2",
              description: "Práctica",
            },
            {
              top: "62%",
              left: "30%",
              color: "#8b5cf6",
              delay: 0.2,
              text: "Paso 3",
              description: "Colaboración",
            },
            {
              top: "85%",
              left: "80%",
              color: "#f43f5e",
              delay: 0.3,
              text: "Éxito",
              description: "Contribución",
            },
          ].map((step, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                top: step.top,
                left: step.left,
                transform: "translate(-50%, -50%)",
                zIndex: 5,
                animation: `float 3s ease-in-out ${step.delay}s infinite alternate`,
              }}
            >
              {/* Step number circle with improved visibility */}
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  background: step.color,
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                  fontWeight: "800",
                  boxShadow: `0 0 20px ${step.color}88, 0 10px 30px rgba(0, 0, 0, 0.3)`,
                  marginBottom: "10px",
                  border: "2px solid rgba(255, 255, 255, 0.8)",
                }}
              >
                {i + 1}
              </div>

              {/* Step label with better contrast */}
              <div
                style={{
                  textAlign: "center",
                  transform: "rotateX(-20deg) rotateZ(10deg)",
                }}
              >
                <div
                  style={{
                    color: "#ffffff",
                    fontSize: "16px",
                    fontWeight: "700",
                    textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  {step.text}
                </div>
                <div
                  style={{
                    color: step.color,
                    fontSize: "14px",
                    fontWeight: "600",
                    textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  {step.description}
                </div>
              </div>
            </div>
          ))}

          {/* Connecting path with higher contrast */}
          <svg
            width="100%"
            height="100%"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 3,
            }}
          >
            <path
              d="M70,60 C120,80 250,120 240,140 C230,160 100,180 100,210 C100,240 220,270 270,290"
              stroke="rgba(255, 255, 255, 0.7)"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="1, 12"
              pathLength="100"
              strokeDashoffset="50"
            />
            <path
              d="M70,60 C120,80 250,120 240,140 C230,160 100,180 100,210 C100,240 220,270 270,290"
              stroke="rgba(255, 255, 255, 0.3)"
              strokeWidth="16"
              fill="none"
              strokeLinecap="round"
              filter="blur(8px)"
            />
          </svg>
        </div>
      </div>

      {/* Action items with enhanced visual impact */}
      <div
        style={{
          position: "absolute",
          top: "170px",
          left: "50px",
          zIndex: 5,
          maxWidth: "450px",
        }}
      >
        <h3
          style={{
            fontSize: "24px",
            fontWeight: "700",
            color: "#ffffff",
            margin: "0 0 25px 0",
            textShadow: "0 2px 8px rgba(0,0,0,0.5)",
          }}
        >
          Acciones inmediatas que puedes tomar:
        </h3>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          {[
            {
              icon: "👥",
              text: "Únete a comunidades de desarrolladores (Codetitlan, reuniones locales)",
              color: "#10b981",
              delay: 0,
            },
            {
              icon: "🎓",
              text: "Participa en educación enfocada en IA",
              color: "#0ea5e9",
              delay: 0.1,
            },
            {
              icon: "🌱",
              text: "Involúcrate en proyectos locales de IA (agricultura, salud)",
              color: "#8b5cf6",
              delay: 0.2,
            },
            {
              icon: "🔊",
              text: "Aboga por políticas responsables",
              color: "#f43f5e",
              delay: 0.3,
            },
          ].map((action, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                padding: "16px 20px 16px 75px",
                background: "rgba(15, 23, 42, 0.8)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                borderRadius: "12px",
                border: `1px solid ${action.color}55`,
                boxShadow: `0 10px 25px rgba(0, 0, 0, 0.2), 0 0 20px ${action.color}33`,
                transform: "perspective(1000px) rotateY(-5deg)",
                animation: `slideIn 0.5s ease-out ${action.delay}s both`,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: "15px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "45px",
                  height: "45px",
                  borderRadius: "10px",
                  background: action.color,
                  border: `2px solid ${action.color}dd`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                  boxShadow: `0 5px 15px ${action.color}66`,
                }}
              >
                {action.icon}
              </div>
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#ffffff",
                  lineHeight: 1.4,
                  textShadow: "0 1px 2px rgba(0,0,0,0.3)",
                }}
              >
                {action.text}
              </div>

              {/* Action button with better visibility */}
              <div
                style={{
                  position: "absolute",
                  right: "15px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  background: action.color,
                  opacity: 0.9,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: `0 0 10px ${action.color}88`,
                }}
              >
                <span
                  style={{
                    fontSize: "14px",
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                >
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final quote with enhanced visibility */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50px",
          right: "50px",
          background: "rgba(15, 23, 42, 0.9)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderRadius: "16px",
          padding: "22px 28px",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
          zIndex: 10,
        }}
      >
        <p
          style={{
            fontSize: "18px",
            lineHeight: 1.6,
            color: "#ffffff",
            margin: 0,
            fontStyle: "italic",
            textAlign: "center",
            textShadow: "0 1px 4px rgba(0, 0, 0, 0.4)",
          }}
        >
          "Si estás en el Bajío y te apasiona la IA, existen oportunidades
          <span style={{ color: "#4ade80", fontWeight: "700" }}>
            {" "}
            ahora mismo{" "}
          </span>
          para involucrarte, desarrollar tus
          <span style={{ color: "#60cdff", fontWeight: "700" }}>
            {" "}
            habilidades
          </span>
          , e influir cómo la tecnología
          <span style={{ color: "#ff93a3", fontWeight: "700" }}> impacta </span>
          a nuestra comunidad."
        </p>
      </div>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap");

        @keyframes float {
          0% {
            transform: translate(-50%, -50%);
          }
          100% {
            transform: translate(-50%, -60%);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: perspective(1000px) rotateY(-15deg) translateX(-30px);
          }
          to {
            opacity: 1;
            transform: perspective(1000px) rotateY(-5deg) translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default SlideEight;
