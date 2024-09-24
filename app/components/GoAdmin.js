"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import Button from './Button';

const GoAdmin = () => {

    const router = useRouter();

    const goToAdmin = () => {
        router.push("/pages/admin")
    };

  return (
    <Button handleClick={goToAdmin}>Volver</Button>
  )
}; export default GoAdmin;