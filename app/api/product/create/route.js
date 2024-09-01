import { NextResponse } from 'next/server';
import { collection, addDoc } from 'firebase/firestore';
import { db, storage } from '@/app/firebase/config';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export async function POST(request) {
  try {
    const formData = await request.formData();
    const imageFile = formData.get('image');
    const category = formData.get('category');
    const brand = formData.get('brand');
    const model = formData.get('model');
    const description = formData.get('description');
    const filter = formData.get('filter');
    const quantity = formData.get('quantity');
    const price = formData.get('price');
    const status = formData.get('status') === 'true';
    const detail = formData.get('detail');

    if (!imageFile) {
      return NextResponse.json({ error: 'No image file uploaded' }, { status: 400 });
    }

    const storageRef = ref(storage, `products/${imageFile.name}`);
    await uploadBytes(storageRef, imageFile);
    const fileUrl = await getDownloadURL(storageRef);

    const productData = {
      imageUrl: fileUrl,
      category,
      brand,
      model,
      description,
      filter,
      quantity: Number(quantity),
      price: Number(price),
      status,
      detail,
    };

    await addDoc(collection(db, 'products'), productData);
    return NextResponse.json({ message: 'Producto creado con éxito' }, { status: 201 });
  } catch (error) {
    console.error('Error al crear el producto:', error);
    return NextResponse.json({ error: 'Error al crear el producto' }, { status: 500 });
  }
}
