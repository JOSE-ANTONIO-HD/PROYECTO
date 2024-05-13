import React, { useState } from 'react';
import { Form, FloatingLabel, Button, Row, InputGroup, Alert } from "react-bootstrap";
import { useFormik } from "formik";
import Axios from "../../../../services/Axios";
import { useNavigate } from 'react-router-dom';

export  function Register() {
  const [registrationMessage, setRegistrationMessage] = useState(null);

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      nomusuario: '',
      apellidos: '',
      email: '',
      password: '',
    },
    onSubmit: async (formValues) => {
      try {
        const response = await Axios.post('/auth/registro', formValues);
        console.log(formValues);
        console.log(response.data);
        //navigate("/admin");
        setRegistrationMessage("Usuario registrado correctamente"); // Mensaje de éxito
      } catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          console.error('Server responded with status:', error.response.status);
          console.error('Error message:', error.response.data.message);
        } else if (error.request) {
          // The request was made but no response was received
          console.error('No response received:', error.request);
        } else {
          // Something happened in setting up the request that triggered an error
          console.error('Error setting up the request:', error.message);
        }
        setRegistrationMessage("Error al registrar usuario"); // Mensaje de error
      }
    }
  });

  return (
    <div>
      {registrationMessage && <Alert variant={registrationMessage.includes('correctamente') ? 'success' : 'danger'}>{registrationMessage}</Alert>}

      <Form noValidate onSubmit={formik.handleSubmit}>
        <Row className='mb-3'>
          <InputGroup>
            <FloatingLabel controlId='floatingInput' label="Nombre de usuario" className='mb-3'>
              <Form.Control
                type="text"
                name="nomusuario"
                onChange={formik.handleChange}
                value={formik.values.nomusuario}
                required
              />
            </FloatingLabel>
          </InputGroup>

          <InputGroup>
            <FloatingLabel controlId='floatingInput' label="Apellidos" className='mb-3'>
              <Form.Control
                type="text"
                name="apellidos"
                onChange={formik.handleChange}
                value={formik.values.apellidos}
                required
              />
            </FloatingLabel>
          </InputGroup>

          <InputGroup>
            <FloatingLabel controlId='floatingInput' label="Correo" className='mb-3'>
              <Form.Control
                type="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                required
              />
            </FloatingLabel>
          </InputGroup>

          <InputGroup>
            <FloatingLabel controlId='floatingInput' label="Contraseña" className='mb-3'>
              <Form.Control
                type="password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                required
              />
            </FloatingLabel>
          </InputGroup>
        </Row>

        <Form.Group>
          <div className='d-grid gap-2'>
            <Button type='submit' size='lg'>Registrarse</Button>
            <Button variant="secondary" size='lg' onClick={() => { navigate("/"); window.location.reload(); }}>Volver al inicio de sesión</Button>
          </div>
        </Form.Group>
      </Form>
    </div>
  )
}
