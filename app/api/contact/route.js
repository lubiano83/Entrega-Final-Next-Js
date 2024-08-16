import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(request){
    const formData = await request.json();
    revalidateTag('form');
    console.log(formData);
    return NextResponse.json("Data recibida correctamente");
};