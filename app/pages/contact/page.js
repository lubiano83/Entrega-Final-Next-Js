"use client";
import React from 'react';
import ContactForm from '@/app/components/contact/contactForm';
import { useDarkMode } from '../../hooks/useDarkMode';
import Title from '@/app/components/Title';

const Contact = () => {

  const { isDarkMode } = useDarkMode();

  return (
    <div className='bg-white flex flex-col justify-center items-center text-gray-700 h-full w-full gap-4 m-8'>
      <ContactForm />
    </div>
  )
}; export default Contact;