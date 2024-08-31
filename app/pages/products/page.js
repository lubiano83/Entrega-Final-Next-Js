import React, { Suspense } from 'react';
import Title from '@/app/components/Title';
import ProductsList from '@/app/components/products/ProductsList';

export const metadata = {
  title: "AutoShop: todos",
  description: "Venta en respuestos y accesorios de vehiculos en linea",
  keywords: ["autoshop", "repuestos", "accesorios", "autos", "baterias", "neumaticos", "online", ],
  openGraph: { // extension para el uso de redes sociales.
    title: "AutoShop: todos",
    description: "AutoShop ahora con su tienda online",
    type: "website",
    publishedTime: "2023-01-01T00:00:00Z",
    authors: ["lubiano83"]
  },
};

const All = ({ searchParams }) => {
  
  const limit = searchParams.limit ? parseInt(searchParams.limit, 10) : 20;
  const page = searchParams.page ? parseInt(searchParams.page, 10) : 1;
  const sort = searchParams.sort;

  return (
    <div className='w-full h-full flex justify-center items-center'>
      <Suspense fallback={<Title style="text-3xl">Loading...</Title>}>
        <ProductsList limit={limit} page={page} sort={sort} />
      </Suspense>
    </div>
  );
}; export default All;
