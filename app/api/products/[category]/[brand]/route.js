import { NextResponse } from "next/server";
import mockData from "@/app/data/mockData";

const sleep = (timer) => {
    return new Promise((resolve) => setTimeout(resolve, timer));
};

export async function GET(request, { params }) {
    const { category, brand } = params;
    const searchParams = new URL(request.url).searchParams;
    const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit'), 10) : 20;
    let filteredData = category === "todos" ? mockData : mockData.filter(item => item.category.toLowerCase() === category.toLowerCase());
    filteredData = brand === "todos" ? filteredData : filteredData.filter(item => item.brand.toLowerCase() === brand.toLowerCase());
    const limitedData = filteredData.slice(0, limit);
    await sleep(1000);
    return NextResponse.json(limitedData);
}