"use client";
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Button from '../../Button';
import { useDarkMode } from '@/app/hooks/useDarkMode';
import Title from '../../Title';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/hooks/useAuth';

const CreateForm = () => {

  const baseURL = process.env.NEXT_PUBLIC_FIREBASE_API_URL;

  const initialValues = {
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
  const [imageFile, setImageFile] = useState(null);
  const { isDarkMode } = useDarkMode();
  const router = useRouter();
  const { user } = useAuth();

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "file") {
      setImageFile(files[0]);
    } else {
      setValues({
        ...values,
        [name]: type === 'checkbox' ? checked : value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (imageFile) {
      const formData = new FormData();
      formData.append('image', imageFile);
      formData.append('category', values.category);
      formData.append('brand', values.brand);
      formData.append('model', values.model);
      formData.append('description', values.description);
      formData.append('filter', values.filter);
      formData.append('quantity', values.quantity);
      formData.append('price', values.price);
      formData.append('status', values.status);
      formData.append('detail', values.detail);

      try {
        const response = await fetch(`${baseURL}/product`, { method: 'POST', body: formData });

        if (!response.ok) {
          throw new Error('Failed to create product');
        }

        const data = await response.json();
        sendMessage('success', data.message);
      } catch (error) {
        sendMessage('error', 'Error al agregar el producto. Por favor, intenta nuevamente.');
      }
    } else {
      sendMessage('error', 'Por favor, selecciona una imagen para el producto.');
    }
  };

  const handleReset = () => {
    try {
      setValues(initialValues);
      setImageFile(null);
    } catch (error) {
      console.log(error.message);
    }
  };

  const sendMessage = (icon, message) => {
    try {
      Swal.fire({
        position: "center",
        icon: icon,
        title: message,
        showConfirmButton: false,
        timer: 1500
      });
      if (icon === "success") {
        router.refresh();
        setTimeout(handleReset, 1500);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className={`w-1/2 min-w-72 p-8 gap-4 rounded-3xl flex flex-wrap flex-col justify-center items-center bg-gray-700 bg-opacity-25`}>
      <Title style="text-3xl">Ingreso de Productos:</Title>
      <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-4 w-full'>
        <input type="file" required name="image" onChange={handleChange} className='min-w-60 h-10 text-gray-700 text-lg text-center overflow-hidden' />
        <input type="text" required placeholder='Ingresa una Categoria..' name="category" value={values.category} onChange={handleChange} className={`w-full min-w-60 h-10 rounded-xl px-2 shadow-gray-700 shadow-sm text-gray-700 border-2 text-lg ${isDarkMode ? "border-orange-600" : "border-blue-600"}`} />
        <input type="text" required placeholder='Ingresa una Marca..' name="brand" value={values.brand} onChange={handleChange} className={`w-full min-w-60 h-10 rounded-xl px-2 shadow-gray-700 shadow-sm text-gray-700 border-2 text-lg ${isDarkMode ? "border-orange-600" : "border-blue-600"}`} />
        <input type="text" required placeholder='Ingresa un Modelo..' name="model" value={values.model} onChange={handleChange} className={`w-full min-w-60 h-10 rounded-xl px-2 shadow-gray-700 shadow-sm text-gray-700 border-2 text-lg ${isDarkMode ? "border-orange-600" : "border-blue-600"}`} />
        <input type="text" required placeholder='Ingresa una Descripción..' name="description" value={values.description} onChange={handleChange} className={`w-full min-w-60 h-10 rounded-xl px-2 shadow-gray-700 shadow-sm border-2 text-lg ${isDarkMode ? "border-orange-600" : "border-blue-600"}`} />
        <input type="text" required placeholder='Ingresa un Filtro..' name="filter" value={values.filter} onChange={handleChange} className={`w-full min-w-60 h-10 rounded-xl px-2 shadow-gray-700 shadow-sm text-gray-700 border-2 text-lg ${isDarkMode ? "border-orange-600" : "border-blue-600"}`} />
        <input type="number" required placeholder='Ingresa un Cantidad..' name="quantity" value={values.quantity} onChange={handleChange} className={`w-full min-w-60 h-10 rounded-xl px-2 shadow-gray-700 shadow-sm text-gray-700 border-2 text-lg ${isDarkMode ? "border-orange-600" : "border-blue-600"}`} />
        <input type="number" required placeholder='Ingresa un Precio..' name="price" value={values.price} onChange={handleChange} className={`w-full min-w-60 h-10 rounded-xl px-2 shadow-gray-700 shadow-sm text-gray-700 border-2 text-lg ${isDarkMode ? "border-orange-600" : "border-blue-600"}`} />
        <input type="text" required placeholder='Ingresa un Detalle..' name="detail" value={values.detail} onChange={handleChange} className={`w-full min-w-60 h-10 rounded-xl px-2 shadow-gray-700 shadow-sm text-gray-700 border-2 text-lg ${isDarkMode ? "border-orange-600" : "border-blue-600"}`} />
        <div className='flex flex-wrap items-center justify-center gap-4'>
          <label className="text-lg text-center flex justify-center items-center text-gray-700 gap-2">
            <input type="checkbox" name="status" checked={values.status} onChange={handleChange} className="form-checkbox h-5 w-5 text-blue-600" />
              { values.status === true ? "Producto disponible" : "Producto no disponible" }
            </label>
        </div>
        {/* { user.email === "lubiano83@gmail.com" ? */}
          <div className='flex justify-center gap-2'>
            <Button color="danger" size="md" style="w-24" type="reset" onClick={handleReset}>Limpiar</Button>
            <Button color="primary" size="md" style="w-24" type="submit">Ingresar</Button>
          </div>
        {/* : "" } */}
      </form>
    </div>
  );
}; export default CreateForm;
