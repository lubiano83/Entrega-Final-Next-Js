"use client";
import React from 'react';
import ContactForm from '@/app/components/contact/contactForm';
import { useDarkMode } from '../../hooks/useDarkMode';

const Contact = () => {

  const { isDarkMode } = useDarkMode();

  return (
    <div className='bg-white flex flex-col justify-center items-center text-gray-700 h-full w-full gap-4 m-8'>
      <h2 className={`${isDarkMode ? "text-orange-600" : "text-blue-600"} text-3xl font-bold flex flex-wrap justify-center items-center text-center`}>Contactanos...</h2>
      <ContactForm />
    </div>
  )
}; export default Contact;