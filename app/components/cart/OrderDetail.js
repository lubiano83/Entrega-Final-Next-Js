"use client";
import React, { useEffect, useState } from 'react';
import { useAuth } from '@/app/hooks/useAuth';
import Link from 'next/link';
import Button from '../Button';

const OrderDetail = () => {
  const { user } = useAuth(); // Obtén el usuario autenticado
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      if (!user || !user.email) return;

      const response = await fetch(`/api/carts/${user.email}`);
      if (response.ok) {
        const data = await response.json();
        setOrderDetails(data);
      }
    };

    fetchOrderDetails();
  }, [user]);

  return (
    <div className='bg-white h-full w-full flex flex-col justify-between items-center text-center p-8 gap-8'>
      {orderDetails && orderDetails.length > 0 ? (
        <div key={orderDetails[0].id} className='text-lg flex flex-col justify-center items-start gap-2 h-full'>
            <h3><strong>Número de Orden:</strong> {orderDetails[0].id}</h3>
            <h3><strong>Dirección de Envío:</strong> {orderDetails[0].address}, {orderDetails[0].city}</h3>
            <h3><strong>Orden a Nombre de:</strong> {orderDetails[0].name} {orderDetails[0].lastname}</h3>
            <h3><strong>Email de Contacto:</strong> {orderDetails[0].email}</h3>
            <h3><strong>Teléfono de Contacto:</strong> {orderDetails[0].phone}</h3>
          
        </div>

      ) : (
        <div>No se encontraron detalles de la orden.</div>
      )}
      <Link href={"/"} className='w-full'>
            <Button>Volver al Inicio</Button>
      </Link>
    </div>
  );
}

export default OrderDetail;
