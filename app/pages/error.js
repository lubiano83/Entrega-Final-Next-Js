"use client";
import { useEffect } from "react";
import Button from "../components/Button";
import Title from "../components/Title";
import { useRouter } from "next/navigation";

export default function Error ({error, reset}) {

    const router = useRouter();

    useEffect(() => {
        console.log(error);
    }, [error])

    return (
        <div className="flex flex-col w-full justify-center items-center bg-white h-full text-gray-700 p-8 gap-4">
            <Title style="text-2xl">Algo salio mal..</Title>
            <div className="flex justify-center items-center gap-2">
                <Button handleClick={reset}>Recargar</Button>
                <Button handleClick={router.push("/")}>Inicio</Button>
            </div>
        </div>
    )
};