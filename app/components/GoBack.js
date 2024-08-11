"use client";
import React from 'react';
import Button from './Button';
import { useRouter } from 'next/navigation';

const GoBack = () => {

    const router = useRouter();

  return (
    <Button handleClick={() => router.back()}>Volver Atras</Button>
  )
}; export default GoBack;
