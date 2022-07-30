/**
 * Ejemplo de uso ciclo de vida del metodo en componente clase y el hook de ciclo de vida en componente funcional
 */

import React, { Component, useEffect } from 'react';

export class DidMount extends Component {

    componentDidMount() {
        //Todo lo que sea proceso asincrono previo se hace en el didmount
        console.log("Comportamiento antes de que el componente sea añadido al DOM (renderice)");
    }

    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        );
    }
}



export const DidMountHook = () => {

    useEffect(() => {
      console.log("Comportamiento antes de que el componente sea añadido al DOM (renderice)")
    
      
    }, [])
    

    return (
        <div>
            <h1>DidMount</h1>
        </div>
    );
};


DidMount.propTypes = {

};


export default DidMount;
