import React from 'react';
import { Link } from 'react-router-dom';

export default function Barravertical({ backgroundColor }) {
  const backgroundStyle = {
    background: backgroundColor || 'linear-gradient(to right, #7D120E, #7D120E)'
  };

  return (
    <nav className="navbar navbar-expand-lg" style={backgroundStyle}>
      <div className="container-fluid">
        <div className="d-flex justify-content-end w-100"> {/* Alinea el contenido a la derecha */}
          <form className="d-flex align-items-center" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
