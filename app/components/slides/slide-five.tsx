import React from "react";

const SlideFive = () => {
  return (
    <div
      style={{
        width: "1000px",
        height: "800px",
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
          width: "1200px",
          height: "1000px",
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
          THE DARK SIDE
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
            of AI Infrastructure
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
          Data Centers and Water Scarcity
        </h3>
      </div>

      {/* Water deficit highlight with dramatic styling */}
      <div
        style={{
          position: "absolute",
          top: "200px",
          right: "80px",
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
          Querétaro's water deficit due to data centers:
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
          56.8 billion liters
        </div>
      </div>

      {/* Visual elements - data center vs dry land */}
      <div
        style={{
          display: "flex",
          position: "absolute",
          left: "50px",
          top: "280px",
          gap: "40px",
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
              fontSize: "16px",
              fontWeight: "500",
              color: "#94a3b8",
              marginBottom: "10px",
              textAlign: "center",
            }}
          >
            Modern data center with servers and cooling systems
          </div>
          <div
            style={{
              width: "220px",
              height: "120px",
              background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.5)",
            }}
          >
            <div
              style={{
                fontSize: "60px",
                color: "#0ea5e9",
                opacity: 0.7,
              }}
            >
              🖥️
            </div>
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
              fontSize: "16px",
              fontWeight: "500",
              color: "#94a3b8",
              marginBottom: "10px",
              textAlign: "center",
            }}
          >
            Dry, cracked landscape showing water scarcity
          </div>
          <div
            style={{
              width: "220px",
              height: "120px",
              background: "linear-gradient(135deg, #7f1d1d 0%, #92400e 100%)",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.5)",
            }}
          >
            <div
              style={{
                fontSize: "60px",
                color: "#b45309",
                opacity: 0.7,
              }}
            >
              🏜️
            </div>
          </div>
        </div>
      </div>

      {/* "Local communities" callout */}
      <div
        style={{
          position: "absolute",
          bottom: "170px",
          left: "150px",
          background: "rgba(20, 184, 166, 0.1)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          borderRadius: "6px",
          padding: "12px 18px",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
          border: "1px solid rgba(20, 184, 166, 0.3)",
          maxWidth: "450px",
          transform: "rotate(-1deg)",
          zIndex: 7,
        }}
      >
        <p
          style={{
            margin: 0,
            fontStyle: "italic",
            color: "#14b8a6",
            fontSize: "18px",
            fontWeight: "500",
            textShadow: "0 1px 3px rgba(0, 0, 0, 0.3)",
          }}
        >
          "Local communities actively resisting due to environmental impact"
        </p>
      </div>

      {/* Final quote in dramatic style */}
      <div
        style={{
          position: "absolute",
          bottom: "50px",
          right: "70px",
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
          "With every AI advancement comes infrastructure that demands
          <span style={{ color: "#0ea5e9", fontWeight: "500" }}>
            {" "}
            enormous resources
          </span>
          . Querétaro is at a crossroads—balancing
          <span style={{ color: "#f97316", fontWeight: "500" }}>
            {" "}
            technology-driven growth
          </span>{" "}
          with
          <span style={{ color: "#14b8a6", fontWeight: "500" }}>
            {" "}
            essential human needs
          </span>{" "}
          like water."
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
