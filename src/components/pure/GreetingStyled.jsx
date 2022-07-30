import React, { useState } from 'react';

// definiendo estilos en constantes

// Estilos para usuario logeado
const loggedStyle = {
    color: "white"
};


// estilo para usuario no logeado
const unloggedStyle = {
    color: "tomato",
    fontWeight: "bold",
} 

const GreetingStyled = (props) => {

    // generamos un estado para el componente
    //y controlar si el usuario esta o no logueado
    const [logged, setLogged] = useState(false);

    return (
        <div style={ logged ? loggedStyle : unloggedStyle }>
        { logged ?
            ( <p>Hola,  {props.name} </p> )
          : 
            ( <p>Please login</p> ) }
            
            <button onClick={() => {
                console.log("boton usado");
                setLogged(!logged);
            }}>
                { logged ? "Logout" : "Login" }
            </button>
        </div>
    );
};





export default GreetingStyled;
