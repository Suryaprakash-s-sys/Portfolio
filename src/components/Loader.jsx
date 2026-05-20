import "./Loader.css";
import { useEffect, useMemo, useRef, useState } from "react";

function Loader() {
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [displayText, setDisplayText] = useState("");

  const intervalRef = useRef(null);

  const finalText = "INITIALISING PORTFOLIO...";
  const chars = "!@#$%&*ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  /* =========================
     Loader Lifecycle
  ========================= */
  useEffect(() => {
    const duration = 3200;

    const fadeTimer = setTimeout(() => {
      setDone(true);
    }, duration);

    const hideTimer = setTimeout(() => {
      setHidden(true);
    }, duration + 1000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  /* =========================
     Glitch Text Animation
  ========================= */
  useEffect(() => {
    let frame = 0;

    intervalRef.current = setInterval(() => {
      const progress = frame / finalText.length;

      const updated = finalText
        .split("")
        .map((char, index) => {
          if (char === " " || char === ".") return char;

          if (index < progress * finalText.length) {
            return finalText[index];
          }

          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      setDisplayText(updated);

      frame++;

      if (frame > finalText.length) {
        clearInterval(intervalRef.current);
        setDisplayText(finalText);
      }
    }, 55);

    return () => clearInterval(intervalRef.current);
  }, []);

  /* =========================
     Rain Particles
  ========================= */
  const rainDrops = useMemo(() => {
    return Array.from({ length: 90 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 0.5 + Math.random() * 0.7,
    }));
  }, []);

  if (hidden) return null;

  return (
    <div id="loader" className={done ? "done" : ""}>
      {/* Ambient Glow */}
      <div className="loader-orb"></div>

      {/* Rain */}
      <div className="rain">
        {rainDrops.map((drop) => (
          <div
            key={drop.id}
            className="drop"
            style={{
              left: `${drop.left}%`,
              animationDelay: `${drop.delay}s`,
              animationDuration: `${drop.duration}s`,
            }}
          >
            <div
              className="stem"
              style={{
                animationDelay: `${drop.delay}s`,
                animationDuration: `${drop.duration}s`,
              }}
            />

            <div
              className="splat"
              style={{
                animationDelay: `${drop.delay}s`,
                animationDuration: `${drop.duration}s`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="loader-content">
        <div className="loader-top-line"></div>

        <div className="loader-jp">SYSTEM BOOT</div>

        <div className="loader-text">{displayText}</div>

        <div className="loader-bar-wrap">
          <div
            className="loader-bar"
            style={{
              width: done ? "100%" : "0%",
              transition: "width 3.2s linear",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
