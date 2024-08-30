import React from 'react'
import NavigationMenu from '../../../components/filters/NavigationMenu';

const DetailLayout = ({children}) => {
  return (
    <div className='bg-white w-full h-full flex flex-col justify-between items-center'>
        <NavigationMenu />
        {children}
    </div>
  )
}; export default DetailLayout;
