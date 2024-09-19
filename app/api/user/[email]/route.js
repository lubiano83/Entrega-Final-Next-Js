import { db, storage } from '@/app/firebase/config';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { NextResponse } from 'next/server';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

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
    const formData = await req.formData(); // Extracción de todos los campos del formulario

    if (!email) {
      return NextResponse.json({ error: "User email is required" }, { status: 400 });
    }

    // Referencia al usuario en Firestore
    const userRef = doc(db, "users", email);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 });
    }

    const currentUserData = userSnap.data();

    // Preparar los nuevos valores para la actualización
    let updatedValues = {
      name: formData.get('name') || currentUserData.name,
      lastname: formData.get('lastname') || currentUserData.lastname,
      city: formData.get('city') || currentUserData.city,
      address: formData.get('address') || currentUserData.address,
      phone: formData.get('phone') || currentUserData.phone,
      admin: false
    };

    // Subida de la imagen si se ha proporcionado una
    if (formData.get('image')) {
      const imageFile = formData.get('image');
      const storageRef = ref(storage, `users/${imageFile.name}`); // Usar el correo como ID
      const fileSnapshot = await uploadBytes(storageRef, imageFile);
      const fileUrl = await getDownloadURL(fileSnapshot.ref);
      updatedValues.imageUrl = fileUrl; // Guardar la URL de la imagen subida
    }

    // Actualizar los datos en Firestore
    await updateDoc(userRef, updatedValues);
    return NextResponse.json({ message: 'Datos actualizados correctamente' }, { status: 200 });
  } catch (error) {
    console.error('Error al actualizar los datos del usuario:', error);
    return NextResponse.json({ message: 'Error al actualizar los datos del usuario', error: error.message }, { status: 500 });
  }
}