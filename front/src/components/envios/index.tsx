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
                    Entregas

                </AccordionHeader>
                {open === 1 && (
                    <AccordionBody>
                        <p className="text-xl mb-4"> ¿Cuáles son los plazos y condiciones de envío a domicilio?</p>
                        <p className="mb-4"> Capital Federal y Gran Buenos Aires: </p>
                        <p className="mb-4 ml-8"> -Si compras antes de las 15:00 hs el envio lo tenes en e dia</p>
                        <p className="mb-4 ml-8"> -Si compras despues de las 15:00 hs podemos programar el envio con un rango horario de 1 Hora</p>

                        <p className="mb-2"> Resto del país: </p>
                        <p className="mb-2 ml-8"> -El plazo de entrega es de 48hs. hábiles. </p>
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
                    Si compro más de un producto, ¿me cobran más de un envío?

                </AccordionHeader>
                {open === 2 && (
                    <AccordionBody>
                        <p> Existen productos que requieren envío a través de distintas empresas de transporte. Antes de finalizar tu compra, se detallarán los productos que deban ser enviados por separado y el costo del envío para cada uno. </p>
                    </AccordionBody>
                )}
            </Accordion>
            <Accordion
                open={open === 3}
                icon={<Icon id={3} open={open} />}
                placeholder={""}
                onPointerEnterCapture
                onPointerLeaveCapture
            >
                <AccordionHeader
                    onClick={() => handleOpen(3)}
                    placeholder={""}
                    onPointerEnterCapture
                    onPointerLeaveCapture
                >
                    Modificar la fecha o el domicilio de la entrega

                </AccordionHeader>
                {open === 3 && (
                    <AccordionBody>
                        <p className="text-xl mb-4"> Si compraste en ByteBox.com o por teléfono</p>
                        <p> 1- Ingresá a Mi cuenta. </p>
                        <p> 2- Elegí la opción Mis compras. </p>
                        <p> 3- Seleccioná la compra sobre la que quieras realizar la consulta. </p>
                        <p> 4- Elegí la opción que corresponde y seguí los pasos. </p>
                    </AccordionBody>
                )}
            </Accordion>
            <Accordion
                open={open === 4}
                icon={<Icon id={4} open={open} />}
                placeholder={""}
                onPointerEnterCapture
                onPointerLeaveCapture
            >
                <AccordionHeader
                    onClick={() => handleOpen(4)}
                    placeholder={""}
                    onPointerEnterCapture
                    onPointerLeaveCapture
                >
                    Problemas con la entrega

                </AccordionHeader>
                {open === 4 && (
                    <AccordionBody>
                        <p className="text-xl mb-4">  No estaba para recibir la compra en el momento de la entrega
                        </p>
                        <p> De no poder concretar la entrega en el día pactado, te estaremos contactando para coordinar una nueva visita. </p>
                    </AccordionBody>
                )}
            </Accordion>

            <ButtonComponent onClick={handlerBack} text="Volver" />
        </div>
    )

}
