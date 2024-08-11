import React from 'react';
import Banner from '../../components/Banner';

const AdminLayout = ({children}) => {
  return (
    <div className='bg-white h-full flex flex-col justify-between items-center text-center'>
      <Banner>Bienvenido José Pablo Lubiano...</Banner>
      {children}
    </div>
  )
}; export default AdminLayout;