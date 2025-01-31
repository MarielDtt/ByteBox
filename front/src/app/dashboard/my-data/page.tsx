"use client"
import { MyDataComponent } from "./My-DataComponent";
import { useContext } from 'react';
import { TokenContext } from '@/context/tokenContext/TokenContext';
import { NoLogin } from "@/components/noLogin";

function MyData() {
    const { autenticado } = useContext(TokenContext)
    return (
        <>
            {autenticado ? (
                <MyDataComponent />

            ) : <NoLogin />}
        </>

    )
}

export default MyData;