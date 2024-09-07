import { NextResponse } from 'next/server';
import { db } from '../../firebase/config';
import { doc, setDoc, getDoc, getDocs, collection } from 'firebase/firestore';

export async function GET() {
  try {
    const collectionRef = collection(db, 'contacts');
    const querySnapshot = await getDocs(collectionRef);

    const contacts = querySnapshot.docs.map(doc => {
      const data = doc.data();
      const messages = data.messages || [];
      
      messages.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
      
      return {
        email: doc.id,
        messages: messages
      };
    });

    contacts.sort((a, b) => {
      const lastMessageA = a.messages[0] ? new Date(a.messages[0].timestamp) : new Date(0);
      const lastMessageB = b.messages[0] ? new Date(b.messages[0].timestamp) : new Date(0);
      return lastMessageB - lastMessageA;
    });

    return NextResponse.json(contacts, { status: 200 });
  } catch (error) {
    console.error('Error al obtener los contactos de Firestore:', error);
    return NextResponse.json({ error: 'Hubo un problema al obtener los contactos' }, { status: 500 });
  }
}


export async function POST(request) {
  try {
    const data = await request.json();
    console.log('Received data:', data);

    if (!data.email || !data.text) {
      console.log('Missing data:', data);
      return NextResponse.json({ error: 'Faltan datos necesarios' }, { status: 400 });
    }

    const docRef = doc(db, 'contacts', data.email);
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      const existingData = docSnapshot.data();
      await setDoc(docRef, {
        email: data.email,
        messages: [...existingData.messages, {
          text: data.text,
          timestamp: new Date().toISOString()
        }],
      }, { merge: true });
    } else {
      await setDoc(docRef, {
        email: data.email,
        messages: [{
          text: data.text,
          timestamp: new Date().toISOString()
        }],
      });
    }

    return NextResponse.json({ message: 'Mensaje guardado con éxito' }, { status: 201 });
  } catch (error) {
    console.error('Error al guardar el mensaje en Firestore:', error);
    return NextResponse.json({ error: 'Hubo un problema al guardar el mensaje' }, { status: 500 });
  }
}
