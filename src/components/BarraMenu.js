import React from 'react';
import { Link } from 'react-router-dom';

export default function BarraMenu({ backgroundColor }) {
  const barraMenuStyle = {
    background: backgroundColor || 'linear-gradient(to right, #020652, #7D120E)', // Establece el degradado por defecto si no se proporciona uno
    color: 'white', // Establece el color del texto
    position: 'fixed', // Fija la posición de la barra de navegación
    top: 0, // Mantiene la barra de navegación en la parte superior de la página
    left: 0, // Coloca la barra de navegación en el lado izquierdo de la página
    height: '100vh', // Establece la altura de la barra de navegación para que llene la altura completa de la página
    width: '200px', // Establece el ancho de la barra de navegación
    padding: '20px', // Añade espacio interno a la barra de navegación
    zIndex: 1000, // Asegura que la barra de navegación esté por encima de otros elementos en la página
   
  };
  const textColorStyle = {
    color: 'white',
  };

  return (
    <nav style={barraMenuStyle}>
      <a className="navbar-brand mb-3" href="#" style={textColorStyle}>INVENTAX</a>
      
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" to="/" style={textColorStyle}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" className="bi bi-house" viewBox="0 0 16 16">
              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
            </svg>Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/lista" style={textColorStyle}>INVENTARIO</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Tabla_p" style={textColorStyle}>PROVEEDOR</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={textColorStyle}>
            Formularios
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to='/'>Datos Personales</Link></li>
            <li><Link className="dropdown-item" to="/">Lista personal</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true" style={textColorStyle}>Disabled</a>
        </li>
      </ul>
      <form className="d-flex flex-column" role="search">
        <input className="form-control me-2 mb-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit" style={textColorStyle}>Search</button>
      </form>
    </nav>
  );
}
