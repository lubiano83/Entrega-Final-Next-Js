"use client";
import React from 'react';
import SvgImage from '../SvgImage';
import { useDarkMode } from '@/app/hooks/useDarkMode';

const TableCard = ({ id, imageUrl, category, brand, model, description, filter, quantity, price, status }) => {

    const { isDarkMode } = useDarkMode();

  return (
   <>
        <tr className={`h-12 text-lg flex justify-between gap-8 bg-gray-700 text-white px-8 py-2 rounded-xl text-center border-2 ${isDarkMode ? "border-orange-600" : "border-blue-600"}`}>
            <td className="w-64 bg-red-500">{id}</td>
            <td className="w-96 overflow-hidden text-center bg-red-500"><a href={imageUrl} target="_blank" rel="noopener noreferrer">{imageUrl}</a></td>
            <td className="w-52 bg-red-500">{category}</td>
            <td className="w-44 bg-red-500">{brand}</td>
            <td className="w-44 bg-red-500">{model}</td>
            <td className="w-44 bg-red-500">{description}</td>
            <td className="w-40 bg-red-500">{filter}</td>
            <td className="w-36 bg-red-500">{quantity}</td>
            <td className="w-40 bg-red-500">{price}</td>
            <td className="flex justify-center items-center w-24 bg-red-500">
                {status === true ? (
                <SvgImage src={"/check-svgrepo-com.svg"} />
                ) : (
                <SvgImage src={"/cross-svgrepo-com.svg"} />
                )}
            </td>
        </tr>
    </>
  );
};

export default TableCard;
