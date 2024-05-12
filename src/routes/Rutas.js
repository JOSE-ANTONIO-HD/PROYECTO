// Rutas.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from '../layout/Layout';
import Home from '../pages/Home';
import Lista from '../components/web/Lista';
import DatosPersonales from '../components/web/DatosPersonales';
import Tabla_p from '../components/web/Tabla_p';
import Agregar_P from '../components/web/agregar_p';

export default function Rutas() {
  return (
    <Layout>
      
        <Routes>
        
          
          <Route path='/lista' element={<Lista />} />
          <Route path='/datos' element={<DatosPersonales />} />
          <Route path='/datos/:id' element={<DatosPersonales />} />
          <Route path='/tabla_p' element={<Tabla_p />} />
          <Route path='/agregar_p' element={<Agregar_P />} />
          
        </Routes>
      
    </Layout>
  )
}
