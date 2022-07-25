import React from 'react';
import { Contacto } from "../../models/contacto.class.js";
import ComponenteB from './ComponenteB.jsx';

const ComponenteA = () => {

    const nuevoContacto = new Contacto("Nicolás", "Caruso", "asd@aol.com", true);

    return (
      <ComponenteB contacto={nuevoContacto}></ComponenteB>
    );
};



export default ComponenteA;
