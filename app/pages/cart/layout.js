import React from 'react';
import Banner from '../../components/Banner';

export const metadata = {
  title: "AutoShop: carrito",
  description: "Venta en respuestos y accesorios de vehiculos en linea",
  keywords: ["autoshop", "repuestos", "accesorios", "autos", "baterias", "neumaticos", "online", ],
  openGraph: { // extension para el uso de redes sociales.
    title: "AutoShop: carrito",
    description: "AutoShop ahora con su tienda online",
    type: "website",
    publishedTime: "2023-01-01T00:00:00Z",
    authors: ["lubiano83"]
  },
};

const CartLayout = ({children}) => {
  return (
    <div className='bg-white h-full w-full flex flex-col justify-between items-center text-center pb-8'>
      <Banner>Por compras antes de las 12 PM, el envio se gestionara el mismo dia...</Banner>
      {children}
    </div>
  )
}; export default CartLayout;