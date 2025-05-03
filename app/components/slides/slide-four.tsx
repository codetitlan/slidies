import React from "react";

const SlideFour = () => {
  return (
    <div
      style={{
        width: "900px",
        height: "700px",
        position: "relative",
        background: "transparent",
        overflow: "visible",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Map-like background element */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "600px",
          opacity: 0.06,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='800' height='600' viewBox='0 0 800 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M150,50 Q250,150 350,100 T550,150 Q650,50 750,150 T650,300 Q550,400 650,500 T450,550 Q350,500 250,550 T50,450 Q150,350 50,250 T150,50 Z' fill='none' stroke='%2310b981' stroke-width='2'/%3E%3Cpath d='M250,100 Q350,200 450,150 T650,200 Q750,100 700,300 T550,400 Q450,500 350,450 T150,500 Q50,400 100,300 T250,100 Z' fill='none' stroke='%233b82f6' stroke-width='2'/%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          zIndex: 1,
        }}
      ></div>

      {/* City pin marker at Querétaro */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "52%",
          zIndex: 2,
          animation: "pulse 2s infinite",
        }}
      >
        <div
          style={{
            width: "16px",
            height: "16px",
            borderRadius: "50%",
            background: "#f43f5e",
            boxShadow: "0 0 0 rgba(244, 63, 94, 0.4)",
          }}
        ></div>
        <div
          style={{
            width: "2px",
            height: "10px",
            background: "#f43f5e",
            margin: "-2px auto 0",
          }}
        ></div>
      </div>

      {/* Title with region highlighting */}
      <div
        style={{
          position: "absolute",
          top: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            fontWeight: "800",
            color: "#f8fafc",
            margin: 0,
            lineHeight: 1.2,
          }}
        >
          AI in My Region
          <div
            style={{
              display: "inline-block",
              position: "relative",
              marginLeft: "15px",
            }}
          >
            <span
              style={{
                background: "linear-gradient(135deg, #0ea5e9 0%, #10b981 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                fontWeight: "900",
              }}
            >
              Querétaro & Bajío
            </span>
            <div
              style={{
                position: "absolute",
                bottom: "-5px",
                left: "0",
                width: "100%",
                height: "3px",
                background: "linear-gradient(135deg, #0ea5e9 0%, #10b981 100%)",
                borderRadius: "2px",
              }}
            ></div>
          </div>
        </h1>
      </div>

      {/* Local examples in hexagon containers */}
      <div
        style={{
          position: "absolute",
          top: "130px",
          left: "50px",
          zIndex: 5,
        }}
      >
        <h3
          style={{
            fontSize: "20px",
            fontWeight: "600",
            color: "#e2e8f0",
            margin: "0 0 20px 0",
            textShadow: "0 2px 4px rgba(0,0,0,0.2)",
          }}
        >
          Practical local examples:
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
              text: "Air pollution predictive models",
              icon: "🌫️",
              color: "#0ea5e9",
              rotation: "-2deg",
            },
            {
              text: "Smart agriculture applications",
              icon: "🌱",
              color: "#10b981",
              rotation: "1deg",
            },
            {
              text: "Health and education case studies",
              icon: "🏥",
              color: "#8b5cf6",
              rotation: "-1deg",
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                padding: "16px 18px 16px 70px",
                background: "rgba(30, 41, 59, 0.75)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                borderRadius: "12px",
                border: `1px solid rgba(255, 255, 255, 0.1)`,
                boxShadow: `0 10px 20px rgba(0, 0, 0, 0.15), 0 0 15px ${item.color}33`,
                maxWidth: "350px",
                transform: `rotate(${item.rotation})`,
                animation: `slideIn 0.4s ease-out ${index * 0.1}s both`,
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
                  borderRadius: "12px",
                  background: `linear-gradient(135deg, ${item.color}33 0%, ${item.color}11 100%)`,
                  border: `1px solid ${item.color}33`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "22px",
                }}
              >
                {item.icon}
              </div>
              <div
                style={{
                  fontSize: "17px",
                  fontWeight: "500",
                  color: "#e2e8f0",
                  lineHeight: 1.4,
                }}
              >
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Infographic placeholder with creative styling */}
      <div
        style={{
          position: "absolute",
          top: "170px",
          right: "40px",
          width: "380px",
          height: "300px",
          background: "rgba(15, 23, 42, 0.65)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderRadius: "16px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
          overflow: "hidden",
          zIndex: 6,
          transform: "perspective(1000px) rotateY(5deg)",
        }}
      >
        <div
          style={{
            width: "100%",
            padding: "15px 20px",
            background: "rgba(15, 23, 42, 0.9)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontSize: "15px",
              fontWeight: "600",
              color: "#e2e8f0",
            }}
          >
            Querétaro's AI Applications
          </span>
          <div
            style={{
              display: "flex",
              gap: "8px",
            }}
          >
            {["#0ea5e9", "#10b981", "#8b5cf6"].map((color, i) => (
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
            height: "calc(100% - 51px)",
            padding: "20px",
          }}
        >
          <div
            style={{
              fontSize: "24px",
              color: "#94a3b8",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "36px",
                marginBottom: "10px",
              }}
            >
              📊
            </div>
            Infographic placeholder
            <div
              style={{
                fontSize: "14px",
                color: "#64748b",
                marginTop: "10px",
              }}
            >
              Will be replaced with your custom image
            </div>
          </div>
        </div>
      </div>

      {/* Final quote */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "750px",
          background: "rgba(15, 23, 42, 0.7)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderRadius: "12px",
          padding: "20px 25px",
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
            textAlign: "center",
          }}
        >
          "AI is not just theoretical. In
          <span style={{ color: "#0ea5e9", fontWeight: "500" }}>
            {" "}
            Querétaro
          </span>
          , it's already predicting air quality, helping farmers optimize crops,
          and potentially improving health services. But this is
          <span style={{ color: "#10b981", fontWeight: "500" }}>
            {" "}
            just the beginning
          </span>
          ."
        </p>
      </div>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap");

        @keyframes pulse {
          0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(244, 63, 94, 0.4);
          }
          70% {
            transform: scale(1);
            box-shadow: 0 0 0 10px rgba(244, 63, 94, 0);
          }
          100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(244, 63, 94, 0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px) rotate(0deg);
          }
          to {
            opacity: 1;
            transform: translateX(0) rotate(0deg);
          }
        }
      `}</style>
    </div>
  );
};

export default SlideFour;
