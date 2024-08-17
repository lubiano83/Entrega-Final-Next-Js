import { NextResponse } from "next/server";
import mockData from "@/app/data/mockData";
import { revalidateTag } from "next/cache";

const sleep = (timer) => {
    return new Promise((resolve) => setTimeout(resolve, timer));
};

export async function GET(request, { params }) {
    const { category, brand, filter } = params;
    const searchParams = new URL(request.url).searchParams;
    const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit'), 10) : 10;
    const page = searchParams.get('page') ? parseInt(searchParams.get('page'), 10) : 1;
    
    // Filtrar datos según categoría, marca y filtro
    let filteredData = category === "todos" ? mockData : mockData.filter(item => item.category.toLowerCase() === category.toLowerCase());
    filteredData = brand === "todos" ? filteredData : filteredData.filter(item => item.brand.toLowerCase() === brand.toLowerCase());
    filteredData = filter === "todos" ? filteredData : filteredData.filter(item => item.filter.toLowerCase() === filter.toLowerCase());

    // Calcular inicio y fin de los productos para la página actual
    const start = (page - 1) * limit;
    const end = start + limit;
    
    // Extraer los productos correspondientes a la página actual
    const paginatedData = filteredData.slice(start, end);
    
    await sleep(1000);
    revalidateTag('cart')
    return NextResponse.json(paginatedData);
}
