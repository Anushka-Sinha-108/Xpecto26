import React from "react";

export default function LoadingScreen() {
  return (
    <div
      className="loading-overlay"
      role="status"
      aria-live="polite"
      style={{
        backgroundColor: "black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {/* Space Loader */}
      <div style={{ position: "relative", width: "200px", height: "200px" }}>
        {/* Central Planet/Sun */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            background: "radial-gradient(circle at 30% 30%, #ffd700, #ff8c00)",
            boxShadow: "0 0 30px rgba(255, 215, 0, 0.6)",
          }}
        />

        {/* Orbiting Planets */}
        {[0, 120, 240].map((rotation, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "100%",
              height: "100%",
              transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
              animation: `orbit 3s linear infinite`,
              animationDelay: `${index * -1}s`,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0",
                left: "50%",
                transform: "translateX(-50%)",
                width: "16px",
                height: "16px",
                borderRadius: "50%",
                backgroundColor: ["#4da6ff", "#ff6b9d", "#a6ff4d"][index],
                boxShadow: `0 0 15px ${["#4da6ff", "#ff6b9d", "#a6ff4d"][index]}`,
              }}
            />
          </div>
        ))}
      </div>

      <div
        className="loading-text"
        style={{
          color: "white",
          fontSize: "18px",
          fontWeight: "bold",
          marginTop: "40px",
          animation: "pulse 2s ease-in-out infinite",
        }}
      >
        Loading...
      </div>

      <style>{`
        @keyframes orbit {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
}