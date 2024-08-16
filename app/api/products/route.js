import { NextResponse } from "next/server";
import mockData from "@/app/data/mockData";

const sleep = (timer) => {
    return new Promise((resolve) => setTimeout(resolve, timer));
};

export async function GET(request){
    await sleep(1000);
    return NextResponse.json(mockData);
};