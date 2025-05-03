import React from "react";

const SlideOne = () => {
  return (
    <div
      style={{
        width: "900px",
        height: "700px",
        position: "relative",
        background: "transparent",
        overflow: "visible",
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      {/* Animated background element */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(10,10,10,0.1) 0%, rgba(45,55,72,0.05) 70%, rgba(0,0,0,0) 100%)",
          zIndex: 0,
          animation: "pulse 8s infinite alternate",
        }}
      ></div>

      {/* Title with split effect */}
      <div
        style={{
          position: "absolute",
          top: "55px",
          left: "0",
          width: "100%",
          textAlign: "center",
          zIndex: 10,
        }}
      >
        <h1
          style={{
            fontSize: "70px",
            fontWeight: "900",
            margin: 0,
            letterSpacing: "-2px",
            lineHeight: "0.95",
          }}
        >
          <span
            style={{
              display: "inline-block",
              color: "#3b82f6",
              transform: "translateX(-10px)",
              textShadow: "0 0 15px rgba(59, 130, 246, 0.3)",
            }}
          >
            AI:
          </span>
          <span
            style={{
              display: "inline-block",
              background: "linear-gradient(135deg, #8b5cf6 0%, #d946ef 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              transform: "translateX(5px)",
            }}
          >
            Revolution
          </span>
          <span
            style={{
              display: "inline-block",
              color: "#f43f5e",
              transform: "translateX(-5px)",
              opacity: 0.8,
            }}
          >
            {" "}
            or{" "}
          </span>
          <span
            style={{
              display: "inline-block",
              background: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              transform: "translateX(10px)",
            }}
          >
            Evolution?
          </span>
        </h1>
      </div>

      {/* Quote floating element */}
      <div
        style={{
          position: "absolute",
          top: "230px",
          left: "50%",
          transform: "translateX(-50%) rotate(-1deg)",
          width: "650px",
          padding: "25px",
          background: "rgba(15, 23, 42, 0.4)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderRadius: "15px",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)",
          zIndex: 5,
        }}
      >
        <p
          style={{
            fontSize: "22px",
            lineHeight: 1.5,
            color: "#f8fafc",
            margin: 0,
            fontStyle: "italic",
            textAlign: "center",
            textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          "AI is not a single technology; it's a
          <span
            style={{
              color: "#a78bfa",
              textShadow: "0 0 10px rgba(139, 92, 246, 0.7)",
              fontWeight: "600",
            }}
          >
            {" "}
            constellation{" "}
          </span>
          of efforts aimed at emulating what we thought made us
          <span
            style={{
              color: "#93c5fd",
              textShadow: "0 0 10px rgba(59, 130, 246, 0.7)",
              fontWeight: "600",
            }}
          >
            {" "}
            uniquely human
          </span>
          ."
        </p>
      </div>

      {/* Floating keywords with improved text contrast and alignment */}
      <div
        style={{
          position: "absolute",
          top: "370px",
          left: "0",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          zIndex: 6,
        }}
      >
        {[
          {
            text: "Reasoning",
            color: "#10b981",
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "16px",
            fontWeight: 700,
            delay: 0.3,
            rotate: "-5deg",
            duration: "5.2s",
            timing: "ease-in-out",
            direction: "alternate",
            bgColor: "rgba(16, 185, 129, 0.15)",
          },
          {
            text: "Classification",
            color: "#3b82f6",
            fontFamily: "'Fira Sans', sans-serif",
            fontSize: "15px",
            fontWeight: 600,
            delay: 0.7,
            rotate: "3deg",
            duration: "7s",
            timing: "ease",
            direction: "alternate-reverse",
            bgColor: "rgba(59, 130, 246, 0.15)",
          },
          {
            text: "Emulation",
            color: "#8b5cf6",
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "16px",
            fontWeight: 700,
            delay: 0.1,
            rotate: "-2deg",
            duration: "6s",
            timing: "ease-in-out",
            direction: "alternate",
            bgColor: "rgba(139, 92, 246, 0.15)",
          },
          {
            text: "Human-level intelligence",
            color: "#f43f5e",
            fontFamily: "'Fira Sans', sans-serif",
            fontSize: "15px",
            fontWeight: 600,
            delay: 1.2,
            rotate: "4deg",
            duration: "5.8s",
            timing: "ease-in-out",
            direction: "alternate-reverse",
            bgColor: "rgba(244, 63, 94, 0.15)",
          },
        ].map((term, index) => (
          <div
            key={index}
            style={{
              padding: "10px 20px",
              background: `rgba(0,0,0,0.65)`,
              border: `2px solid ${term.color}`,
              boxShadow: `0 0 15px rgba(0,0,0,0.2), 0 0 10px ${term.color}33`,
              borderRadius: "30px",
              transform: `rotate(${term.rotate}) translateY(${
                index % 2 === 0 ? -10 : 10
              }px)`,
              animation: `float-${index + 1} ${term.duration} ${term.timing} ${
                term.delay
              }s infinite ${term.direction}`,
              zIndex: 7,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                color: "#ffffff",
                fontSize: term.fontSize,
                fontWeight: term.fontWeight,
                fontFamily: term.fontFamily,
                letterSpacing: "0.5px",
                textShadow: `0 0 10px ${term.color}`,
                position: "relative",
                padding: "2px 0",
              }}
            >
              {term.text}
              <span
                style={{
                  position: "absolute",
                  bottom: "-2px",
                  left: 0,
                  width: "100%",
                  height: "2px",
                  background: term.color,
                  opacity: 0.7,
                  borderRadius: "1px",
                }}
              ></span>
            </span>
          </div>
        ))}
      </div>

      {/* Final quote */}
      <div
        style={{
          position: "absolute",
          bottom: "70px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
          padding: "20px 30px",
          background: "rgba(15, 23, 42, 0.7)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)",
          zIndex: 5,
        }}
      >
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.6,
            color: "#e2e8f0",
            margin: 0,
            fontStyle: "italic",
            textShadow: "0 1px 2px rgba(0, 0, 0, 0.3)",
          }}
        >
          "When we speak about AI, we're talking about a massive technological
          push to replicate aspects of human cognition and decision-making,
          previously thought impossible for machines. It's both an
          <span style={{ color: "#4ade80", fontWeight: "500" }}>
            {" "}
            evolution{" "}
          </span>
          of tools and a
          <span style={{ color: "#f43f5e", fontWeight: "500" }}>
            {" "}
            revolutionary shift{" "}
          </span>
          in how we define human work."
        </p>
      </div>

      {/* Decorative elements */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "30px",
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(79, 70, 229, 0.1) 0%, rgba(79, 70, 229, 0.05) 50%, rgba(0,0,0,0) 70%)",
          zIndex: 1,
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          top: "40px",
          right: "50px",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(244, 63, 94, 0.1) 0%, rgba(244, 63, 94, 0.05) 50%, rgba(0,0,0,0) 70%)",
          zIndex: 1,
        }}
      ></div>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;900&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;500;600;700&display=swap");

        @keyframes pulse {
          0% {
            transform: translate(-50%, -50%) scale(0.95);
            opacity: 0.5;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.05);
            opacity: 0.8;
          }
        }

        /* More subtle float animations */
        @keyframes float-1 {
          0% {
            transform: rotate(-5deg) translateY(-10px);
          }
          50% {
            transform: rotate(-4deg) translateY(-15px) translateX(-2px);
          }
          100% {
            transform: rotate(-6deg) translateY(-5px) translateX(1px);
          }
        }

        @keyframes float-2 {
          0% {
            transform: rotate(3deg) translateY(8px);
          }
          50% {
            transform: rotate(2.5deg) translateY(12px) translateX(1px);
          }
          100% {
            transform: rotate(3.5deg) translateY(4px);
          }
        }

        @keyframes float-3 {
          0% {
            transform: rotate(-2deg) translateY(-7px);
          }
          50% {
            transform: rotate(-1.5deg) translateY(-12px) translateX(-1px);
          }
          100% {
            transform: rotate(-2.5deg) translateY(-3px) translateX(1px);
          }
        }

        @keyframes float-4 {
          0% {
            transform: rotate(4deg) translateY(5px);
          }
          50% {
            transform: rotate(3.5deg) translateY(10px) translateX(1px);
          }
          100% {
            transform: rotate(4.5deg) translateY(2px) translateX(-1px);
          }
        }
      `}</style>
    </div>
  );
};

export default SlideOne;
