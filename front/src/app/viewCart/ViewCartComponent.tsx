'use client'
import { useContext } from 'react';
import { TokenContext } from '@/context/tokenContext/TokenContext';
import { NoLogin } from "@/components/noLogin";
import CardProduct from '@/components/cart';
import { Checkout } from '@/components/checkout';


function ViewCartComponent() {
    const { autenticado } = useContext(TokenContext)
    return (
        <>
            <div className="ml-4 font-bold text-xl">
                MI CARRITO
            </div>
            {autenticado ? (

                <div className="flex justify-between items-start gap-6 w-full">
                    <CardProduct />
                    <Checkout />
                </div>
            ) : <NoLogin />}
        </>


    )
}

export default ViewCartComponent;