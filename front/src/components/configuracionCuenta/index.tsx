'use client'

import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { ButtonComponent } from "../button";
import { useRouter } from 'next/navigation';

export function Icon({ id, open }: { id: number; open: number }) {
  
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}

export function AccordionCustomIcon() {

    const router = useRouter();

    const handlerBack = () => {
        router.push('/centro-de-ayuda');
    }
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

    return (
        <div className="flex flex-col ml-4 w-3/4">
            <Accordion
                open={open === 1}
                icon={<Icon id={1} open={open} />}
                placeholder={""}
                onPointerEnterCapture
                onPointerLeaveCapture
            >
                <AccordionHeader
                    onClick={() => handleOpen(1)}
                    placeholder={""}
                    onPointerEnterCapture
                    onPointerLeaveCapture
                >
                    Crear cuenta

                </AccordionHeader>
                {open === 1 && (
                    <AccordionBody> 
                        <p className="text-xl mb-4"> A continuación te dejamos los pasos para Registrarte en ByteBox.com </p>
                        <p> 1- Ingresá a http://localhost:3000/register. </p>
                        <p> 2- Completa tus Datos. </p>
                        <p> 3- Hacé click en Crear Cuenta. </p>
                        <p className="mt-4"> LISTO ASI DE SENCILLO!</p>
                    </AccordionBody>
                )}
            </Accordion>
            <Accordion
                open={open === 2}
                icon={<Icon id={2} open={open} />}
                placeholder={""}
                onPointerEnterCapture
                onPointerLeaveCapture
            >
                <AccordionHeader
                    onClick={() => handleOpen(2)}
                    placeholder={""}
                    onPointerEnterCapture
                    onPointerLeaveCapture
                >
                    Panel Principal
                </AccordionHeader>
                {open === 2 && (
                    <AccordionBody>
                        <p className="text-xl mb-2"> Mis Datos</p>
                        <p> Al ingresar podemos verificar los datos registrados y modificarlos </p>
                        <p className="text-xl mb-2"> Mis Compras</p>
                        <p> Al ingresar podemos verificar el historial de comprar, modificar envios, o cancelar las mismas </p>
                    </AccordionBody>
                )}
            </Accordion>
           
            <ButtonComponent onClick={handlerBack} text="Volver"/>
        </div>
    )

}
