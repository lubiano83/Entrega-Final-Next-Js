"use client";
import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

const Title = ({children, style}) => {

  const { isDarkMode } = useDarkMode();

  return (
    <h2 className={`${isDarkMode ? "text-orange-600" : "text-blue-600"} font-bold text-center ${style}`}>
      {children}
    </h2>
  )
}; export default Title;
