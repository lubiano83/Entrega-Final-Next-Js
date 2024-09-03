import { NextResponse } from 'next/server';
import { db } from '../../../firebase/config';
import { doc, getDoc } from 'firebase/firestore';

export async function GET(request, { params }) {
  try {
    const { email } = params;

    if (!email) {
      return NextResponse.json({ error: 'El parámetro de email es necesario' }, { status: 400 });
    }

    const docRef = doc(db, 'contacts', email);
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      return NextResponse.json({
        email: docSnapshot.id,
        messages: docSnapshot.data().messages
      }, { status: 200 });
    } else {
      return NextResponse.json({ error: 'No se encontraron mensajes para este email' }, { status: 404 });
    }
  } catch (error) {
    console.error('Error al obtener los mensajes de Firestore:', error);
    return NextResponse.json({ error: 'Hubo un problema al obtener los mensajes' }, { status: 500 });
  }
}