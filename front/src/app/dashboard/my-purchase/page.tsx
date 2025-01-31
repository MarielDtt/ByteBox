"use client"
import { MyPurchaseComponent } from "./My-PurchaseComponent";
import { useContext } from 'react';
import { TokenContext } from '@/context/tokenContext/TokenContext';
import { NoLogin } from "@/components/noLogin";
function MyPurchase() {
    const { autenticado } = useContext(TokenContext)
    return (
        <>
        
             {autenticado ? (
                 <MyPurchaseComponent/>

             ): <NoLogin/> }
        </>

    )
}

export default MyPurchase;