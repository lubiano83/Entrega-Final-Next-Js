import { NextResponse } from 'next/server';
import { db } from '../../firebase/config';
import { addDoc, query, where, getDocs, collection } from 'firebase/firestore';

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
    console.log('Received data:', data);

    if (!data.email || !data.products) {
      console.log('Faltan datos necesarios:', data);
      return NextResponse.json({ error: 'Faltan datos necesarios' }, { status: 400 });
    }

    // Procesa los productos antes de guardarlos
    const processedProducts = data.products.map(product => ({
      id: product.id,
      brand: product.brand,
      model: product.model,
      description: product.description,
      quantity: product.counter, // Asegúrate de que 'counter' sea el campo correcto para la cantidad
      price: product.price
    }));

    // Obtén la referencia de la colección de 'carts'
    const cartsCollection = collection(db, 'carts');

    // Opcional: Verifica si ya existe un carrito para este usuario (puedes omitir este paso si no es necesario)
    const q = query(cartsCollection, where("email", "==", data.email));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      console.log('El carrito ya existe para este usuario.');
      return NextResponse.json({ error: 'El carrito ya existe para este usuario.' }, { status: 400 });
    }

    // Crea un nuevo documento con ID generado automáticamente
    await addDoc(cartsCollection, {
      email: data.email,
      products: processedProducts,
      lastUpdated: new Date().toISOString(),
      isSold: false
    });

    return NextResponse.json({ message: 'Carrito guardado con éxito' }, { status: 201 });
  } catch (error) {
    console.error('Error al guardar el carrito en Firestore:', error);
    return NextResponse.json({ error: 'Hubo un problema al guardar el carrito' }, { status: 500 });
  }
}
