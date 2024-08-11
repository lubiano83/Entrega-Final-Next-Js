import { NextResponse } from "next/server";
import mockData from "@/app/data/mockData";

const sleep = (timer) => {
    return new Promise((resolve) => setTimeout(resolve, timer));
};

export async function GET(request, { params } ){
    const { category, brand, filter } = params;
    const filterData = category === "todos" ? mockData : mockData.filter(item => item.category.toLowerCase() === category.toLowerCase());
    const filterDataTwo = brand === "todos" ? filterData : filterData.filter(item => item.brand.toLowerCase() === brand.toLowerCase());
    const filterDataThree = filter === "todos" ? filterDataTwo : filterDataTwo.filter(item => item.filter.toLowerCase() === filter.toLowerCase());
    await sleep(1000);
    return NextResponse.json(filterDataThree);
};