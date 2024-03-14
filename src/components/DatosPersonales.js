import React, { useState } from "react";
import Axios from "../services/Axios";
import "./styles.css"; // Importa tu archivo de estilos aquí

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
    <div className="card"> {/* Cambiado class por className */}
      <div className="card-body"> {/* Cambiado class por className */}
        <h5 className="card-title">Datos Personales</h5> {/* Cambiado class por className */}
        <h6 className="card-subtitle mb-2 text-body-secondary"></h6> {/* Cambiado class por className */}

        <form className="row g-3 needs-validation" onSubmit={onSubmit} noValidate> {/* Cambiado class por className */}
          <div className="col-md-12">
            <input
              name="nombre"
              type="text"
              className="form-control"
              id="validationCustom01"
              value={datos.nombre}
              onChange={onChange}
              placeholder="Nombre completo"
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-12">
            <input
              name="direccion"
              type="text"
              className="form-control"
              id="validationCustom02"
              value={datos.direccion}
              onChange={onChange}
              placeholder="Dirección"
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-12">
            <div className="input-group has-validation">
              <span className="input-group-text" id="inputGroupPrepend">
                @
              </span>
              <input
                type="text"
                name="correo"
                className="form-control"
                id="validationCustomUsername"
                placeholder="Correo"
                value={datos.correo}
                onChange={onChange}
                aria-describedby="inputGroupPrepend"
                required
              />
              <div className="invalid-feedback">Please choose a username.</div>
            </div>
          </div>
          <div className="col-md-12">
            <input
              type="text"
              name="estado"
              className="form-control"
              id="validationCustom03"
              placeholder="Estado"
              value={datos.estado}
              onChange={onChange}
              required
            />
          </div>
          <div className="col-md-12">
            <input
              type="text"
              name="telefono"
              className="form-control"
              id="validationCustom03"
              placeholder="Telefono"
              value={datos.telefono}
              onChange={onChange}
              required
            />
          </div>
          
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button className="btn btn-primary" type="submit">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
