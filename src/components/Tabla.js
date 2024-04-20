import React, { useState, useEffect } from 'react';
import Axios from '../services/Axios';
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
        const eliminar = await Axios.delete(`/datos/delete/${id}`)
            .then(() => {
                alert("Datos eliminados");
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

    return (
        <div>
            {/* Agrega el Modal */}
            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Ventana emergente</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Contenido de la ventana emergente
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-secondary" onClick={closeModal}>Cerrar</button>
                </Modal.Footer>
            </Modal>

            <table className="table">
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
                <tbody>
                    {listaDatos.map((datos, index) => (
                        <tr key={datos._id}>
                            <th scope="row">{index + 1}</th>
                            <td>{datos.nombre}</td>
                            <td>{datos.telefono}</td>
                            <td>{datos.direccion}</td>
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
    );
}

export default Tabla;
