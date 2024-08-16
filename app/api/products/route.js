import { NextResponse } from "next/server";
import mockData from "@/app/data/mockData";
import { revalidateTag, revalidatePath } from "next/cache";

const sleep = (timer) => {
    return new Promise((resolve) => setTimeout(resolve, timer));
};

export async function GET(request){
    await sleep(1000);
    revalidateTag('products');
    revalidatePath('/api/products/[category]/[brand]/[filter]');
    return NextResponse.json(mockData);
};