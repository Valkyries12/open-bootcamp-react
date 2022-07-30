/**
 * Ejemplo de uso del metodo componente willUnmount para componente clase y ejemplo de uso del hook para componente funcional
 * (cuando el componente desaparece)
 */

import React, { Component, useEffect } from 'react';

export class WillUnmount extends Component {

    componentWillUnmount() {
        console.log("Comportamiento antes de que e componente desaparezca");
    }

    render() {
        return (
            <div>
                <h1>
                    WillUnmount
                </h1>
            </div>
        );
    }
}



export const WillUnmountHook = () => {

    useEffect(() => {
      //aqui no ponemos nada. Se hace cleanup en esta funcion
    
      return () => {
        console.log("Comportamiento antes de que e componente desaparezca");
      }
    }, [])
    

  return (
    <div>
        <h1>WillUnmount</h1>
    </div>
  )
}


