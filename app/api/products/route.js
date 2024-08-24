import { NextResponse } from "next/server";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../../firebase/config";
import { revalidateTag } from "next/cache";

async function getProducts({ limit, page, sort }) {
    try {
        const collectionRef = collection(db, "products");
        const sortDirection = sort === 'desc' ? 'desc' : 'asc';
        
<<<<<<< HEAD
        let productsQuery = query(collectionRef, orderBy("price", sortDirection));
=======
        if (sort) {
            productsQuery = query(collectionRef, orderBy("price", sort));
        }
>>>>>>> parent of 3abd7ee (firebase totalmente listo)

        const snapshot = await getDocs(productsQuery);
        const productsData = snapshot.docs.map((doc) => doc.data());
    
        const start = (page - 1) * limit;
        const end = start + limit;
        const paginatedData = productsData.slice(start, end);
    
        return paginatedData;
    } catch (error) {
        console.error("Error fetching products from Firestore:", error);
        throw new Error("Error fetching products from Firestore");
    }
}

export async function GET(request) {
    const searchParams = new URL(request.url).searchParams;
    const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit'), 10) : 20;
    const page = searchParams.get('page') ? parseInt(searchParams.get('page'), 10) : 1;
    const sort = searchParams.get('sort') || null;

    const products = await getProducts({ limit, page, sort });

    revalidateTag('cart');
    return NextResponse.json(products);
}
