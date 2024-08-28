"use client";
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Button from '../Button';
import { collection, addDoc } from '@firebase/firestore';
import { db } from '@/app/firebase/config';

const createProduct = async (values) => {
  return addDoc(collection(db, "products"), values);
};

const CreateForm = () => {
  const initialValues = {
    imageUrl: "",
    category: "",
    brand: "",
    model: "",
    description: "",
    filter: "",
    quantity: "",
    price: "",
    status: true,
    detail: ""
  };

  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues({
      ...values,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createProduct(values);
      sendMessage();
    } catch (error) {
      console.error("Error adding product: ", error);
    }
  };

  const handleReset = () => {
    setValues(initialValues);
  };

  const sendMessage = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Producto ingresado con éxito!!",
      showConfirmButton: false,
      timer: 1500
    });
    setTimeout(() => {
      handleReset();
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-4 w-full'>
      <input type="text" required placeholder='Ingresa un Imagen..' name="imageUrl" value={values.imageUrl} onChange={handleChange} className='w-1/2 min-w-72 h-10 rounded-xl px-2 shadow-gray-700 shadow-sm text-gray-700 border-2 border-gray-700 text-lg' />
      <input type="text" required placeholder='Ingresa una Categoria..' name="category" value={values.category} onChange={handleChange} className='w-1/2 min-w-72 h-10 rounded-xl px-2 shadow-gray-700 shadow-sm text-gray-700 border-2 border-gray-700 text-lg' />
      <input type="text" required placeholder='Ingresa una Marca..' name="brand" value={values.brand} onChange={handleChange} className='w-1/2 min-w-72 h-10 rounded-xl px-2 shadow-gray-700 shadow-sm text-gray-700 border-2 border-gray-700 text-lg' />
      <input type="text" required placeholder='Ingresa un Modelo..' name="model" value={values.model} onChange={handleChange} className='w-1/2 min-w-72 h-10 rounded-xl px-2 shadow-gray-700 shadow-sm text-gray-700 border-2 border-gray-700 text-lg' />
      <input type="text" required placeholder='Ingresa una Descripción..' name="description" value={values.description} onChange={handleChange} className='w-1/2 min-w-72 h-10 rounded-xl px-2 shadow-gray-700 shadow-sm text-gray-700 border-2 border-gray-700 text-lg' />
      <input type="text" required placeholder='Ingresa un Filtro..' name="filter" value={values.filter} onChange={handleChange} className='w-1/2 min-w-72 h-10 rounded-xl px-2 shadow-gray-700 shadow-sm text-gray-700 border-2 border-gray-700 text-lg' />
      <input type="number" required placeholder='Ingresa un Cantidad..' name="quantity" value={values.quantity} onChange={handleChange} className='w-1/2 min-w-72 h-10 rounded-xl px-2 shadow-gray-700 shadow-sm text-gray-700 border-2 border-gray-700 text-lg' />
      <input type="number" required placeholder='Ingresa un Precio..' name="price" value={values.price} onChange={handleChange} className='w-1/2 min-w-72 h-10 rounded-xl px-2 shadow-gray-700 shadow-sm text-gray-700 border-2 border-gray-700 text-lg' />
      <input type="text" required placeholder='Ingresa un Detalle..' name="detail" value={values.detail} onChange={handleChange} className='w-1/2 min-w-72 h-10 rounded-xl px-2 shadow-gray-700 shadow-sm text-gray-700 border-2 border-gray-700 text-lg' />
      <div className='flex justify-center items-center gap-2'>
        <Button type="reset" handleClick={handleReset}>Limpiar</Button>
        <Button type="submit">Enviar</Button>
      </div>
    </form>
  )
}; export default CreateForm;
