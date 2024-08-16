import { NextResponse } from "next/server";
import mockData from "@/app/data/mockData";

const sleep = (timer) => {
    return new Promise((resolve) => setTimeout(resolve, timer));
};

export async function GET(request, { params } ){
    const { category } = params;
    const filterData = category === "todos" ? mockData : mockData.filter(item => item.category.toLowerCase() === category.toLowerCase());
    await sleep(1000);
    return NextResponse.json(filterData);
};