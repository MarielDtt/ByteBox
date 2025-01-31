/* eslint-disable @next/next/no-img-element */
'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

function Notfound() {
    const router = useRouter();

    useEffect(() => {
        toast.error('¡404 Pagina no Encontrada! Sera Redirigido', {
            className: "bg-div  bg-opacity-95 text-white text-neutral-950"
        })
       
        const timer = setTimeout(() => {
            router.push('/'); 
        }, 5000);

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <div className="flex justify-center items-center w-3/4 h-screen m-auto">
            <div className="gap-x-4 ">
                <img src="./LogoCompleto.png" alt="Logo" className="mx-auto w-64" />
            </div>
            <div className=" h-32 w-px bg-gray-400"></div>
            <div className="text-4xl ml-8 text-blue-900">
                404 Pagina No Encontrada
            </div>
        </div>
    )
}

export default Notfound;