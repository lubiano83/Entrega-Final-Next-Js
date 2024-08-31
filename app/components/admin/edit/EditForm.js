"use client";
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import Button from '../../Button';
import { doc, updateDoc, getDoc, deleteDoc } from '@firebase/firestore';
import { db, storage } from '@/app/firebase/config';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useDarkMode } from '@/app/hooks/useDarkMode';
import Title from '../../Title';
import { useRouter } from 'next/navigation';

const editProduct = async (id, values) => {
  const productRef = doc(db, "products", id);
  return updateDoc(productRef, values);
};

const deleteProduct = async (id) => {
  const productRef = doc(db, "products", id);
  await deleteDoc(productRef);
};

const EditForm = ({ id }) => {
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
      const productRef = doc(db, "products", id);
      const productSnap = await getDoc(productRef);
      if (productSnap.exists()) {
        setValues(productSnap.data());
      } else {
        console.error("No such document!");
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
      let updatedValues = { ...values };
      if (imageFile) {
        const storageRef = ref(storage, `products/${imageFile.name}`);
        const fileSnapshot = await uploadBytes(storageRef, imageFile);
        const fileUrl = await getDownloadURL(fileSnapshot.ref);
        updatedValues.imageUrl = fileUrl;
      }
      
      await editProduct(id, updatedValues);
      sendMessage("Producto editado con éxito!!");
    } catch (error) {
      console.error("Error updating product: ", error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteProduct(id);
      sendMessage("Producto eliminado con éxito!!");
      router.back();
    } catch (error) {
      console.error("Error deleting product: ", error);
    }
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
    setTimeout(() => {
      handleReset();
      router.back();
    }, 1500);
  };

  return (
    <>
      <div className={`w-1/2 min-w-72 p-8 gap-4 rounded-3xl flex flex-wrap flex-col justify-center items-center bg-gray-700 bg-opacity-25`}>
        <Title style="text-3xl">Id: {id}</Title>
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
          <div className='flex justify-center items-center gap-2'>
            <Button type="reset" handleClick={handleReset}>Limpiar</Button>
            <Button type="submit">Guardar</Button>
          </div>
          <Button type="button" handleClick={handleDelete}>Eliminar</Button>
        </form>
      </div>
    </>
  );
}; export default EditForm;
