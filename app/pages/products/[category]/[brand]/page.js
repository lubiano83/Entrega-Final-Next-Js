import React, { Suspense } from 'react';
import Title from '@/app/components/Title';
import ProductsList from '@/app/components/products/ProductsList';

export async function generateMetadata({ params }) {
  const { category, brand } = params;
  return {
    title: `AutoShop: ${category === "all" ? "todos" : category}, ${brand === "all" ? "todos" : brand}`,
    description: "Venta en repuestos y accesorios de vehículos en línea",
    keywords: ["autoshop", "repuestos", "accesorios", "autos", "baterías", "neumáticos", "online"],
    openGraph: {
      title: `AutoShop: ${category === "all" ? "todos" : category}, ${brand === "all" ? "todos" : brand}`,
      description: "AutoShop ahora con su tienda online",
      type: "website",
      publishedTime: "2023-01-01T00:00:00Z",
      authors: ["lubiano83"]
    },
  };
}

export function generateStaticParams() {
  const categories = ["all", "neumaticos", "baterias", "aceites", "filtros", "aromatizantes"];
  const brands = ["all", "hankook", "shell", "mann", "paloma"];
  
  const params = [];
  
  for (const category of categories) {
    for (const brand of brands) {
      params.push({ category, brand });
    }
  }
  
  return params;
}

export const revalidate = 3600;

const Brand = ({ params, searchParams }) => {
  const { category, brand } = params;

  if (!category || !brand) {
    return (
      <div className='w-full h-full flex justify-center items-center'>
        <Title style="text-3xl">Error: Invalid Parameters</Title>
      </div>
    );
  }

  const limit = searchParams.limit ? parseInt(searchParams.limit, 10) : 20;
  const page = searchParams.page ? parseInt(searchParams.page, 10) : 1;
  const sort = searchParams.sort || null;

  return (
    <div className='w-full h-full flex justify-center items-center'>
      <Suspense fallback={<Title style="text-3xl">Loading...</Title>}>
        <ProductsList category={category} brand={brand} limit={limit} page={page} sort={sort} />
      </Suspense>
    </div>
  );
};

export default Brand;
