// /pages/api/carts/index.js
import { NextResponse } from 'next/server';
import { db } from '../../firebase/config';  // Ajusta el path según la ubicación de tu archivo de configuración Firebase
import { doc, setDoc, getDoc, getDocs, collection } from 'firebase/firestore';

// Handler para obtener carritos de compras no vendidos
export async function GET() {
  try {
    const collectionRef = collection(db, 'carts');
    const querySnapshot = await getDocs(collectionRef);

    const carts = querySnapshot.docs.map(doc => {
      const data = doc.data();

      // Filtrar carritos que aún no han sido vendidos
      if (!data.isSold) {
        return {
          email: doc.id,
          ...data
        };
      }
      return null;
    }).filter(cart => cart !== null); // Filtrar nulos si no cumplen la condición

    // Ordenar los carritos por fecha de creación o actualización
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
    console.log('Received data:', data);

    if (!data.email || !data.products) {
      console.log('Faltan datos necesarios:', data);
      return NextResponse.json({ error: 'Faltan datos necesarios' }, { status: 400 });
    }

    const docRef = doc(db, 'carts', data.email);
    const docSnapshot = await getDoc(docRef);

    // Prepara solo los campos necesarios para almacenar en Firestore
    const processedProducts = data.products.map(product => ({
      id: product.id,
      quantity: product.counter,
      price: product.price
    }));

    if (docSnapshot.exists()) {
      // Si el carrito ya existe, actualizarlo
      const existingData = docSnapshot.data();
      await setDoc(docRef, {
        products: processedProducts,
        lastUpdated: new Date().toISOString(),
        isSold: false,
      }, { merge: true });
    } else {
      // Si el carrito no existe, crearlo
      await setDoc(docRef, {
        email: data.email,
        products: processedProducts,
        lastUpdated: new Date().toISOString(),
        isSold: false,
      });
    }

    return NextResponse.json({ message: 'Carrito guardado con éxito' }, { status: 201 });
  } catch (error) {
    console.error('Error al guardar el carrito en Firestore:', error);
    return NextResponse.json({ error: 'Hubo un problema al guardar el carrito' }, { status: 500 });
  }
}
