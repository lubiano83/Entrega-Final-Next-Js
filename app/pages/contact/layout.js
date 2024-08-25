import React from 'react';
import Banner from '../../components/Banner';

export const metadata = {
  title: "AutoShop: contacto",
  description: "Venta en respuestos y accesorios de vehiculos en linea",
  keywords: ["autoshop", "repuestos", "accesorios", "autos", "baterias", "neumaticos", "online", ],
  openGraph: { // extension para el uso de redes sociales.
    title: "AutoShop: contacto",
    description: "AutoShop ahora con su tienda online",
    type: "website",
    publishedTime: "2023-01-01T00:00:00Z",
    authors: ["lubiano83"]
  },
};

const ContactLayout = ({children}) => {
  return (
    <div className='bg-white h-full flex flex-col justify-between items-center text-center'>
      <Banner>Dejanos tu mensaje y a la brevedad te contestaremos...</Banner>
      {children}
    </div>
  )
}; export default ContactLayout;