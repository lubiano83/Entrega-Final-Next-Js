import CreateForm from '@/app/components/admin/CreateForm';
import Title from '@/app/components/Title';
import React from 'react';

const CreatePage = () => {
  return (
    <div className='text-gray-700 h-full flex flex-col justify-center items-center w-full p-8 gap-4'>
      <Title style="text-3xl">Ingreso de Productos:</Title>
      <CreateForm />
    </div>
  )
}; export default CreatePage;