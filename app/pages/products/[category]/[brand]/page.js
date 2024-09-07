import React, { Suspense } from 'react';
import Title from '@/app/components/Title';
import ProductsList from '@/app/components/products/ProductsList';

export async function generateMetadata ({params}) {
  const { category, brand } = params;
  return {
    title: `AutoShop: ${category === "all" ? "todos" : category}, ${brand === "all" ? "todos" : brand}`,
    description: "Venta en respuestos y accesorios de vehiculos en linea",
    keywords: ["autoshop", "repuestos", "accesorios", "autos", "baterias", "neumaticos", "online", ],
    openGraph: { // extension para el uso de redes sociales.
      title: `AutoShop: ${category === "all" ? "todos" : category}, ${brand === "all" ? "todos" : brand}`,
      description: "AutoShop ahora con su tienda online",
      type: "website",
      publishedTime: "2023-01-01T00:00:00Z",
      authors: ["lubiano83"]
    },
  };
};

export function generateStaticParams() {
  const categories = ["all", "neumaticos", "baterias", "aceites", "filtros", "aromatizantes"];
  const brands = ["all", "hankook", "shell", "mann", "paloma"];
  
  const params = [];
  
  categories.forEach(category => {
    brands.forEach(brand => {
      params.push({ category, brand });
    });
  });

  return params;
}

export const revalidate = 3600;

const Brand = ({ params, searchParams }) => {
  try {
    const { category, brand } = params;
    const limit = searchParams.limit ? parseInt(searchParams.limit, 10) : 20;
    const page = searchParams.page ? parseInt(searchParams.page, 10) : 1;
    const sort = searchParams.sort || null;
  
    return (
      <div className='w-full h-full flex justify-center items-center'>
        <Suspense fallback={<Title style="text-3xl">Loading...</Title>}>
          <ProductsList category={category} brand={brand} limit={limit} page={page} sort={sort}/>
        </Suspense>
      </div>
    )
  } catch (error) {
    console.log(error.message);
  }
}; export default Brand;
