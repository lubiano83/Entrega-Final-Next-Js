import React from 'react';
import Banner from '../../components/Banner';

const ContactLayout = ({children}) => {
  return (
    <div className='bg-white h-full flex flex-col justify-between items-center text-center'>
      <Banner>Dejanos tu mensaje y a la brevedad te contestaremos...</Banner>
      {children}
    </div>
  )
}; export default ContactLayout;