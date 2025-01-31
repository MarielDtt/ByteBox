/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "@/context/loginContext/LoginContext";
import { getOrders } from "../../service/order"
import { TokenContext } from "@/context/tokenContext/TokenContext";

type Order = {
    id: number; 
    date: Date; 
    products: { id: number; name: string; price: number }[]; 
  };

export function Purchases() {
    const { estadoUser } = useContext(LoginContext);
    const { estadoToken } = useContext(TokenContext);

    const [estadoOrders, setEstadoOrders] = useState<Order[]>([]);
    

    const getOrder = async () => {
        const response = await getOrders(estadoToken)
        setEstadoOrders(response)
    }

    useEffect(() => {
        if (!estadoToken) return
        getOrder()
    }, [estadoUser]);
 
        return (
            <div>
              <h1 className="text-xl font-bold p-4">MIS COMPRAS</h1>
              {Array.isArray(estadoOrders) && estadoOrders.length > 0 ? (
                <div>
                  {estadoOrders.map((element) => (
                    
                    <div
                      key={element.id}
                      className="ml-4 pb-4 flex flex-col bg-div mt-4 p-4 border border-gray-300 rounded-md"
                    >
                      <div className="flex justify-start">
                        <div className="flex">
                          <p className="ml-2 mb-2 font-bold mr-2 mt-4">Compra Nro:</p>
                          <p className="mt-4 mr-12">{element.id}</p>
                        </div>
          
                        <div className="flex">
                          <p className="ml-2 mb-2 font-bold mr-2 mt-4">Fecha:</p>
                          <p className="mt-4">
                            {new Date(element.date).toLocaleDateString("es-ES", {
                              day: "2-digit",
                              month: "2-digit",
                              year: "numeric",
                            })}
                          </p>
                        </div>-
                      </div>
          
                      <div className="mt-4 ml-4">
                        {Array.isArray(element.products) && element.products.length > 0 ? (
                          element.products.map((product) => (
                            
                            <div key={product.id} className="flex justify-between mt-2">
                              <p className="font-bold">{product.name}</p>
                              <p>${product.price}</p>
                            </div>
                          ))
                        ) : (
                          <p>No hay productos en esta compra</p>
                        )}
                      </div>
                      <hr className="my-4 border-t border-gray-300" />
                  
                    </div>
                  ))}
                </div>
                
              ) : (
                <p className="font-bold text-center text-4xl p-4 w-full">
                  No tiene compras cargadas.
                </p>
              )}
            </div>
          );
    
}