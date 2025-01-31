'use client'
import { ProductProvider } from "../context/productContext/ProductProvider";
import { TokenProvider } from "@/context/tokenContext/TokenProvider";
import { LoginProvider } from "@/context/loginContext/LoginProvider";
import { MenuProvider } from "@/context/menuContext/MenuProvider";
import { CartProvider } from "@/context/cartContext/CartProvider";
import { AvatarProvider } from "@/context/avatarContext/AvatarProvider";

import { NextUIProvider } from '@nextui-org/react'
import { OrderProvider } from "@/context/orderContex/OrderProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <CartProvider>
        <MenuProvider>
          <TokenProvider>
            <LoginProvider>
              <ProductProvider>
                <AvatarProvider>
                  <OrderProvider>

                    {children}
                    
                  </OrderProvider>
                </AvatarProvider>
              </ProductProvider>
            </LoginProvider>
          </TokenProvider>
        </MenuProvider>
      </CartProvider>
    </NextUIProvider>
  )
}