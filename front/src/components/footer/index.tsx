/* eslint-disable @next/next/no-img-element */
import { Facebook, Instagram, Linkedin } from 'lucide-react';

function FooterComponent() {
  return (
    <div className="bg-navbar w-full ">
      
      <div className="flex flex-col lg:flex-row justify-between h-auto lg:h-60 w-full">
   
        <div className="flex flex-col lg:flex-row items-center lg:items-center w-full lg:w-1/3 p-4">
          <img src="/LogoNavbar.png" alt="Logo" className="w-16 h-16 mr-2 mb-4 lg:mb-0" />
          <div className="flex space-x-4 lg:space-x-6">
            <button>
              <Facebook size={32} className="text-teal-500 hover:scale-110 transition-transform" />
            </button>
            <button>
              <Instagram size={32} className="text-teal-500 hover:scale-110 transition-transform" />
            </button>
            <button>
              <Linkedin size={32} className="text-teal-500 hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>

   
        <div className="flex flex-col justify-center items-center lg:items-start w-full lg:w-1/3 text-white p-4">
          <div className="text-xl mb-4">Secciones</div>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:underline">Inicio</a>
            </li>
            <li>
              <a href="/products" className="hover:underline">Productos</a>
            </li>
            <li>
              <a href="/register" className="hover:underline">Registrate</a>
            </li>
            <li>
              <a href="/" className="hover:underline">Categorías</a>
            </li>
          </ul>
        </div>

     
        <div className="flex flex-col justify-center items-center lg:items-start w-full lg:w-1/3 text-white p-4">
          <div className="text-xl mb-4">Contáctenos</div>
          <ul className="space-y-2 w-full lg:w-3/4 text-sm">
            <li className="border-b border-white pb-2">
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:underline">
                WhatsApp: +1234567890
              </a>
            </li>
            <li className="border-b border-white pb-2">
              <a href="tel:0810-333-8700" className="hover:underline">
                Teléfono: 0810-333-8700
              </a>
            </li>
            <li className="border-b border-white pb-2">
              <a href="mailto:info@bytebox.com" className="hover:underline">
                Email: info@bytebox.com
              </a>
            </li>
            <li>
              <p>Horario de atención:</p>
              <p>Lunes a Viernes 9:00 a 18:00</p>
            </li>
          </ul>
        </div>
      </div>

   
      <div className="mt-4 border-t border-white text-xs text-center text-white pt-2">
        Página creada por MarielDtt
      </div>
    </div>
  );
}

export default FooterComponent;
