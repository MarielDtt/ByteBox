
import { useContext } from "react"
import { CartContex } from "@/context/cartContext/CartContext"
import { ButtonComponent } from "../button";
import { LoginContext } from "@/context/loginContext/LoginContext";
import { orderService } from "@/service/order";
import { TokenContext } from "@/context/tokenContext/TokenContext";
import { toast } from 'sonner';
import { CheckboxHorizontalListGroup } from "../payment";

export function Checkout() {
    const { cartState, setCartState } = useContext(CartContex);
    const { estadoUser, setEstadoUser } = useContext(LoginContext)
    const { estadoToken } = useContext(TokenContext)

    if (cartState.length === 0) {

        return <p className="font-bold text-center text-2xl p-4 w-1/2 h-full m-auto mb-4 bg-div">El Carrito se encuenta Vacio</p>
    }
    const valorInicial = 0;

    const totalCart = cartState.reduce((acumulador, elementoActual) => acumulador + (elementoActual.price * elementoActual.quantity), valorInicial)

    const handleButton = async () => {
        if (!estadoToken || !estadoUser) {
            alert("Debes iniciar sesión para realizar una compra.");
            return;
        }

        const userId = estadoUser.id;
        const products = cartState.map((item) => item.id); //creo un nuevo array solo con los numeros de id de los productos

        try {
            const response = await orderService(userId, products, estadoToken); //paso los parametros a orderservice
            console.log("Compra registrada:", response);

            setEstadoUser((prevUser) => {
                if (!prevUser) return prevUser; // Si no hay usuario, no hacemos nada
                return {
                    ...prevUser,
                    orders: [...(prevUser.orders || []), response], // Agrega la nueva orden
                };
            });


            toast.success("¡Compra Registrada Exitosamente!", {
                className: "bg-green-500 text-white"
            });


            setTimeout(() => {
                setCartState([])
            }, 3000);


        } catch (error) {
            console.log(error)
            toast.error('Hubo un error al registrar tu compra. Inténtelo nuevamente.', {
                className: "bg-red-500 text-white"
            })
        }
    }


    return (
        <div className="w-1/3 mx-auto mt-4 flex flex-col items-center gap-6">

            <div className="w-full h-20 bg-div flex items-center justify-between px-4 border-4">
                <p className="font-bold text-2xl">TOTAL</p>
                <p className="font-bold text-3xl">$ {totalCart}</p>
            </div>

            <div className="w-full">
                <CheckboxHorizontalListGroup />
            </div>
            <div className="mb-4">
                <ButtonComponent text="Comprar" onClick={handleButton} />
            </div>
        </div>
    )
}
