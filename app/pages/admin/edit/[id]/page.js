import React from 'react'

const EditPage = ({params}) => {

  const { id } = params;

  return (
    <div className='text-gray-700 flex justify-center items-center h-full'>Esta es la pagina para editar productos!! {id}</div>
  )
}; export default EditPage;