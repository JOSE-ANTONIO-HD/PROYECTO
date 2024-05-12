import React, { useState } from 'react';
import { Form, FloatingLabel, Button, Row, InputGroup, Alert } from "react-bootstrap";
import { useFormik } from "formik";
import Axios from '../../../../services/Axios';
import { useNavigate } from "react-router-dom";
import { Register } from './Register'; // Ajusta la ruta según la ubicación real de Register


export function Login() {
  const [error, setError] = useState(null);
  const [showRegister, setShowRegister] = useState(false);
  const navigate = useNavigate(); // Obtenemos el objeto history para la navegación

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (formValues) => {
      try {
        const response = await Axios.post('/auth/login', formValues);
        console.log(formValues);
        console.log(response.data);
        // Redirigir al usuario a la página principal del administrador
        navigate('/lista');
      } catch (error) {
        setError("Error al iniciar sesión. Verifica tus credenciales.");
        console.error(error);
      }
    }
  });

  const handleRegisterSuccess = (formData) => {
    setShowRegister(false);
    formik.setValues(formData);
  };

  const handleRegisterClick = () => {
    setShowRegister(true);
  };

  return (
    <>
      {showRegister ? (
        <Register onRegisterSuccess={handleRegisterSuccess} />
      ) : (
        <div>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form noValidate onSubmit={formik.handleSubmit}>
            <Row className='mb-3'>
              <InputGroup>
                <FloatingLabel controlId='floatingInput' label="Correo" className='mb-3'>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder='nombre@ejemplo.com'
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
                <Button type='submit' size='lg'>Enviar</Button>
                <Button variant="secondary" onClick={handleRegisterClick} size='lg'>Registrarse</Button>
              </div>
            </Form.Group>
          </Form>
        </div>
      )}
    </>
  )
}
