import React from 'react';
import Image from 'next/image';

const SocialMedia = () => {
  return (
    <div className='flex gap-2'>
      <Image src={"/facebook-svgrepo-com.svg"} alt={"autoshop facebook"} height={30} width={30} className='cursor-pointer hover:scale-110' />
      <Image src={"/instagram-svgrepo-com.svg"} alt={"autoshop instagram"} height={30} width={30} className='cursor-pointer hover:scale-110' />
      <Image src={"/whatsapp-svgrepo-com.svg"} alt={"autoshop whatsapp"} height={30} width={30} className='cursor-pointer hover:scale-110' />
    </div>
  )
}; export default SocialMedia;
