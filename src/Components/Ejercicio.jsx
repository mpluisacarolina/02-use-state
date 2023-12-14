import React, { useState } from 'react';
import PropTypes from "prop-types";

export const Ejercicio = ({yearActual}) => {

 const [yearNow, setYearNow] = useState(yearActual);

 const siguiente = e => {
    setYearNow(yearNow + 1)
 }

 const anterior = e => {
    setYearNow(yearNow - 1)
 }

 const cambiarYear = e => {
    let dato = parseInt(e.target.value);
    if (Number.isInteger(dato)){
        setYearNow(dato);
    }else {
        setYearNow(yearActual);
        alert ("Debes introducir un año");
        }
    }

return (
    <div>
        <strong className = "label label-green" >
            {yearNow}
        </strong>
        <p>
            <button onClick = { siguiente } > Año Siguiente </button>
            &nbsp;
            <button onClick = { anterior } > Año Anterior </button>
        </p>
        <p> Cambiar Año: 
            <input 
                onChange = { cambiarYear }
                type = "text"
                placeholder = "Cambia el año" />
        </p>
    </div>
  )
}
Ejercicio.propTypes = {
    yearActual: PropTypes.number.isRequired
}
