import React from 'react';
import {Login} from "../../../components/Admin/Auth"
import {Card} from "react-bootstrap";
import './Auth.scss'

export function Auth() {

  const TargetPrincipal=()=>{
    return(
      <Card className='auth__forms'>
        <Card.Header>INICIO DE SESION</Card.Header>
        <Card.Body>
          <Card.Title>ingrese los datos</Card.Title>
          <Card.Text>
            <Login/>
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
  return (
   <div className='auth'>
    <TargetPrincipal/>
   </div>
  )
}
