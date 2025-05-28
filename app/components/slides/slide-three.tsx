import React from "react";

const SlideThree = () => {
  return (
    <div
      style={{
        width: "900px",
        height: "700px",
        position: "relative",
        background: "transparent",
        overflow: "visible",
        fontFamily: "'Poppins', 'Segoe UI', sans-serif",
      }}
    >
      {/* Main title with gradient */}
      <div
        style={{
          position: "absolute",
          top: "-30px",
          left: "40px",
          transform: "rotate(-5deg)",
          zIndex: 5,
        }}
      >
        <h1
          style={{
            fontSize: "46px",
            fontWeight: "800",
            margin: 0,
            padding: 0,
            color: "transparent",
            background:
              "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            textShadow: "2px 2px 0px rgba(0,0,0,0.1)",
          }}
        >
          Más Allá de la Inteligencia
        </h1>
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "600",
            margin: "-5px 0 0 80px",
            color: "#e879f9",
            transform: "rotate(2deg)",
          }}
        >
          La Ventaja Humana
        </h2>
      </div>

      {/* Decorative element */}
      <div
        style={{
          position: "absolute",
          top: "70px",
          right: "-60px",
          width: "180px",
          height: "180px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(124,58,237,0.2) 0%, rgba(139,92,246,0.1) 70%, rgba(0,0,0,0) 100%)",
          zIndex: 1,
        }}
      ></div>

      {/* Subtitle with angled position */}
      <div
        style={{
          position: "absolute",
          top: "140px",
          left: "20px",
          transform: "rotate(-2deg)",
          backgroundColor: "rgba(99, 102, 241, 0.08)",
          padding: "8px 12px",
          borderRadius: "8px",
          boxShadow: "2px 2px 10px rgba(0,0,0,0.05)",
          zIndex: 4,
        }}
      >
        <h3
          style={{
            fontSize: "18px",
            fontWeight: "600",
            color: "#818cf8",
            margin: 0,
          }}
        >
          Aspectos únicamente humanos que la IA lucha por replicar:
        </h3>
      </div>

      {/* List items as floating cards */}
      <div
        style={{
          position: "absolute",
          top: "190px",
          left: "60px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          zIndex: 3,
        }}
      >
        {[
          {
            text: "Empatía profunda",
            color: "#f472b6",
            rotation: "3deg",
            delay: 0,
          },
          {
            text: "Alineación cultural",
            color: "#818cf8",
            rotation: "-2deg",
            delay: 0.1,
          },
          {
            text: "Conciencia histórica",
            color: "#60a5fa",
            rotation: "1deg",
            delay: 0.2,
          },
          {
            text: "Juicio ético",
            color: "#4ade80",
            rotation: "-1deg",
            delay: 0.3,
          },
          {
            text: "Inteligencia creativa y emocional",
            color: "#fb923c",
            rotation: "2deg",
            delay: 0.4,
          },
        ].map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              boxShadow: `0 8px 12px -3px rgba(0, 0, 0, 0.1), 0 3px 5px -2px rgba(0, 0, 0, 0.05), 0 0 0 2px ${item.color}`,
              borderRadius: "10px",
              padding: "10px 16px",
              width: "fit-content",
              maxWidth: "400px",
              transform: `rotate(${item.rotation}) translateX(${index * 12}px)`,
              animation: `fadeIn 0.5s ease-out ${item.delay}s both`,
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "19px",
                fontWeight: "600",
                color: item.color,
              }}
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* Quote with fancy styling */}
      <div
        style={{
          position: "absolute",
          bottom: "30px",
          right: "40px",
          maxWidth: "450px",
          background: "rgba(30, 41, 59, 0.85)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          borderRadius: "14px",
          padding: "16px",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          boxShadow: "0 8px 32px rgba(31, 38, 135, 0.2)",
          transform: "rotate(-1deg)",
          zIndex: 6,
        }}
      >
        <p
          style={{
            fontStyle: "italic",
            fontSize: "17px",
            lineHeight: 1.5,
            color: "#f8fafc",
            textShadow: "1px 1px 3px rgba(0,0,0,0.5)",
            margin: 0,
            fontWeight: "500",
          }}
        >
          "Los humanos seguimos siendo indispensables no porque la IA no pueda
          pensar, sino porque la verdadera comprensión implica más que solo
          procesar datos—implica
          <span
            style={{
              color: "#f472b6",
              fontWeight: "600",
              textShadow: "0 0 10px rgba(244, 114, 182, 0.3)",
            }}
          >
            {" "}
            empatía
          </span>
          ,
          <span
            style={{
              color: "#4ade80",
              fontWeight: "600",
              textShadow: "0 0 10px rgba(74, 222, 128, 0.3)",
            }}
          >
            {" "}
            ética
          </span>
          , y
          <span
            style={{
              color: "#60a5fa",
              fontWeight: "600",
              textShadow: "0 0 10px rgba(96, 165, 250, 0.3)",
            }}
          >
            {" "}
            profundidad cultural
          </span>
          ."
        </p>
      </div>

      {/* Background decorative circles */}
      <div
        style={{
          position: "absolute",
          bottom: "-60px",
          left: "-80px",
          width: "240px",
          height: "240px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(244,114,182,0.1) 0%, rgba(251,146,60,0.05) 70%, rgba(0,0,0,0) 100%)",
          zIndex: 0,
        }}
      ></div>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap");

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default SlideThree;
