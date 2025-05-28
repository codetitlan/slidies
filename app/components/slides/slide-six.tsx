import React from "react";

const SlideSix = () => {
  return (
    <div
      style={{
        width: "1200px",
        height: "850px",
        position: "relative",
        background: "transparent",
        overflow: "visible",
        fontFamily: "'Geologica', sans-serif",
      }}
    >
      {/* Abstract layered background to represent disruption */}
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          zIndex: 1,
          overflow: "hidden",
        }}
      >
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              bottom: `${i * 15 - 50}px`,
              left: "0",
              width: "140%",
              height: "180px",
              background: `rgba(220, 38, 38, ${0.03 - i * 0.005})`,
              transform: `rotate(-${5 + i * 2}deg) translateX(-${i * 10}px)`,
              borderRadius: "50%",
              filter: "blur(30px)",
            }}
          ></div>
        ))}
      </div>

      {/* Title with disruption effect */}
      <div
        style={{
          position: "absolute",
          top: "40px",
          left: "50px",
          zIndex: 10,
        }}
      >
        <h1
          style={{
            fontSize: "50px",
            fontWeight: "900",
            textTransform: "uppercase",
            margin: 0,
            padding: 0,
            color: "#f8fafc",
            lineHeight: 1.1,
            position: "relative",
            maxWidth: "650px",
          }}
        >
          <span
            style={{
              display: "block",
              position: "relative",
              zIndex: 2,
            }}
          >
            Navegando
          </span>
          <span
            style={{
              display: "block",
              position: "relative",
              zIndex: 1,
              color: "transparent",
              WebkitTextStroke: "2px #ef4444",
              filter: "drop-shadow(0 0 8px rgba(239, 68, 68, 0.5))",
              letterSpacing: "1px",
            }}
          >
            El Mercado Laboral
          </span>
          <span
            style={{
              display: "block",
              position: "relative",
              zIndex: 3,
              background: "linear-gradient(135deg, #ef4444 0%, #f43f5e 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            En Disrupción
          </span>
        </h1>
      </div>

      {/* Dramatic statistic highlight */}
      <div
        style={{
          position: "absolute",
          top: "170px",
          right: "120px",
          zIndex: 5,
          perspective: "800px",
        }}
      >
        <div
          style={{
            padding: "5px",
            background:
              "linear-gradient(135deg, rgba(239, 68, 68, 0.8) 0%, rgba(244, 63, 94, 0.8) 100%)",
            borderRadius: "10px",
            boxShadow:
              "0 20px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(239, 68, 68, 0.4)",
            transform: "rotateY(-15deg)",
          }}
        >
          <div
            style={{
              background: "rgba(15, 23, 42, 0.9)",
              borderRadius: "6px",
              padding: "25px 30px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "80px",
                fontWeight: "900",
                margin: "0",
                color: "transparent",
                background: "linear-gradient(135deg, #ef4444 0%, #f43f5e 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                lineHeight: 1,
                filter: "drop-shadow(0 0 10px rgba(239, 68, 68, 0.3))",
              }}
            >
              65%
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "#e2e8f0",
                margin: "5px 0 0 0",
                maxWidth: "220px",
                fontWeight: "500",
                lineHeight: 1.4,
              }}
            >
              de empleos en riesgo potencial de automatización en México
            </p>
          </div>
        </div>
      </div>

      {/* Pie chart visualization area */}
      <div
        style={{
          position: "absolute",
          top: "190px",
          left: "80px",
          width: "400px",
          height: "400px",
          background: "rgba(250, 250, 246, 0.9)",
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(5px)",
          borderRadius: "20px",
          border: "1px solid rgba(244, 63, 94, 0.2)",
          boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)",
          zIndex: 4,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "100%",
            padding: "15px 20px",
            borderBottom: "1px solid rgba(244, 63, 94, 0.2)",
            background: "rgba(30, 41, 59, 0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontSize: "16px",
              fontWeight: "600",
              color: "#e2e8f0",
            }}
          >
            Sectores en riesgo en México
          </span>
          <div
            style={{
              display: "flex",
              gap: "8px",
            }}
          >
            {["#ef4444", "#f97316", "#f59e0b"].map((color, i) => (
              <div
                key={i}
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: color,
                }}
              ></div>
            ))}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "calc(100% - 51px)",
            padding: "10px",
            background: "rgba(250, 250, 246, 0.95)",
          }}
        >
          <div
            style={{
              width: "360px",
              height: "360px",
              position: "relative",
              margin: "5px 0",
            }}
          >
            {/* Replaced pie chart placeholder with actual image */}
            <img
              src="/Slide6_chart.png"
              alt="Sectores en riesgo en México"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "contain",
                borderRadius: "4px",
              }}
            />
          </div>
        </div>
      </div>

      {/* Strategic responses section */}
      <div
        style={{
          position: "absolute",
          bottom: "180px",
          right: "80px",
          zIndex: 5,
        }}
      >
        <h3
          style={{
            fontSize: "20px",
            fontWeight: "700",
            color: "#f8fafc",
            margin: "0 0 15px 0",
            textShadow: "0 2px 4px rgba(0,0,0,0.2)",
          }}
        >
          Respuestas estratégicas necesarias:
        </h3>

        <div
          style={{
            display: "flex",
            gap: "12px",
          }}
        >
          {[
            {
              text: "Formación en nuevas habilidades",
              icon: "🔄",
              color: "#f97316",
            },
            { text: "Alfabetización digital", icon: "💻", color: "#f59e0b" },
            { text: "Transiciones laborales", icon: "🚀", color: "#ef4444" },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                padding: "15px",
                background: "rgba(15, 23, 42, 0.8)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                borderRadius: "12px",
                border: `1px solid ${item.color}33`,
                boxShadow: `0 10px 20px rgba(0, 0, 0, 0.15), 0 0 10px ${item.color}22`,
                width: "140px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                animation: `fadeIn 0.5s ease-out ${index * 0.1}s both`,
                transform: index === 1 ? "translateY(-10px)" : "translateY(0)",
              }}
            >
              <div
                style={{
                  fontSize: "32px",
                  marginBottom: "10px",
                }}
              >
                {item.icon}
              </div>
              <div
                style={{
                  fontSize: "15px",
                  fontWeight: "600",
                  color: item.color,
                  textAlign: "center",
                }}
              >
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final quote */}
      <div
        style={{
          position: "absolute",
          bottom: "60px",
          left: "80px",
          maxWidth: "500px",
          background: "rgba(15, 23, 42, 0.75)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          borderRadius: "12px",
          padding: "20px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
          zIndex: 7,
        }}
      >
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.6,
            color: "#e2e8f0",
            margin: 0,
            fontStyle: "italic",
          }}
        >
          "La automatización remodelará el mercado laboral del Bajío
          <span style={{ color: "#ef4444", fontWeight: "500" }}>
            {" "}
            significativamente
          </span>
          . Pero más que un escenario catastrófico, es una invitación a
          <span style={{ color: "#f97316", fontWeight: "500" }}>
            {" "}
            prepararse
          </span>
          ,
          <span style={{ color: "#f59e0b", fontWeight: "500" }}>
            {" "}
            adaptarse
          </span>
          , y
          <span style={{ color: "#f43f5e", fontWeight: "500" }}>
            {" "}
            evolucionar
          </span>
          ."
        </p>
      </div>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Geologica:wght@300;400;500;600;700;800;900&display=swap");

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
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

export default SlideSix;
