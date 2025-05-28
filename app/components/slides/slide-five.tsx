import React from "react";

const SlideFive = () => {
  return (
    <div
      style={{
        width: "1200px",
        height: "900px",
        position: "relative",
        background: "transparent",
        overflow: "visible",
        fontFamily: "'Space Grotesk', 'Segoe UI', sans-serif",
      }}
    >
      {/* Dark overlay for dramatic effect */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          left: "-100px",
          width: "1400px",
          height: "1100px",
          background:
            "radial-gradient(circle at 30% 50%, rgba(20, 20, 30, 0.8) 0%, rgba(15, 15, 22, 0.9) 40%, rgba(10, 10, 15, 0.95) 100%)",
          borderRadius: "20px",
          filter: "blur(20px)",
          zIndex: 1,
        }}
      ></div>

      {/* Main title with distressed effect */}
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "40px",
          zIndex: 10,
        }}
      >
        <h1
          style={{
            fontSize: "60px",
            fontWeight: "900",
            margin: 0,
            padding: 0,
            color: "#0f172a",
            textShadow: "0 0 5px #ef4444, 0 0 10px #f97316, 0 0 15px #f97316",
            WebkitTextStroke: "1px #f97316",
            letterSpacing: "-1px",
            transform: "skew(-5deg)",
          }}
        >
          EL LADO OSCURO
        </h1>
        <div
          style={{
            marginTop: "-5px",
            marginLeft: "150px",
            transform: "rotate(-2deg)",
          }}
        >
          <h2
            style={{
              fontSize: "36px",
              fontWeight: "700",
              color: "#94a3b8",
              margin: 0,
              textShadow: "0 0 8px rgba(15, 23, 42, 0.8)",
            }}
          >
            de la Infraestructura de IA
          </h2>
        </div>
      </div>

      {/* Subtitle with glitch effect */}
      <div
        style={{
          position: "absolute",
          top: "130px",
          left: "90px",
          zIndex: 5,
          transform: "rotate(-1deg)",
        }}
      >
        <h3
          style={{
            fontSize: "24px",
            fontWeight: "500",
            color: "#cbd5e1",
            margin: "0",
            padding: "5px 15px",
            background: "rgba(15, 23, 42, 0.7)",
            borderLeft: "3px solid #0ea5e9",
            borderRadius: "0 8px 8px 0",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
          }}
        >
          Centros de Datos y Escasez de Agua
        </h3>
      </div>

      {/* Water deficit highlight with dramatic styling */}
      <div
        style={{
          position: "absolute",
          top: "180px",
          right: "100px",
          zIndex: 6,
          transform: "rotate(3deg)",
          background: "rgba(15, 23, 42, 0.6)",
          borderRadius: "12px",
          padding: "15px 20px",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <p
          style={{
            fontSize: "18px",
            color: "#e2e8f0",
            margin: "0 0 5px 0",
          }}
        >
          Déficit de agua en Querétaro debido a centros de datos:
        </p>
        <div
          style={{
            fontSize: "50px",
            fontWeight: "800",
            margin: "0",
            color: "transparent",
            background:
              "linear-gradient(135deg, #0ea5e9 0%, #0284c7 50%, #0c4a6e 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            filter: "drop-shadow(0 0 8px rgba(14, 165, 233, 0.5))",
            textAlign: "center",
          }}
        >
          56.8 mil millones de litros
        </div>
      </div>

      {/* Visual elements - data center vs dry land */}
      <div
        style={{
          display: "flex",
          position: "absolute",
          left: "50px",
          top: "330px",
          gap: "60px",
          zIndex: 4,
        }}
      >
        {/* Data center box */}
        <div
          style={{
            width: "250px",
            height: "200px",
            background: "rgba(15, 23, 42, 0.8)",
            borderRadius: "12px",
            padding: "15px",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            transform: "rotate(-3deg)",
          }}
        >
          <div
            style={{
              width: "220px",
              height: "180px",
              background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.5)",
              overflow: "hidden",
            }}
          >
            <img
              src="/Slide5_datacenter.png"
              alt="Data center with servers"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>

        {/* Dry land box */}
        <div
          style={{
            width: "250px",
            height: "200px",
            background: "rgba(15, 23, 42, 0.8)",
            borderRadius: "12px",
            padding: "15px",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            transform: "rotate(2deg)",
          }}
        >
          <div
            style={{
              width: "220px",
              height: "180px",
              background: "linear-gradient(135deg, #7f1d1d 0%, #92400e 100%)",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.5)",
              overflow: "hidden",
            }}
          >
            <img
              src="/Slide5_dry_landscape.png"
              alt="Dry landscape showing water scarcity"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>

      {/* Final quote in dramatic style */}
      <div
        style={{
          position: "absolute",
          bottom: "100px",
          right: "100px",
          maxWidth: "550px",
          background: "rgba(15, 23, 42, 0.7)",
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
          borderRadius: "12px",
          padding: "20px",
          boxShadow: "0 8px 25px rgba(0, 0, 0, 0.25)",
          border: "1px solid rgba(255, 255, 255, 0.05)",
          zIndex: 8,
        }}
      >
        <p
          style={{
            fontSize: "18px",
            lineHeight: 1.5,
            color: "#e2e8f0",
            fontWeight: "300",
            margin: 0,
            letterSpacing: "0.3px",
          }}
        >
          "Con cada avance en IA viene una infraestructura que demanda
          <span style={{ color: "#0ea5e9", fontWeight: "500" }}>
            {" "}
            enormes recursos
          </span>
          . Querétaro está en una encrucijada—equilibrando el
          <span style={{ color: "#f97316", fontWeight: "500" }}>
            {" "}
            crecimiento impulsado por la tecnología
          </span>{" "}
          con
          <span style={{ color: "#14b8a6", fontWeight: "500" }}>
            {" "}
            necesidades humanas esenciales
          </span>{" "}
          como el agua."
        </p>
      </div>

      {/* Visual water ripple effect in corner */}
      <div
        style={{
          position: "absolute",
          bottom: "-80px",
          right: "-100px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(14, 165, 233, 0.2) 0%, rgba(14, 165, 233, 0.05) 60%, rgba(0, 0, 0, 0) 100%)",
          zIndex: 2,
          animation: "pulse 4s infinite",
        }}
      ></div>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;700;900&display=swap");

        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.4;
          }
          100% {
            transform: scale(1);
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  );
};

export default SlideFive;
