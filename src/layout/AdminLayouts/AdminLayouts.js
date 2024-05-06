import React from 'react';
//import {AdminMenu,Logout} from "../../components/Admin/AdminLayout";
import BarraMenu from '../../components/BarraMenu';
import Barravertical from '../../components/Barravertical';
import '../../App.css';
//import "./AdminLayout.scss";

export  function AdminLayouts({children}) {
  return (
    <div className='row'>
      <div className='container-fluid'>
        <div className='section'>
            <Barravertical/>
        </div>
    </div>


      <div className='col-2'>
        <div className='container-fluid '>
          <div className='section'>
            <BarraMenu />
          </div>
          
        </div>
      </div>
      <div className='col-10'>
        <div className='section'>
          {children}
        </div>
      </div>
    </div>
  );
  
}
