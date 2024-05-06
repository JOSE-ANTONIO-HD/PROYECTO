import React from 'react';
import {Form, FloatingLabel, Button, Row, InputGroup} from "react-bootstrap";
import {useFormik} from "formik";
import {initialvalues, validationSchema} from "./LoginForm.form";

export  function Login() {

  const formik=useFormik({
    initialValues:initialvalues(),
    validationSchema:validationSchema(),
    validateOnChange: false,
    onSubmit: async(formValue)=>{
      try{
        console.log(formValue);
      } catch (error){
        console.error(error);
      }
    }

  })
  return (
    <Form noValidate onSubmit={formik.handleSubmit}>
      <Row className='mb-3'>
        <InputGroup>
        <FloatingLabel
        controlId='floatingInput'
        Label="correo"
        className='mb-3'
        >
          <Form.Control
          type="email"
          name="email"
          placeholder='nombre@ejemplo.com'
          onChange={formik.handleChange}
          value={formik.values.email}
          isvalid={!formik.errors.email}
          isInvalid={!!formik.errors.email}
          required
          />
        </FloatingLabel>
        </InputGroup>

        <InputGroup>
        <FloatingLabel
        controlId='floatingInput'
        Label="password"
        className='mb-3'
        >
          <Form.Control
          type="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          isvalid={!formik.errors.password}
          isInvalid={!!formik.errors.password}
          required
          />
        </FloatingLabel>
        </InputGroup>
      </Row>

      <Form.Group>
        <div className='d-grid gap-2'>
          <Button type= 'submit' size='lg'>Enviar</Button>
        </div>
      </Form.Group>
    </Form>
  )
}
