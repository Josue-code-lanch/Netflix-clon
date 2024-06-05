import React, { useState } from "react";
import "../Styles/PreguntasFrecuentes.css";

export default function PreguntasFrecuentes({ pregunta, respuesta }) {
  const [mostrarRespuesta, setMostrarRespuesta] = useState(false);

  const handleMostrarRespuesta = () => {
    setMostrarRespuesta(!mostrarRespuesta);
  };

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
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6v12M6 12h12"
          />
        </svg>
      </section>
      {mostrarRespuesta && <p className="respons">{respuesta}</p>}
    </>
  );
}
