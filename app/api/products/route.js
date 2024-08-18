import { NextResponse } from "next/server";
import mockData from "@/app/data/mockData";
import { revalidateTag } from "next/cache";

const sleep = (timer) => {
    return new Promise((resolve) => setTimeout(resolve, timer));
};

export async function GET(request) {
    const searchParams = new URL(request.url).searchParams;
    const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit'), 10) : 20;
    const page = searchParams.get('page') ? parseInt(searchParams.get('page'), 10) : 1;
    let filteredData = mockData;
    const start = (page - 1) * limit;
    const end = start + limit;
    const paginatedData = filteredData.slice(start, end);
    await sleep(1000);
    revalidateTag('cart')
    return NextResponse.json(paginatedData);
}
