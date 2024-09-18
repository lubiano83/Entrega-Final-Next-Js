import { db } from '@/app/firebase/config';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  try {
    const { email } = params;

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const docRef = doc(db, "users", email);
    const docSnapshot = await getDoc(docRef);

    if (!docSnapshot.exists()) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const userData = docSnapshot.data();
    const user = { email: email, ...userData };
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error("Error fetching user from Firestore:", error);
    return NextResponse.json({ error: "Error fetching user from Firestore" }, { status: 500 });
  }
}



export async function PATCH(req, { params }) {
  const { email } = params;
  try {
    const { name, lastname, address, phone } = await req.json();
    
    if (!email || !name || !lastname || !address || !phone) {
      return NextResponse.json({ message: 'Datos incompletos' }, { status: 400 });
    }
    
    const userDocRef = doc(db, 'users', email);
    await setDoc(userDocRef, { name, lastname, address, phone }, { merge: true });
    return NextResponse.json({ message: 'Datos actualizados correctamente' }, { status: 200 });
  } catch (error) {
    console.error('Error al actualizar los datos del usuario:', error);
    return NextResponse.json({ message: 'Error al actualizar los datos del usuario' }, { status: 500 });
  }
}