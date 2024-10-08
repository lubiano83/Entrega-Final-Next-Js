import React, { Suspense } from 'react';
import Title from '@/app/components/Title';
import ProductsList from '@/app/components/products/ProductsList';

export async function generateMetadata ({ params }) {
  const { category } = params;
  return {
    title: `AutoShop: ${category === "all" ? "todos" : category}`,
    description: "Venta en repuestos y accesorios de vehículos en línea",
    keywords: ["autoshop", "repuestos", "accesorios", "autos", "baterías", "neumáticos", "online"],
    openGraph: {
      title: `AutoShop: ${category === "all" ? "todos" : category}`,
      description: "AutoShop ahora con su tienda online",
      type: "website",
      publishedTime: "2023-01-01T00:00:00Z",
      authors: ["lubiano83"]
    },
  };
}

export function generateStaticParams() {
  return [
    { category: "all" },
    { category: "neumaticos" },
    { category: "baterias" },
    { category: "aceites" },
    { category: "filtros" },
    { category: "aromatizantes" },
  ];
}

export const revalidate = 3600;

const Category = ({ params, searchParams }) => {
  const { category } = params;
  
  if (!category) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <Title style="text-3xl">Error: Category not found</Title>
      </div>
    );
  }

  const limit = searchParams.limit ? parseInt(searchParams.limit, 10) : 20;
  const page = searchParams.page ? parseInt(searchParams.page, 10) : 1;
  const sort = searchParams.sort || null;

  return (
    <div className='w-full h-full flex justify-center items-center'>
      <Suspense fallback={<Title style="text-3xl">Loading...</Title>}>
        <ProductsList category={category} limit={limit} page={page} sort={sort} />
      </Suspense>
    </div>
  );
};

export default Category;
