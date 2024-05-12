import React from "react";

function Datos(props) {
  //console.log(props);
  const { nombre, telefono, direccion, imagenes } = props;

  const Mensaje=()=>{
    alert('Hola a todos')
  }
  return (
    <>
      
        <div class="col">
          <div class="card h-100">
            <img src={imagenes} 
            class="card-img-top" alt="..." 
            width={80}
            height={200}
            />
            <div class="card-body">
              <h5 class="card-title">{nombre}</h5>
              <p class="card-text">
               Telefono: {telefono}
              </p>
              <p class="card-text">
              direccion:{direccion}
              </p>
            </div>
            <div class="card-footer">
              <small class="text-body-secondary"><button type="button"
               class="btn btn-info"
               onClick={Mensaje}
               >
                
                Seguir...</button></small>
            </div>
          </div>
        </div>
     
    </>
  );
}

export default Datos;
