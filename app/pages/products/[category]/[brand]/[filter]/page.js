import React, { Suspense } from 'react';
import Products from '@/app/components/products/Products';
import Title from '@/app/components/Title';

export async function generateMetadata ({params}) {
  const { category, brand, filter } = params;
  return {
    title: `AutoShop: ${category === "all" ? "todos" : category}, ${brand === "all" ? "todos" : brand}, ${filter === "all" ? "todos" : filter}`,
    description: "Venta en respuestos y accesorios de vehiculos en linea",
    keywords: ["autoshop", "repuestos", "accesorios", "autos", "baterias", "neumaticos", "online", ],
    openGraph: { // extension para el uso de redes sociales.
      title: `AutoShop: ${category === "all" ? "todos" : category}, ${brand === "all" ? "todos" : brand}, ${filter === "all" ? "todos" : filter}`,
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
    {brand: "all"},
    {brand: "hankook"},
    {brand: "shell"},
    {brand: "mann"},
    {brand: "paloma"},
    {filter: "all"},
    {filter: "r13"},
    {filter: "r14"},
    {filter: "r15"},
    {filter: "45ah"},
    {filter: "55ah"},
    {filter: "60ah"},
    {filter: "5w-30"},
    {filter: "15w-40"},
    {filter: "10w-40"},
    {filter: "aire"},
    {filter: "elemento"},
    {filter: "aceite"},
    {filter: "parfum"},
    {filter: "woody"},
    {filter: "happy-bag"},
  ]
}

export const revalidate = 3600;

const Filter = ({ params, searchParams }) => {
  const { category, brand, filter } = params;
  const limit = searchParams.limit ? parseInt(searchParams.limit, 10) : 20;
  const page = searchParams.page ? parseInt(searchParams.page, 10) : 1;
  const sort = searchParams.sort;

  return (
    <div className='w-full h-full flex justify-center items-center'>
      <Suspense fallback={<Title style="text-3xl">Loading...</Title>}>
        <Products category={category} brand={brand} filter={filter} limit={limit} page={page} sort={sort}/>
      </Suspense>
    </div>
  );
}; export default Filter;