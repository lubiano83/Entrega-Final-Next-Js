import React from 'react';
import Image from 'next/image';

const SvgImage = ({src, handleClicl}) => {
  return (
    <Image src={src} alt={"autoshop svg image"} height={45} width={45} onClick={handleClicl} className='hover:scale-110 cursor-pointer' />
  )
}; export default SvgImage;
