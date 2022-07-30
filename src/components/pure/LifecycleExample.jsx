/**
 * Eejemplo de componente de tipo clase que dispone de los metodos de ciclo de vida
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LifecycleExample extends Component {
    constructor(props) {
        super(props);
        console.log("CONSTRUCTOR Cuando se instancia el componente");
    }

    componentWillMount() {
        console.log("WILLMOUNT Antes del montaje del componente");

    }

    componentDidMount() {
        console.log("DIDMOUNT Justo al del montaje dle componente antes de renderizrlo (peticion de datos ,etc)");
    }

    componentWillReceiveProps(nextProps) {
        console.log("WILLRECEIVEPROPS Si va  recibir nuevas props");
    }

    shouldComponentUpdate(nextProps, nextState) {
        /**
         * Controla si es componente debe o no actualizarse
         * 
         * return true o false
         */
        
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("WILLUPDATE Justo aantes de actualizarse");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("DIDUPDATE justo despues de actualizarse");
    }

    componentWillUnmount() {
        console.log("WILLUNMOUNT Justo antes de desaparecer");
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

LifecycleExample.propTypes = {

};

export default LifecycleExample;