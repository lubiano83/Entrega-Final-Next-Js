"use client";
import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

const Button = ({children, handleClick}) => {

  const { isDarkMode } = useDarkMode();

  return (
    <button onClick={handleClick} className={`py-2 px-4 ${isDarkMode ? 'bg-orange-600 hover:border-orange-600 hover:text-orange-600' : 'bg-blue-600 hover:border-blue-600 hover:text-blue-600'} border-2 font-bold rounded-lg text-white text-sm hover:bg-white`}>{children}</button>
  )
}; export default Button;