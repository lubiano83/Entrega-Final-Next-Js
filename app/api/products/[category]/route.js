import { NextResponse } from "next/server";
import mockData from "@/app/data/mockData";
import { revalidateTag } from "next/cache";

const sleep = (timer) => {
    return new Promise((resolve) => setTimeout(resolve, timer));
};

async function getProducts({ limit, page, sort, params }) {
    const { category } = params;
    let filteredData = category === "all" ? mockData : mockData.filter(item => item.category.toLowerCase() === category.toLowerCase());

    if (sort === 'asc' || sort === 'desc') {
        filteredData.sort((a, b) => {
            return sort === 'desc' ? b.price - a.price : a.price - b.price;
        });
    }

    const start = (page - 1) * limit;
    const end = start + limit;
    const paginatedData = filteredData.slice(start, end);
    
    await sleep(1000);
    return paginatedData;
}

export async function GET(request, { params }) {
    const searchParams = new URL(request.url).searchParams;
    const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit'), 10) : 20;
    const page = searchParams.get('page') ? parseInt(searchParams.get('page'), 10) : 1;
    const sort = searchParams.get('sort');

    const products = await getProducts({ limit, page, sort, params });

    revalidateTag('cart');
    return NextResponse.json(products);
}
