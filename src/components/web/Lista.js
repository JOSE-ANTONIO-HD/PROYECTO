import React, { useState, useEffect } from 'react';
import Axios from '../../services/Axios';
import { useNavigate } from "react-router-dom";
import { Modal } from 'react-bootstrap'; // Importa el componente Modal de Bootstrap

function Tabla() {
    const [listaDatos, setListaDatos] = useState([]);
    const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad de la ventana emergente
    const navigate = useNavigate();

    const buscarDatos = async () => {
        const buscar = await Axios.get("/datos/buscar");
        setListaDatos(buscar.data);
    }

    const Delete = async (id) => {
        await Axios.delete(`/datos/delete/${id}`)
            .then(() => {
                openModal(); // Abre la ventana emergente al eliminar los datos
            });
        buscarDatos();
    }

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    useEffect(() => {
        buscarDatos();
    }, [])

    // Función para navegar a la página de agregar datos
    const navigateToAddData = () => {
        navigate("/datos/agregar"); // Asegúrate de ajustar la ruta según tu configuración
    }

    return (
        <div style={{ paddingRight: '12px' }}>
          <div>
            {/* Agrega el Modal */}
            <Modal show={showModal} onHide={closeModal}>
              <Modal.Header closeButton>
                <Modal.Title>Datos eliminados</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Los datos han sido eliminados exitosamente.
              </Modal.Body>
              <Modal.Footer>
                <button className="btn btn-secondary" onClick={closeModal}>Cerrar</button>
              </Modal.Footer>
            </Modal>
      
            <div className="mb-3">
              <button className="btn btn-primary" onClick={navigateToAddData}>Agregar</button>
            </div>
      
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">PRODUCTO</th>
                  <th scope="col">CANTIDAD</th>
                  <th scope="col">PRECIO UNITARIO</th>
                  <th scope="col">VALOR TOTAL</th>
                  <th scope="col">PROVEEDOR</th>
                  <th scope="col">fecha</th>
                  <th scope="col">Modificar</th>
                  <th scope="col">Eliminar</th>
                </tr>
              </thead>
              <tbody>
                {listaDatos.map((datos, index) => (
                  <tr key={datos._id}>
                    <th scope="row">{index + 1}</th>
                    <td>{datos.producto}</td>
                    <td>{datos.cantidad}</td>
                    <td>{datos.precio_unitario}</td>
                    <td>{datos.cantidad * datos.precio_unitario}</td> {/* Calcular valor total */}
                    <td>{datos.nombre}</td> {/* Corregí la etiqueta tp a td */}
                    <td>{new Date().toLocaleDateString()}</td>
                    <td>
                      <button type="button" className="btn btn-info" onClick={() => navigate(`/datos/${datos._id}`)}>Modificar</button>
                    </td>
                    <td>
                      <button type="button" className="btn btn-danger" onClick={() => Delete(datos._id)}>Eliminar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
}

export default Tabla;
