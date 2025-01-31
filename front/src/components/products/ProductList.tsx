'use client'
import { Product } from "./Product";
import { useContext } from "react";
import { ProductContext } from "@/context/productContext/ProductContext";
import { CartContex } from "@/context/cartContext/CartContext";
import { TokenContext } from "@/context/tokenContext/TokenContext";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { ButtonComponent } from "../button";
import { toast } from 'sonner';

function ProductList() {
  const { product } = useContext(ProductContext)
  const { cartState, setCartState } = useContext(CartContex)

  const { autenticado  } = useContext(TokenContext);
  const router = useRouter();
  const handleOnClick = (id: number) => {
    if( autenticado === true ){
      const productInCart = cartState.find(item => item.id === id); //busca el producto en el estado recorre cada elemento con item y busca la propiedad id

      if (productInCart) {
        //si el id esta en el carrito seteamos con 
        setCartState(saveCartState => //guardo el estado del carrito hasta ese momento
          saveCartState.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          )
        );
      } else {
        // Si el producto no está en el carrito, agregarlo con quantity: 1
        const productToAdd = product.find(item => item.id === id);
        if (productToAdd) {
          setCartState(prevState => [
            ...prevState,
            {
              id: productToAdd.id,
              name: productToAdd.name,
              price: productToAdd.price,
              image: productToAdd.image,
              quantity: 1
            }
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
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pb-8">

      {product.map((element) => (
        <div key={element.id} className="w-full h-auto flex flex-col border-8 bg-white mb-8">
        
          <Link href={`/products/${element.id}`} key={element.id}>
            <Product
              name={element.name}
              price={element.price}
              description={element.description}
              image={element.image}
            />
          </Link>

          <div className="flex justify-center mt-auto pb-4">
            <ButtonComponent
              text="Agregar al Carrito"
              onClick={() => handleOnClick(element.id)} // Pasas el id del producto al handler
            />
          </div>

        </div>
      ))}
    </div>
  )
}

export default ProductList;