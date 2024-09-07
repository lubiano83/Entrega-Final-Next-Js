"use client";
import { createContext, useState } from "react";
import Swal from 'sweetalert2';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (productToAdd) => {
        if (!isInCart(productToAdd.item.id)) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Producto agregado con éxito.",
                showConfirmButton: false,
                timer: 1500
            });
            setCart(prev => [...prev, productToAdd]);
        } else {
            Swal.fire({
                position: "center",
                icon: "warning",
                title: "Este producto ya está en el carrito.",
                showConfirmButton: false,
                timer: 1500
            });
        }
    };

    const getTotalPrice = () => {
        return cart.reduce((total, prod) => total + prod.counter * prod.item.price, 0);
    };

    const getTotalQuantity = () => {
        return cart.reduce((total, prod) => total + prod.counter, 0);
    };

    const totalQuantity = getTotalQuantity()

    const removeItem = (id) => {
        setCart(cart.filter(prod => prod.item.id !== id));
    };

    const clearCart = () => {
        setCart([]);
    };

    const isInCart = (id) => {
        return cart.some(prod => prod.item.id === id);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, getTotalPrice, getTotalQuantity, removeItem, clearCart, isInCart, totalQuantity }}>
            {children}
        </CartContext.Provider>
    );
};