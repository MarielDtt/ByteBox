'use client'
import { useParams } from "next/navigation";
import { useContext } from "react";
import { ProductContext } from "../../context/productContext/ProductContext"
import CarruselID from "./CarruselID";
import DataProduct from "./DataProduct";
import DescripcionProduct from "./DescripcionProduct";
import { ButtonComponent } from "../button";
import { useRouter } from 'next/navigation';


function ProductID() {
    const router = useRouter();

    const { product } = useContext(ProductContext)

    const params = useParams()

    if (!params.id) {
        console.error("ID is undefined");
        return null; // O maneja el caso de error
    }
    const productId = params.id;

    const found = product.find((element) => element.id === Number(productId));

    if (!found) {
        return <div>Producto no disponible</div>;
    }

    const handlerBack = () => {
        router.push('/products');
    }

    return (
        <>
            <div className="h-auto m-4 flex flex-col">
                <div className="flex w-full">
                    <div className="w-1/2">
                        <CarruselID key={found.id} image={found.image} />
                    </div>
                    <div className="w-1/2">
                        <DataProduct key={found.id} id={found.id} name={found.name} price={found.price} />
                    </div>
                </div>
                <div className="w-full">
                    <DescripcionProduct key={found.id} descripcion={found.description} />
                </div>
                <div className="flex justify-center mt-auto mx-auto mb-4 pb-4">
                    <ButtonComponent onClick={handlerBack} text='Volver' />
                </div>
            </div>
        </>

    )

}

export default ProductID;