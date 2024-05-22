import React, { useState, useEffect } from "react";
import Axios from "../../services/Axios";
import { Link, useNavigate } from "react-router-dom";
import "./styles.css";


export default function Agregar_P() {
  const valores = {
    nombre: "",
    correo: "",
    telefono: "",
  };

  const [Tabla_p, setTabla_p] = useState(valores);
  const navigate = useNavigate();

  const onChange = (e) => {
    const { name, value } = e.target;
    setTabla_p({ ...Tabla_p, [name]: value });
  };

  const guardarTabla_p = () => {
    Axios.post("/proveedor/saveData", Tabla_p)
      .then(() => {
        console.log("Datos guardados correctamente");
        navigate("/Tabla_p"); // Redirige de vuelta a la tabla después de guardar
      })
      .catch((error) => {
        console.error("Error al guardar datos:", error);
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    guardarTabla_p();
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
              value={Tabla_p.nombre}
              onChange={onChange}
              placeholder="NOMBRE DEL PROVEEDOR"
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-12">
            <input
              type="TEXT"
              name="correo"
              className="form-control"
              placeholder="correo"
              value={Tabla_p.correo}
              onChange={onChange}
              required
            />
          </div>
          <div className="col-md-12">
            <input
              type="number"
              name="telefono"
              className="form-control"
              placeholder="telefono"
              value={Tabla_p.telefono}
              onChange={onChange}
              required
            />
          </div>

          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button className="btn btn-primary me-md-2" type="submit">
              Enviar
            </button>
            <Link to="/Tabla_p" className="btn btn-secondary">Regresar</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
