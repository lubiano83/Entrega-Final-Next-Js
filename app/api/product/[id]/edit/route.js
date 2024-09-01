import { NextResponse } from 'next/server';
import { db, storage } from '@/app/firebase/config';
import { doc, updateDoc, deleteDoc, getDoc } from '@firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export async function PATCH(request, { params }) {
  const { id } = params;
  const formData = await request.formData();
  
  try {
    const productRef = doc(db, "products", id);
    const productSnap = await getDoc(productRef);

    if (!productSnap.exists()) {
      return NextResponse.json({ error: 'Producto no encontrado' }, { status: 404 });
    }

    let updatedValues = {
      category: formData.get('category'),
      brand: formData.get('brand'),
      model: formData.get('model'),
      description: formData.get('description'),
      filter: formData.get('filter'),
      quantity: parseInt(formData.get('quantity'), 10),
      price: parseFloat(formData.get('price')),
      status: formData.get('status') === 'true',
      detail: formData.get('detail')
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
  const { id } = params;

  try {
    const productRef = doc(db, "products", id);
    await deleteDoc(productRef);
    return NextResponse.json({ message: 'Producto eliminado con éxito' });
  } catch (error) {
    console.error("Error deleting product: ", error);
    return NextResponse.json({ error: 'Error al eliminar el producto' }, { status: 500 });
  }
}
