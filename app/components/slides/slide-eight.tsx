import React from "react";

const SlideEight = () => {
  return (
    <div
      style={{
        width: "900px",
        height: "700px",
        position: "relative",
        background: "transparent",
        overflow: "visible",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      {/* Background gradient elements */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, rgba(16, 185, 129, 0.02) 50%, rgba(0,0,0,0) 70%)",
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
            "radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, rgba(59, 130, 246, 0.02) 50%, rgba(0,0,0,0) 70%)",
          zIndex: 1,
        }}
      ></div>

      {/* Title section */}
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
          }}
        >
          Practical
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
              }}
            >
              Steps
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
                opacity: 0.6,
              }}
            ></div>
          </span>
        </h1>
        <h2
          style={{
            fontSize: "22px",
            fontWeight: "600",
            color: "#e2e8f0",
            margin: "10px 0 0 0",
          }}
        >
          Getting Involved in AI in the Bajío Region
        </h2>
      </div>

      {/* 3D Path graphic - adjusted size and position */}
      <div
        style={{
          position: "absolute",
          top: "170px",
          right: "50px",
          width: "340px",
          height: "340px",
          zIndex: 2,
          perspective: "800px",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            transformStyle: "preserve-3d",
            transform: "rotateX(60deg) rotateZ(-30deg)",
          }}
        >
          {/* Path base */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "280px",
              height: "280px",
              background:
                "radial-gradient(circle, rgba(15, 23, 42, 0.5) 0%, rgba(15, 23, 42, 0.2) 70%, rgba(15, 23, 42, 0) 100%)",
              borderRadius: "50%",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
            }}
          ></div>

          {/* Path circles */}
          {[
            {
              top: "20%",
              left: "30%",
              size: 40,
              color: "#10b981",
              delay: 0,
              text: "Start",
            },
            { top: "40%", left: "60%", size: 35, color: "#0ea5e9", delay: 0.1 },
            { top: "60%", left: "40%", size: 35, color: "#8b5cf6", delay: 0.2 },
            {
              top: "80%",
              left: "70%",
              size: 50,
              color: "#f43f5e",
              delay: 0.3,
              text: "Success",
            },
          ].map((circle, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                top: circle.top,
                left: circle.left,
                width: `${circle.size}px`,
                height: `${circle.size}px`,
                borderRadius: "50%",
                background: `radial-gradient(circle, ${circle.color}66 0%, ${circle.color}33 70%, ${circle.color}11 100%)`,
                boxShadow: `0 0 20px ${circle.color}33, 0 10px 30px rgba(0, 0, 0, 0.2)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                animation: `float 3s ease-in-out ${circle.delay}s infinite alternate`,
                zIndex: 5,
              }}
            >
              {circle.text && (
                <span
                  style={{
                    color: "#f8fafc",
                    fontSize: "14px",
                    fontWeight: "700",
                    transform:
                      "translateY(-5px) rotateX(-60deg) rotateZ(30deg)",
                    textShadow: "0 1px 3px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  {circle.text}
                </span>
              )}
            </div>
          ))}

          {/* Connecting lines */}
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
            <line
              x1="30%"
              y1="20%"
              x2="60%"
              y2="40%"
              stroke="#10b981"
              strokeWidth="2"
              strokeDasharray="5,3"
              opacity="0.6"
            />
            <line
              x1="60%"
              y1="40%"
              x2="40%"
              y2="60%"
              stroke="#0ea5e9"
              strokeWidth="2"
              strokeDasharray="5,3"
              opacity="0.6"
            />
            <line
              x1="40%"
              y1="60%"
              x2="70%"
              y2="80%"
              stroke="#8b5cf6"
              strokeWidth="2"
              strokeDasharray="5,3"
              opacity="0.6"
            />
          </svg>
        </div>
      </div>

      {/* Action items with interactive design - reduced height and spacing */}
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
            fontSize: "22px",
            fontWeight: "700",
            color: "#f8fafc",
            margin: "0 0 20px 0",
            textShadow: "0 2px 4px rgba(0,0,0,0.2)",
          }}
        >
          Immediate actions you can take:
        </h3>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          {[
            {
              icon: "👥",
              text: "Join developer communities (Codetitlan, local meetups)",
              color: "#10b981",
              delay: 0,
            },
            {
              icon: "🎓",
              text: "Participate in AI-focused education",
              color: "#0ea5e9",
              delay: 0.1,
            },
            {
              icon: "🌱",
              text: "Engage with local AI projects (agriculture, health)",
              color: "#8b5cf6",
              delay: 0.2,
            },
            {
              icon: "🔊",
              text: "Advocate for responsible policies",
              color: "#f43f5e",
              delay: 0.3,
            },
          ].map((action, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                padding: "14px 18px 14px 70px",
                background: "rgba(15, 23, 42, 0.6)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                borderRadius: "12px",
                border: `1px solid ${action.color}33`,
                boxShadow: `0 10px 25px rgba(0, 0, 0, 0.15), 0 0 15px ${action.color}22`,
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
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: `linear-gradient(135deg, ${action.color}33 0%, ${action.color}11 100%)`,
                  border: `1px solid ${action.color}44`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "22px",
                  boxShadow: `0 5px 15px ${action.color}22`,
                }}
              >
                {action.icon}
              </div>
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#f8fafc",
                  lineHeight: 1.4,
                }}
              >
                {action.text}
              </div>

              {/* Action button hint */}
              <div
                style={{
                  position: "absolute",
                  right: "15px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  background: action.color,
                  opacity: 0.2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: `0 0 10px ${action.color}44`,
                }}
              >
                <span
                  style={{
                    fontSize: "12px",
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

      {/* Final quote - moved up to prevent overlap */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50px",
          right: "50px",
          background: "rgba(15, 23, 42, 0.85)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderRadius: "16px",
          padding: "20px 25px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
          zIndex: 10,
        }}
      >
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.6,
            color: "#f1f5f9",
            margin: 0,
            fontStyle: "italic",
            textAlign: "center",
            textShadow: "0 1px 3px rgba(0, 0, 0, 0.3)",
          }}
        >
          "If you're in Bajío and passionate about AI, opportunities exist
          <span style={{ color: "#34d399", fontWeight: "600" }}>
            {" "}
            right now{" "}
          </span>
          to get involved, build your
          <span style={{ color: "#38bdf8", fontWeight: "600" }}> skills</span>,
          and influence how technology
          <span style={{ color: "#fb7185", fontWeight: "600" }}> impacts </span>
          our community."
        </p>
      </div>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap");

        @keyframes float {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-10px);
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
