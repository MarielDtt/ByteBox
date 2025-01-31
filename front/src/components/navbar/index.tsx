/* eslint-disable @next/next/no-img-element */
'use client';

import { useState, useContext } from 'react';
import { ShoppingCart, FileQuestion } from 'lucide-react';
import Link from 'next/link';
import { TokenContext } from '@/context/tokenContext/TokenContext';
import { ProfileMenu } from '../avatar';
import { MenuNavbar } from '../menuNavbar';

function NavbarComponent() {
  const { autenticado } = useContext(TokenContext);
  const [menuOpen, setMenuOpen] = useState(false); 

  return (
    <nav className="bg-navbar m-4 mx-auto h-16 text-xl flex items-center justify-between px-4 relative z-40">
      
      <div className="flex items-center ml-8">
        <button
          className="block md:hidden text-white hover:text-cyan-400"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className="hidden md:flex space-x-4 text-white">
          <Link href="/" className="hover:text-cyan-400">Inicio</Link>
          <Link href="/products" className="hover:text-cyan-400">Tienda</Link>
          {!autenticado && (
            <Link href="/register" className="hover:text-cyan-400">Registrate</Link>
          )}
          {autenticado && (
            <Link href="/viewCart" className="hover:text-cyan-400">Mi Carrito</Link>
          )}
        </div>
      </div>


      <Link href="/" className="absolute left-1/2 transform -translate-x-1/2">
        <img src="/LogoNavbar.png" alt="ByteBox Logo" className="h-12" />
      </Link>

      <div className="flex items-center space-x-4 justify-end w-full sm:w-auto md:mr-8">
        {!autenticado && <MenuNavbar />}


        {autenticado && (
          <a
            href="#"
            title="Mi Carrito de Compras"
            className="hover:scale-110 transition-all duration-300 hidden md:block"
          >
            <ShoppingCart color="#f0efef" />
          </a>
        )}

        <div className="flex items-center space-x-4">
          {autenticado && <ProfileMenu />}
          <a
            href="/centro-de-ayuda"
            title="Ayuda"
            className="hover:scale-110 transition-all duration-300"
          >
            <FileQuestion color="#f0efef" />
          </a>
        </div>
      </div>


      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-navbar p-4 flex flex-col space-y-2 md:hidden text-white">
          <Link href="/" className="hover:text-cyan-400">Inicio</Link>
          <Link href="/products" className="hover:text-cyan-400">Tienda</Link>
          {!autenticado && (
            <Link href="/register" className="hover:text-cyan-400">Registrate</Link>
          )}
          {autenticado && (
            <Link href="/viewCart" className="hover:text-cyan-400">Mi Carrito</Link>
          )}
        </div>
      )}
    </nav>
  );
}

export default NavbarComponent;
