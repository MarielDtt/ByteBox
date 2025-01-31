import { descripcionIDProps } from "./interfaceProductID";


function DescripcionProduct ({descripcion}: descripcionIDProps) {
    return(
        <div className="h-auto m-4 p-8 text-xl border-8 bg-littleCircle">
            <h1 className="text-2xl font-semibold">Description</h1>
            {descripcion}
        </div>
    )
}

export default DescripcionProduct;