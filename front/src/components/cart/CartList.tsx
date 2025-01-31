'use client'
import { useContext } from "react"
import { CartContex } from "@/context/cartContext/CartContext"
import { Cart } from "./Cart"
import { Trash2 } from 'lucide-react';



export function CartList() {
  const { cartState, setCartState } = useContext(CartContex)
  console.log('Antes de actualizar:', cartState);


  const handleDelete = (id: number) => {

    const deleteElementCart = cartState.filter((element) => {
      if (element.id === id && element.quantity === 1) {
        return false; // Eliminar este elemento
      }
      return true; // Mantenerlo
    });
    const updatedCart = deleteElementCart.map((element) => {
      if (id === element.id) {
        return { ...element, quantity: element.quantity - 1 };
      }
      return element;
    });

    setCartState([...updatedCart]);
  };

  return (
    <div>
   
      <div className="m-4 w-full">
        {cartState.map((element) => (

          <div key={element.id} className=" flex mb-4 w-full h-20 border-4 bg-div">
            <Cart
              image={element.image}
              name={element.name}
              quantity={element.quantity}
              price={element.price}
            />
            <button type="button" className="my-auto ml-auto mr-4" onClick={() => handleDelete(element.id)}>
              <Trash2  />
            </button>

          </div>
        ))}

      </div>
    </div>
  );
}
