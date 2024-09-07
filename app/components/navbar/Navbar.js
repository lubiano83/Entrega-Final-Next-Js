"use client";
import React from 'react';
import Menu from './Menu';
import Logo from '../Logo';
import Link from 'next/link';
import { useDarkMode } from "../../hooks/useDarkMode";
import SvgImage from '../SvgImage';
import { useCart } from '../../hooks/useCart';

const Navbar = ({children}) => {

  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { totalQuantity } = useCart();
  
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
        <div className='flex justify-center items-center'>
          <Link href={"/pages/cart"}>
            <SvgImage src={"/cart-large-minimalistic-svgrepo-com.svg"} />
          </Link>
          <p className='absolute top-7 text-xs text-white'>{totalQuantity === 0 ? "" : totalQuantity}</p>
        </div>
    </div>
  )
}; export default Navbar;