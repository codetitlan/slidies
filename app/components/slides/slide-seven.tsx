import React from "react";

const SlideSeven = () => {
  return (
    <div
      style={{
        width: "900px",
        height: "700px",
        position: "relative",
        background: "transparent",
        overflow: "visible",
        fontFamily: "'Cabinet Grotesk', sans-serif",
      }}
    >
      {/* Background gradient */}
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, rgba(15, 23, 42, 0.3) 0%, rgba(30, 41, 59, 0.8) 100%)",
          zIndex: 1,
        }}
      ></div>

      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: "75px",
          left: "75px",
          zIndex: 10,
        }}
      >
        <h1
          style={{
            fontSize: "60px",
            fontWeight: "800",
            margin: 0,
            padding: 0,
            color: "#f8fafc",
          }}
        >
          Codetitlan
        </h1>
        <div
          style={{
            width: "300px",
            height: "10px",
            background:
              "linear-gradient(to right, #8b5cf6 10%, #06b6d4 50%, #10b981 90%)",
            marginTop: "5px",
            borderRadius: "5px",
          }}
        ></div>
      </div>

      {/* Subtitle */}
      <div
        style={{
          position: "absolute",
          top: "160px",
          left: "75px",
          zIndex: 10,
        }}
      >
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "600",
            color: "#f1f5f9",
            margin: 0,
            display: "inline-block",
            padding: "8px 15px",
            background: "rgba(15, 23, 42, 0.6)",
            backdropFilter: "blur(8px)",
            borderRadius: "8px",
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          IA como Oportunidad para América Latina
        </h2>
      </div>

      {/* Strategic goals */}
      <div
        style={{
          position: "absolute",
          top: "230px",
          left: "75px",
          zIndex: 5,
          width: "400px",
        }}
      >
        <h3
          style={{
            fontSize: "20px",
            fontWeight: "700",
            color: "#f8fafc",
            margin: "0 0 15px 0",
            textShadow: "0 2px 4px rgba(0,0,0,0.3)",
          }}
        >
          Objetivos Estratégicos:
        </h3>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          {[
            {
              text: "Fomentar la innovación local",
              color: "#8b5cf6",
              number: 1,
            },
            {
              text: "Empoderar a desarrolladores latinoamericanos a través de la IA",
              color: "#06b6d4",
              number: 2,
            },
            {
              text: "Prácticas tecnológicas éticas que aborden las desigualdades",
              color: "#10b981",
              number: 3,
            },
          ].map((goal, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                padding: "12px 15px 12px 50px",
                background: "rgba(15, 23, 42, 0.6)",
                borderRadius: "10px",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                boxShadow: `0 8px 20px rgba(0, 0, 0, 0.15)`,
                borderLeft: `4px solid ${goal.color}`,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "26px",
                  height: "26px",
                  borderRadius: "50%",
                  background: goal.color,
                  boxShadow: `0 0 15px ${goal.color}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 2,
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "#fff",
                }}
              >
                {goal.number}
              </div>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#f1f5f9",
                  margin: 0,
                  lineHeight: 1.3,
                }}
              >
                {goal.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Key values */}
      <div
        style={{
          position: "absolute",
          top: "230px",
          right: "75px",
          zIndex: 5,
          width: "300px",
        }}
      >
        <h3
          style={{
            fontSize: "20px",
            fontWeight: "700",
            color: "#f8fafc",
            margin: "0 0 15px 0",
            textShadow: "0 2px 4px rgba(0,0,0,0.3)",
          }}
        >
          Valores Clave:
        </h3>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          {[
            { text: "Justicia", color: "#8b5cf6" },
            { text: "Equidad", color: "#06b6d4" },
            { text: "Inclusividad", color: "#10b981" },
            { text: "Control Democrático", color: "#f43f5e" },
          ].map((value, index) => (
            <div
              key={index}
              style={{
                padding: "10px 15px",
                background: "rgba(15, 23, 42, 0.7)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                borderRadius: "12px",
                border: `2px solid ${value.color}`,
                boxShadow: `0 10px 20px rgba(0, 0, 0, 0.15), 0 0 10px ${value.color}44`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontSize: "17px",
                  fontWeight: "700",
                  color: value.color,
                  textShadow: `0 0 8px ${value.color}99`,
                  textAlign: "center",
                }}
              >
                {value.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Vision statement at bottom - smaller and repositioned */}
      <div
        style={{
          position: "absolute",
          bottom: "45px",
          left: "75px",
          right: "75px",
          background: "rgba(15, 23, 42, 0.85)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderRadius: "16px",
          padding: "20px 25px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
          zIndex: 10,
        }}
      >
        <div
          style={{
            width: "40px",
            height: "40px",
            position: "absolute",
            top: "-20px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #8b5cf6, #10b981)",
            borderRadius: "50%",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
            fontSize: "20px",
          }}
        >
          🌎
        </div>
        <p
          style={{
            fontSize: "16px",
            lineHeight: 1.4,
            color: "#f1f5f9",
            margin: 0,
            fontStyle: "italic",
            textAlign: "center",
            textShadow: "0 1px 3px rgba(0, 0, 0, 0.3)",
          }}
        >
          "En Codetitlan, creemos que la IA puede y debe servir a
          <span style={{ color: "#a78bfa", fontWeight: "600" }}> todos</span>.
          Nuestro enfoque está basado en la
          <span style={{ color: "#67e8f9", fontWeight: "600" }}>
            {" "}
            justicia{" "}
          </span>
          y la
          <span style={{ color: "#34d399", fontWeight: "600" }}> equidad</span>,
          asegurando que América Latina no solo participe sino que activamente
          <span style={{ color: "#fb7185", fontWeight: "600" }}>
            {" "}
            dé forma{" "}
          </span>
          a la revolución de la IA."
        </p>
      </div>

      <style jsx global>{`
        @import url("https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,700,600,500,400&display=swap");
      `}</style>
    </div>
  );
};

export default SlideSeven;
