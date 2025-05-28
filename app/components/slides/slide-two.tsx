import React from "react";

const SlideTwo = () => {
  return (
    <div
      style={{
        width: "900px",
        height: "700px",
        position: "relative",
        background: "transparent",
        overflow: "visible",
        fontFamily: "'Outfit', sans-serif",
      }}
    >
      {/* Dynamic background with multiple overlapping shapes */}
      <div
        style={{
          position: "absolute",
          top: "-120px",
          right: "-150px",
          width: "600px",
          height: "600px",
          background:
            "linear-gradient(135deg, rgba(124, 58, 237, 0.05) 0%, rgba(139, 92, 246, 0.08) 50%, rgba(196, 181, 253, 0.05) 100%)",
          borderRadius: "63% 37% 54% 46% / 55% 48% 52% 45%",
          transform: "rotate(15deg)",
          zIndex: 1,
          animation: "morphShape 15s ease-in-out infinite alternate",
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          bottom: "-80px",
          left: "-100px",
          width: "500px",
          height: "500px",
          background:
            "linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(37, 99, 235, 0.08) 50%, rgba(96, 165, 250, 0.05) 100%)",
          borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
          transform: "rotate(-10deg)",
          zIndex: 1,
          animation: "morphShape 12s ease-in-out infinite alternate-reverse",
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "750px",
          height: "750px",
          background:
            "radial-gradient(circle, rgba(56, 189, 248, 0.02) 0%, rgba(6, 182, 212, 0.03) 35%, rgba(14, 165, 233, 0.01) 70%, transparent 100%)",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
          opacity: 0.8,
          animation: "pulse 8s ease-in-out infinite",
        }}
      ></div>

      {/* Decorative elements */}
      <div
        style={{
          position: "absolute",
          top: "120px",
          right: "100px",
          width: "35px",
          height: "35px",
          borderRadius: "8px",
          background: "rgba(6, 182, 212, 0.2)",
          transform: "rotate(30deg)",
          boxShadow: "0 0 15px rgba(6, 182, 212, 0.3)",
          zIndex: 2,
          animation: "float 4s ease-in-out infinite alternate-reverse",
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          bottom: "150px",
          right: "150px",
          width: "25px",
          height: "25px",
          borderRadius: "5px",
          background: "rgba(139, 92, 246, 0.2)",
          transform: "rotate(-15deg)",
          boxShadow: "0 0 15px rgba(139, 92, 246, 0.3)",
          zIndex: 2,
          animation: "float 3.5s ease-in-out infinite 0.5s alternate",
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          top: "280px",
          left: "75px",
          width: "20px",
          height: "20px",
          borderRadius: "4px",
          background: "rgba(251, 113, 133, 0.2)",
          transform: "rotate(45deg)",
          boxShadow: "0 0 15px rgba(251, 113, 133, 0.3)",
          zIndex: 2,
          animation: "float 5s ease-in-out infinite 1s alternate",
        }}
      ></div>

      {/* Title with animated gradient text */}
      <div
        style={{
          position: "absolute",
          top: "40px",
          left: "60px",
          zIndex: 10,
        }}
      >
        <h1
          style={{
            fontSize: "52px",
            fontWeight: "800",
            margin: 0,
            padding: 0,
            color: "#f8fafc",
            position: "relative",
            display: "inline-block",
          }}
        >
          IA y la
          <span
            style={{
              display: "block",
              background:
                "linear-gradient(45deg, #06b6d4, #0ea5e9, #3b82f6, #8b5cf6)",
              backgroundSize: "300% 300%",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              animation: "gradient 8s ease infinite",
            }}
          >
            Redefinición del Valor
          </span>
        </h1>
        <div className="title-underline"></div>
      </div>

      {/* AI skills section - curved design */}
      <div
        style={{
          position: "absolute",
          top: "180px",
          left: "40px",
          background: "rgba(15, 23, 42, 0.7)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderRadius: "20px",
          padding: "22px 28px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 15px 35px rgba(0, 0, 0, 0.2)",
          minWidth: "320px",
          zIndex: 5,
          clipPath: "polygon(0% 0%, 100% 0%, 95% 100%, 0% 100%)",
        }}
      >
        <h3
          style={{
            fontSize: "19px",
            fontWeight: "600",
            color: "#cbd5e1",
            margin: "0 0 15px 0",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            paddingBottom: "8px",
          }}
        >
          Habilidades humanas tradicionales replicadas por la IA:
        </h3>

        {["Clasificación", "Predicción", "Análisis"].map((skill, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              margin: "14px 0",
              animation: `slideIn 0.4s ease-out ${index * 0.15}s both`,
            }}
          >
            <div
              style={{
                width: "40px",
                height: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "3px",
                  background: `hsl(${200 + index * 30}, 100%, 65%)`,
                  marginRight: "12px",
                  transform: "rotate(45deg)",
                  animation: "pulse 3s infinite alternate",
                  animationDelay: `${index * 0.5}s`,
                }}
              ></div>
            </div>
            <span
              style={{
                color: "#e2e8f0",
                fontSize: "18px",
                fontWeight: "500",
                textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
              }}
            >
              {skill}
            </span>
          </div>
        ))}
      </div>

      {/* Floating quote card - with animated borders */}
      <div
        style={{
          position: "absolute",
          top: "165px",
          right: "40px",
          background: "rgba(15, 23, 42, 0.7)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          borderRadius: "16px",
          padding: "22px 25px",
          border: "1px solid rgba(6, 182, 212, 0.2)",
          boxShadow:
            "0 10px 30px rgba(0, 0, 0, 0.2), 0 0 20px rgba(6, 182, 212, 0.15)",
          maxWidth: "280px",
          zIndex: 11,
          transform: "rotate(2deg)",
          animation: "float 4s ease-in-out infinite alternate",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-50%",
            left: "-50%",
            width: "200%",
            height: "200%",
            background:
              "conic-gradient(from 0deg, transparent, rgba(6, 182, 212, 0.3), rgba(14, 165, 233, 0.3), transparent)",
            animation: "borderGlow 8s linear infinite",
            zIndex: 1,
          }}
        ></div>
        <p
          style={{
            fontStyle: "italic",
            fontSize: "18px",
            lineHeight: 1.5,
            color: "#06b6d4",
            margin: 0,
            fontWeight: "600",
            textShadow: "0 0 10px rgba(6, 182, 212, 0.2)",
            position: "relative",
            zIndex: 2,
          }}
        >
          "La IA desafía el paradigma tradicional de generación de valor."
        </p>
      </div>

      {/* Question card - improved design */}
      <div
        style={{
          position: "absolute",
          top: "330px",
          right: "60px",
          background:
            "linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.85) 100%)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderRadius: "24px 24px 24px 5px",
          padding: "24px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 15px 30px rgba(0, 0, 0, 0.25)",
          maxWidth: "340px",
          zIndex: 6,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-15px",
            left: "20px",
            fontSize: "32px",
            width: "50px",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #f43f5e, #fb7185)",
            color: "white",
            borderRadius: "50%",
            boxShadow: "0 8px 20px rgba(244, 63, 94, 0.4)",
            animation: "pulse 3s infinite",
          }}
        >
          ❓
        </div>
        <p
          style={{
            fontSize: "19px",
            lineHeight: 1.6,
            color: "#e2e8f0",
            margin: "10px 0 0 0",
            fontWeight: "600",
            paddingLeft: "10px",
            borderLeft: "3px solid rgba(244, 63, 94, 0.6)",
          }}
        >
          Si la IA se hace cargo de las tareas cognitivas rutinarias, ¿dónde nos
          deja eso?
        </p>
      </div>

      {/* Final quote/monologue - reimagined with animated elements */}
      <div className="final-quote">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              fontSize: "48px",
              color: "rgba(56, 189, 248, 0.3)",
              marginRight: "10px",
              fontFamily: "serif",
              fontWeight: "bold",
            }}
          >
            "
          </div>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.6,
              color: "#e2e8f0",
              margin: 0,
              fontStyle: "italic",
            }}
          >
            La verdadera revolución está en cómo la IA está redefiniendo el
            concepto de
            <span className="highlight-value"> 'valor' </span>
            en sí mismo. Los trabajos que antes eran seguros porque requerían
            únicamente inteligencia ahora están abiertos a la
            <span className="highlight-auto"> automatización</span>,
            obligándonos a repensar nuestros roles en la sociedad.
          </p>
          <div
            style={{
              fontSize: "48px",
              color: "rgba(56, 189, 248, 0.3)",
              marginLeft: "10px",
              fontFamily: "serif",
              fontWeight: "bold",
              alignSelf: "flex-end",
            }}
          >
            "
          </div>
        </div>
      </div>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap");

        @keyframes morphShape {
          0% {
            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          }
          25% {
            border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%;
          }
          50% {
            border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%;
          }
          75% {
            border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%;
          }
          100% {
            border-radius: 63% 37% 56% 44% / 35% 45% 55% 65%;
          }
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.8;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0) rotate(var(--rotation, 0deg));
          }
          100% {
            transform: translateY(-12px) rotate(var(--rotation, 0deg));
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-25px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes borderGlow {
          0% {
            opacity: 0.3;
            transform: rotate(0deg);
          }
          100% {
            opacity: 0.7;
            transform: rotate(360deg);
          }
        }

        .title-underline {
          width: 180px;
          height: 4px;
          background: linear-gradient(to right, #06b6d4, #0ea5e9, #3b82f6);
          margin-top: 10px;
          border-radius: 2px;
          position: relative;
          overflow: hidden;
        }

        .title-underline::after {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.8) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          animation: shimmer 3s infinite;
        }

        @keyframes shimmer {
          100% {
            left: 100%;
          }
        }

        .quote-card {
          position: absolute;
          top: 165px;
          right: 40px;
          background: rgba(15, 23, 42, 0.7);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border-radius: 16px;
          padding: 22px 25px;
          border: 1px solid rgba(6, 182, 212, 0.2);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2),
            0 0 20px rgba(6, 182, 212, 0.15);
          max-width: 280px;
          z-index: 11;
          transform: rotate(2deg);
          animation: float 4s ease-in-out infinite alternate;
          position: relative;
          overflow: hidden;
        }

        .glowing-border {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: conic-gradient(
            from 0deg,
            transparent,
            rgba(6, 182, 212, 0.3),
            rgba(14, 165, 233, 0.3),
            transparent
          );
          animation: borderGlow 8s linear infinite;
          z-index: 1;
        }

        .final-quote {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          width: 720px;
          background: linear-gradient(
            135deg,
            rgba(15, 23, 42, 0.8) 0%,
            rgba(30, 41, 59, 0.75) 100%
          );
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 22px 30px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
          z-index: 7;
        }

        .highlight-value {
          font-weight: 600;
          color: #38bdf8;
          text-shadow: 0 0 8px rgba(56, 189, 248, 0.3);
          position: relative;
          display: inline-block;
        }

        .highlight-value::after {
          content: "";
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background: #38bdf8;
          animation: pulse 3s infinite;
        }

        .highlight-auto {
          font-weight: 600;
          color: #fb7185;
          text-shadow: 0 0 8px rgba(251, 113, 133, 0.3);
          position: relative;
          display: inline-block;
        }

        .highlight-auto::after {
          content: "";
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background: #fb7185;
          animation: pulse 3s infinite 1.5s;
        }
      `}</style>
    </div>
  );
};

export default SlideTwo;
