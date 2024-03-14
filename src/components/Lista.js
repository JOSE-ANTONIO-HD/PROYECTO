import React, {useState} from 'react';
import Datos from './Datos';
import {lista} from "../datos/ListDatos";

import './lista.css';

export default function Lista() {
   
    const [datos, setDatos]=useState(lista)
  return (
   
       <div className='row row-cols-3 row-cols-md-6 g-4 p-4'>
        {
            datos.map(
                (persona)=>
                <Datos
                key={persona.id}
                 nombre={persona.nombre} 
                telefono={persona.tel} 
                direccion={persona.direccion}
                imagenes={persona.imag}
                />)
        }
        </div>
   
  )
}
