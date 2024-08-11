"use client";
import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Banner = ({children}) => {

  const { isDarkMode } = useDarkMode();
  const router = useRouter();

  return (
    <div className={`${isDarkMode ? 'bg-orange-400' : 'bg-blue-400'} py-2 px-8 w-full text-white font-bold flex justify-between items-center`}>
      <Image src={"/arrow-sm-left-svgrepo-com.svg"} alt={"autoshop arrowback"} height={45} onClick={() => router.back()} width={45} className='cursor-pointer hover:scale-110'/>
      <div className='w-full flex justify-evenly items-center flex-wrap px-4'>
        {children}
      </div>
      <Image src={"/arrow-sm-right-svgrepo-com.svg"} alt={"autoshop arrowfoward"} height={45} width={45} onClick={() => router.forward()} className='cursor-pointer hover:scale-110'/>
    </div>
  )
}; export default Banner;
