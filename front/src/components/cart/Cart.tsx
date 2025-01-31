/* eslint-disable @next/next/no-img-element */
'use client'
import { cartProps } from "./cartInterface";

export function Cart({ image, name, quantity, price }: cartProps) {

    return (
        <>
            <div className="flex ">
                <div className="m-4"><img src={image} alt="Imagen Producto" className="rounded-full	w-12" /></div>
                <div className="flex ml-auto">
                    <div className="m-6 text-2xl text-center">{name}</div>
                    <div className="m-6 text-2xl text-center">{quantity}</div>
                    <div className="m-6 text-2xl ">${price}</div>
                </div>

            </div>
        </>
    )
}

