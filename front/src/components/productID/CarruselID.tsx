/* eslint-disable @next/next/no-img-element */
import { imageIDProps } from "./interfaceProductID";

function CarruselID ({image}: imageIDProps) {

    return(

        <div className="h-96 m-4 border-8 bg-white flex">
            <img src={image} alt="" className="mx-auto my-auto h-72" />
        </div>
    )

}

export default CarruselID;