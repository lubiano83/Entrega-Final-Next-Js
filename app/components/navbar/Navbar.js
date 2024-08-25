"use client";
import React from 'react';
import Menu from './Menu';
import Logo from '../Logo';
import Link from 'next/link';
import { useDarkMode } from "../../hooks/useDarkMode";
import SvgImage from '../SvgImage';

const Navbar = ({children}) => {

  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={`bg-blue-600 flex justify-around px-4 items-center py-4 ${isDarkMode ? 'bg-orange-600' : 'bg-blue-600'}`}>
      <div className='flex gap-1'>
          <Menu isDarkMode={isDarkMode} />
          <Link href={"/"}>
            <Logo />
          </Link>
      </div>
        {children}
        <SvgImage src={"/light-svgrepo-com-white.svg"} handleClick={toggleDarkMode}/>
        <Link href={"/pages/cart"}>
          <SvgImage src={"/cart-shopping-svgrepo-com-white.svg"} />
        </Link>
    </div>
  )
}; export default Navbar;