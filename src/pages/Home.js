import React, { useState, useEffect } from "react";
import Axios from "../services/Axios";

export default function Home() {
  const [datos, setDatos] = useState([]);

  const buscarInformacion = async () => {
    const buscar = await Axios.get("/datos/buscar");
    setDatos(buscar.data);
   // console.log(buscar.data);
  };

  useEffect(() => {
    buscarInformacion();
  }, []);

  return (
    <div>
      <div class="row row-cols-1 row-cols-md-4 g-4 p-4">
        {datos.map((datos) => {
          return (
            
            <div class="col">
              <div class="card">
                <img
                  src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">{datos.nombre}</h5>
                  <p class="card-text">{datos.direccion}</p>
                  <p class="card-text">
                    <small class="text-body-secondary">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
            
            
          );
        })}
      </div>
    </div>
  );
}
