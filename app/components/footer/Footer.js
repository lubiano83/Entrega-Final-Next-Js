"use client";
import React from 'react';
import Logo from '../Logo';
import Horario from './Horario';
import Link from 'next/link';
import SocialMedia from './SocialMedia';
import { useDarkMode } from "../../hooks/useDarkMode";

const Footer = () => {

  const { isDarkMode } = useDarkMode();

  return (
    <div className={`w-full ${isDarkMode ? 'bg-orange-600' : 'bg-blue-600'} h-auto py-4 flex items-center justify-evenly gap-4 flex-wrap-reverse`}>
      <Horario />
      <SocialMedia />
      <Link href={"/"}>
        <Logo />
      </Link>
    </div>
  )
}; export default Footer;
