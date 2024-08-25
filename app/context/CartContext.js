"use client";
import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [ cart, setCart ] = useState([]);

    const addToCart = (productToAdd) => {
        if(!isInCart(productToAdd.item.id)) {
            setCart(prev => [...prev, productToAdd]);
        } else {
            alert("El producto ya esta en el carrito");
        }
    };

    const getTotalPrice = () => {
        let totalPrice = 0;
        
        cart.forEach(prod => {
            totalPrice += prod.counter * prod.item.price;
        })
        
        return totalPrice;
    };
    
    const getTotalQuantity = () => {
        let accu = 0;

        cart.forEach(prod => {
            accu += prod.counter
        })

        return accu
    }

    const removeItem = (id) => {
        const cartUpdated = cart.filter(prod => prod.item.id !== id);
        setCart(cartUpdated);
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.item.id === id)
    }

    
    return (
        <CartContext.Provider value={{cart, addToCart, getTotalPrice, getTotalQuantity, removeItem, clearCart, isInCart}}>
            {children}
        </CartContext.Provider>
    )
};