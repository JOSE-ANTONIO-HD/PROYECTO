import React, {useState, useEffect} from 'react'
import Axios from '../services/Axios';
import {useNavigate} from "react-router-dom"

function Tabla() {
    const [listaDatos,setListaDatos] = useState([]);

    const navigate=useNavigate();

    const buscarDatos=async()=>{
        const buscar= await Axios.get("/datos/buscar");
        setListaDatos(buscar.data);
        //console.log(buscar);
    }

    const Delete=async(id)=>{
      const eliminar=await Axios.delete(`/datos/delete/${id}`)
      .then(()=> alert("Datos eliminados"));
      buscarDatos();
    }

    

    useEffect(() => {
     buscarDatos();
    
    }, [])
    
  return (
    <div>
         <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">producto</th>
      <th scope="col">Tipo</th>
      <th scope="col">cantidad</th>
      <th scope="col">fecha</th>
      <th scope="col">Modificar</th>
      <th scope="col">Eliminar</th>
    </tr>
  </thead>
     {
        listaDatos.map((datos,index)=>{
            return(
                
               
  <tbody>
    <tr>
      <th scope="row">{index+1}</th>
      <td>{datos.nombre}</td>
      <td>{datos.telefono}</td>
      <td>{datos.direccion}</td>
      <td><button type="button" class="btn btn-info" onClick={()=> navigate(`/datos/${datos._id}`)}>Modificar</button></td>
      <td><button type="button" class="btn btn-danger" onClick={()=>Delete(datos._id)}>Eliminar</button></td>
    </tr>
 
 
  </tbody>

                
            )
        })
     }
     </table>
    </div>
  )
}

export default Tabla