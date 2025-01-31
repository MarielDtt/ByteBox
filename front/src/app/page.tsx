/* eslint-disable @next/next/no-img-element */
'use client'

import { CarouselComponent } from "@/components/carrusel";
import { Card } from "@/components/card";
import { CircleComponent } from "../components/circle"

function Home() {

    return (
        <>
            <div className="w-full h-[300px] sm:h-[400px] md:h-[480px] px-4 relative group mt-8">
                <CarouselComponent/>
            </div>
                
            <div>
                <Card/>                        
            </div>
            
            <div className="flex justify-center m-4 mt-8">
                <CircleComponent/>
            </div>

            <div className="w-3/4 h-84 m-4 mx-auto text-center mt-24">
                <img src="/Como_Comprar.png" alt="Como Comprar" className="rounded-2xl h-68" />
            </div>

            <div className="w-3/4 h-84 m-4 mx-auto text-center mt-12">
                <img src="/Envios.png" alt="Envios" className="rounded-2xl h-68" />             
            </div>
        </>    

    )
}

export default Home;