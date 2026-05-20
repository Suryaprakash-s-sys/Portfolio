import "./Cursor.css";
import { useEffect } from "react";

function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const ring = document.getElementById("cursor-ring");

    if (!cursor || !ring) return;

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;

      ring.style.left = `${e.clientX}px`;
      ring.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div id="cursor"></div>
      <div id="cursor-ring"></div>
    </>
  );
}

export default Cursor;
