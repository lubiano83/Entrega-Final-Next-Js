import { NextResponse } from "next/server";
import mockData from "@/app/data/mockData";
import { revalidateTag } from "next/cache";

const sleep = (timer) => {
    return new Promise((resolve) => setTimeout(resolve, timer));
};

export async function GET(request){
    await sleep(1000);
    revalidateTag('products');
    return NextResponse.json(mockData);
};