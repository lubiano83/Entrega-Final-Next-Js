import React from 'react';
import Banner from '../../components/Banner';

export const metadata = {
  title: "AutoShop: login",
  description: "Venta en respuestos y accesorios de vehiculos en linea",
  keywords: ["autoshop", "repuestos", "accesorios", "autos", "baterias", "neumaticos", "online", ],
  openGraph: { // extension para el uso de redes sociales.
    title: "AutoShop: login",
    description: "AutoShop ahora con su tienda online",
    type: "website",
    publishedTime: "2023-01-01T00:00:00Z",
    authors: ["lubiano83"]
  },
};

const LoginLayout = ({children}) => {
  return (
    <div className='bg-white h-full flex flex-col justify-between items-center text-center'>
      <Banner>asdasdasd</Banner>
      {children}
    </div>
  )
}; export default LoginLayout;