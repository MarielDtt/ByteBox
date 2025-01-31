/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useContext } from 'react';
import { TokenContext } from '@/context/tokenContext/TokenContext';


export function Card () {
    const { autenticado  } = useContext(TokenContext)

    return(
        <div className="flex justify-center m-4">
            <div className="w-56 m-4 mx-2 h-64 text-center rounded-2xl flex items-center justify-center">
                <button>
                    <img src="./Ingresos.jpeg" alt="Ingresos" className="rounded-2xl w-52 h-60"/>
                </button>
            </div>
            {!autenticado ? (
                 <div className="w-56 m-4 mx-2 h-64 text-center rounded-2xl flex items-center justify-center">
                 <Link href="/login">
                     <img src="./Registrate.gif" alt="Registrate" className="rounded-2xl w-52 h-60" />
                 </Link>
             </div>   
            ): null}  
       
            <div className="w-56 m-4 mx-2 h-64 text-center rounded-2xl flex items-center justify-center">
                <button>
                    <img src="./Sale.png" alt="Sale" className="rounded-2xl w-52 h-60"/>
                </button>
            </div>
        </div>
    )
}