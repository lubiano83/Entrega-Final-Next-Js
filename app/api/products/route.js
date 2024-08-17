import { NextResponse } from "next/server";
import mockData from "@/app/data/mockData";
import { revalidateTag } from "next/cache";

const sleep = (timer) => {
    return new Promise((resolve) => setTimeout(resolve, timer));
};

const getProducts = (limit) => {
    return mockData.slice(0, limit);
};

export async function GET(request) {
    const searchParams = new URL(request.url).searchParams;
    const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit'), 10) : 20;
    let filteredData = mockData;
    const limitedData = filteredData.slice(0, limit);
    await sleep(1000);
    return NextResponse.json(limitedData);
}
