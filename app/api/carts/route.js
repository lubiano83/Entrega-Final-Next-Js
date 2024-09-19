import { NextResponse } from 'next/server';
import { db } from '../../firebase/config';
import { addDoc, getDocs, collection, updateDoc, doc, getDoc } from 'firebase/firestore';

async function getUserData(email) {
  try {
    const baseURL = process.env.NEXT_PUBLIC_FIREBASE_API_URL;
    const response = await fetch(`${baseURL}/user/${email}`);
    if (!response.ok) {
      throw new Error('Error al obtener los datos del usuario');
    }
    return await response.json();
  } catch (error) {
    console.error('Error al obtener los datos del usuario:', error);
    throw new Error('Error al obtener los datos del usuario');
  }
}

export async function GET() {
  try {
    const collectionRef = collection(db, 'carts');
    const querySnapshot = await getDocs(collectionRef);

    const carts = querySnapshot.docs.map(doc => {
      const cart = doc.data();
      return {
        id: doc.id,
        email: doc.id,
        ...cart
      };
    });

    carts.sort((a, b) => {
      const dateA = new Date(a.lastUpdated);
      const dateB = new Date(b.lastUpdated);
      return dateB - dateA;
    });

    return NextResponse.json(carts, { status: 200 });
  } catch (error) {
    console.error('Error al obtener los carritos de Firestore:', error);
    return NextResponse.json({ error: 'Hubo un problema al obtener los carritos' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const data = await request.json();

    if (!data.email || !data.products || !Array.isArray(data.products)) {
      return NextResponse.json({ error: 'Faltan datos necesarios' }, { status: 400 });
    }

    let userData;
    try {
      userData = await getUserData(data.email);
    } catch (error) {
      return NextResponse.json({ error: 'No se pudo obtener la información del usuario' }, { status: 500 });
    }

    const processedProducts = data.products.map(product => ({
      id: product.id,
      brand: product.brand,
      model: product.model,
      description: product.description,
      quantity: product.counter,
      price: product.price
    }));

    const cartsCollection = collection(db, 'carts');

    await addDoc(cartsCollection, {
      email: data.email,
      name: userData.name ?? "",
      lastname: userData.lastname ?? "",
      city: userData.city ?? "",
      address: userData.address ?? "",
      phone: userData.phone ?? "",
      products: processedProducts,
      lastUpdated: new Date().toLocaleString()
    });

    const productsCollection = collection(db, 'products');
    for (const product of data.products) {
      const productRef = doc(productsCollection, product.id);
      const productDoc = await getDoc(productRef);

      if (productDoc.exists()) {
        const productData = productDoc.data();
        const newQuantity = productData.quantity - product.counter;

        if (newQuantity < 0) {
          console.log(`La cantidad del producto ${product.id} no puede ser negativa`);
          return NextResponse.json({ error: `La cantidad del producto ${product.id} no puede ser negativa` }, { status: 400 });
        }

        await updateDoc(productRef, { quantity: newQuantity });
      } else {
        console.log(`Producto con ID ${product.id} no encontrado`);
        return NextResponse.json({ error: `Producto con ID ${product.id} no encontrado` }, { status: 404 });
      }
    }

    return NextResponse.json({ message: 'Carrito guardado y cantidades actualizadas con éxito' }, { status: 201 });
  } catch (error) {
    console.error('Error al guardar el carrito en Firestore:', error);
    return NextResponse.json({ error: 'Hubo un problema al guardar el carrito' }, { status: 500 });
  }
}
