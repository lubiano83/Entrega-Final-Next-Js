import { NextResponse } from "next/server";
import mockData from "@/app/data/mockData";

const sleep = (timer) => {
    return new Promise((resolve) => setTimeout(resolve, timer));
};

async function getProductsById({ params }) {
    const { id } = params;
    const singleProduct = mockData.find(product => product.id.toString() === id.toString());
    
    await sleep(1000);

    return singleProduct;
}

export async function GET(request, { params }) {
    const singleProduct = await getProductsById({ params });
    
    if (!singleProduct) {
        return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(singleProduct);
};
