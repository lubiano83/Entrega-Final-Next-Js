"use client";
import React from 'react';
import Button from '../Button';
import { usePrice } from '@/app/hooks/usePrice';
import { useCart } from '@/app/hooks/useCart';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/hooks/useAuth';

const TotalCart = ({ totalPrice, totalQuantity }) => {
    
    const { setPrice } = usePrice();
    const { cart, clearCart } = useCart();
    const { user } = useAuth();
    const router = useRouter();

    const baseURL = process.env.NEXT_PUBLIC_FIREBASE_API_URL;

    const handlePayment = async () => {
        if (user.logged) {
            try {
                // Verificar si los datos del usuario están completos
                const userResponse = await fetch(`/api/user/${user.email}`);
                const userDetails = await userResponse.json();

                console.log(userDetails);
                
    
                // Suponiendo que la API de usuarios devuelve los datos del usuario
                if (!userDetails.name || !userDetails.address || !userDetails.phone || !userDetails.lastname || !userDetails.city) {
                    Swal.fire({
                        position: 'center',
                        icon: 'warning',
                        title: 'Faltan datos en tu perfil. Por favor, completa tu información antes de realizar la compra.',
                        showConfirmButton: true,
                    });
                    setTimeout(() => {
                        router.push(`/pages/user/${user.email}`); // Redirige a la página de perfil para que el usuario complete los datos
                    }, 2000);
                    return; // Detener el proceso de compra si faltan datos
                }
    
                // Construir el objeto con los datos necesarios para la API del carrito
                const cartData = {
                    email: user.email,
                    products: cart.map(item => ({
                        id: item.item.id,
                        brand: item.item.brand,
                        model: item.item.model,
                        description: item.item.description,
                        counter: item.counter,
                        price: item.item.price
                    }))
                };
    
                // Enviar los datos del carrito a la API
                const response = await fetch('/api/carts', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(cartData)
                });
    
                const result = await response.json();
    
                if (response.ok) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Muchas gracias por tu compra!',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    router.refresh();
                    setTimeout(() => {
                        clearCart(); // Limpia el carrito después de guardar
                        router.push('/pages/order'); // Redirige a la página de orden
                    }, 1500);
                } else {
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'Hubo un problema al procesar tu compra',
                        text: result.error,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            } catch (error) {
                console.error('Error al procesar el pago:', error);
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Hubo un problema al procesar tu compra',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        } else {
            Swal.fire({
                position: 'center',
                icon: 'warning',
                title: 'Primero debes entrar con tu cuenta.',
                showConfirmButton: false,
                timer: 1500
            });
            setTimeout(() => {
                router.push('/pages/login');
            }, 1500);
        }
    };

    return (
        <div className='flex flex-col gap-2 justify-center items-center'>
            <div>
                <p className='text-gray-700 text-2xl text-center'>Total Productos: {totalQuantity ? setPrice(totalQuantity) : "0"}</p>
                <p className='text-gray-700 text-2xl text-center'>Precio Total: ${totalPrice ? setPrice(totalPrice) : "0"}</p>
            </div>
            {totalQuantity === 0
                ? <div className='opacity-50'><Button>Pagar</Button></div>
                : <Button handleClick={handlePayment}>Pagar</Button>
            }
        </div>
    );
};

export default TotalCart;
