import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Lista from "./components/web/Lista";
import DatosPersonales from "./components/web/DatosPersonales";
import React from 'react';
//import {BrowserRouter, Routes, Route } from 'react-router-dom';
//import Lista from './components/Lista'; // Asegúrate de importar Lista si aún no lo has hecho
//import DatosPersonales from './components/DatosPersonales'; // Asegúrate de importar DatosPersonales si aún no lo has hecho
import Tablap from './components/web/Tabla_p';
import AgregarP from './components/web/agregar_p';
import Inicio from './components/web/inicio';
import { Login } from './components/Admin/Auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Layout from './layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* Asegúrate de envolver el componente Lista con el componente Layout */}
        <Route path="/lista" element={<Layout><Lista /></Layout>} />
        <Route path="/datos" element={<DatosPersonales />} />
        <Route path="/datos/:id" element={<DatosPersonales />} />
        <Route path="/tabla_p" element={<Layout><Tablap /></Layout>} />
        <Route path="/agregar_p" element={<AgregarP />} />
        <Route path="/inicio" element={<Layout><Inicio /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
