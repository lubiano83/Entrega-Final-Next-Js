import React from 'react';
import SvgImage from '../SvgImage';

const ProductTable = ({ id, imageUrl, category, brand, model, description, filter, quantity, price, status }) => {

    console.log(id);
    
  return (
    <div className='w-full'>
        <table className='w-full'>
            <thead>
                <tr className='flex gap-8 justify-center items-center text-gray-700'>
                    <th className='w-56'>Id:</th>
                    <th className='w-96 h-12 overflow-hidden text-center'>Image:</th>
                    <th className='w-52'>Category:</th>
                    <th className='w-44'>Brand:</th>
                    <th className='w-44'>Model:</th>
                    <th className='w-44'>Description:</th>
                    <th className='w-40'>Filter:</th>
                    <th className='w-36'>Quatity:</th>
                    <th className='w-40 '>Price:</th>
                    <th className='w-24'>Status:</th>
                </tr>
            </thead>
            <tbody className='text-sm flex flex-col gap-2'>
                <tr className={`h-12 overflow-hidden text-lg flex gap-8 bg-gray-700 text-white px-8 py-2 justify-center items-center rounded-xl text-center`}>
                    <td className='w-56'>{id}</td>
                    <td className='w-96 h-12 overflow-hidden flex flex-nowrap'><a href={imageUrl} target='_blank'>{imageUrl}</a></td>
                    <td className='w-52'>{category}</td>
                    <td className='w-44'>{brand}</td>
                    <td className='w-44'>{model}</td>
                    <td className='w-44'>{description}</td>
                    <td className='w-40'>{filter}</td>
                    <td className='w-36'>{quantity}</td>
                    <td className='w-40'>{price}</td>
                    <td className='flex justify-center items-center w-24'>{status === true 
                    ? <SvgImage src={"/check-svgrepo-com.svg"} />
                    : <SvgImage src={"/cross-svgrepo-com.svg"} />
                    }</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}; export default ProductTable;