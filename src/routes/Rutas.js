import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Layout from '../layout/Layout';
//import de componentes
import Home from '../pages/Home';
import Lista from '../components/Lista';
import DatosPersonales from '../components/DatosPersonales';
import Tabla_p from '../components/Tabla_p';
import Agregar_P from '../components/agregar_p';


export default function Rutas() {
  return (
    <Layout>
    <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/lista' exact element={<Lista/>}/>
        <Route path='/datos' exact element={<DatosPersonales/>}/>
        <Route path='/datos/:id' exact element={<DatosPersonales/>}/>
        <Route path='/tabla_p' exact element={<Tabla_p/>}/>
        <Route path='/agregar_p' exact element={<Agregar_P />} /> {/* Nueva ruta para AgregarP */}
    </Routes>
    </Layout>
  )
}
