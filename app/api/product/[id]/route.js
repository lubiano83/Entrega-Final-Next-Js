import { NextResponse } from "next/server";
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "@/app/firebase/config";
import { revalidateTag } from "next/cache";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export async function GET(request, { params }) {
  
  try {
        const { id } = params;
      
        if (!id) {
            return NextResponse.json({ error: "Product ID is required" }, { status: 400 });
        }

        const docRef = doc(db, "products", id);
        const docSnapshot = await getDoc(docRef);

        if (!docSnapshot.exists()) {
            return NextResponse.json({ error: "Product not found" }, { status: 404 });
        }

        const productData = docSnapshot.data();
        const product = { id: docSnapshot.id, ...productData };

        revalidateTag('product');
        return NextResponse.json(product);
    } catch (error) {
        console.error("Error fetching product from Firestore:", error);
        return NextResponse.json({ error: "Error fetching product from Firestore" }, { status: 500 });
    }
}

export async function PATCH(request, { params }) {
  
  try {
      const { id } = params;

      if (!id) {
        return NextResponse.json({ error: "Product ID is required" }, { status: 400 });
      }

      const formData = await request.formData();

      const productRef = doc(db, "products", id);
      const productSnap = await getDoc(productRef);
  
      if (!productSnap.exists()) {
        return NextResponse.json({ error: 'Producto no encontrado' }, { status: 404 });
      }
  
      // Datos actuales del producto
      const currentProductData = productSnap.data();

      // Campos a actualizar (solo si se proporcionan nuevos valores)
      let updatedValues = {
        category: formData.get('category') || currentProductData.category,
        brand: formData.get('brand') || currentProductData.brand,
        model: formData.get('model') || currentProductData.model,
        description: formData.get('description') || currentProductData.description,
        filter: formData.get('filter') || currentProductData.filter,
        quantity: formData.get('quantity') ? parseInt(formData.get('quantity'), 10) : currentProductData.quantity,
        price: formData.get('price') ? parseFloat(formData.get('price')) : currentProductData.price,
        status: formData.get('status') ? formData.get('status') === 'true' : currentProductData.status,
        detail: formData.get('detail') || currentProductData.detail
      };
  
      if (formData.get('image')) {
        const imageFile = formData.get('image');
        const storageRef = ref(storage, `products/${imageFile.name}`);
        const fileSnapshot = await uploadBytes(storageRef, imageFile);
        const fileUrl = await getDownloadURL(fileSnapshot.ref);
        updatedValues.imageUrl = fileUrl;
      }
  
      await updateDoc(productRef, updatedValues);
      return NextResponse.json({ message: 'Producto editado con éxito' });
    } catch (error) {
      console.error("Error updating product: ", error);
      return NextResponse.json({ error: 'Error al editar el producto' }, { status: 500 });
    }
}
  
export async function DELETE(request, { params }) {
  
  try {
        const { id } = params;

        if (!id) {
          return NextResponse.json({ error: "Product ID is required" }, { status: 400 });
        }

        const productRef = doc(db, "products", id);
        await deleteDoc(productRef);
        return NextResponse.json({ message: 'Producto eliminado con éxito' });
    } catch (error) {
        console.error("Error deleting product: ", error);
        return NextResponse.json({ error: 'Error al eliminar el producto' }, { status: 500 });
    }
}  