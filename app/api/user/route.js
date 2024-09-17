import { db } from '@/app/firebase/config';
import { collection, getDocs } from 'firebase/firestore';
import { NextResponse } from 'next/server';

export async function GET(req) {
  try {
    const usersCollectionRef = collection(db, 'users');
    const querySnapshot = await getDocs(usersCollectionRef);

    const users = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error('Error al obtener los datos de los usuarios:', error);
    return NextResponse.json({ message: 'Error al obtener los datos de los usuarios' }, { status: 500 });
  }
}