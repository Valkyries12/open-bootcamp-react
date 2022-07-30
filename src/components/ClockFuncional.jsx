import React, { useState, useEffect } from "react";

const ClockFuncional = () => {
  const initialPersona = {
    fecha: new Date(),
    edad: 0,
    nombre: "Nicolás",
    apellido: "Caruso",
  };

  const [persona, setPersona] = useState(initialPersona);

  

  useEffect(() => {
    const tick = setInterval(() => {
        setPersona({
          ...persona,
          edad: persona.edad + 1,
          fecha: new Date(),
        });
      }, 1000);

    return () => {
      clearInterval(tick);
    };
  }, [persona.edad]);

  return (
    <div>
      <h2>Hora actual: {persona.fecha.toLocaleTimeString()}</h2>
      <h3>
        {persona.nombre} {persona.apellido}
      </h3>
      <h1>Edad: {persona.edad}</h1>
    </div>
  );
};

export default ClockFuncional;
