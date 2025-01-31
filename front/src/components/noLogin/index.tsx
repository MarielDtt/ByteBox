/* eslint-disable @next/next/no-img-element */
'use client'
import { useEffect } from "react"
import { useRouter } from 'next/navigation';
export function NoLogin() {
     const router = useRouter();

    useEffect(() =>{

        setTimeout(() => {
        
            router.push('/login')
          }, 10000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return(
        <div className="w-1/2 h-auto m-auto  bg-div">
            <img src="/NoLogin.png" alt="Para continuar debera loguearse"></img>
        </div>
    ) 
}