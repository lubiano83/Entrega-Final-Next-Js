import { collection, query, where, orderBy, getDocs } from 'firebase/firestore';
import { NextResponse } from 'next/server';
import { db } from '../../../firebase/config.js';

export async function GET(request, { params }) {
  const email = params.email; // Obtener el email directamente de los parámetros de la ruta

  if (!email) {
    return NextResponse.json({ error: 'Email es requerido' }, { status: 400 });
  }

  try {
    const collectionRef = collection(db, 'carts');
    const cartsQuery = query(
      collectionRef,
      where('email', '==', email),
      orderBy('lastUpdated', 'desc') // Asegúrate de que este campo esté indexado en Firestore
    );

    const querySnapshot = await getDocs(cartsQuery);

    const carts = querySnapshot.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });

    return NextResponse.json(carts, { status: 200 });
  } catch (error) {
    console.error('Error al obtener los carritos de Firestore:', error);
    return NextResponse.json({ error: 'Hubo un problema al obtener los carritos' }, { status: 500 });
  }
}
