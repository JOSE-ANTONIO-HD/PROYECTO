import React, { useState, useEffect } from "react";
import Axios from "../services/Axios";
import { Link } from "react-router-dom";
import "./styles.css";

export default function DatosPersonales() {
  const valores = {
    nombre: "",
    direccion: "",
    correo: "",
    estado: "",
    telefono: "",
  };

  const [datos, setDatos] = useState(valores);
  const [datosTabla, setDatosTabla] = useState([]);

  // Obtener datos de la tabla cuando se monta el componente
  useEffect(() => {
    obtenerDatosTabla();
  }, []);

  // Función para obtener los datos de la tabla
  const obtenerDatosTabla = () => {
    // Aquí supones que tienes una función Axios para obtener los datos de la tabla
    Axios.get("/datos/getData").then((response) => {
      setDatosTabla(response.data);
    }).catch((error) => {
      console.error("Error al obtener datos de la tabla:", error);
    });
  };

  // Función para manejar el cambio en los inputs
  const onChange = (e) => {
    const { name, value } = e.target;
    setDatos({ ...datos, [name]: value });
  };

  // Función para guardar los datos
  const guardarDatos = () => {
    // Verificar si la información ya existe en la tabla
    const existe = datosTabla.some((item) => (
      item.nombre === datos.nombre && 
      item.direccion === datos.direccion &&
      item.telefono === datos.telefono
    ));

    if (existe) {
      // Si existe, sumar la cantidad a la entrada existente
      // Aquí asumimos que la cantidad a sumar está en la variable 'cantidad'
      Axios.put("/datos/sumarCantidad", datos).then(() => {
        console.log("Cantidad sumada correctamente");
        // Actualizar los datos de la tabla después de sumar la cantidad
        obtenerDatosTabla();
      }).catch((error) => {
        console.error("Error al sumar cantidad:", error);
      });
    } else {
      // Si no existe, agregar una nueva entrada
      Axios.post("/datos/saveData", datos).then(() => {
        console.log("Datos guardados correctamente");
        // Actualizar los datos de la tabla después de guardar
        obtenerDatosTabla();
      }).catch((error) => {
        console.error("Error al guardar datos:", error);
      });
    }
  };

  // Función para manejar el envío del formulario
  const onSubmit = (e) => {
    e.preventDefault();
    guardarDatos();
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">AGREGAR PRODUCTO</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary"></h6>

        <form className="row g-3 needs-validation" onSubmit={onSubmit} noValidate>
          <div className="col-md-12">
            <input
              name="nombre"
              type="text"
              className="form-control"
              id="validationCustom01"
              value={datos.nombre}
              onChange={onChange}
              placeholder="NOMBRE DEL PRODUCTO"
              required
            />
            <div className="valid-feedback">Looks good!</div>
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
          <div className="col-md-12">
            <input
              name="direccion"
              type="text"
              className="form-control"
              id="validationCustom02"
              value={datos.direccion}
              onChange={onChange}
              placeholder="DIRECCION"
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button className="btn btn-primary me-md-2" type="submit">
              Enviar
            </button>
            <Link to="/tabla" className="btn btn-secondary">Regresar</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
