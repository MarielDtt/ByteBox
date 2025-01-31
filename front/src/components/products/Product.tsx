/* eslint-disable @next/next/no-img-element */
'use client'

import { productProps } from "./productTypes";


export function Product({ name, price, description, image }: productProps) {

  return (
    <div>
      <h1 className="font-black	text-3xl text-center mt-4">{name}</h1>
      <div className="flex justify-center">
        <img src={image} alt="Imagen Producto" className="h-auto w-72 p-4" />
      </div>
      <div className="flex flex-col flex-grow justify-between">
        <p className="text-justify text-base mx-4">{description.split(":")[0]}.</p>
        <div className="flex flex-col justify-end">
          <h1 className=" ml-4 font-bold text-2xl mt-8 mb-4 text-center">${price}</h1>
        </div>
      </div>
    </div>

  );
}