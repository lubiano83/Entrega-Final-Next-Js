"use client";
import { createContext, useState } from "react";
import Swal from 'sweetalert2';

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [ cart, setCart ] = useState([]);

    const addToCart = (productToAdd) => {
        if(!isInCart(productToAdd.item.id)) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Producto agregado con éxito.",
                showConfirmButton: false,
                timer: 1500
            });
            setTimeout(() => {
                setCart(prev => [...prev, productToAdd]);
            }, 1500);
        } else {
            Swal.fire({
                position: "center",
                icon: "warning",
                title: "Este producto ya esta en el Carrito!!",
                showConfirmButton: false,
                timer: 1500
            });
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

    const totalQuantity = getTotalQuantity()

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
        <CartContext.Provider value={{cart, addToCart, getTotalPrice, getTotalQuantity, removeItem, clearCart, isInCart, totalQuantity}}>
            {children}
        </CartContext.Provider>
    )
};