
import { ButtonComponent } from "../button";
import { useContext } from "react";
import { ProductContext } from "@/context/productContext/ProductContext";
import { CartContex } from "@/context/cartContext/CartContext";
import { productIDProps } from "./interfaceProductID";
import { useRouter } from 'next/navigation';
import { TokenContext } from "@/context/tokenContext/TokenContext";
import { toast } from 'sonner';


function DataProduct({id, name, price}: productIDProps) {
     const { product } = useContext(ProductContext)
      const { cartState, setCartState } = useContext(CartContex)
    
      const { autenticado  } = useContext(TokenContext);
      const router = useRouter();

    const handleOnClick = (id: number) => {
        console.log("ID recibido:", id);
        if( autenticado === true ){
          const productInCart = cartState.find(item => item.id === id); //busca el producto en el estado recorre cada elemento con item y busca la propiedad id
    
          if (productInCart) {
            //si el id esta en el carrito seteamos con 
            setCartState(saveCartState => //guardo el estado del carrito hasta ese momento
              saveCartState.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
              )
            );
          }  else {
            const productToAdd = product.find((item) => item.id === id);
            if (productToAdd) {
              setCartState((prevState) => [
                ...prevState,
                {
                  id: productToAdd.id,
                  name: productToAdd.name,
                  price: productToAdd.price,
                  image: productToAdd.image,
                  quantity: 1,
                },
              ]);
            }
          }
          toast.success("¡Producto agregado al carrito!", {
            className: "bg-green-500 text-white"
          });
        }else{
          toast.warning('Necesitas estar Logueado para Agregar Productos al Carrito', {
             className: "bg-red-500 text-white"
          })
          setTimeout(() => {
            router.push('/login'); 
        }, 3000);
    
        }
      
    
      }
   
    return(
        <div className="h-auto m-4 border-8 bg-littleCircle flex">
            <div className="m-4">
                <h1 className="ml-4 mt-4 text-base">APPLE</h1>
                
                <div className="ml-4 mt-4 font-extrabold text-2xl">
                    <p> {name}</p>
                </div>

                <div className="ml-4 mt-4 font-bold text-2xl w-full ">
                    <h2> ${price} </h2>
                </div>

                <p className="ml-4 text-red-600">12 cuotas sin Intereses de {price / 12} </p>
             
                      <ButtonComponent
                      text="Agregar al Carrito"
                      onClick={() => handleOnClick(id)} // Pasas el id del producto al handler
                    />
          
            </div>
                
        </div>

    )

}

export default DataProduct;