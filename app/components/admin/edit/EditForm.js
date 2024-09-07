"use client";
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import Button from '../../Button';
import { useDarkMode } from '@/app/hooks/useDarkMode';
import Title from '../../Title';
import { useRouter } from 'next/navigation';

const EditForm = ({ id }) => {

  const baseURL = process.env.NEXT_PUBLIC_FIREBASE_API_URL;

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
  const [imageFile, setImageFile] = useState(null);
  const { isDarkMode } = useDarkMode();
  const router = useRouter();

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const response = await fetch(`${baseURL}/product/${id}`);
        console.log(response);
        
        if (!response.ok) {
          throw new Error('Producto no encontrado');
        }
        const data = await response.json();
        setValues(data);
      } catch (error) {
        console.error("Error fetching product: ", error);
      }
    };
    loadProduct();
  }, [id]);

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
    try {
      const formData = new FormData();
      formData.append('category', values.category);
      formData.append('brand', values.brand);
      formData.append('model', values.model);
      formData.append('description', values.description);
      formData.append('filter', values.filter);
      formData.append('quantity', values.quantity);
      formData.append('price', values.price);
      formData.append('status', values.status);
      formData.append('detail', values.detail);

      if (imageFile) {
        formData.append('image', imageFile);
      }

      if(!id) {
        return console.log("El dato del id no llega");
      }

      const response = await fetch(`${baseURL}/product/${id}`, {
        method: 'PATCH',
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Error al actualizar el producto.");
      }

      sendMessage("Producto editado con éxito!!");
    } catch (error) {
      console.error("Error updating product: ", error);
      Swal.fire({
        title: "Error",
        text: "Hubo un problema al actualizar el producto.",
        icon: "error",
      });
    }
  };

  const handleDelete = async () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "¡Sí, eliminar!",
      cancelButtonColor: "#d33",
      confirmButtonColor: "#3085d6"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(`${baseURL}/product/${id}`, {
            method: 'DELETE',
          });

          if (!response.ok) {
            throw new Error("Error al eliminar el producto.");
          }

          sendMessage("Producto eliminado con éxito!!");
        } catch (error) {
          console.error("Error deleting product: ", error);
          Swal.fire({
            title: "Error",
            text: "Hubo un problema al eliminar el producto.",
            icon: "error",
          });
        }
      }
    });
  };

  const handleReset = () => {
    setValues(initialValues);
    setImageFile(null);
  };

  const sendMessage = (message) => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: message,
      showConfirmButton: false,
      timer: 1500
    });
    router.refresh();
    setTimeout(() => {
      router.back();
    }, 1500);
  };

  return (
    <>
      <div className={`w-1/2 min-w-72 p-8 gap-4 rounded-3xl flex flex-wrap flex-col justify-center items-center bg-gray-700 bg-opacity-25`}>
        <Title style="text-3xl">{id}</Title>
        <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-4 w-full'>
          <input type="file" name="image" onChange={handleChange} className='min-w-60 h-10 text-gray-700 text-lg text-center' />
          <input type="text" placeholder='Ingresa una Categoria..' name="category" value={values.category} onChange={handleChange} className={`w-full min-w-60 h-10 rounded-xl px-2 shadow-gray-700 shadow-sm text-gray-700 border-2 text-lg ${isDarkMode ? "border-orange-600" : "border-blue-600"}`} />
          <input type="text" placeholder='Ingresa una Marca..' name="brand" value={values.brand} onChange={handleChange} className={`w-full min-w-60 h-10 rounded-xl px-2 shadow-gray-700 shadow-sm text-gray-700 border-2 text-lg ${isDarkMode ? "border-orange-600" : "border-blue-600"}`} />
          <input type="text" placeholder='Ingresa un Modelo..' name="model" value={values.model} onChange={handleChange} className={`w-full min-w-60 h-10 rounded-xl px-2 shadow-gray-700 shadow-sm text-gray-700 border-2 text-lg ${isDarkMode ? "border-orange-600" : "border-blue-600"}`} />
          <input type="text" placeholder='Ingresa una Descripción..' name="description" value={values.description} onChange={handleChange} className={`w-full min-w-60 h-10 rounded-xl px-2 shadow-gray-700 shadow-sm border-2 text-lg ${isDarkMode ? "border-orange-600" : "border-blue-600"}`} />
          <input type="text" placeholder='Ingresa un Filtro..' name="filter" value={values.filter} onChange={handleChange} className={`w-full min-w-60 h-10 rounded-xl px-2 shadow-gray-700 shadow-sm text-gray-700 border-2 text-lg ${isDarkMode ? "border-orange-600" : "border-blue-600"}`} />
          <input type="number" placeholder='Ingresa una Cantidad..' name="quantity" value={values.quantity} onChange={handleChange} className={`w-full min-w-60 h-10 rounded-xl px-2 shadow-gray-700 shadow-sm text-gray-700 border-2 text-lg ${isDarkMode ? "border-orange-600" : "border-blue-600"}`} />
          <input type="number" placeholder='Ingresa un Precio..' name="price" value={values.price} onChange={handleChange} className={`w-full min-w-60 h-10 rounded-xl px-2 shadow-gray-700 shadow-sm text-gray-700 border-2 text-lg ${isDarkMode ? "border-orange-600" : "border-blue-600"}`} />
          <input type="text" placeholder='Ingresa un Detalle..' name="detail" value={values.detail} onChange={handleChange} className={`w-full min-w-60 h-10 rounded-xl px-2 shadow-gray-700 shadow-sm text-gray-700 border-2 text-lg ${isDarkMode ? "border-orange-600" : "border-blue-600"}`} />
          
          <label className={`flex items-center gap-2 text-lg text-gray-700`}>
            <input type="checkbox" name="status" checked={values.status} onChange={handleChange} />
            { values.status ? "Producto disponible" : "Producto no disponible" }
          </label>

          <div className='flex justify-center items-center gap-2'>
            <Button type="reset" handleClick={handleReset}>Limpiar</Button>
            <Button type="submit">Guardar</Button>
          </div>
          <Button type="button" handleClick={handleDelete}>Eliminar</Button>
        </form>
      </div>
    </>
  );
};

export default EditForm;
