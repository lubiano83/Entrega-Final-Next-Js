import { NextResponse } from "next/server";
import cartData from "../../data/cartData";
import { revalidateTag } from "next/cache";

const sleep = (timer) => {
    return new Promise((resolve) => setTimeout(resolve, timer));
};

export async function GET(request){
    await sleep(1000);
    revalidateTag('cart');
    return NextResponse.json(cartData);
};