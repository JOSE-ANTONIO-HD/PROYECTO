import React from 'react';
import BarraMenu from '../components/BarraMenu';

export default function Layout({children}) {
  return (
    <div className='container-fluid'>
        <div className='section'>
            <BarraMenu/>
        </div>
        <div className='section'>
            {children}
        </div>
    </div>
  )
}
