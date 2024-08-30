import React from 'react';
import ProductDetail from '../../../components/products/ProductDetail';

export async function generateMetadata ({params}) {
  const { id } = params;
  return {
    title: `AutoShop: ${id}`,
    description: "Venta en respuestos y accesorios de vehiculos en linea",
    keywords: ["autoshop", "repuestos", "accesorios", "autos", "baterias", "neumaticos", "online", ],
    openGraph: { // extension para el uso de redes sociales.
      title: `AutoShop: ${id}`,
      description: "AutoShop ahora con su tienda online",
      type: "website",
      publishedTime: "2023-01-01T00:00:00Z",
      authors: ["lubiano83"]
    },
  };
};

const Detail = ({ params }) => {

  const { id } = params;

  return (
    <div className="bg-white flex justify-evenly items-center h-full w-full">
      <ProductDetail id={id}/>
    </div>
  )
}; export default Detail;
