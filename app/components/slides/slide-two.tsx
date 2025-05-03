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
      {/* Background geometric shapes */}
      <div
        style={{
          position: "absolute",
          top: "-80px",
          right: "-100px",
          width: "500px",
          height: "500px",
          background:
            "linear-gradient(135deg, rgba(124, 58, 237, 0.03) 0%, rgba(139, 92, 246, 0.06) 50%, rgba(196, 181, 253, 0.03) 100%)",
          borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
          transform: "rotate(15deg)",
          zIndex: 1,
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          bottom: "-50px",
          left: "-80px",
          width: "400px",
          height: "400px",
          background:
            "linear-gradient(135deg, rgba(59, 130, 246, 0.03) 0%, rgba(37, 99, 235, 0.06) 50%, rgba(96, 165, 250, 0.03) 100%)",
          borderRadius: "63% 37% 54% 46% / 55% 48% 52% 45%",
          transform: "rotate(-10deg)",
          zIndex: 1,
        }}
      ></div>

      {/* Title with decorative line */}
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
            fontSize: "48px",
            fontWeight: "800",
            margin: 0,
            padding: 0,
            color: "#f8fafc",
            position: "relative",
            display: "inline-block",
          }}
        >
          AI and the
          <span
            style={{
              display: "block",
              background:
                "linear-gradient(to right, #06b6d4, #0ea5e9, #3b82f6)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Redefinition of Value
          </span>
        </h1>
        <div
          style={{
            width: "180px",
            height: "4px",
            background: "linear-gradient(to right, #06b6d4, #0ea5e9, #3b82f6)",
            marginTop: "10px",
            borderRadius: "2px",
          }}
        ></div>
      </div>

      {/* AI replicated skills section */}
      <div
        style={{
          position: "absolute",
          top: "170px",
          left: "80px",
          background: "rgba(30, 41, 59, 0.7)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          borderRadius: "16px",
          padding: "20px 25px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
          minWidth: "300px",
          zIndex: 5,
          transform: "perspective(1000px) rotateY(-5deg)",
        }}
      >
        <h3
          style={{
            fontSize: "18px",
            fontWeight: "600",
            color: "#cbd5e1",
            margin: "0 0 15px 0",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            paddingBottom: "8px",
          }}
        >
          Traditional human skills replicated by AI:
        </h3>

        {["Classification", "Prediction", "Analysis"].map((skill, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              margin: "12px 0",
              animation: `slideIn 0.4s ease-out ${index * 0.1}s both`,
            }}
          >
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "2px",
                background: `hsl(${200 + index * 30}, 100%, 65%)`,
                marginRight: "12px",
                transform: "rotate(45deg)",
              }}
            ></div>
            <span
              style={{
                color: "#e2e8f0",
                fontSize: "17px",
                fontWeight: "500",
              }}
            >
              {skill}
            </span>
          </div>
        ))}
      </div>

      {/* Floating quote card */}
      <div
        style={{
          position: "absolute",
          top: "180px",
          right: "70px",
          background: "rgba(6, 182, 212, 0.12)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          borderRadius: "12px",
          padding: "18px",
          border: "1px solid rgba(6, 182, 212, 0.3)",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
          maxWidth: "320px",
          zIndex: 4,
          transform: "rotate(2deg)",
          animation: "float 4s ease-in-out infinite alternate",
        }}
      >
        <p
          style={{
            fontStyle: "italic",
            fontSize: "18px",
            lineHeight: 1.5,
            color: "#06b6d4",
            margin: 0,
            fontWeight: "500",
            textShadow: "0 0 10px rgba(6, 182, 212, 0.2)",
          }}
        >
          "AI challenges the traditional paradigm of value generation."
        </p>
      </div>

      {/* Question card */}
      <div
        style={{
          position: "absolute",
          top: "340px",
          right: "120px",
          background: "rgba(30, 41, 59, 0.6)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          borderRadius: "16px",
          padding: "20px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
          maxWidth: "350px",
          zIndex: 6,
          transform: "perspective(1000px) rotateY(5deg)",
        }}
      >
        <div
          style={{
            fontSize: "26px",
            color: "#94a3b8",
            marginBottom: "10px",
          }}
        >
          ❓
        </div>
        <p
          style={{
            fontSize: "18px",
            lineHeight: 1.5,
            color: "#e2e8f0",
            margin: 0,
            fontWeight: "600",
          }}
        >
          If AI takes over routine cognitive tasks, where does that leave us?
        </p>
      </div>

      {/* Final quote/monologue */}
      <div
        style={{
          position: "absolute",
          bottom: "50px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
          background: "rgba(15, 23, 42, 0.75)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderRadius: "16px",
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
          }}
        >
          "The true revolution is in how AI is reshaping the concept of
          <span
            style={{
              fontWeight: "600",
              color: "#38bdf8",
              textShadow: "0 0 8px rgba(56, 189, 248, 0.3)",
            }}
          >
            {" "}
            'value'{" "}
          </span>
          itself. Jobs once secure because they required intelligence alone are
          now open to
          <span
            style={{
              fontWeight: "600",
              color: "#fb7185",
              textShadow: "0 0 8px rgba(251, 113, 133, 0.3)",
            }}
          >
            {" "}
            automation
          </span>
          , forcing us to rethink our roles in society."
        </p>
      </div>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap");

        @keyframes float {
          0% {
            transform: translateY(0) rotate(2deg);
          }
          100% {
            transform: translateY(-10px) rotate(2deg);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default SlideTwo;
