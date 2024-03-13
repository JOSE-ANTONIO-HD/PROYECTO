import React, { useState } from "react";
import Axios from "../services/Axios";

export default function DatosPersonales() {
  const valores = {
    nombre: "",
    direccion: "",
    correo: "",
    estado: "",
    telefono: "",
  };

  const [datos, setDatos] = useState(valores);

  //Funcion para obtener los inputs
  const onChange = (e) => {
    const { name, value } = e.target;
    setDatos({ ...datos, [name]: value });
  };

  const GuardarDatos = () => {
    Axios.post("/datos/saveData", datos).then(() => {
      console.log("Datos enviados correctamente");
    });
  };

  //Funcion para el onsubmit

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(datos);
    GuardarDatos();
  };

  return (
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Datos Personales</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary"></h6>

        <form class="row g-3 needs-validation" onSubmit={onSubmit} novalidate>
          <div class="col-md-12">
            <input
              name="nombre"
              type="text"
              class="form-control"
              id="validationCustom01"
              value={datos.nombre}
              onChange={onChange}
              placeholder="Nombre completo"
              required
            />
            <div class="valid-feedback">Looks good!</div>
          </div>
          <div class="col-md-12">
            <input
              name="direccion"
              type="text"
              class="form-control"
              id="validationCustom02"
              value={datos.direccion}
              onChange={onChange}
              placeholder="Dirección"
              required
            />
            <div class="valid-feedback">Looks good!</div>
          </div>
          <div class="col-md-12">
            <div class="input-group has-validation">
              <span class="input-group-text" id="inputGroupPrepend">
                @
              </span>
              <input
                type="text"
                name="correo"
                class="form-control"
                id="validationCustomUsername"
                placeholder="Correo"
                value={datos.correo}
                onChange={onChange}
                aria-describedby="inputGroupPrepend"
                required
              />
              <div class="invalid-feedback">Please choose a username.</div>
            </div>
          </div>
          <div class="col-md-12">
            <input
              type="text"
              name="estado"
              class="form-control"
              id="validationCustom03"
              placeholder="Estado"
              value={datos.estado}
              onChange={onChange}
              required
            />
          </div>
          <div class="col-md-12">
            <input
              type="text"
              name="telefono"
              class="form-control"
              id="validationCustom03"
              placeholder="Telefono"
              value={datos.telefono}
              onChange={onChange}
              required
            />
          </div>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button class="btn btn-primary" type="submit">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
