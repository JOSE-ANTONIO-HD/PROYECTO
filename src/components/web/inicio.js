import React, { useState, useEffect } from 'react';
import Axios from '../../services/Axios';
import { Modal } from 'react-bootstrap'; // Importa el componente Modal de Bootstrap
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importa FontAwesomeIcon desde la biblioteca Font Awesome
import { faBox } from '@fortawesome/free-solid-svg-icons'; // Importa el icono faBox de la biblioteca Font Awesome

function Tarjeta() {
    const [totalCantidad, setTotalCantidad] = useState(0); // Estado para almacenar la suma de cantidades
    const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad de la ventana emergente
    const [productosMenor25, setProductosMenor25] = useState([]); // Estado para almacenar los productos con cantidad menor a 25

    const buscarDatos = async () => {
        const buscar = await Axios.get("/datos/buscar");
        const total = buscar.data.reduce((acc, curr) => acc + curr.cantidad, 0);
        setTotalCantidad(total);

        // Filtra los productos con cantidad menor a 25 y almacena sus nombres
        const productosMenor = buscar.data.filter(item => item.cantidad < 25);
        const nombresProductosMenor = productosMenor.map(item => item.producto);
        setProductosMenor25(nombresProductosMenor);
    }

    useEffect(() => {
        buscarDatos();
    }, [])

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    // Función para determinar la clase de color basada en el valor de totalCantidad
    const getColorClass = () => {
        if (totalCantidad > 50) {
            return "bg-success";
        } else if (totalCantidad > 25) {
            return "bg-warning";
        } else {
            return "bg-danger";
        }
    }

    return (
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

            <div className={`card ${getColorClass()}`} style={{ width: '18rem' }}>
                <div className="card-body">
                    <h5 className="card-title"><FontAwesomeIcon icon={faBox} /> PRODUCTO</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Total Cantidad: {totalCantidad}</h6>
                    {/* Puedes agregar más contenido aquí si es necesario */}
                </div>
            </div>

            {/* Mostrar los productos con cantidad menor a 25 */}
            {productosMenor25.length > 0 && (
                <div className="mt-3">
                    <p className="text-danger">Productos con cantidad menor a 25:</p>
                    <ul>
                        {productosMenor25.map((producto, index) => (
                            <li key={index} style={{ fontSize: '18px', color: 'red' }}>{producto}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Tarjeta;
