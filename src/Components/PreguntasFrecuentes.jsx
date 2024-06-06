import React, { useState, useRef, useEffect } from "react";
import "../Styles/PreguntasFrecuentes.css";

export default function PreguntasFrecuentes({ pregunta, respuesta }) {
  const [mostrarRespuesta, setMostrarRespuesta] = useState(false);
  const contentRef = useRef(null);

  const handleMostrarRespuesta = () => {
    setMostrarRespuesta(!mostrarRespuesta);
  };

  useEffect(() => {
    if (mostrarRespuesta) {
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
    } else {
      contentRef.current.style.maxHeight = "0px";
    }
  }, [mostrarRespuesta]);

  return (
    <>
      <section onClick={handleMostrarRespuesta} className="pregunta">
        <p>{pregunta}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path fill="transparent" d="M0 0h24v24H0z" />
          <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v12M6 12h12"
          />
        </svg>
      </section>
      <div ref={contentRef} className="respuesta-container">
        <p className="respuesta">{respuesta}</p>
      </div>
    </>
  );
}
