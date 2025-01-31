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
                    ¿Cómo comprar en ByteBox?
                </AccordionHeader>
                {open === 1 && (
                    <AccordionBody>
                        <p className="text-xl mb-4"> A continuación te dejamos los pasos para comprar en ByteBox.com </p>
                        <p> 1- Registrate, si ya estas Registrado Logueate. Asegurate de tener Tus Datos Actualizados. </p>
                        <p> 2- Seleccioná el producto y hacé click en el botón AGREGAR AL CARRITO. </p>
                        <p> 3- En Mi carrito, podrás ver los productos elegidos. </p>
                        <p> 4- Clickeá el botón COMPRAR para continuar. </p>
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
                    ¿Tiene Garantia las compras en ByteBox?
                </AccordionHeader>
                {open === 2 && (
                    <AccordionBody>
                        <p className="text-xl mb-4"> ByteBox te ofrece la posibilidad de agregar una Garantía Premium para proteger los productos que compres.</p>
                        <p className="text-xl mb-4"> ¿Qué incluye la Garantía Premium?</p>
                        <p> Reposición por robo dentro de los 60 días posteriores a la fecha de compra. </p>
                        <p> Reposición por detalle estético dentro de los 60 días posteriores a la fecha de compra. </p>
                        <p> Reparación con mano de obra especializada.</p>
                        <p> Bonificación del 100% del valor de la mano de obra y los repuestos.</p>
                        <p> Servicio técnico a domicilio solo para productos difíciles de transportar.</p>
                        <p> Reposición de un producto igual o de similares características en caso de no poder ser reparado.</p>
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
                    Comprar por teléfono

                </AccordionHeader>
                {open === 3 && (
                    <AccordionBody>
                        <p> Si querés comprar por teléfono, llamanos al 0810-333-8700 de lunes a viernes de 8 a 20 hs.</p>
                    </AccordionBody>
                )}
            </Accordion>
            <ButtonComponent onClick={handlerBack} text="Volver"/>
        </div>
    )

}
