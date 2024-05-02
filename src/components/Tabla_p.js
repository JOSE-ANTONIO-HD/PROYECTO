import React, { useState, useEffect } from 'react';
import Axios from '../services/Axios';
import { Link, useNavigate } from 'react-router-dom';
import { Modal } from 'react-bootstrap';

function Tabla_p() {
    const [ListaTabla_p, setListaTabla_p] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const buscarTabla_p = async () => {
        const buscar = await Axios.get("/proveedor/buscar");
        setListaTabla_p(buscar.data);
    }

    const Delete = async (id) => {
        await Axios.delete(`/proveedor/delete/${id}`)
            .then(() => {
                openModal();
            });
        buscarTabla_p();
    }

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const generarIDProveedor = () => {
        // Generar un número aleatorio de 10 dígitos
        const randomNumber = Math.floor(1000000000 + Math.random() * 9000000000);
        return randomNumber.toString().substring(0, 10); // Asegurar que tenga exactamente 10 dígitos
    };

    useEffect(() => {
        buscarTabla_p();
    }, []);

    return (
        <div style={{ paddingRight: '12px' }}>
          <div>
            <Modal show={showModal} onHide={closeModal}>
              <Modal.Header closeButton>
                <Modal.Title>Datos eliminados</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Los datos han sido eliminados exitosamente.
              </Modal.Body>
              <Modal.Footer>
                <button className="btn btn-secondary"  onClick={closeModal}>Cerrar</button>
              </Modal.Footer>
            </Modal>
      
            <div className="mb-3">
              {/* Utiliza el componente Link para dirigirte a la ruta de Agregar_p */}
              <Link to='/agregar_p' className="btn btn-primary">Agregar</Link>
            </div>
      
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">NOMBRE DEL PROVEEDOR</th>
                  <th scope="col">ID DEL PROVEEDOR</th>
                  <th scope="col">correo</th>
                  <th scope='col'>telefono</th>
                  <th scope="col">fecha</th>
                  <th scope="col">Modificar</th>
                  <th scope="col">Eliminar</th>
                </tr>
              </thead>
              <tbody>
                {ListaTabla_p.map((proveedor, index) => (
                  <tr key={proveedor._id}>
                    <th scope="row">{index + 1}</th>
                    <td>{proveedor.nombre}</td>
                    <td>{generarIDProveedor()}</td> {/* Mostrar el ID generado */}
                    <td>{proveedor.correo}</td>
                    <td>{proveedor.telefono}</td>
                    <td>{new Date().toLocaleDateString()}</td>
                    <td>
                      <button type="button" className="btn btn-info" onClick={() => navigate(`/proveedor/${proveedor._id}`)}>Modificar</button>
                    </td>
                    <td>
                      <button type="button" className="btn btn-danger" onClick={() => Delete(proveedor._id)}>Eliminar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
}

export default Tabla_p;
