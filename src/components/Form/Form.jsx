import React from 'react';
import Form from './Form.module.css';
import useForm from './useForm';
import Button from '../Button/Button.jsx';


const Form = (type) => {
    const name = useForm();
    const email = useForm('email');
    const cpf = useForm('cpf');
  
    function handleSubmit(e) {
      e.preventDefault();
      if (email.validate() && cpf.validate()) {
        console.log('enviar');
        alert('Enviado');
      } else {
        console.log('não enviar');
      }
    }