import Button from "./components/Button";
import Title from "./components/Title";

export default function GlobalError({error, reset}) {
    <html>
        <body className="flex flex-col w-full justify-center items-center bg-white h-full text-gray-700 p-8">
            <Title>Algo salio mal..</Title>
            <Button handleClick={() => reset()}>Recargar</Button>
        </body>
    </html>
};