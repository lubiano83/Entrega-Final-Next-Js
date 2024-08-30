import React from 'react';
import EditForm from '@/app/components/admin/EditForm';
import { collection, getDocs, query, where } from '@firebase/firestore';
import { db } from '@/app/firebase/config';

const getDocumentById = async (id) => {
  const productRef = collection(db, "products");
  const q = query(productRef, where("id", "==", id));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs[0].data()
};

const Edit = async ({ params }) => {

  const { id } = params;
  const product = await getDocumentById(id);
  console.log(product);

  return (
    <div className='text-gray-700 flex justify-center items-center h-full'>
      <EditForm />
    </div>
  )
}; export default Edit;