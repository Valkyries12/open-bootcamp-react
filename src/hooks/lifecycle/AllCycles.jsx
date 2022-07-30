import React, { useEffect } from 'react'

export default function AllCycles() {
//se recomienda tener uno dentro de cada componente
    useEffect(() => {
        //cada vez qe se actualiza se pinta
      console.log("Componente creado");

      const intervalID = setInterval(() => {
        document.title = `${new Date()}`;
        console.log("actualizacion del componente")
      }, 1000)
    
      return () => {
        console.log("Componente va a desaparecer");
        document.title = "El tiempo se ha detenido";

        clearInterval(intervalID);
      }
    }, [])
    

  return (
    <div>

    </div>
  )
}
