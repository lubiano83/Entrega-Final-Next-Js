import { NextResponse } from 'next/server';
import { db } from '../../firebase/config';
import { addDoc, getDocs, collection } from 'firebase/firestore';

export async function GET() {

  try {
    const collectionRef = collection(db, 'carts');
    const querySnapshot = await getDocs(collectionRef);

    const carts = querySnapshot.docs.map(doc => {
      const data = doc.data();

      if (!data.isSold) {
        return {
          email: doc.id,
          ...data
        };
      }
      return null;
    }).filter(cart => cart !== null);
    
    carts.sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated));

    return NextResponse.json(carts, { status: 200 });
  } catch (error) {
    console.error('Error al obtener los carritos no vendidos de Firestore:', error);
    return NextResponse.json({ error: 'Hubo un problema al obtener los carritos no vendidos' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const data = await request.json();

    if (!data.email || !data.products || !Array.isArray(data.products)) {
      return NextResponse.json({ error: 'Faltan datos necesarios' }, { status: 400 });
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
      products: processedProducts,
      lastUpdated: new Date().toISOString()
    });

    return NextResponse.json({ message: 'Carrito guardado con éxito' }, { status: 201 });
  } catch (error) {
    console.error('Error al guardar el carrito en Firestore:', error);
    return NextResponse.json({ error: 'Hubo un problema al guardar el carrito' }, { status: 500 });
  }
}

