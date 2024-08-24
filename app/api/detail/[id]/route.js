import { NextResponse } from "next/server";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/app/firebase/config";

async function getProductById(id) {
    try {
        const docRef = doc(db, "products", id);
        const docSnapshot = await getDoc(docRef);

        if (!docSnapshot.exists()) {
            return "El producto no existe";
        }

        const productData = docSnapshot.data();
        
        return { id: docSnapshot.id, ...productData };
    } catch (error) {
        console.error("Error fetching product from Firestore:", error);
        throw new Error("Error fetching product from Firestore");
    }
}

export async function GET(request, { params }) {
    const { id } = params;

    if (!id) {
        return NextResponse.json({ error: "Product ID is required" }, { status: 400 });
    }

    try {
        const product = await getProductById(id);

        if (!product) {
            return NextResponse.json({ error: "Product not found" }, { status: 404 });
        }

        return NextResponse.json(product);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
