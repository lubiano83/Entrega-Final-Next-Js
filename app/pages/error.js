"use client";
import { useEffect } from "react";
import Button from "../components/Button";
import Title from "../components/Title";

export default function Error ({error, reset}) {

    useEffect(() => {
        console.log(error);
    }, [error])

    return (
        <div className="flex flex-col w-full justify-center items-center bg-white h-full text-gray-700 p-8">
            <Title style="text-2xl">Algo salio mal..</Title>
            <Button handleClick={reset}>Recargar</Button>
        </div>
    )
};