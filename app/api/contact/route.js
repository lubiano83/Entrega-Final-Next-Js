import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(request){
    const userData = await request.json();
    revalidateTag('form');
    console.log(userData);
    return NextResponse.json("Usuario recibido correctamente");
};
