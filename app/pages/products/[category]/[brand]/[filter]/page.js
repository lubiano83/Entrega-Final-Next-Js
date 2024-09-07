import React, { Suspense } from 'react';
import Title from '@/app/components/Title';
import ProductsList from '@/app/components/products/ProductsList';

export async function generateMetadata({ params }) {
  const { category, brand, filter } = params;
  return {
    title: `AutoShop: ${category === "all" ? "todos" : category}, ${brand === "all" ? "todos" : brand}, ${filter === "all" ? "todos" : filter}`,
    description: "Venta en respuestos y accesorios de vehiculos en linea",
    keywords: ["autoshop", "repuestos", "accesorios", "autos", "baterias", "neumaticos", "online"],
    openGraph: {
      title: `AutoShop: ${category === "all" ? "todos" : category}, ${brand === "all" ? "todos" : brand}, ${filter === "all" ? "todos" : filter}`,
      description: "AutoShop ahora con su tienda online",
      type: "website",
      publishedTime: "2023-01-01T00:00:00Z",
      authors: ["lubiano83"],
    },
  };
};

export function generateStaticParams() {
  const categories = ["all", "neumaticos", "baterias", "aceites", "filtros", "aromatizantes"];
  const brands = ["all", "hankook", "shell", "mann", "paloma"];
  const filters = ["all", "r13", "r14", "r15", "45ah", "55ah", "60ah", "5w-30", "15w-40", "10w-40", "aire", "elemento", "aceite", "parfum", "woody", "happy-bag"];
  
  const params = [];

  categories.forEach(category => {
    brands.forEach(brand => {
      filters.forEach(filter => {
        params.push({ category, brand, filter });
      });
    });
  });

  return params;
}

export const revalidate = 3600;

const Filter = ({ params, searchParams }) => {
  try {
    const { category, brand, filter } = params;
    const limit = searchParams.limit ? parseInt(searchParams.limit, 10) : 20;
    const page = searchParams.page ? parseInt(searchParams.page, 10) : 1;
    const sort = searchParams.sort || null;
  
    return (
      <div className='w-full h-full flex justify-center items-center'>
        <Suspense fallback={<Title style="text-3xl">Loading...</Title>}>
          <ProductsList category={category} brand={brand} filter={filter} limit={limit} page={page} sort={sort} />
        </Suspense>
      </div>
    );
  } catch (error) {
    console.log(error.message);
  }
}; export default Filter;