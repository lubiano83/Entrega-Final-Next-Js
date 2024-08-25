import React, { Suspense } from 'react';
import ProductsList from '../../../components/products/ProductsList';
import Title from '@/app/components/Title';

export async function generateMetadata ({params}) {
  const { category } = params;
  return {
    title: `AutoShop: ${category}`,
    description: "Venta en respuestos y accesorios de vehiculos en linea",
    keywords: ["autoshop", "repuestos", "accesorios", "autos", "baterias", "neumaticos", "online", ],
    openGraph: { // extension para el uso de redes sociales.
      title: `AutoShop: ${category}`,
      description: "AutoShop ahora con su tienda online",
      type: "website",
      publishedTime: "2023-01-01T00:00:00Z",
      authors: ["lubiano83"]
    },
  };
};

export function generateStaticParams () {
  return [
    {category: "all"},
    {category: "neumaticos"},
    {category: "baterias"},
    {category: "aceites"},
    {category: "filtros"},
    {category: "aromatizantes"},
  ]
}

export const revalidate = 3600;

const Category = ({ params, searchParams }) => {

  const { category } = params;
  
  const limit = searchParams.limit ? parseInt(searchParams.limit, 10) : 20;
  const page = searchParams.page ? parseInt(searchParams.page, 10) : 1;
  const sort = searchParams.sort;

  return (
    <div className='w-full h-full flex justify-center items-center'>
      <Suspense fallback={<Title style="text-3xl">Cargando...</Title>}>
        <ProductsList category={category} limit={limit} page={page} sort={sort} />
      </Suspense>
    </div>
  )
}; export default Category;
