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
                    Cambios, Devoluciones y Cancelaciones

                </AccordionHeader>
                {open === 1 && (
                    <AccordionBody>
                        <p className="text-xl mb-4"> ¿Qué requisitos debe cumplir un producto para poder cambiarlo o devolverlo?
                        </p>
                        <p className="mb-4"> Podrás cambiar o devolver la mayoría de los productos de ByteBox, pero algunos deben cumplir ciertos requisitos para el cambio: </p>
                        <p className="mb-2"> Tienen devolución siempre que estén en su paquete original cerrado. </p>
                        <p className="mb-2"> Para solicitar el cambio o devolución será necesario que los productos se encuentren en perfectas condiciones, con su empaque original, accesorios y manuales completos. </p>
                        <p className="mb-2"> El plazo para realizar el cambio o la devolución es de 48 h corridas a partir de la fecha de entrega. </p>
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
                    ¿Condiciones para cancelar una compra pendiente de entrega?
                </AccordionHeader>
                {open === 2 && (
                    <AccordionBody>
                        <p className="text-xl mb-4"> Si compraste en ByteBox.com o por teléfono</p>
                        <p> 1- Ingresá a Mi cuenta. </p>
                        <p> 2- Elegí la opción Mis compras. </p>
                        <p> 3- Seleccioná la compra que querés cancelar. </p>
                        <p> 4- Seleccioná el botón NECESITO AYUDA. </p>
                        <p> 5- Elegí la opción Quiero cancelar la compra y seguí los pasos.</p>
                    </AccordionBody>
                )}
            </Accordion>
            
            <ButtonComponent onClick={handlerBack} text="Volver"/>
        </div>
    )

}
