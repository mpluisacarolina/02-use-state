import React, { useState }  from 'react';

export const MiPrimerEstado = () => {

  const [ nombre, setNombre ] = useState("Luisa Carolina");

  const cambiarNombre = (e, nombreFijo) => {
    setNombre(nombreFijo);
    console.log(e.target)
  }

  return (
    <div>
        <h3> Componente: Mi Primer Estado </h3>
        <strong className= "label">
          {nombre}
        </strong>
        &nbsp; {/*deja un espacio entre el label y el botón*/}
        <button onClick = { e => cambiarNombre (e, "Luisa") }> Cambiar </button>
        &nbsp;
        <input type = "text" onChange = {e => cambiarNombre (e,  e.target.value)} placeholder = "Cambia el nombre" />
    </div>
  )
}
