"use client";
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [ cart, setCart ] = useState([]);
    console.log(cart);

    const addToCart = (item) => {
        setCart([...cart, item])
    };
    
    return (
        <CartContext.Provider value={{cart, addToCart}}>
            {children}
        </CartContext.Provider>
    )
};

export const useCartContext = () => useContext(CartContext);