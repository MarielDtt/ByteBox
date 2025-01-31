import { ShoppingCart, ChevronRight, Truck, RefreshCcw, CircleUserRound } from 'lucide-react';
import Link from 'next/link';
import { ButtonComponent } from '../../components/button';
import { useRouter } from 'next/navigation';

export function Centro() {
    const router = useRouter();

    
    const handlerBack = () => {
        router.push('/');
    }

    return(

        <>
        <div className='flex justify-center '>
            <div>
                <div className="bg-bg w-72 h-24 m-16 rounded-lg flex">
                    <Link href="/centro-de-ayuda/quiero-comprar" className='flex'>

                        <div className='mt-8 mx-4'>
                            <ShoppingCart />
                        </div>

                        <div>
                            <h2 className="text-base m-2 ml-2 pt-2 text-text font-bold">Quiero Comprar</h2>
                            <p className='text-xs m-2 ml-2'>Conoce la Forma de Comprar en ByteBox</p>
                        </div>
                        <div className='ml-auto mt-8 mr-2'>
                            <ChevronRight />
                        </div>
                    </Link>
                </div>

                <div className="bg-bg w-72 h-24 m-16 rounded-lg flex">
                    <Link href="#" className='flex'>
                        <div className='mt-8 mx-4'>
                            <Truck />
                        </div>

                        <div>
                            <h2 className="text-base m-2 ml-2 pt-2 text-text font-bold">Entregas</h2>
                            <p className='text-xs m-2 ml-2'>Conoce todo Sobre los Envios</p>
                        </div>
                        <div className='ml-5 mt-8'>
                            <ChevronRight />
                        </div>
                    </Link>
                </div>


            </div>

            <div>
                <div className="bg-bg w-72 h-24 m-16 rounded-lg flex">
                    <Link href="#" className='flex'>
                        <div className='mt-8 mx-4'>
                            <RefreshCcw />
                        </div>

                        <div>
                            <h2 className="text-base m-2 ml-2 pt-2 text-text font-bold">Cambios y Devoluciones</h2>
                            <p className='text-xs m-2 ml-2'>Conoce como Cambiar y Devolver tus Productos </p>
                        </div>
                        <div className='ml-auto mt-8 mr-2'>
                            <ChevronRight />
                        </div>
                    </Link>
                </div>

                <div className="bg-bg w-72 h-24 m-16 rounded-lg flex">
                    <Link href="#" className='flex'>
                        <div className='mt-8 mx-2'>
                            <CircleUserRound />
                        </div>

                        <div>
                            <h2 className="text-base m-2 ml-2 pt-2 text-text font-bold">Configuracion de mi Cuenta</h2>
                            <p className='text-xs m-2 ml-2 pt-2 pb-2'>Conoce Como Gestionarla tu Cuenta</p>
                        </div>
                        <div className='ml-auto mt-8 mr-2'>
                            <ChevronRight />
                        </div>
                    </Link>
                </div>
            </div>

        </div>
        <div className="flex justify-center mt-auto mx-auto mb-4 pb-4">
            <ButtonComponent onClick={handlerBack} text='Volver' />
        </div>
    </>

    )
}