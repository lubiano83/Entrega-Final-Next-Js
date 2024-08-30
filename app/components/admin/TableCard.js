"use client";
import React from 'react';
import SvgImage from '../SvgImage';
import { useDarkMode } from '@/app/hooks/useDarkMode';
import { useCapitalize } from '@/app/hooks/useCapitalize';
import { usePrice } from '@/app/hooks/usePrice';
import Link from 'next/link';

const TableCard = ({ id, imageUrl, category, brand, model, description, quantity, price, status }) => {

    const { isDarkMode } = useDarkMode();
    const { capitalize } = useCapitalize();
    const { setPrice } = usePrice();

    console.log(id);

  return (
   <>
      <tr className={`h-12 text-lg flex justify-between items-center gap-4 bg-gray-700 text-white px-8 py-2 rounded-xl text-center border-2 ${isDarkMode ? "border-orange-600" : "border-blue-600"}`}>
          <td className="w-64">{id}</td>
          <td className="w-20 flex justify-center items-center"><a href={imageUrl} target="_blank" rel="noopener noreferrer">
            <SvgImage src={"/pic-svgrepo-com.svg"} />
          </a></td>
          <td className="w-40">{capitalize(category)}</td>
          <td className="w-80">{capitalize(brand)}, {model}, {description}</td>
          <td className="w-28">{quantity}</td>
          <td className="w-32">${price ? setPrice(price) : ""}</td>
          <td className="flex justify-center items-center w-20">
              {status === true ? (
              <SvgImage src={"/check-svgrepo-com.svg"} />
              ) : (
              <SvgImage src={"/cross-svgrepo-com.svg"} />
              )}
          </td>
          <td className='flex justify-center items-center w-20'>
            <Link href={`/pages/admin/product/${id}`}>
              <SvgImage src={"/edit-2-svgrepo-com.svg"} />
            </Link>
          </td>
      </tr>
    </>
  );
}; export default TableCard;
