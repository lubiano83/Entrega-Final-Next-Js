import { NextResponse } from "next/server";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import { db } from "@/app/firebase/config";
import { revalidateTag } from "next/cache";

async function getProducts({ limit, page, sort, params }) {
    try {
        const { category } = params;
        const collectionRef = collection(db, "products");
        
        let productsQuery = query(collectionRef);
        
        if (category && category !== "all") {
            productsQuery = query(productsQuery, where('category', '==', category));
        }

        const snapshot = await getDocs(productsQuery);
        const productsData = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));

        const start = (page - 1) * limit;
        const end = start + limit;
        const paginatedData = productsData.slice(start, end);

        return paginatedData;
    } catch (error) {
        console.error("Error fetching products from Firestore:", error);
        throw new Error("Error fetching products from Firestore");
    }
}

export async function GET(request, { params }) {
    const searchParams = new URL(request.url).searchParams;
    const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit'), 10) : 20;
    const page = searchParams.get('page') ? parseInt(searchParams.get('page'), 10) : 1;
    const sort = searchParams.get('sort') || null;

    try {
        const products = await getProducts({ limit, page, sort, params });
        revalidateTag('cart');
        return NextResponse.json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
    }
}
