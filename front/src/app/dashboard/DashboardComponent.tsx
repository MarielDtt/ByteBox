/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { SquareUserRound, ShoppingBag, Star, FileQuestion } from 'lucide-react';
import { useContext } from 'react';

import { TokenContext } from '@/context/tokenContext/TokenContext';
import { LoginContext } from '@/context/loginContext/LoginContext';
import Link from 'next/link';


function DashboardComponent() {
    const { autenticado } = useContext(TokenContext);
    const { estadoUser } =useContext(LoginContext);


    return (
        <>
            <div className='flex items-center justify-center mt-6'>
                <h1 className='ml-4 text-2xl font-bold'>Bienvenido</h1>
                <p className='ml-2 text-2xl font-bold'>{estadoUser?.name}</p>

            </div>
            {autenticado ? (
                <div className="flex-col bg-div rounded mx-auto w-7/12 bg-transparent">
                    <div className=" flex  w-10/12 mx-auto">
                        <div className="flex border-2 h-64 w-10/12 rounded-md m-4 bg-div relative">
                            <h4 className='absolute top-8 left-1/2 transform -translate-x-1/2 font-bold text-center text-2xl	'>Mis Datos</h4>

                            <div className="flex items-center absolute top-1/2 left-2 transform -translate-y-1/2 ">
                                <div className="flex items-center justify-center bg-background rounded-full w-16 h-16">
                                    <SquareUserRound size={48} color="#050505" strokeWidth={1.25} />
                                </div>

                                <div className='w-44 ml-4 text-left pr-2'>
                                    <p>Editá tus datos personales, direcciones, tarjetas y contraseñas.</p>
                                </div>
                            </div>

                            <div className='flex ml-24 w-full h-full'>
                                <Link href="/dashboard/my-data" className="text-blue-600 hover:underline text-center mt-auto mb-4">
                                    Ir a Mis Datos
                                </Link>
                            </div>
                        </div>

                        <div className="flex border-2 h-64 w-10/12 rounded-md m-4 bg-div relative">
                            <h4 className='absolute top-8 left-1/2 transform -translate-x-1/2 font-bold text-center text-2xl  whitespace-nowrap'>
                                Mis Compras
                            </h4>

                            <div className="flex items-center absolute top-1/2 left-2 transform -translate-y-1/2">
                                <div className="flex items-center justify-center bg-background rounded-full w-16 h-16">
                                    <ShoppingBag size={48} color="#050505" strokeWidth={1.25} />
                                </div>
                                <div className='w-44 ml-4 text-left pr-2'>
                                    <p>Consulta tu historial de compras y el estado de tus pedidos.</p>
                                </div>
                            </div>

                            <div className='flex ml-24 w-full h-full'>
                                <Link href="/dashboard/my-purchase" className="text-blue-600 hover:underline text-center mt-auto mb-4">
                                    Ir a Mis Compras
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className=" flex w-10/12 mx-auto m-8">
                        <div className="flex border-2 h-64 w-10/12 rounded-md m-4 bg-div relative">
                            <h4 className='absolute top-8 left-1/2 transform -translate-x-1/2 font-bold text-center text-2xl	'>Favoritos</h4>

                            <div className="flex items-center absolute top-1/2 left-2 transform -translate-y-1/2">
                                <div className="flex items-center justify-center bg-background rounded-full w-16 h-16">
                                    <Star size={48} color="#050505" strokeWidth={1.25} />
                                </div>
                                <div className='w-44 ml-4 text-left pr-2'>
                                    <p>Accede a los productos que más te gustan.</p>
                                </div>
                            </div>

                            <div className='flex ml-24 w-full h-full'>
                                <a href="#" className="text-blue-600 hover:underline text-center mt-auto mb-4">
                                    Ir a Favoritos
                                </a>
                            </div>
                        </div>

                        <div className="flex border-2 h-64 w-10/12 rounded-md m-4 bg-div relative">
                            <h4 className='absolute top-8 left-1/2 transform -translate-x-1/2 font-bold text-center text-2xl  whitespace-nowrap	'>Centro de Ayuda</h4>

                            <div className="flex items-center absolute top-1/2 left-2 transform -translate-y-1/2">
                                <div className="flex items-center justify-center bg-background rounded-full w-16 h-16">
                                    <FileQuestion size={48} color="#050505" strokeWidth={1.25} />
                                </div>
                                <div className='w-44 ml-4 text-left pr-2'>
                                    <p>Encuentra respuestas a tus preguntas y soluciones rápidas.</p>
                                </div>
                            </div>

                            <div className='flex ml-20 w-full h-full'>
                                <a href="/centro-de-ayuda" className="text-blue-600 hover:underline text-center mt-auto mb-4">
                                    Ir al Centro de Ayuda
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}

        </>
    )
}

export default DashboardComponent;