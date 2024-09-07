import { NextResponse } from "next/server";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import { db } from "@/app/firebase/config";
import { revalidateTag } from "next/cache";

export async function GET(request, { params }) {
    
    try {
        const { category } = params;

        if(!category) {
            return console.log("No estan llegando los params");
        }

        const searchParams = new URL(request.url).searchParams;
        const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit'), 10) : 20;
        const page = searchParams.get('page') ? parseInt(searchParams.get('page'), 10) : 1;
        const sort = searchParams.get('sort') || null;
        
        const collectionRef = collection(db, "products");
        let productsQuery = query(collectionRef);
        
        if (category && category !== "all") {
            productsQuery = query(productsQuery, where('category', '==', category));
        }

        if (sort && (sort === 'asc' || sort === 'desc')) {
            productsQuery = query(productsQuery, orderBy("price", sort));
        }

        const snapshot = await getDocs(productsQuery);
        const productsData = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));

        const start = (page - 1) * limit;
        const end = start + limit;
        const paginatedData = productsData.slice(start, end);
        
        revalidateTag('products');
        return NextResponse.json(paginatedData);
    } catch (error) {
        console.error("Error fetching products:", error);
        return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
    }
}
