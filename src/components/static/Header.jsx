import React from 'react'
import { Link } from 'react-router-dom' // Importa el componente Link de react-router-dom para la navegación
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
// Importa el icono de carrito de 
import Cart from '../Cart'; 
import { useState, UseContext } from 'react';





function Header() {
// Usa el contexto del carrito para acceder a los productos y funciones
  // Recibe cartItems como prop para mostrar los productos en el carrito
  const [isCartOpen, setIsCartOpen] = useState(false); // Estado para controlar la visibilidad del carrito
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>

      <div className="bg-gradient-to-r from-fuchsia-900 to-violet-900 text-sm text-center text-white py-2 font-medium">
        🚚 Envíos gratis en compras superiores a $120.000
      </div>


      <header className="sticky top-0 z-40 bg-gradient-to-r from-gray-900 via-900 to-indigo-900 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          
          <Link to="/" className="text-2xl font-bold text-white tracking-wide hover:text-violet-300 transition">
            Gold's GYM
          </Link>


          <nav className="bg-gradient-to-r from-900 hidden md:flex space-x-6 text-slate-100 font-medium">
            <Link to="/" className="hover:text-violet-300 transition">Inicio</Link>
            <Link to="/acercade" className="hover:text-violet-300 transition">Sobre Nosotros</Link>
            <Link to="/productos" className="hover:text-violet-300 transition">Productos</Link>
            <Link to="/contactos" className="hover:text-violet-300 transition">Contacto</Link>
          </nav>

        
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsCartOpen(true)}
              className="p-2 rounded-full bg-violet-600 hover:bg-violet-700 text-white transition"
            >
              <FiShoppingCart className="text-xl" />
            </button>

          
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white">
              {menuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
            </button>
          </div>
        </div>

        
        {menuOpen && (
          <div className="md:hidden px-6 pb-4 space-y-3 text-white bg-violet-950 border-t border-violet-700 animate-fade-in-down">
            <Link to="/" className="block hover:text-violet-300" onClick={() => setMenuOpen(false)}>Inicio</Link>
            <Link to="/acercade" className="block hover:text-violet-300" onClick={() => setMenuOpen(false)}>Sobre Nosotros</Link>
            <Link to="/productos" className="block hover:text-violet-300" onClick={() => setMenuOpen(false)}>Productos</Link>
            <Link to="/contactos" className="block hover:text-violet-300" onClick={() => setMenuOpen(false)}>Contacto</Link>
          </div>
        )}
      </header>
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)}/>

      
    
    
    
    </>
  )
}

export default Header
