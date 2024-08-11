import React from 'react';
import Image from 'next/image';

const SvgImage = ({src, toggleDarkMode}) => {
  return (
    <Image src={src} alt={"autoshop svg image"} height={45} width={45} onClick={toggleDarkMode} className='hover:scale-110 cursor-pointer' />
  )
}; export default SvgImage;
